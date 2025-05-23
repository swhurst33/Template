# 📁 backend/seed

This folder contains the database seed scripts used to populate your database with initial or test data.

---

## 📄 Files Overview

- `seed.ts` or `seed.sql` — Script to insert default or mock data into your database.
- `.env` — Make sure your environment variables are set for DB access.

---

## 🛠 How to Run the Seed Script

### Option 1: If using a SQL file

```bash
psql -U your_user -d your_database -f seed.sql
