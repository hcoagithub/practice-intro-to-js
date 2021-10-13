let guests = prompt('How many people are coming to your wedding?');


function getPrice(guests){
  
    guests=parseInt(guests);

    let cost = 0;

    if (guests < 51) {cost =4000}
    
    
    else if (guests < 101){
    cost =10000;}
    
    else if (guests < 201 ){
    cost = 15000;}
    
    else {cost = 20000;}
    

   
    
    // Your code here
  


    return cost;

    
}

let price = getPrice(guests);

console.log('Your wedding will cost '+price+' dollars');
