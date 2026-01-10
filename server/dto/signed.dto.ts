import { z } from 'zod'

export const SignedUrlDto = z.object({
  contentType: z.string(),
  expiresInSec: z.number().optional(),
  fileExt: z.string(),
  fileName: z.string(),
})
export type SignedUrl = z.infer<typeof SignedUrlDto>
