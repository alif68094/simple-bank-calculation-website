document.getElementById('btn-submit').addEventListener('click', function(){
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;
    const userPassword = document.getElementById('user-pass');
    const password = userPassword.value;

    if(email === 'alif@gmail.com' && password === 'alif321' ){
        window.location.href ='bank.html'
    }
    else {
        alert('F u mate!! I dont know you');
    }
}
)