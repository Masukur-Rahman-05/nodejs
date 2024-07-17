const fs = require("fs");



fs.stat("./ Hello.txt",  (err,stats) => {
    if (err) console.error(err)
    else console.log(stats)
})






// fs.readFile("./ Hello.txt",'utf8' ,(err, data) => {
//     if (err) console.error(err)
//     else console.log(data)
// })

// fs.unlink("removed.txt", () => {
//     try {
//         console.log("done")

//     } catch (err) {
//         console.error(err.message)
//     }
// })

//
// fs.copyFile("Hello.txt", "./copy/copy.txt", function (err) {
//     if (err) console.error(err.message)
//     else console.log("done")
//  })
//
// fs.rename("hello.txt", " Hello.txt", function (err) {
//     if (err) console.error(err.message)
//     else console.log("done")
//  })
//
// fs.appendFile("hello.txt", " I am Masuk", function (err) {
//     if (err) console.error(err.message)
//     else console.log("done")
//  })
//
// fs.writeFile("hello.txt", " Hello There", function (err) {
//     if (err) console.error(err.message)
//     else console.log("done")
//  })
