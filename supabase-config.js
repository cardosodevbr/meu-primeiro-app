// supabase-config.js
// A biblioteca do Supabase será importada no HTML. Aqui nós apenas a inicializamos.

const supabaseUrl = 'https://cpugucrmeunbilibwsex.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNwdWd1Y3JtZXVuYmlsaWJ3c2V4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEzMTU0NDYsImV4cCI6MjEwNjg5MTQ0Nn0.GGp3jBlVg-sNMiytCShhOzFjpaPCbjGJEsx6PXeUmwI';

const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);