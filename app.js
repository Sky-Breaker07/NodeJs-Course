const utils = require("./myUtils");
const data = require("./myData");
const os = require("os");
const path = require("path");
const fsp = require("fs").promises;
const fs = require('fs');
const http = require("http");
const util = require("util");
const EventEmitter = require('events');

// setInterval(() => {
//     console.log(`Hello there. My name is ${utils.generateRandom(data.firstNames, 1)} ${utils.generateRandom(data.lastNames, 1)}. I live in ${(utils.generateRandom(data.countries, 1)).country}. I am a student of ${utils.generateRandom(data.universities, 1)}. My favorite animals include${utils.generateRandom(data.animalNames, 3)} and ${utils.generateRandom(data.animalNames, 1)}. My favorite colors include${utils.generateRandom(data.colors, 3)} and ${utils.generateRandom(data.colors, 1)}`)
// }, 1000);

// console.log(path.basename(path.join(`${path.sep}content`, 'subfolder', 'text1.txt')))
// console.log(path.resolve(__dirname, 'content', 'subfolder', 'text1.txt'))

// console.log(path.extname('app.js'))

// const first = fsp.readFileSync("./content/text1.txt", "utf-8");

// const second = fsp.readFileSync("./content/text2.txt", "utf8");

// setInterval(() => {
//   fsp.appendFileSync(
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

// fsp.readFile('./content/text4.txt', 'utf8', (err,result)=>{
//     if(err) {
//         console.log(err)
//         return
//     }
//     console.log(result)
// } )

// const server = http.createServer((req, res) => {
//     if (req.url === '/' && 'home') {
//         res.end('Welcome to our home page')
//       } else if (req.url === '/about') {
//         res.end('Here is our short history')
//       } else {
//         res.end(`
//         <h1>Oops!</h1>
//         <p>We can't seem to find the page you are looking for</p>
//         <a href="/">back home</a>
//         `)
//       }
//     })

// const { readFile, writeFile } = require('fsp')

// console.log('started a first task')
// // CHECK FILE PATH!!!!
// fsp.readFile('./content/first.txt', 'utf8', (err, result) => {
//   if (err) {
//     console.log(err)
//     return
//   }
//   console.log(result)
//   console.log('completed first task')
// })
// console.log('starting next task')

// console.log('first')
// setTimeout(() => {
//   console.log('second')
// }, 1000)

// setTimeout(() => {
//   console.log('third')
// }, 2000);

// completed and exited operating system process

// setInterval(() => {
//   console.log('hello world')
// }, 2000)
// console.log(`I will run first`)

// const server = http.createServer((req, res) => {
//   console.log('request event')
//   res.end('Hello World')
// })

// server.listen(5000, () => {
//   console.log('Server listening on port : 5000....')
// })

// const server = http.createServer((req, res) => {
//   if (req.url === '/') {
//     res.end('Home Page')
//   }
//   else if (req.url === '/about') {
//     // blocking code
//     for (let i = 0; i < 20; i++) {
//       for (let j = 0; j < 1000; j++) {
//         console.log(`${i} ${j}`)
//       }
//     }
//     res.end('About Page')
//   }
//   else {res.end('Error Page')
// }
// })

// server.listen(5000, () => {
//   console.log('Server listening on port : 5000....')
// })

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     fsp.readFile(path, "utf-8", (err, info) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(info);
//       }
//     });
//   });
// };

// const readFilePromise = util.promisify(fsp.readFile);
// const writeFilePromise = util.promisify(fsp.writeFile);
// const appendFilePromise = util.promisify(fsp.appendFile);

// const start = async () => {
//   try {
//     const second = await fsp.readFile("./content/second.txt", "utf-8");
//     const third = await fsp.readFile("./content/third.txt", "utf-8");
//     console.log(third);
//     console.log(second);
//     const dataToWrite = [];
//     for (let i = 0; i < 100000; i++) {
//       const name = `My name is ${utils.generateRandom(
//         data.firstNames,
//         1
//       )} ${utils.generateRandom(data.lastNames, 1)}`;
//       dataToWrite.push(name);
//     }
//     await Promise.all([
//       fsp.appendFile("./content/seventh.txt", dataToWrite.join("\n") + "\n"),
//       fsp.appendFile("./content/eighth.txt", dataToWrite.join("\n") + "\n"),
//       fsp.appendFile("./content/ninth.txt", dataToWrite.join("\n") + "\n"),
//     ]);
//   } catch (err) {
//     console.log(err);
//   }
// };
// start();
// console.log("Will I run first?");
// getText('./content/first.txt').then(info => console.log(info)).catch(err=>console.log(err))

// const customEmitter = new EventEmitter()
// customEmitter.on('response', (user, id)=>{
//   console.log(`data received by the user ${user} with id: ${id}`)
//   console.log('another logic here')
// })

// customEmitter.emit('response', 'Peter', 9165)

// server = http.createServer()

// server.on('request', (req, res)=>{
//   res.end("Welcome to this page")
// })

// server.listen(5000)

// const stream = fs.createReadStream('../content/seventh.txt', {highWaterMark: 102400, encoding: 'utf-8'})

// stream.on('data', (result)=>{
//     console.log(result)
// })
// stream.on('error', (err)=>{
//     console.log(err)
// })

// http.createServer(function (req, res) {
    // const text1 = fs.readFileSync('./content/seventh.txt', 'utf-8')
    // const text2 = fs.readFileSync('./content/seventh.txt', 'utf-8')
    // const text3 = fs.readFileSync('./content/seventh.txt', 'utf-8')
    // const text = text1+text2+text3;
    // res.end(text)
//     const fileStream = fs.createReadStream('./content/seventh.txt', 'utf-8');
//     fileStream.on('open', ()=>{
//         fileStream.pipe(res)
//     })
//     fileStream.on('error', (err)=>{
//         res.end(err)
//     })
// }).listen(5000)