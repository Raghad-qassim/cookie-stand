
'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
function random(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}


//shop1

const seattle = {
  locationName:'Seattle',
  minhourlycustomers : 23,
  maxhourlycustomers:65,
  avgCookies:6.3,
  customersEachHour:[],
  cookiesEachHour:[],
  total: 0,

  // claculate customers per hour
    calcCustomersEachHour:function(){
    for(let i=0;i<hours.length;i++){
      this.customersEachHour.push(random(this. minhourlycustomers,this. maxhourlycustomers));
    }
  },
// claculate cookies per hour
calcCookiesEachHour:function(){
  for(let i=0;i<hours.length;i++){
    
    this.cookiesEachHour.push(Math.floor( this.customersEachHour[i]*this.avgCookies));

    this.total+=this.cookiesEachHour[i]
  }

},
render:function(){
  // get the parent element by id:
  let parent= document.getElementById('parent');
  console.log(parent);
  
  let shopName = document.createElement('h3');
  
  parent.appendChild(shopName);
  
  // give text content
  shopName.textContent = this.locationName;
  
  // created an element 
  let unorderedList=document.createElement('ul');
  // append element to parent
  parent.appendChild(unorderedList);
  for(let i =0;i<hours.length;i++){
    // create li
    let listItem=document.createElement('li');
    // append li
    unorderedList.appendChild(listItem);
    // give text content
    listItem.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`


  }

   // create total elemnt:
   let totalItem = document.createElement('li');

   unorderedList.appendChild(totalItem);

   totalItem.textContent=`total: ${this.total} cookies`;

  
}


}


console.log(seattle);
seattle.calcCustomersEachHour();
seattle.calcCookiesEachHour();
seattle.render();

//shop2

const Tokyo = {
  locationName:'Tokyo',
  minhourlycustomers :3,
  maxhourlycustomers:24,
  avgCookies:1.2,
  customersEachHour:[],
  cookiesEachHour:[],
  total: 0,

  // claculate customers per hour
    calcCustomersEachHour:function(){
    for(let i=0;i<hours.length;i++){
      this.customersEachHour.push(random(this. minhourlycustomers,this. maxhourlycustomers));
    }
  },
// claculate cookies per hour
calcCookiesEachHour:function(){
  for(let i=0;i<hours.length;i++){
    
    this.cookiesEachHour.push(Math.floor( this.customersEachHour[i]*this.avgCookies));

    this.total+=this.cookiesEachHour[i]
  }

},
render:function(){
  // get the parent element by id:
  let parent= document.getElementById('parent');
  console.log(parent);
  
  let shopName = document.createElement('h3');
  
  parent.appendChild(shopName);
  
  // give text content
  shopName.textContent = this.locationName;
  
  // created an element 
  let unorderedList=document.createElement('ul');
  // append element to parent
  parent.appendChild(unorderedList);
  for(let i =0;i<hours.length;i++){
    // create li
    let listItem=document.createElement('li');
    // append li
    unorderedList.appendChild(listItem);
    // give text content
    listItem.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`


  }

   // create total elemnt:
   let totalItem = document.createElement('li');

   unorderedList.appendChild(totalItem);

   totalItem.textContent=`total: ${this.total} cookies`;

  
}


}


console.log(Tokyo);
Tokyo.calcCustomersEachHour();
Tokyo.calcCookiesEachHour();
Tokyo.render();

//shop3

