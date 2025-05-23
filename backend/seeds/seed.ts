// Example using Supabase
import { supabase } from '../supabase/client';

async function seed() {
  await supabase.from('users').insert([{ name: 'Jane Doe', email: 'jane@example.com' }]);
  console.log('Seed data inserted.');
}

seed();
