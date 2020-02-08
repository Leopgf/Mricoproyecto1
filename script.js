document.getElementById("boton").onclick=function(){

if(document.getElementById("nombre").value==""|| document.getElementById("telefono").value=="" || document.getElementById("correo").value==""||document.getElementById("mensaje").value==""){
    alert("Todos los campos deben ser completados");
}
else{

    console.log(document.getElementById("nombre").value)
    console.log(document.getElementById("telefono").value)
    console.log(document.getElementById("correo").value)
    console.log(document.getElementById("mensaje").value)


    alert("Su mensaje ha sido enviado");
}
   
}