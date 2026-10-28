import type { Block } from 'payload'

import { imageField } from '../fields/image'

export const Courses: Block = {
  slug: 'courses',
  labels: { singular: 'Курси', plural: 'Курси' },
  fields: [
    { name: 'anchor', type: 'text', label: 'ID секції', required: true, defaultValue: 'courses' },
    { name: 'title', type: 'text', label: 'Заголовок', required: true },
    { name: 'subtitle', type: 'textarea', label: 'Підзаголовок' },
    {
      name: 'items',
      type: 'array',
      label: 'Курси',
      required: true,
      fields: [
        { name: 'title', type: 'text', label: 'Назва', required: true },
        {
          name: 'level',
          type: 'select',
          label: 'Рівень',
          required: true,
          options: [
            { label: 'Початковий', value: 'beginner' },
            { label: 'Середній', value: 'middle' },
            { label: 'Просунутий', value: 'advanced' },
          ],
        },
        {
          name: 'format',
          type: 'select',
          label: 'Формат',
          required: true,
          options: [
            { label: 'Відео', value: 'video' },
            { label: 'Практика', value: 'practice' },
            { label: 'Текст', value: 'text' },
          ],
        },
        {
          name: 'topic',
          type: 'select',
          label: 'Тема',
          required: true,
          options: [
            { label: 'Python', value: 'python' },
            { label: 'Веб', value: 'web' },
            { label: 'Дані', value: 'data' },
            { label: 'AI/ML', value: 'ai' },
            { label: 'Бази даних', value: 'db' },
            { label: 'UI/UX', value: 'ux' },
            { label: 'Англійська', value: 'eng' },
          ],
        },
        { name: 'hours', type: 'number', label: 'Години', required: true, min: 1 },
        imageField(),
      ],
    },
  ],
}
