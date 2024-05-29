var num = 11211;
var remainder;
var reverse = 0;
var temp = num;

while (temp != 0) {
  remainder = temp % 10;
  reverse = reverse * 10 + remainder;
  temp = Math.floor(temp / 10);
  console.log(temp);
}

console.log(num);
console.log(reverse);

if (num == reverse) {
  console.log("Palindrome");
}
