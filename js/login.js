
const wrapper = document.querySelector('.wrapper');
const register_Link = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');


register_Link.onclick=()=>{
    wrapper.classList.add('active');
}
loginLink.onclick=()=>{
    wrapper.classList.remove('active');
}
//sign up and add new user
//---------------------------------------------
const signUpBtn = document.getElementById('sign-up-btn');
const regUserName = document.getElementById('reg-user-name');
const regPassword = document.getElementById('reg-password');
const alertregister = document.querySelector('.alert-sign-in');
const loginUserName = document.getElementById('log-user-name');
const loginPassword = document.getElementById('log-password');
const alertWrong = document.querySelector('.alert-wrong');

// Encrypt function using CryptoJS
function encryptData(data, key) {
  let encryptedData = CryptoJS.AES.encrypt(data, key).toString();
  return encryptedData;
}

// Decrypt function using CryptoJS
function decryptData(encryptedData, key) {
  let decryptedData = CryptoJS.AES.decrypt(encryptedData, key).toString(CryptoJS.enc.Utf8);
  return decryptedData;
}

function addNewUser() {
  const adminInp = document.getElementById('admin');
  let admin = 'alex@bmw2024';
  let Users = JSON.parse(localStorage.getItem("newUser")) || [];

  let newUser = {
    Name: encryptData(regUserName.value.trim().toLowerCase(), "EncryptionKey"),
    Password: encryptData(regPassword.value.trim().toLowerCase(), "EncryptionKey"),
  };

  if (regUserName.value == '' || regPassword.value == '' || adminInp.value == '') {
    alertregister.innerHTML = 'Please Complete Required Fields!';
  } else if (regUserName.value != '' && regPassword.value != '' && adminInp.value != admin) {
    alertregister.classList.add('wrong');
    alertregister.innerHTML = 'You have No permission To Add Account';
  } else {
    Users.push(newUser);
    alertregister.classList.add('active');
    alertregister.innerHTML = 'You have Successfully Add Account';
    setTimeout(() => {
      wrapper.classList.remove('active');
    }, 1500);
    regUserName.value = '';
    regPassword.value = '';
    adminInp.value = '';
  }

  setTimeout(() => {
    alertregister.classList.remove('active', 'wrong');
    alertregister.innerHTML = '';
  }, 1700);

  localStorage.setItem("newUser", JSON.stringify(Users));
}

function login() {
  let Users = JSON.parse(localStorage.getItem("newUser")) || [];

  if (loginUserName.value != '' && loginPassword.value != '') {
    Users.forEach(user => {
      const decryptedUsername = decryptData(user.Name, "EncryptionKey");
      const decryptedPassword = decryptData(user.Password, "EncryptionKey");

      if (loginUserName.value != decryptedUsername || loginPassword.value != decryptedPassword) {
        alertWrong.classList.add('wrong');
        alertWrong.innerHTML = 'Wrong User-Name OR Password !';
      } else if (loginUserName.value == decryptedUsername && loginPassword.value == decryptedPassword) {
        alertWrong.classList.add('active');
        alertWrong.classList.remove('wrong');
        alertWrong.innerHTML = 'Welcome, You are Successfully logged in';
        setTimeout(() => {
          loginUserName.value = '';
          loginPassword.value = '';
          location.href = '../html/index.html';
        }, 2000);
      }
    });
  } else {
    alertWrong.innerHTML = 'Please Complete Required Fields!';
  }

  setTimeout(() => {
    alertWrong.classList.remove('active', 'wrong');
    alertWrong.innerHTML = '';
  }, 1700);
}

  