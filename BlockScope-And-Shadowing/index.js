

// {
//     var a = 10;
//     let b = 20;
//     const c = 30;

//     // here a will go in global space and b and c in block scope

// }



// {
//     var a = 10;
//     let b = 20;
//     const c = 30;

//     console.log(a); //10
//     console.log(b); //20
//     console.log(c); //30
// }

// console.log(a); //10
// console.log(b); // this will give reference error bcoz we are trying to access it out of scope 
// console.log(c); // same as b

// // after printing the a the block scope will vanished there will be only remaining global scope




// // here the shadowed happened bcoz all all the a will print 10, and this happening bcoz  
// // all the a's are refering to same memory space i.e. global space
// var a = 100;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;

//     console.log(a); 
//     console.log(b); 
//     console.log(c); 
// }
// console.log(a);




// let b = 100; // this b will point to script scope i.e. any another scope instead of block scope
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;

//     console.log(a); 
//     console.log(b); // this b will refering to block scope along with c
//     console.log(c); 
// }
// console.log(b);




// //shadowing is not only the concept of block, it behaves same in function also
// const c = 100;
// function x(){
//     const c = 30;
//     console.log(c);
// }
// x();
// console.log(c);



// //this is illegal shadowing
// let a = 20;
// {
//     var a = 10;
// }



// //this is legal shadowing
// var a = 10; 
// {
//     let a = 20;
//     console.log(a);
// }
// console.log(a);


let a = 200;
function x()
{
    var a = 20;
    console.log(a);
}
x();
console.log(a);