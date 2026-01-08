import { z } from 'zod'

export const PresignDto = z.object({
  folder_id: objectIdCustom,
  bucket_id: objectIdCustom,
  s3_key: z.string(),
  file_name: z.string(),
  mime_type: z.string(),
  file_size: z.number(),
})
export type Presign = z.infer<typeof PresignDto>

export const PresignPutDto = z.object({
  'time-zone': z.string(),
})
export type PresignPut = z.infer<typeof PresignPutDto>
