import type { Block } from 'payload'

import { imageField } from '../fields/image'

export const Hero: Block = {
  slug: 'hero',
  labels: { singular: 'Hero', plural: 'Hero' },
  fields: [
    { name: 'anchor', type: 'text', label: 'ID секції', required: true, defaultValue: 'hero' },
    { name: 'badge', type: 'text', label: 'Бейдж', required: true },
    { name: 'title', type: 'text', label: 'Заголовок', required: true },
    { name: 'subtitle', type: 'textarea', label: 'Підзаголовок', required: true },
    imageField(),
    {
      name: 'buttons',
      type: 'array',
      label: 'Кнопки',
      fields: [
        { name: 'text', type: 'text', required: true },
        { name: 'link', type: 'text', required: true },
        {
          name: 'variant',
          type: 'select',
          required: true,
          defaultValue: 'primary',
          options: [
            { label: 'Основна', value: 'primary' },
            { label: 'Другорядна', value: 'secondary' },
          ],
        },
      ],
    },
    {
      name: 'stats',
      type: 'array',
      label: 'Цифри',
      fields: [
        { name: 'value', type: 'text', required: true },
        { name: 'label', type: 'text', required: true },
      ],
    },
  ],
}
