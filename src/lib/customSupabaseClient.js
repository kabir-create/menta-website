import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ghvywrhpgabfkxlaqkzs.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdodnl3cmhwZ2FiZmt4bGFxa3pzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1ODU5ODUsImV4cCI6MjA2NTE2MTk4NX0.HFVEw1xy4BrJwjScmH0UKVAUTnWyRy4Q_916i7vjtKI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);