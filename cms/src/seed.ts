import type { Payload } from 'payload'
import type { Page } from './payload-types'

const homePage = {
  path: '/',
  title: 'Головна',
  blocks: [
    {
      blockType: 'hero',
      anchor: 'hero',
      badge: 'Курси під твій рівень',
      title: 'Не весь каталог одразу, а наступний крок',
      subtitle:
        'SkilNova дивиться інтереси, прогалини в навичках і мету. Збіг рахується формулою, а курс із невиконаною передумовою не відкривається.',
      image: {
        src: '/covers/python.jpg',
        alt: 'Обкладинка курсу Python',
      },
      buttons: [
        { text: 'Дивитись курси', link: '#courses', variant: 'primary' },
        { text: 'Як це працює', link: '#features', variant: 'secondary' },
      ],
      stats: [
        { value: '8', label: 'курсів у каталозі' },
        { value: '5', label: 'навичок' },
        { value: '0–100', label: 'оцінка збігу' },
      ],
    },
    {
      blockType: 'features',
      anchor: 'features',
      title: 'Як підбирається навчання',
      items: [
        {
          icon: '40',
          title: 'Інтереси',
          text: 'Найбільша частка оцінки. Якщо в профілі Python і дані, ці курси піднімаються вище.',
        },
        {
          icon: '30',
          title: 'Прогалини',
          text: 'Навичка з низьким рівнем дає курсу пріоритет. Завершені курси зі списку зникають.',
        },
        {
          icon: '20',
          title: 'Рівень і формат',
          text: 'Решта балів — за близькість рівня і за те, чи це відео, практика або текст.',
        },
      ],
    },
    {
      blockType: 'courses',
      anchor: 'courses',
      title: 'Курси з каталогу',
      subtitle: 'Ті самі вісім курсів, що в демо SkilNova: від Python з нуля до вступу в машинне навчання.',
      items: [
        {
          title: 'Python з нуля',
          level: 'beginner',
          format: 'video',
          topic: 'python',
          hours: 18,
          image: { src: '/covers/python.jpg', alt: 'Python з нуля' },
        },
        {
          title: 'Django: веб-застосунки',
          level: 'middle',
          format: 'practice',
          topic: 'web',
          hours: 30,
          image: { src: '/covers/web.jpg', alt: 'Django: веб-застосунки' },
        },
        {
          title: 'SQL і проєктування БД',
          level: 'middle',
          format: 'practice',
          topic: 'db',
          hours: 22,
          image: { src: '/covers/db.jpg', alt: 'SQL і проєктування БД' },
        },
        {
          title: 'Основи Data Science',
          level: 'middle',
          format: 'video',
          topic: 'data',
          hours: 35,
          image: { src: '/covers/data.jpg', alt: 'Основи Data Science' },
        },
        {
          title: 'Машинне навчання: вступ',
          level: 'advanced',
          format: 'video',
          topic: 'ai',
          hours: 45,
          image: { src: '/covers/ai.jpg', alt: 'Машинне навчання: вступ' },
        },
        {
          title: 'Адаптивна верстка',
          level: 'beginner',
          format: 'practice',
          topic: 'web',
          hours: 16,
          image: { src: '/covers/web.jpg', alt: 'Адаптивна верстка' },
        },
        {
          title: 'Основи UI/UX',
          level: 'beginner',
          format: 'text',
          topic: 'ux',
          hours: 14,
          image: { src: '/covers/ux.jpg', alt: 'Основи UI/UX' },
        },
        {
          title: 'Технічна англійська для IT',
          level: 'beginner',
          format: 'text',
          topic: 'eng',
          hours: 12,
          image: { src: '/covers/eng.jpg', alt: 'Технічна англійська для IT' },
        },
      ],
    },
    {
      blockType: 'testimonials',
      anchor: 'testimonials',
      title: 'Як цим користуються',
      items: [
        {
          name: 'Назар',
          text: 'Після тесту з Python рівень підріс, а Django лишився закритим, поки не закрив передумову.',
          rating: '5',
        },
        {
          name: 'Софія',
          text: 'У рекомендаціях з’явився Data Science, бо в профілі вже стояв Python. Каталог сам нічого не перемішував.',
          rating: '5',
        },
        {
          name: 'Іра',
          text: 'План показує наступний модуль, а не всі вісім курсів одразу. Так простіше не загубитись.',
          rating: '4',
        },
      ],
    },
    {
      blockType: 'contacts',
      anchor: 'contacts',
      title: 'Питання по навчанню',
      text: 'SkilNova — навчальний прототип. Акаунт, мова і скидання демо-даних живуть у самому застосунку.',
      phone: '',
      email: 'hello@skilnova.app',
      address: 'Онлайн',
    },
  ],
} satisfies Omit<Page, 'id' | 'createdAt' | 'updatedAt'>

export async function seedHome(payload: Payload) {
  const existing = await payload.find({ collection: 'pages', limit: 1, depth: 0 })
  if (existing.totalDocs > 0) return

  await payload.updateGlobal({
    slug: 'common',
    data: {
      siteName: 'SkilNova',
      phone: '',
      menu: [
        { label: 'Курси', link: '#courses' },
        { label: 'Як працює', link: '#features' },
        { label: 'Відгуки', link: '#testimonials' },
        { label: 'Контакти', link: '#contacts' },
      ],
      cta: { label: 'Почати', link: '#courses' },
      footer: {
        text: 'Підбір курсів за інтересами, навичками і метою. План, тести і прогрес в одному місці.',
        credits: '',
      },
    },
  })

  await payload.create({ collection: 'pages', data: homePage })
  payload.logger.info('Seeded SkilNova home page')
}
