/* Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".

Example 1:
Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"

Example 2:
Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0" */

/**
 * @param {string} address
 * @return {string}
 */
const defangIPaddr = function(address) {
  let res = '';
  for (let x = 0; x < address.length; x++) {
      if (address [x] === '.') {
          continue;
      }
      if (address[x + 1] === '.') {
          res += `${address[x]}[.]`;
          continue;
      }
      res += address[x];
  }
  return res;
};

console.log(defangIPaddr('1.1.1.1'));