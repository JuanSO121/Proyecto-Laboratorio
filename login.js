/** 
const sesion = document.querySelector('#sesion');
const modal = () => {
    sesion.showModal()
};
*/


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyChyOZQOYnUMcHe9ZQBu8PycyyXnb-jaxw",
    authDomain: "my-project-3b2f7.firebaseapp.com",
    projectId: "my-project-3b2f7",
    storageBucket: "my-project-3b2f7.appspot.com",
    messagingSenderId: "711266844139",
    appId: "1:711266844139:web:4aadeb008ce0758f49adae"
};


/* PARA CREAR CUENTA Y ALMACENAR 
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const form = document.querySelector('#autenticacion');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const mail = document.querySelector('#mail').value;
    const password = document.querySelector('#password').value;


    console.log(mail,password)

    auth.createUserWithEmailAndPassword(mail,password)
    .then(userCredential => {
        console.log("sig")
        form.reset();

    });

});
*/
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const form = document.querySelector('#autenticacion');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const mail = document.querySelector('#mail').value;
    const password = document.querySelector('#password').value;
    localStorage.setItem("mail",mail)

    console.log(mail, password)

    auth.signInWithEmailAndPassword(mail, password)
        .then(userCredential => {
            alert("Ingresado")
            form.reset();
            window.location.href = "index.html"; // Redirige a index.html después del inicio de sesión exitoso
        });

});

// const cerrarS = document.querySelector("#cerrarS");

// cerrarS.addEventListener('click', e => {
//     e.preventDefault();
//     auth.signOut().then(() => {
//         alert("cerrar sesión")

//     });

// });

const cerrarSesion = document.querySelector("#cerrarS");

cerrarSesion.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut()
        .then(() => {
            alert("Sesión cerrada");
            // Redireccionar a acceso.html u otra página de inicio
            localStorage.removeItem('mail');
            window.location.href = "login.html";
        })
        .catch((error) => {
            console.log(error.message);
        });
});