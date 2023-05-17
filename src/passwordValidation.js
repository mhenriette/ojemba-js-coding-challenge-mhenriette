export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 *
 */
function checkSequence(numbers) {
  return [...numbers]
    .sort()
    .some((number, index, arr) => +number + 1 == arr[index + 1]);
}

export default function isValidPassword(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"

  if (password.length !== 10) return false;

  if (forbiddenPasswords.includes(password)) return false;

  // password must not have special characters
  if (/\W/.test(password)) return false;

  //password must not contain numbers only
  if (/^[0-9]+$/.test(password)) return false;

  if (/^[A-Za-z]+$/.test(password)) return false;

  if (
    password.toUpperCase() === password ||
    password.toLowerCase() === password
  )
    return false;

  const arrNumbers = password.match(/\d+/g);
  if (arrNumbers.some((number) => checkSequence(number))) return false;

  const setOfPassword = new Set([...password]);
  if (setOfPassword.size < 4) return false;
  return true;
}
