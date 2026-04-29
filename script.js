const form = document.getElementById("form");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const checkbox = document.getElementById("checkbox");
  const existingBtn = document.getElementById("existing");

  window.onload = function () {
    const savedUser = localStorage.getItem("username");

    if (savedUser) {
      existingBtn.style.display = "block";
    } else {
      existingBtn.style.display = "none";
    }
  };
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    alert("Logged in as " + username);

    if (checkbox.checked) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      existingBtn.style.display = "block";
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
      existingBtn.style.display = "none";
    }
  });
  existingBtn.addEventListener("click", function () {
    const savedUser = localStorage.getItem("username");

    if (savedUser) {
      alert("Logged in as " + savedUser);
    }
  });