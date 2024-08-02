import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom'

import type { AuthorizedUser, RegisteredUser } from '../../models'
import Button from '../../components/Button'
import createChallenge from '../../utilities/challenge'
import ErrorModal from '../../components/ErrorModal'
import { getValue, storeValue } from '../../utilities/persistent-store'
import { ROUTES } from '../../constants'
import Spinner from '../../components/Spinner'
import './styles.css'

function Index(): React.JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [showErrorModal, setShowErrorModal] = useState<boolean>(false)
  const [webAuthnIsAvailable, setWebAuthnIsAvailable] = useState<boolean>(false)

  const { encoded: challenge } = createChallenge()

  const navigate = useNavigate()
  
  function base64ToArrayBuffer(base64:any) {
    const binary_string = window.atob(base64);
    const len = binary_string.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
  }
  const handleSignIn = async () => {
    try {
      const [existingUsers] = getValue<RegisteredUser[]>('users') || []
      const result = await navigator.credentials.get({
        mediation: 'silent',
        publicKey : {
          challenge: challenge,
          allowCredentials: [{
              type: 'public-key',
              id: base64ToArrayBuffer(existingUsers.id)
          }],
          //timeout: 60000,
          userVerification: 'preferred'
      }
      })
    
      storeValue<AuthorizedUser>('authorized-user', {
        id: result?.id || '',
        isAuthorized: true,
      })
      return navigate(ROUTES.home)
    } catch (error:any) {
      alert(error.message);
      return setShowErrorModal(true)
    }
  }

  useEffect(
    () => {
      if (navigator.credentials && typeof(PublicKeyCredential) !== 'undefined') {
        setWebAuthnIsAvailable(true)
      }
      setTimeout(() => setIsLoading(false), 500)
    
      if (getValue<AuthorizedUser>('authorized-user')) {
        return navigate(ROUTES.home)
      }
    },
    [navigate],
  )

  return (
    <div className="flex d-col j-center mh-auto page width">
      <div className="flex d-col mh-auto width content">
        { showErrorModal && (
          <ErrorModal
            closeModal={() => setShowErrorModal(false)}
          />
        ) }
        <div className="page-title ns t-center">
            Biometric
        </div>
        { isLoading && (
          <div className="f j-center mt-2">
            <Spinner />
          </div>
        ) }
        { !isLoading && (
          <>
            { !webAuthnIsAvailable && (
              <div className="not-supported ns t-center mt-2">
                Your device does not support biometric authentication!
              </div>
            ) }
            { webAuthnIsAvailable && (
              <>
                <Button
                  classes="mt-2"
                  onClick={handleSignIn}
                >
                  Sign in
                </Button>
                <Button
                  classes="mt-1"
                  onClick={() => navigate(ROUTES.signUp)}
                >
                  Sign up
                </Button>
              </>
            ) }
          </>
        ) }
      </div>
    </div>
  )
}

export default Index