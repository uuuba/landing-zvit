import type { Block } from 'payload'

export const Contacts: Block = {
  slug: 'contacts',
  labels: { singular: 'Контакти', plural: 'Контакти' },
  fields: [
    { name: 'anchor', type: 'text', label: 'ID секції', required: true, defaultValue: 'contacts' },
    { name: 'title', type: 'text', label: 'Заголовок', required: true },
    { name: 'text', type: 'textarea', label: 'Текст', required: true },
    { name: 'phone', type: 'text', label: 'Телефон' },
    { name: 'email', type: 'email', label: 'Пошта', required: true },
    { name: 'address', type: 'text', label: 'Адреса', required: true },
  ],
}
