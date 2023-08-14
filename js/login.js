document.getElementById('submit').addEventListener('click',function(){
    // get email 
    // use .value to get text from input field 
    const emailField = document.getElementById('user-email')
    const email = emailField.value ;

    // get password 
    const passField = document.getElementById('user-pass');
    const password = passField.value;

    // validation (instant, not a proper way) 

    if(email === 'ah@gmail.com' && password === '123'){
        window.location.href = 'home.html';
    }else
        alert('ke tumi')
})