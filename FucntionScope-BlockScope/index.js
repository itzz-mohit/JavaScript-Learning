function exampleFunction() {
    var x = 10;

    if (true) {
        var y = 20; // y is accessible within the entire function
        console.log(x); // Outputs: 10
    }

    console.log(y); // Outputs: 20
}

exampleFunction();


function exampleFunction() {
    let x = 10;

    if (true) {
        let y = 20; // y is accessible only within this block
        console.log(x); // Outputs: 10
    }

    console.log(y); // Throws an error because y is not defined in this scope
}

exampleFunction();


function exampleFunction() {
    const pi = 3.14;

    if (true) {
        const pi = 3.14159; // This is a different variable from the outer pi
        console.log(pi); // Outputs: 3.14159
    }

    console.log(pi); // Outputs: 3.14
}

exampleFunction();
