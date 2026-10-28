# SkilNova landing

Лендінг для SkilNova. Тексти сторінки лежать у Payload, а сама сторінка збирається у Vite.

## Запуск

```bash
npm run install:all
cp cms/.env.example cms/.env
cp frontend/.env.example frontend/.env
createdb skilnova_cms
npm run dev
```

У `cms/.env` треба свій `DATABASE_URL` і `PAYLOAD_SECRET`.

- Адмінка: http://localhost:3000/admin
- Сторінка: http://localhost:5173

Поки сторінок немає, головна записується сама при старті CMS.
