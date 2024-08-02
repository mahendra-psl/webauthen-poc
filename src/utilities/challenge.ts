import randomString from "./random-string";

/* interface CreateChallengeResult {
  encoded: Uint8Array;
  plaintext: string;
}
 */
export default function createChallenge(): any {
  const plaintext = `${Date.now()}${randomString(32)}`;
  const challenge = new Uint8Array(32);
  window.crypto.getRandomValues(challenge);
  //return challenge;
  return {
    encoded: challenge,
    plaintext,
  };
}
