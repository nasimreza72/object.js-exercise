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
      
    // parisFacts({
    //     name: "Tokyo",
    //     population: "13,929,286",
    //     continent: "Asia"
    //   }) ➞ "Tokyo has a population of 13,929,286 and is situated in Asia"