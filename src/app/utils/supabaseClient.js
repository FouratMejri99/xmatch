// supabaseClient.js
import { createClient } from "@supabase/supabase-js";

// Replace these with your actual values (don't expose them in frontend if possible)
const SUPABASE_URL = "https://qsvqoekjsqjfxektnfru.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzdnFvZWtqc3FqZnhla3RuZnJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg3MDEwMDYsImV4cCI6MjA2NDI3NzAwNn0.2RODaekD3AoIHABqmIO8X2_5GMNKgUWdT8x9QZCAmyQ"; // Use ONLY the public anon key for frontend

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
