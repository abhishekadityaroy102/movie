// Store the wallet amount to your local storage with key "amount"
let fix=document.getElementById("wallet");

function addwallet(){
   let input=document.getElementById("amount").value;
   fix.innertext=fix+Number(input)
   localStorage.setItem("amount",JSON.stringify(fix))
}
