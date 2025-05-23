# 📁 backend/schema

This directory contains the raw SQL schema definition of the project's database.

---

## 📄 File Overview

- `schema.sql` — Contains the `CREATE TABLE` statements for the main tables in the database.
- Use this file to recreate or document your database structure.

---

## 🛠 How to Use

### 🔄 To Create the Schema in PostgreSQL (Locally)

```bash
psql -U your_user -d your_database -f schema.sql
