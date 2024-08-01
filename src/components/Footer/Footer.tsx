import React from 'react'

import './styles.css'

function Footer(): React.JSX.Element {
  return (
    <div className="f f-wrap j-center ai-center ph-1 ns footer">
      <span>
        <a
          href="https://github.com/peterdee/webauthn-demo"
          target="_blank"
        >
          WebAuthn POC
        </a>
      </span>
      <span className="ml-half">
        by
      </span>
      <span className="ml-half">
        <a
          href="https://github.com/peterdee"
          target="_blank"
        >
          Persitent
        </a>
      </span>
      <span className="ml-half">
        ©
      </span>
      <span className="ml-half">
        { new Date().getFullYear() }
      </span>
    </div>
  )
}

export default Footer
