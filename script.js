//your JS code here. If required.
const arr = [1, 2, 3, 4];
const outputDiv = document.getElementById("output");

// 1. Initial Promise (Resolves after 3 seconds)
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve(arr);
    }, 3000);
});

promise
    .then((result) => {
        // First Transformation: Filter out odd numbers
        const even = result.filter(val => val % 2 === 0);

        // Return a new Promise to pause the chain for 1 second
        return new Promise((resolve) => {
            setTimeout(() => {
                outputDiv.textContent = JSON.stringify(even); // Update DOM: [2, 4]
                resolve(even); // Pass the even array to the next .then()
            }, 1000);
        });
    })
    .then((even) => {
        // Second Transformation: Multiply by 2
        const modified = even.map(value => value * 2);

        // Return another Promise to pause the chain for 2 seconds
        return new Promise((resolve) => {
            setTimeout(() => {
                outputDiv.textContent = JSON.stringify(modified); // Update DOM: [4, 8]
                resolve(modified);
            }, 2000);
        });
    });