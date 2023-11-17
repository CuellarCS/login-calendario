// Importa las funciones necesarias del SDK de Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAz3TjYN6ycqBf-g8wkFLyFhKvrD8fsr84",
    authDomain: "calendario-40abd.firebaseapp.com",
    projectId: "calendario-40abd",
    storageBucket: "calendario-40abd.appspot.com",
    messagingSenderId: "163672584813",
    appId: "1:163672584813:web:9a75ef92eaf6f306678564",
    measurementId: "G-LCQHJ7BXX3"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Obtén referencias a los formularios y maneja los eventos
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

// Iniciar sesión
loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('Usuario autenticado:', user);
            // Puedes redirigir a otra página o realizar otras acciones aquí
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error de autenticación:', errorCode, errorMessage);
        });
});

// Registro de nuevo usuario
registerForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('Nuevo usuario registrado:', user);
            // Puedes redirigir a otra página o realizar otras acciones aquí
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error de registro:', errorCode, errorMessage);
        });
});
