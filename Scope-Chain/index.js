var x = 10;

function a(){
    var b = 10;
    c();
    function c(){
        console.log(b);
        console.log(x);
        console.log(m);
    }
}

a();

var m = 20;
console.log(b);