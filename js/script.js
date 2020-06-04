// let eyeSlash = document.getElementById('eye');
// eyeSlash = addEventListener('click', hideEye);

function hideEye(){
  let inputPassword = document.getElementById('inputPassword');
  let hideEye = document.getElementById('hide1');
  let hideEyeSlash = document.getElementById('hide2');
  
  if(inputPassword.type === 'password'){
    inputPassword.type = 'text';
    hideEye.style.display = 'block';
    hideEyeSlash.style.display = 'none';

  }else{
    inputPassword.type = 'password';
    hideEye.style.display = 'none';
    hideEyeSlash.style.display = 'block';
  }
}