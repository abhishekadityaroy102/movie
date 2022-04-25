// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
var getdata=JSON.parse(localStorage.getItem("moviesdata"));
let movies_div=document.getElementById("movie")
let poster=document.createElement("img");
let name=document.createElement("h2");
let box=document.createElement("div");
poster.src=getdata.Poster;
name.innerText=getdata.Title;
box.append(poster,name);
movies_div.append(box)
var amount=JSON.parse(localStorage.getItem("amount"));
let input=document.getElementById("number_of_seats").value ;
console.log(input)
document.getElementById("wallet").innerText=amount
// if(100*input>amount){
//     alert('insufficient Balance!')
// }

// else{
//     let Balance=document.getElementById("wallet")
//     Balance.innerText=amount-100*input
// }
// var btn=document.getElementById("confirm")
// btn.addEventListener("click",function(){
//     notice(amount,input)
// })
// function notice(amount,input){
//     if(100*Number(input)>Number(amount)){
//         alert("insufficient");
//     }
//     else {
//         let Balance=document.getElementById("wallet");
//         Balance.innerText=amount-100*input;
//         alert("Booking successfull")
//         console.log(Balance.innerText)
//     }
// }
let sum=0
function notice(){
    event.preventDefault()
    // let amount=JSON.parse(localStorage.getItem("amount"))
    sum=sum+document.getElementById("number_of_seats").value;
    if(100*sum>=Number(amount)){
        alert('insufficient Balance!')
    
    }
    else{
        let Balance=document.getElementById("wallet")
      Balance.innerText=amount-100*sum;
      alert("Booking successful!")
    }
}