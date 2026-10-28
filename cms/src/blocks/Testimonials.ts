import type { Block } from 'payload'

export const Testimonials: Block = {
  slug: 'testimonials',
  labels: { singular: 'Відгуки', plural: 'Відгуки' },
  fields: [
    { name: 'anchor', type: 'text', label: 'ID секції', required: true, defaultValue: 'testimonials' },
    { name: 'title', type: 'text', label: 'Заголовок', required: true },
    {
      name: 'items',
      type: 'array',
      label: 'Відгуки',
      required: true,
      fields: [
        { name: 'name', type: 'text', label: 'Ім’я', required: true },
        { name: 'text', type: 'textarea', label: 'Текст', required: true },
        {
          name: 'rating',
          type: 'select',
          label: 'Оцінка',
          required: true,
          defaultValue: '5',
          options: [
            { label: '5', value: '5' },
            { label: '4', value: '4' },
            { label: '3', value: '3' },
            { label: '2', value: '2' },
            { label: '1', value: '1' },
          ],
        },
      ],
    },
  ],
}
