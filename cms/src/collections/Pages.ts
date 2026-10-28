import type { CollectionConfig } from 'payload'

import { Contacts } from '../blocks/Contacts'
import { Features } from '../blocks/Features'
import { Courses } from '../blocks/Courses'
import { Hero } from '../blocks/Hero'
import { Testimonials } from '../blocks/Testimonials'

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: { singular: 'Сторінка', plural: 'Сторінки' },
  admin: { useAsTitle: 'title' },
  access: { read: () => true },
  fields: [
    {
      name: 'path',
      type: 'text',
      label: 'Адреса сторінки',
      required: true,
      unique: true,
      defaultValue: '/',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Заголовок',
      required: true,
    },
    {
      name: 'blocks',
      type: 'blocks',
      label: 'Блоки',
      blocks: [Hero, Features, Courses, Testimonials, Contacts],
    },
  ],
}
