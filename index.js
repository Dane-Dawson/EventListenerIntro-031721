const topElement = document.getElementById("top");
const middleElement = document.getElementById("middle");
const bottomElement = document.getElementById("bottom");
const formElement = document.getElementById("test-form");
const bodyElement = document.body;

// bottomElement.addEventListener("click", function(){
//     console.log("I clicked the bottom element!")
// })
// middleElement.addEventListener("click", function(){
//     console.log("I clicked the middle element!")
// })
// topElement.addEventListener("click", function(){
//     console.log("I clicked the top element!")
// })
// bodyElement.addEventListener("click", function(){
//     console.log("I clicked the body element!")
// })

function bottomElementResponse(){
    // bottomElement.innerText = `${Date()}`
    let newH1 = document.createElement('h1')
    newH1.addEventListener("click", (event) => console.log(event.target))
    
    newH1.innerText = `${Date()}`
    bodyElement.append(newH1)
}

bottomElement.addEventListener("click", () => bottomElementResponse());

formElement.addEventListener('submit', (event)=>{
    event.preventDefault()
    createWelcomeBanner(event.target.firstname.value, event.target.lastname.value)
})

function createWelcomeBanner(firstName, lastName){
    let newName = document.createElement('h3')
    newName.innerText = `Welcome to our club ${firstName} ${lastName}!`
    bottomElement.append(newName)
}

// let funArray = [1, 2, 3, 4, 5]
// funArray.forEach(number=>bottomElementResponse())
// bottomElement.addEventListener(eventItsListeningFor, functionInvokedWhenEventhappens)
