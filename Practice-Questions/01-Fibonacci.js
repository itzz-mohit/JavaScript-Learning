var a = 0;
var b = 1;
var nextTerm;

for (let i = 1; i <= 5; i++) {
  console.log(a);
  nextTerm = a + b;
  a = b;
  b = nextTerm;
}
