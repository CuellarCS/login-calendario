// app.js
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Iniciar sesión con Firebase
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Usuario autenticado con éxito
            const user = userCredential.user;
            console.log('Usuario autenticado:', user);
            // Puedes redirigir a otra página o realizar otras acciones aquí
        })
        .catch((error) => {
            // Manejar errores de autenticación
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error de autenticación:', errorCode, errorMessage);
        });
});
