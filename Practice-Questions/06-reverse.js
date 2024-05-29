var number = 64431;
var reverse = 0;
var remainder;
var temp = number;

while (temp != 0) {
  remainder = temp % 10;
  reverse = reverse * 10 + remainder;
  temp = Math.floor(temp / 10);
}

console.log(reverse);
