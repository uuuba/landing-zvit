import type { Block } from 'payload'

export const Features: Block = {
  slug: 'features',
  labels: { singular: 'Переваги', plural: 'Переваги' },
  fields: [
    { name: 'anchor', type: 'text', label: 'ID секції', required: true },
    { name: 'title', type: 'text', label: 'Заголовок', required: true },
    {
      name: 'items',
      type: 'array',
      label: 'Пункти',
      required: true,
      fields: [
        { name: 'icon', type: 'text', label: 'Іконка', required: true },
        { name: 'title', type: 'text', label: 'Заголовок', required: true },
        { name: 'text', type: 'textarea', label: 'Текст', required: true },
      ],
    },
  ],
}
