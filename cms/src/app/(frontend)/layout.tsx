import React from 'react'

import './styles.css'

export const metadata = {
  description: 'Адмінка контенту лендінгу SkilNova.',
  title: 'SkilNova CMS',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
