const nasim = {
    firstName : "Nasim",
    lastName : "Reza",
    age : 28,
    nationality : "Bangladeshi",
    location : "Berlin, Germany"
};
console.log(nasim);

nasim.age=30;


// Angela's exercise

let onlShop ={

    productNum: 2344354,
    price: 5,
    currency: "EUR",
    total: function (quantity){
    let result = this.price * quantity;
    return result
    }
    
    }
    
    console.log(onlShop);
    console.log(onlShop.total(3)); 

    // E2

    cityFact = {
        cityName: "Dhaka",
        population: "4,140,526",
        continent: "Asia",

        cityDetails: function (){
       return this.cityName + ' has a population of ' + this.population + ' and is located on ' + this.continent
        }  
      }
      console.log(cityFact.cityDetails());
      
// to get random number

let names = [
  'Adrean',
  'Murad',
  'Henrik',
  'Ronny',
  'Darren',
  'Ashley',
  'Nasim',
  'Monika',
  'Latifah',
  'Melanie',
  'Ivo',
  'Ruslan',
  'Brain',
  'Hallie',
  'Eleni',
  'Angela',
  'Omer',
  'Matthias'
  ]
  
  
  let randomNumer = Math.floor(Math.random() * 19)
  
  function randomizer(randomN) {
  return `${names[randomN]} has been randomly selected to do the live coding!\nLet\'s go!`
  }
  
  console.log(randomizer(randomNumer)) 