function validate(){
    var email=document.loginform.email.value;
    var password=document.loginform.password.value;
    var mailFormat= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var passwordFormat="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@])[A-Za-z\d@]{8,10}$";
    if(email==null||email==""){
        alert("Username can't be blank");
        return false;
    }
    else if(password==null||password==""){
        alert("Password can't be empty");
        return false;
    }
    else if(!mailFormat.test(email)){
        alert("You have enetred a invalid email address!");
        return false; 
    }
    else if(!passwordFormat.test(password)){
        alert("You have enetred a invalid password!");  
        return true;
    }
}
