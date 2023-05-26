document.getElementById('login_p').addEventListener('submit', function (event) {
  event.preventDefault()

  const usuario = document.getElementById('login_user').value
  localStorage.setItem('usuario', usuario)
  window.location.href = 'home.html'
})
