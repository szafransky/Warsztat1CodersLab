let quantityInput = document.querySelector("input[name='quantity']");
let ordersInput = document.querySelector("input[name='orders-number']")
let dropDownListEl = document.querySelector("select");
let checkmarkAccountingEl = document.querySelector(".accounting input[type='checkbox']");
let checkmarkRentalEl = document.querySelector(".rental input[type='checkbox']");

console.log(quantityInput);
console.log(ordersInput);
console.log(dropDownListEl);
console.log(checkmarkAccountingEl);
console.log(checkmarkRentalEl);

let counterInput1 = 0;
let counterInput2 = 0;

quantityInput.addEventListener("change", function() {
    let quantityValueResult = document.createElement("div");
    console.log(quantityValueResult);
    
    let reslutQuantity = document.querySelector(".calc-result");
    
    if(quantityInput.value !== null && counterInput1 == 0){
        console.log(quantityInput.value);
        quantityValueResult.className = "quantityClass";
        quantityValueResult.innerText = quantityInput.value;
        reslutQuantity.appendChild(quantityValueResult);
        counterInput1++;

    }else{
        let toDelete = document.querySelector(".quantityClass");
        console.log(toDelete.parentNode);
        console.log("deleted");
        toDelete.parentNode.removeChild(toDelete);
        quantityValueResult.innerText = quantityInput.value;
        quantityValueResult.className = "quantityClass";
        reslutQuantity.appendChild(quantityValueResult);
    }
})

ordersInput.addEventListener("change", function() {
    let ordersValueResult = document.createElement("div");
    console.log(ordersValueResult);
    let reslutOrders = document.querySelector(".calc-result");
    
    

    if(ordersInput.value !== null && counterInput2 == 0){
        console.log(ordersInput.value);
        ordersValueResult.className = "ordersClass";
        ordersValueResult.innerText = ordersInput.value;
        reslutOrders.appendChild(ordersValueResult);
        counterInput2++;

    }else{
        let toDelete = document.querySelector(".ordersClass");
        console.log(toDelete.parentNode);
        console.log("deleted");
        toDelete.parentNode.removeChild(toDelete);
        ordersValueResult.innerText = ordersInput.value;
        ordersValueResult.className = "ordersClass";
        reslutOrders.appendChild(ordersValueResult);
    }

    reslutOrders.appendChild(ordersValueResult);
})

let counter = 0;
dropDownListEl.addEventListener("change", function() {
    
  
    let dropDownListResult = document.createElement("div");
    console.log(dropDownListResult);
    let reslutDropDown = document.querySelector(".calc-result");
    
    if(dropDownListEl.selectedIndex > 0 && counter === 0){
        counter++;
       console.log(counter);
        dropDownListResult.className = "dropDownList";
        dropDownListResult.innerText = dropDownListEl.value;
        console.log(dropDownListEl.selectedIndex);
        reslutDropDown.appendChild(dropDownListResult);
        
    } else {
        
        let toDelete = document.querySelector(".dropDownList");
        console.log(toDelete.parentNode);
        console.log("deleted");
        toDelete.parentNode.removeChild(toDelete);
        dropDownListResult.className = "dropDownList";
        dropDownListResult.innerText = dropDownListEl.value;
        console.log(dropDownListEl.selectedIndex);
        reslutDropDown.appendChild(dropDownListResult);
    }
   
})





// checkmarkAccountingEl.addEventListener("change", function() {

//     let checkmarkAccountingResult;
//     let reslutCheckMark = document.querySelector(".calc-result");

//     if(this.checked) {
//         checkmarkAccountingResult = document.createElement("div");
        
//         checkmarkAccountingResult.className = "newClassList";
//         checkmarkAccountingResult.innerText = "test";
    
//         reslutCheckMark.appendChild(checkmarkAccountingResult);
//     } else {
//         let toDelete = document.querySelector(".newClassList");
//         console.log(toDelete.parentNode);
//         toDelete.parentNode.removeChild(toDelete);
//     }

   
// })

let addOrDelete = function() {
    let elToCreate;
    let elToPutCreate= document.querySelector(".calc-result");

    if(this.checked) {
        elToCreate = document.createElement("div");
        
        elToCreate.className = "newClassList";
        elToCreate.innerText = "test";
    
        elToPutCreate.appendChild(elToCreate);
    } else {
        let toDelete = document.querySelector(".newClassList");
        console.log(toDelete.parentNode);
        toDelete.parentNode.removeChild(toDelete);
    }

}

let addOrDeleteForDropDown = function() {
    let elToCreate;
    let elToPutCreate= document.querySelector(".calc-result");

    if(this.selectedIndex < 0) {
        elToCreate = document.createElement("div");
        
        elToCreate.className = "newClassList";
        elToCreate.innerText = "test";
    
        elToPutCreate.appendChild(elToCreate);
    } else {
        let toDelete = document.querySelector(".newClassList");
        console.log(toDelete.parentNode);
        toDelete.parentNode.removeChild(toDelete);
    }

}

// dropDownListEl.addEventListener("change", addOrDeleteForDropDown);
checkmarkRentalEl.addEventListener("change", addOrDelete);
checkmarkAccountingEl.addEventListener("change", addOrDelete);