import * as zod from 'zod'

export const schema = zod.object({
  cep: zod.string().min(1, "Campo obrigatório").regex(/^\d{5}-?\d{3}$/, 'CEP Inválido'),
  address: zod.string().min(1, "Campo obrigatório"),
  number: zod.string().min(1, "Campo obrigatório"),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(1, "Campo obrigatório"),
  city: zod.string().min(1, "Campo obrigatório"),
  state: zod.string().min(1, "Campo obrigatório"),

  paymentMethod: zod.enum(['credit', 'debit', 'money']),
})

export type FormSchema = zod.infer<typeof schema>