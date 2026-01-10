interface FetchSignedUrlBody { contentType: string, expiresInSec?: number, fileExt: string, fileName: string }
export async function fetchSignedUrl(body: FetchSignedUrlBody) {
  return $fetch('/signed/signed-url', { body, method: 'POST' })
}
