const defangIPaddr = (address) => {
  return address.split('.').join('[.]');
};

// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"
console.log(defangIPaddr('1.1.1.1'))

// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"
console.log(defangIPaddr('255.100.50.0'))
