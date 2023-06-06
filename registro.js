// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyChyOZQOYnUMcHe9ZQBu8PycyyXnb-jaxw",
    authDomain: "my-project-3b2f7.firebaseapp.com",
    projectId: "my-project-3b2f7",
    storageBucket: "my-project-3b2f7.appspot.com",
    messagingSenderId: "711266844139",
    appId: "1:711266844139:web:4aadeb008ce0758f49adae"
};



firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const form = document.querySelector('#registro');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.querySelector('#nombre').value;
    const telefono = document.querySelector('#telefono').value;
    const correo = document.querySelector('#mail').value;

    const dirrecion = document.querySelector('#dirreción').value;
    const cedula = document.querySelector('#cedula').value;
    const contraseña = document.querySelector('#contraseña').value;
    localStorage.setItem("mail",correo)

    console.log(nombre,telefono,correo,dirrecion,cedula,contraseña)

    auth.createUserWithEmailAndPassword(correo,contraseña)
    .then(userCredential => {
        console.log("sig")
        form.reset();
        window.location.href = "./catalogo.html";
    });

});
