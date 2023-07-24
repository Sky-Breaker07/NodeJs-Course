const utils = require("./myUtils");
const data = require("./myData");
const os = require("os");
const path = require("path");
const fsp = require("fs").promises;
const fs = require("fs");
const http = require("http");
const util = require("util");
const EventEmitter = require("events");
const express = require("express");
const { error } = require("console");
const morgan = require("morgan");
const app = express();
const people = require('./express-tutorial/routes/people.js')
const auth = require('./express-tutorial/routes/auth.js')
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

// const { Configuration, OpenAIApi } = require("openai");
// const readlineSync = require("readline-sync");
// require("dotenv").config();

// (async () => {
//   const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
//   });
//   const openai = new OpenAIApi(configuration);

//   const history = [];

//   while (true) {
//     const user_input = readlineSync.question("Your input: ");

//     const messages = [];
//     for (const [input_text, completion_text] of history) {
//       messages.push({ role: "user", content: input_text });
//       messages.push({ role: "assistant", content: completion_text });
//     }

//     messages.push({ role: "user", content: user_input });

//     try {
//       const completion = await openai.createChatCompletion({
//         model: "gpt-3.5-turbo",
//         messages: messages,
//       });

//       const completion_text = completion.data.choices[0].message.content;
//       console.log(completion_text);

//       history.push([user_input, completion_text]);

//       const user_input_again = readlineSync.question(
//         "\nWould you like to continue the conversation? (Y/N)"
//       );
//       if (user_input_again.toUpperCase() === "N") {
//         return;
//       } else if (user_input_again.toUpperCase() !== "Y") {
//         console.log("Invalid input. Please enter 'Y' or 'N'.");
//         return;
//       }
//     } catch (error) {
//       if (error.response) {
//         console.log(error.response.status);
//         console.log(error.response.data);
//       } else {
//         console.log(error.message);
//       }
//     }
//   }
// })();

// const homePage = fs.readFileSync('./express-tutorial/navbar-app/index.html')
// const homeStyle = fs.readFileSync('./express-tutorial/navbar-app/styles.css')
// const homeLogo = fs.readFileSync('./express-tutorial/navbar-app/logo.svg')
// const homeLogic = fs.readFileSync('./express-tutorial/navbar-app/browser-app.js')
// const server = http.createServer((req, res) => {
//   if (req.url === "/" || req.url === "/home") {
//     res.writeHead(200, { "content-type": "text/html" });
//     res.write(homePage);
//     res.end();}
//   else if (req.url === "/styles.css") {
//     res.writeHead(200, { "content-type": "text/css" });
//     res.write(homeStyle);
//     res.end()}
//   else if (req.url === "/logo.svg") {
//     res.writeHead(200, { "content-type": "image/svg+xml" });
//     res.write(homeLogo);
//     res.end()}
//   else if (req.url === "/browser-app.js") {
//     res.writeHead(200, { "content-type": "text/javascript" });
//     res.write(homeLogic);
//     res.end()
//   } else if (req.url === '/about') {
//     res.writeHead(200, { "content-type": "text/html" });
//     res.write('<h1 style="text-decoration: underline">About Page</h1>');
//     res.end();
//   } else {
//     res.writeHead(404, { "content-type": "text/html" });
//     res.write(`<h1 style="text-decoration: underline">Page Not Found</h1><p><a href='/'>Back to Home</a></p>`);
//     res.end();
//   }

// reqJSON = JSON.stringify(req, utils.getCircularReplacer())
// const contentWithParagraphs = `<p>${reqJSON.replace(/\n/g, '</p><p>')}</p>`;

// fs.writeFile('./content/requestobject.json', `${reqJSON}`, (err, result)=>{
//   if(err){{
//     console.log(err)
//   }}
//   console.log('successful!')
//   console.log(result)
// })
// });

// server.listen(5000);
// app.use(express.static('./public'))
// app.get(['/', '/home'], (req, res)=>[
//   res.sendFile(path.resolve(__dirname, './express-tutorial/navbar-app/index.html'))
// ])

// app.get('/about', (req, res)=>[
//   res.status(200).send(`About Page`)
// ])

// app.all('*',(req, res)=>{
//   res.status(404).send(`<h1>Page not found</h1>`)
// })

// app.get('/', (req, res)=>{
//   res.send(`<h1>Home Page</h1><a href="/api/products">Products</a>`)
// })

// app.get('/api/products', (req, res)=>{
//   const newProducts = jsonData.products.map((product)=>{
//     const {id, name, image} = product;
//     return {id,name,image}
//   })
//   res.json(newProducts)
// })

// app.get(`/api/products/:productID`, (req, res)=>{
//   const singleProduct = jsonData.products.find((product)=>
//     product.id === Number(req.params.productID)
//   )
//   if(!singleProduct){
//     return res.status(404).send(`<h1>Product does not exist!</h1> <a href='/api/products'>Back to Products Page</a> <a href='/'>Back to Home Page</a>`)
//   }
//   res.json(singleProduct)
// })

// app.get('/api/v1/query', (req, res)=>{
//   //  console.log(req.query)
//    const {search, limit} = req.query
//    let sortedProducts = [...jsonData.products]
//    if(search) {
//     sortedProducts = sortedProducts.filter((product)=>{
//       return product.name.startsWith(search)
//     })
//    }

//    if(limit) {
//     sortedProducts = sortedProducts.slice(0,Number(limit))
//    }

//    if(sortedProducts.length===0){
//     res.type('.html')
//     res.status(200).send(`<h1>Nothing is found</h1><a href='/api/v1/query'>Return</a>`)
//      return
//    }

//    res.status(200).json(sortedProducts)

// })

// app.use([utils.logger, utils.authorize, morgan('tiny')])

// app.get('/', (req,res)=>{
//   res.send(`<h1>Home</h1>`)
// })
// app.get('/about', (req,res)=>{
//   res.send(`<h1>About</h1>`)
// })
// app.get('/products', (req,res)=>{
//   res.send(`<h1>Products</h1>`)
// })
// app.get('/items', (req,res)=>{
//   res.send(`<h1>Items</h1>`)
// })
app.use(
  [express.static("./express-tutorial/methods-public")],
  express.urlencoded({ extended: false })
);
app.use(express.json());
app.use('/api/people', people)
app.use('/login', auth)

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});

