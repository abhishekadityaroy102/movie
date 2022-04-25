// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let wallet=JSON.parse(localStorage.getItem("amount"));
console.log(wallet);
document.getElementById("wallet").innerText=wallet;
// let url=`https://www.omdbapi.com/?apikey=7ebdf12a&s=${query}`;
let movies_div=document.getElementById("movies");
let id;
async function searchmovies(){
    try{
        const query=document.getElementById("search").value;
        const res=await fetch(`https://www.omdbapi.com/?apikey=7ebdf12a&s=${query}`);
        const data=await res.json();
        // console.log(data)
        const movies=data.Search;
        return movies;

    }
    catch(err){
        console.log(err)
    }
}
function appenddata(data){
    movies_div.innerHTML=null;
    data.forEach(function(el){
    let poster=document.createElement("img");
    let name=document.createElement("h2");
    let btn=document.createElement("button");
    poster.src=el.Poster;
    name.innerText=el.Title;
    btn.innerText="Book Show";
    btn.addEventListener("click",function(){
        addmovie(el)
    })
    let box=document.createElement("div");
    box.append(poster,name,btn)
    movies_div.append(box)
    
    })
}
async function main(){
    let data=await searchmovies();
    if(data===undefined){
        return false;
    }
    appenddata(data)

}
function debounce(func,delay){
    if(id){
        clearTimeout(id);
    }
    id=setTimeout(function(){

    func()
        
    },delay);
}
function addmovie(el){
    localStorage.setItem("moviesdata",JSON.stringify(el));
    window.location.href="checkout.html";
}