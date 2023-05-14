

function verificar(rut, password) {
  if(rut == '12345' && password == '54321' ){
      window.location.replace("./administrador./administradorPage.html")
  }
  else{
    if(rut == '123456' && password == '654321'){
      window.location.replace("./mecanico/mecanicoPage.html")
    }
    else{
      alert("Información invalida");
      return;
    }
  }
}


  
