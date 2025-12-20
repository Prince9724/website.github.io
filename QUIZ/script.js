const email_input = document.getElementById("email-input");
const password_input=document.getElementById("password-input");
const button_input = document.getElementById("input-button");

const currentUser = {

  password :  "Admin@123" ,
  email:"admin@gmail.com"
}

const SingninUser=()=>{
     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 const passwordPattern =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

     const email = email_input.value;
    const password = password_input.value;
   
    if(emailPattern.test(email)&&passwordPattern.test(password)){
        if(email === currentUser.email && password === currentUser.password){
            alert("successful !!");
            //  console.log("true");
            button_input.href="quiz.html";
        }
        else{
            alert("week pasword or email !!");
        }
    }
    else{
        alert("Invalid Intention!!");
    };

};
button_input.addEventListener("click",SingninUser);