const Dubai = {
  locationName:'Dubai',
  minhourlycustomers :11,
  maxhourlycustomers:38,
  avgCookies:3.7,
  customersEachHour:[],
  cookiesEachHour:[],
  total: 0,

  // claculate customers per hour
    calcCustomersEachHour:function(){
    for(let i=0;i<hours.length;i++){
      this.customersEachHour.push(random(this. minhourlycustomers,this. maxhourlycustomers));
    }
  },
// claculate cookies per hour
calcCookiesEachHour:function(){
  for(let i=0;i<hours.length;i++){
    
    this.cookiesEachHour.push(Math.floor( this.customersEachHour[i]*this.avgCookies));

    this.total+=this.cookiesEachHour[i]
  }

},
render:function(){
  // get the parent element by id:
  let parent= document.getElementById('parent');
  console.log(parent);
  
  let shopName = document.createElement('h3');
  
  parent.appendChild(shopName);
  
  // give text content
  shopName.textContent = this.locationName;
  
  // created an element 
  let unorderedList=document.createElement('ul');
  // append element to parent
  parent.appendChild(unorderedList);
  for(let i =0;i<hours.length;i++){
    // create li
    let listItem=document.createElement('li');
    // append li
    unorderedList.appendChild(listItem);
    // give text content
    listItem.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`


  }

   // create total elemnt:
   let totalItem = document.createElement('li');

   unorderedList.appendChild(totalItem);

   totalItem.textContent=`total: ${this.total} cookies`;

  
}


}


console.log(Dubai);
Dubai.calcCustomersEachHour();
Dubai.calcCookiesEachHour();
Dubai.render();
//shop4

const Paris = {
  locationName:'Paris',
  minhourlycustomers :20,
  maxhourlycustomers:38,
  avgCookies:2.3,
  customersEachHour:[],
  cookiesEachHour:[],
  total: 0,

  // claculate customers per hour
    calcCustomersEachHour:function(){
    for(let i=0;i<hours.length;i++){
      this.customersEachHour.push(random(this. minhourlycustomers,this. maxhourlycustomers));
    }
  },
// claculate cookies per hour
calcCookiesEachHour:function(){
  for(let i=0;i<hours.length;i++){
    
    this.cookiesEachHour.push(Math.floor( this.customersEachHour[i]*this.avgCookies));

    this.total+=this.cookiesEachHour[i]
  }

},
render:function(){
  // get the parent element by id:
  let parent= document.getElementById('parent');
  console.log(parent);
  
  let shopName = document.createElement('h3');
  
  parent.appendChild(shopName);
  
  // give text content
  shopName.textContent = this.locationName;
  
  // created an element 
  let unorderedList=document.createElement('ul');
  // append element to parent
  parent.appendChild(unorderedList);
  for(let i =0;i<hours.length;i++){
    // create li
    let listItem=document.createElement('li');
    // append li
    unorderedList.appendChild(listItem);
    // give text content
    listItem.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`


  }

   // create total elemnt:
   let totalItem = document.createElement('li');

   unorderedList.appendChild(totalItem);

   totalItem.textContent=`total: ${this.total} cookies`;

  
}


}


console.log(Paris);
Paris.calcCustomersEachHour();
Paris.calcCookiesEachHour();
Paris.render();

//shop5

const Lima = {
  locationName:'Lima',
  minhourlycustomers :2,
  maxhourlycustomers:	16,
  avgCookies:4.6,
  customersEachHour:[],
  cookiesEachHour:[],
  total: 0,

  // claculate customers per hour
    calcCustomersEachHour:function(){
    for(let i=0;i<hours.length;i++){
      this.customersEachHour.push(random(this. minhourlycustomers,this. maxhourlycustomers));
    }
  },
// claculate cookies per hour
calcCookiesEachHour:function(){
  for(let i=0;i<hours.length;i++){
    
    this.cookiesEachHour.push(Math.floor( this.customersEachHour[i]*this.avgCookies));

    this.total+=this.cookiesEachHour[i]
  }

},
render:function(){
  // get the parent element by id:
  let parent= document.getElementById('parent');
  console.log(parent);
  
  let shopName = document.createElement('h3');
  
  parent.appendChild(shopName);
  
  // give text content
  shopName.textContent = this.locationName;
  
  // created an element 
  let unorderedList=document.createElement('ul');
  // append element to parent
  parent.appendChild(unorderedList);
  for(let i =0;i<hours.length;i++){
    // create li
    let listItem=document.createElement('li');
    // append li
    unorderedList.appendChild(listItem);
    // give text content
    listItem.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`


  }

   // create total elemnt:
   let totalItem = document.createElement('li');

   unorderedList.appendChild(totalItem);

   totalItem.textContent=`total: ${this.total} cookies`;

  
}


}


console.log(Lima);
Lima.calcCustomersEachHour();
Lima.calcCookiesEachHour();
Lima.render();









