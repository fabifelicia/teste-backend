
function isPalindromo(string) {
  if (!string || string.length === 0) return false;

  let reverseString = string.split('').reverse().join('');
  return string === reverseString;
}

console.log(isPalindromo('asa'))
console.log(isPalindromo('arara'))
console.log(isPalindromo('amada'))