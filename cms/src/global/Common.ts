import type { GlobalConfig } from 'payload'

export const Common: GlobalConfig = {
  slug: 'common',
  label: 'Налаштування сайту',
  access: { read: () => true },
  fields: [
    {
      name: 'siteName',
      type: 'text',
      label: 'Назва сайту',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Телефон у шапці',
    },
    {
      name: 'menu',
      type: 'array',
      label: 'Меню',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'link', type: 'text', required: true },
      ],
    },
    {
      name: 'cta',
      type: 'group',
      label: 'Кнопка в шапці',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'link', type: 'text', required: true },
      ],
    },
    {
      name: 'footer',
      type: 'group',
      label: 'Підвал',
      fields: [
        { name: 'text', type: 'textarea', label: 'Текст', required: true },
        { name: 'credits', type: 'textarea', label: 'Джерела фото' },
      ],
    },
  ],
}
