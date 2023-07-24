const generateRandom = (array, num) => {
    if (Array.isArray(array) === true) {
      if (num === 1) {
        let i = Math.floor(Math.random() * array.length);
        return array[i];
      } else if (num >= 1) {
        let arrayList = [];
        for (let j = 0; j < num; j++) {
          let i = Math.floor(Math.random() * array.length);
          arrayList.push(` ${array[i]}`);
        }
        return `arrayList.toString()`;
      } else {
        return `${num} is an invalid parameter`;
      }
    } else {
      return `${array} is not a valid array`;
    }
  };

  function getCircularReplacer() {
    const seen = new WeakSet();
    return (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  }
  
const logger = (req,res,next) => {
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time)
  next()
}

const authorize = (res,req,next)=>{
  console.log('authorize')
  next()
}

  module.exports = {generateRandom, getCircularReplacer, logger, authorize}