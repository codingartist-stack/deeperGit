const caesarCipher = {
  encrypt: function (string, shift) {
    //e(x) = x + k
    let encrypted = '';
    for (let i = 0; i < string.length; i++) {
      const letterCode = string[i].charCodeAt();
      const encryptShift = letterCode + shift;
      if (encryptShift >= 65 && encryptShift <= 90) {
        const letter = String.fromCharCode(encryptShift);
        encrypted += letter;
      } else if (encryptShift > 90) {
        let wrapShift = encryptShift - 90;
        const wrapCode = wrapShift + 64;
        const wrapLetter = String.fromCharCode(wrapCode);
        encrypted += wrapLetter;
      } else {
        encrypted += string[i];
      }
    }
    return encrypted;
  },

  decrypt: function (string, key) {
    //e(x) = x - k
    let decrypted = '';
    for (let i = 0; i < string.length; i++) {
      const letterCode = string[i].charCodeAt();
      const decryptShift = letterCode - key;
      const lowestCodeNumber = 40 + key;
      if (decryptShift >= 65 && decryptShift <= 90) {
        const letter = String.fromCharCode(decryptShift);
        decrypted += letter;
      } else if (decryptShift < 65 && decryptShift > lowestCodeNumber) {
        let wrapShift = decryptShift + 26;
        wrapLetter = String.fromCharCode(wrapShift);
        decrypted += wrapLetter;
      } else {
        decrypted += string[i];
      }
    }
    return decrypted;
  },
};

module.exports = caesarCipher;
