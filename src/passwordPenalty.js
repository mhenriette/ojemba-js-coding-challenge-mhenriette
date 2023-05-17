/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */
export default function penaltyPoints(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") password = String(password);
  if (!password || password === "" || password === "null") return 0;
  const pattern = /(\w)\1+/gm;
  const matches = password.match(pattern);
  let points = 0;
  if (!matches) return 0;
  matches.map((el) => {
    if (el.length === 2) {
      points = points + 1;
    }
    if (el.length > 2) points = points + 2;
    if (el.length < 1) points;
    return points;
  });
  return points;
}
