let password = document.getElementById("Contra");
let password2 = document.getElementById("Contra2")

document.getElementById("Contra").onkeyup= () => {
let pass = password.value; 

document.getElementById("Contra2").onkeyup= () => {
    let pass2 = password2.value;   



document.getElementById("Submit").onclick = () => {
    if(pass == pass2){

    alert("Correcto")
    document.write("Felicidades");

   }
   else{

    alert("Incorrecto!")

   }
}

}


}

