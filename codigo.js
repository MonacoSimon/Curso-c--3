function saludar(){
    var user = document.getElementById("txtUser").value;
    var pass = document.getElementById("txtPass").value;
    alert("te damos la bienvenida " + user)
    console.log("tu password no es secreta, mira: " + pass)
}
function sumar(){
    var n2 = parseInt(document.getElementById("txtUser").value);
    var n1 = parseInt(document.getElementById("txtPass").value);
    alert("la suma es: " + (n1 + n2))
}