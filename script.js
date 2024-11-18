$(document).ready(function () {
  $("#register-btn").on("click", function () {
    $("#registerModal").modal("show");
  });

  $("#registration-form").on("submit", function (e) {
    e.preventDefault();

    const email = $("#email").val();
    const password = $("#password").val();
    const confirmPassword = $("#confirm-password").val();

    $("#error-message").hide();
    $("#password, #confirm-password").removeClass("is-invalid");

    let hasError = false;

    if (password.length < 6) {
      $("#error-message")
        .text("Пароль должен быть не менее 6 символов.")
        .show();
      $("#password").addClass("is-invalid");
      hasError = true;
    }

    if (password !== confirmPassword) {
      $("#error-message").text("Пароли не совпадают.").show();
      $("#password, #confirm-password").addClass("is-invalid");
      hasError = true;
    }

    if (!hasError) {
      console.log({
        email: email,
        password: password,
      });

      const successContent = `
                <div class="modal-body text-center">
                    <div class="text-success">
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.97 11.03a.75.75 0 0 0 1.08-.02l3.992-4.99a.75.75 0 1 0-1.15-.96L7.477 9.417 5.383 7.323a.75.75 0 1 0-1.06 1.06l2.647 2.647z"/>
                        </svg>
                    </div>
                    <h4 class="mt-3">Добро пожаловать!</h4>
                </div>`;
      $(".modal-content").html(successContent);

      setTimeout(() => {
        $("#registerModal").modal("hide");
        location.reload();
      }, 3000);
    }
  });

  $("#toggle-password").on("click", function () {
    togglePasswordVisibility("#password", this);
  });
  $("#toggle-confirm-password").on("click", function () {
    togglePasswordVisibility("#confirm-password", this);
  });

  function togglePasswordVisibility(selector, toggleButton) {
    const input = $(selector);
    const icon = $(toggleButton).find("i");
    if (input.attr("type") === "password") {
      input.attr("type", "text");
      icon.removeClass("bi-eye").addClass("bi-eye-slash");
    } else {
      input.attr("type", "password");
      icon.removeClass("bi-eye-slash").addClass("bi-eye");
    }
  }
});
