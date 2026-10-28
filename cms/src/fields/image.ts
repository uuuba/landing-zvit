import type { Field } from 'payload'

export const imageField = (name = 'image'): Field => ({
  name,
  type: 'group',
  label: 'Зображення',
  fields: [
    {
      name: 'src',
      type: 'text',
      label: 'Адреса',
      required: true,
    },
    {
      name: 'alt',
      type: 'text',
      label: 'Підпис',
      required: true,
    },
  ],
})
