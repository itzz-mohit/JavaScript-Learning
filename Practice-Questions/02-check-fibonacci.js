var a = [0, 1, 1, 2, 3, 5, 8];
var flag = true;
for (let i = 0; i < a.length - 2; i++) {
  if (a[i] + a[i + 1] !== a[i + 2]) {
    flag = false;
    break;
  }
}

if (flag) {
  console.log("Fibonacci");
}
