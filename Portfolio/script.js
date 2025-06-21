document.getElementById("email").addEventListener("click", function () {
  const correo = this.textContent;
  navigator.clipboard.writeText(correo).then(function () {
    flashy("Email copiado con éxito", {
      type: "info",
      position: "bottom-center",
      duration: 2000,
      closable: false,
      animation: "zoom",
      theme: "light",
    });
  });
});
