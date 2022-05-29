// let url=`http://www.omdbapi.com/?s=${movie}&apikey=f69b3aa4`
// these steps taken by us like
// accept the data 

// fetch the data for creating we use separte data function 

// append the data 


// creating another function for fectching the data
let id;
async function sepearteMovie(q){ 

    // for fetching the data we prepare the url 
    // in this q will be calling the function by getting passed in main function 
try{
    let url=`http://www.omdbapi.com/?s=${q}&apikey=f69b3aa4`
    // console.log(url)

    let res= await fetch(url)

    let data= await res.json()

    return data.Search //we have written data.search because data will return array of object and we have to catch the movie data that's why we use data.search 
    // console.log(data)
}catch(err){
console.log(err)
}
    
}

// we have data in console now we have to append it 
let movie_div= document.getElementById("container")
function appendMovies(movies){

    movie_div.innerHTML= null // this will be doing because we have getting all the related search movie data and we want only the search movie so doing null innerhtml will give the empty the movie_div 
    if(movies==undefined){ //in this we have hard core those value in which we have getting the undefined value movies so that if we get undefined value we will reurning false value
        return false          
    }
  movies.forEach(function(elem){  //in this if we have not getting the undefined value than it will show the data in div 
      let p= document.createElement("p")
      p.innerText=elem.Title

      movie_div.append(p)
  })
}

// create a main fun for accept the input
async function main(){
    var querry = document.getElementById("querry").value 
    // console.log(querry)
// call the function by giving variable to that function 
// we will store this function in some vaiable and try to console for getting what we have get 
    let response=sepearteMovie(querry) //who is returning a promise
    // console.log(`response:`, response)  // SearchMovie function returning a promise , async function: no matter what it returns the promise 
     
    let data= await response
    // console.log(data)

    appendMovies(data)
}

// main('a')->setTimeout(main,1000,'a')->id->data
// main('av')->doihave prev timeout id->setTimeout(main,1000,'av')→>id
// main('ave')

function debouncing(func,delay){
if(id){
    clearTimeout(id)
}
    id=setTimeout(function(){
        func()
    },delay)
}