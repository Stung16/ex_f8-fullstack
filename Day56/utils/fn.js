module.exports = {
  encryptPassword: (password, key) => {
    let encryptedPassword = "";
    for (let i = 0; i < password.length; i++) {
      let charCode = password.charCodeAt(i) ^ key.charCodeAt(i % key.length);
      encryptedPassword += String.fromCharCode(charCode);
    }
    return encryptedPassword;
  },
  decryptPassword: (encryptedPassword, key) => {
    let decryptedPassword = "";
    for (let i = 0; i < encryptedPassword.length; i++) {
      let charCode =
        encryptedPassword.charCodeAt(i) ^ key.charCodeAt(i % key.length);
      decryptedPassword += String.fromCharCode(charCode);
    }
    return decryptedPassword;
  },
  getNameFromEmail: (value) => {
    var name = value.substring(0, value.indexOf("@"));
    return name;
  },
};
