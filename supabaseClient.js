
const { createClient } = supabase;

const supabaseUrl = "https://elioemwsluqhrygbrxlz.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVsaW9lbXdzbHVxaHJ5Z2JyeGx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkzNTU4MDksImV4cCI6MjA3NDkzMTgwOX0.vBIiWsy4MGOWwgGkLcd4y9HUqgFQn9qA_xUZ6XYPm58";

const _supabase = createClient(supabaseUrl, supabaseKey);
