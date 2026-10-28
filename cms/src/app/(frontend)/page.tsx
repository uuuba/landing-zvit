import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import React from 'react'

import config from '@/payload.config'
import './styles.css'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  return (
    <div className="home">
      <h1>SkilNova CMS</h1>
      <p>{user ? `Ви увійшли як ${user.email}` : 'Контент лендінгу редагується в адмінці.'}</p>
      <p>
        Публічна сторінка збирається окремим Vite-фронтендом із <code>/api/common</code> і{' '}
        <code>/api/page?path=/</code>.
      </p>
      <a href={payloadConfig.routes.admin}>Відкрити адмінку</a>
    </div>
  )
}
