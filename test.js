// for (i = 0; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0){
//         console.log('fizzbuzz')
//     } else if (i % 3 === 0){
//         console.log('fizz')
//     } else if (i % 5 === 0) {
//         console.log('buzz')
//     } else {
//         console.log(i)
//     }
// }

// function dance(song) {
//     if (song === 'I like to move it move it'){
//         var action = 'dance';
//     } else {
//         var action = 'skip';
//     }

//     return console.log(action);
// }


// dance('I like to move it move it')








let p = new Promise((resolve, reject) => {
    let a = 7
    if (a === 2) {
        resolve('success')
    } else {
        reject('failed')
    }
})

p.then((message) => {
    console.log(message)
}).catch((message) => {
    console.log(message)
})




