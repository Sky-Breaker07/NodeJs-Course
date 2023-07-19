const utils = require("./myUtils");
const data = require("./myData");
const os = require("os");
const path = require("path");
const fs = require("fs");
const http = require("http");

// setInterval(() => {
//     console.log(`Hello there. My name is ${utils.generateRandom(data.firstNames, 1)} ${utils.generateRandom(data.lastNames, 1)}. I live in ${(utils.generateRandom(data.countries, 1)).country}. I am a student of ${utils.generateRandom(data.universities, 1)}. My favorite animals include${utils.generateRandom(data.animalNames, 3)} and ${utils.generateRandom(data.animalNames, 1)}. My favorite colors include${utils.generateRandom(data.colors, 3)} and ${utils.generateRandom(data.colors, 1)}`)
// }, 1000);

// console.log(path.basename(path.join(`${path.sep}content`, 'subfolder', 'text1.txt')))
// console.log(path.resolve(__dirname, 'content', 'subfolder', 'text1.txt'))

// console.log(path.extname('app.js'))

// const first = fs.readFileSync("./content/text1.txt", "utf-8");

// const second = fs.readFileSync("./content/text2.txt", "utf8");

// setInterval(() => {
//   fs.appendFileSync(
//     "./content/text3.txt",
//     `Hello there. My name is ${utils.generateRandom(
//       data.firstNames,
//       1
//     )} ${utils.generateRandom(data.lastNames, 1)}. I live in ${
//       utils.generateRandom(data.countries, 1).country
//     }. I am a student of ${utils.generateRandom(
//       data.universities,
//       1
//     )}. My favorite animals include${utils.generateRandom(
//       data.animalNames,
//       3
//     )} and ${utils.generateRandom(
//       data.animalNames,
//       1
//     )}. My favorite colors include${utils.generateRandom(
//       data.colors,
//       3
//     )} and ${utils.generateRandom(data.colors, 1)}` + '\n'
//   );
// }, 2000);

// fs.readFile('./content/text4.txt', 'utf8', (err,result)=>{
//     if(err) {
//         console.log(err)
//         return
//     }
//     console.log(result)
// } )

const server = http.createServer((req, res) => {
    if (req.url === '/' && 'home') {
        res.end('Welcome to our home page')
      } else if (req.url === '/about') {
        res.end('Here is our short history')
      } else {
        res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
        `)
      }
    })
    
    server.listen(3000)