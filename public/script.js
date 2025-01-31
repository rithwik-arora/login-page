document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const loader = document.getElementById("loader");

  // Form toggle
  document.getElementById("showSignup").addEventListener("click", toggleForm);
  document.getElementById("showLogin").addEventListener("click", toggleForm);

  function toggleForm() {
    container.classList.toggle("active");
  }

  // Login form handling
  document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    loader.style.display = "block";

    const formData = {
      email: e.target.querySelector('input[type="email"]').value,
      password: e.target.querySelector('input[type="password"]').value,
    };

    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      loader.style.display = "none";

      if (response.ok) {
        window.location.href = "/newpage.html";
        // Redirect or handle success
      } else {
        alert(data.error || "Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
      loader.style.display = "none";
      alert("An error occurred");
    }
  });

  // Signup form handling
  document
    .getElementById("signupForm")
    .addEventListener("submit", async (e) => {
      e.preventDefault();
      loader.style.display = "block";

      const formData = {
        username: e.target.querySelector('input[type="text"]').value,
        email: e.target.querySelector('input[type="email"]').value,
        password: e.target.querySelector('input[type="password"]').value,
      };

      try {
        const response = await fetch("/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await response.json();
        loader.style.display = "none";

        if (response.ok) {
          alert("Account created successfully!");
          toggleForm();
        } else {
          alert(data.error || "Signup failed");
        }
      } catch (error) {
        console.error("Error:", error);
        loader.style.display = "none";
        alert("An error occurred");
      }
    });
});
