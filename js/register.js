

function verificar(rut, password) {
  if(rut == '12345' && password == '54321'){
      window.location.replace("./administradorPage.html")
  }
  else{
    alert("Información invalida");
    return;
  }
}


  
