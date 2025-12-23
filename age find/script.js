const birth = document.getElementById("birthday");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

btn.addEventListener("click", function (){
    let Birthvalue = birth.value;
    if(Birthvalue === ""){
        result.textContent = "pLS ENTER the birthdate";
        return;
    }
    let today = new Date();//
    let birthdate = new Date(Birthvalue);

    let age = today.getFullYear() - birthdate.getFullYear();
    result.textContent = age ;
});