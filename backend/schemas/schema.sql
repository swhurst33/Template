-- schema.sql
-- SQL schema for the application database

-- DROP TABLE IF EXISTS users;
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  full_name TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Example table
CREATE TABLE IF NOT EXISTS polls (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question TEXT NOT NULL,
  created_by UUID REFERENCES users(id),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Add more tables as needed
-- CREATE TABLE IF NOT EXISTS responses (...)
