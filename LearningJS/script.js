
// let promise = new Promise(
//     (resolve, reject) => {
//         let fileLoad = false

//         if(fileLoad) {
//             resolve("FIle is loaded and all")
//         } else {
//             reject("FIle is not loaded and all")
//         }
//     }
// )

// promise.then(value => console.log(value))
//     .catch(value => console.error(value))

// let wait = time => new Promise( resolve => {
//     setTimeout(resolve, time)
// })

// wait(3000).then(() => console.log("Thanks for waiting"))

//async funcito returns a promise

async function loadFile() {

    let fileLoad = true

    if(fileLoad) 
        return "File is loaded"
    
    else throw "File not load"

}

// loadFile().then(() => console.log("something is fishy"))
//     .catch(() => console.log(
//         "something is not fishy"
//     ))

//await makes code wait for a promise

async function startAwait() {
    let someVal = await loadFile()
    console.log(someVal)
}

startAwait()