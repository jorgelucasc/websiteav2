document.addEventListener('DOMContentLoaded', function () {
  // Obtém o nome de usuário da localStorage
  const usuario = localStorage.getItem('usuario')

  if (usuario) {
    document.getElementById('username').textContent = `${usuario}`
    document.getElementById('title_user').textContent = usuario
  }
})
