# 📁 backend/supabase

This folder contains configuration and notes related to Supabase, the backend-as-a-service platform used for authentication, database, storage, and serverless functions in this project.

---

## 🔧 Supabase Configuration Overview

This project uses [Supabase](https://supabase.com) for the following features:

- 🧑‍💻 Authentication (email/password, magic link, OAuth)
- 🗃️ PostgreSQL database (hosted and managed by Supabase)
- 📦 File storage (avatars, assets, etc.)
- ⚙️ Serverless edge functions (optional)
- 📡 Realtime subscriptions

---

## 📂 Folder Contents

- `supabase.sql` — Optional SQL used to define database structure or configure Supabase settings.
- `README.md` — You're reading it 😊

---

## 🔐 Environment Variables (in `.env`)

Make sure to include the following in your `.env` file:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
