import { z } from 'zod'

export const registerDto = z.object({
  name: z.string().min(1, '姓名不能为空'),
  // code: z.string().min(1, '工号不能为空'),
  // dept: z.string().min(1, '部门不能为空'),
  // role: z.array(objectIdCustom).min(1, '角色不能为空'),
  // age: z.string().min(0, '年龄不能小于0').max(150, '年龄不能大于150'),
  // sex: z.enum(['0', '1'], {
  //   errorMap: () => ({ message: '性别只能是男或女' }),
  // }),
  // 'id-code': z.string().min(1, '身份证号不能为空').regex(/^\d{15}|\d{18}$/, '身份证号格式不正确'),
  // 'phone': z.string().min(1, '手机号不能为空').regex(/^\d{11}$/, '手机号格式不正确')
})

export type RegisterDto = z.infer<typeof registerDto>
