// LOGIN VALIDATION
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');

  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const username = document.getElementById('loginUsername').value;
      const password = document.getElementById('loginPassword').value;

      if (username === "meeran" && password === "1234") {
        alert("Login successful!");
        window.location.href = "home.html";
      } else {
        alert("Invalid username or password");
      }
    });
  }

  // REGISTRATION VALIDATION
  if (registerForm) {
    registerForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const pass = document.getElementById('regPassword').value;
      const confirm = document.getElementById('regConfirmPassword').value;

      if (pass !== confirm) {
        alert("Passwords do not match");
        return;
      }

      alert("Registration successful!");
      window.location.href = "login.html";
    });
  }
});
