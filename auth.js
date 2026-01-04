// auth.js
const SUPABASE_URL = "https://qmbykqsaqxmlhpoyjrks.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_v4NnwDj4S8DWNntDhnLAjw_aRgEkI9s";
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const loginForm = document.getElementById("login-form");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });

    if (error) {
      alert("Login failed: " + error.message);
    } else {
      alert("Login successful!");
      window.location.href = "index.html";
    }
  });
}
