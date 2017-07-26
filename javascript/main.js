console.log("main.js");

let cardHolder = document.getElementById("cardDisplay");


createCard.addEventListener("click", function(){
let inputDisplay = document.getElementById("cardInput").value;
let inputCard = `<article class="card"><p>${inputDisplay}</p><button id="delBtn">Delete</button></article>`;
cardHolder.innerHTML += inputCard;

});

function deleteCard(event){
    console.log(event);
    let parDiv = event.target.parentNode;
    if (event.target.id === "delBtn"){
        parDiv.parentNode.removeChild(parDiv);
    }
}

cardHolder.addEventListener("click", deleteCard);
