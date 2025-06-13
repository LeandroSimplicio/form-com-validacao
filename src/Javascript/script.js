 // Seleciona todos os ícones de toggle-password
    const togglePasswordIcons = document.querySelectorAll('.toggle-password');

    togglePasswordIcons.forEach(icon => {
      icon.addEventListener('click', () => {
        const inputSelector = icon.getAttribute('toggle');
        const input = document.querySelector(inputSelector);

        if (input.type === "password") {
          input.type = "text";
          icon.classList.remove('fa-eye');
          icon.classList.add('fa-eye-slash');
        } else {
          input.type = "password";
          icon.classList.remove('fa-eye-slash');
          icon.classList.add('fa-eye');
        }
      });
    });