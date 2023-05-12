

function verificar() {
    if ( $("#exampleInputEmail1").val().trim().length = 0 ) {
      alert("El campo contiene un string válido que no son espacios");
    }
    else {
      alert("El campo contiene espacios y está vacío");
    }

  }


  const users = [
    { user: 'ss', password: '22' },
    { user: 'aa', password: '11' },
];

const validation = (user, pass) => users.find( ( person ) => (person.user === user) && (person.password === pass));

const login = () => {
    const user = document.getElementById( 'txt' ).value;
    const pass = document.getElementById( 'password' ).value;
    if ( validation(user, pass) !== undefined ) {
        href="./index.html"
        alert( `El usuario ${user} es correcto |nais|` )
    }
    else {
        alert( 'Usuario o contraseña incorrectos...' );
    }
}