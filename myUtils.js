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
        return `${num} is not a valid parameter`;
      }
    } else {
      return `${array} is not a valid array`;
    }
  };
  
  module.exports = {generateRandom}