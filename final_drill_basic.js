function getReceipt() {
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName('size');
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        }
    }
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize + " = $" + sizeTotal + ".00"); 
    console.log("size text1: " + text1); 
    console.log("subtotal: $" + runningTotal + ".00"); 
    getMeat(runningTotal,text1);
};

function getMeat(runningTotal, text1) {
    var meatTotal = 0;
    var selectedMeat = [];
    var meatArray = document.getElementsByClassName('meats');
    for (var j = 0; j < meatArray.length; j++) {
        if (meatArray[j].checked) {
            selectedMeat.push(meatArray[j].value);
            console.log("selected meat item: (" + meatArray[j].value + ")");
            text1 = text1 + meatArray[j].value + "<br>";
        }
    }
    var meatCount = selectedMeat.length;
    if (meatCount > 1) {
        meatTotal = (meatCount - 1);
    } else {
        meatTotal = 0;
    }
    runningTotal = (runningTotal + meatTotal);
    console.log("total selected meat items: " + meatCount);
    console.log(meatCount + " meat - 1 free meat = " + "$" + meatTotal + ".00");
    console.log("meat text1: " + text1);
    console.log("Purchase Total: " + "$" + runningTotal + ".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
    getVeg(runningTotal, text1);
};

function getVeg(runningTotal, text1) {
    var vegTotal = 0;
    var selectedVeg = [];
    var vegArray = document.getElementsByClassName('veg');
    for (var a = 0; a < vegArray.length; a++) {
        if (vegArray[a].checked) {
            selectedVeg.push(vegArray[a].value);
            console.log("selected veggie item: (" + vegArray[a].value + ")");
            text1 = text1 + vegArray[a].value + "<br>"
        }
    }
    vegTotal = selectedVeg.length;
    runningTotal = (runningTotal + vegTotal);
    console.log("total selected veggie items: " + vegTotal);
    console.log(vegTotal + " veggies " + "= " + "$" + vegTotal + ".00"); 
    console.log("veggie text1: " + text1);
    console.log("Purchase Total: " + "$" + runningTotal + ".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total <strong>$" + runningTotal + ".00" + "</strong></h3>";
    getCrust(runningTotal, text1);
};

function getCrust(runningTotal, text1) {
    var crustPrice = 0;
    var crustArray = document.getElementsByClassName('crust');
    for (var b = 0; b < crustArray.length; b++) {
        if (crustArray[b].checked) {
            var selectedCrust = crustArray[b].value;
            text1 = text1 + selectedCrust + "<br>";
        }
    }
    if (selectedCrust === "Cheese Stuffed") {
        crustPrice = 3;
    } else {
        crustPrice = 0;
    }
    runningTotal = (runningTotal + crustPrice);
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total <strong>$" + runningTotal + ".00" + "</strong></h3>"
    getCheese(runningTotal, text1);
};

function getCheese(runningTotal, text1) {
    var cheesePrice = 0;
    var cheeseArray = document.getElementsByClassName('cheese');
    for (var c = 0; c < cheeseArray.length; c++) {
        if (cheeseArray[c].checked) {
            var selectedCheese = cheeseArray[c].value;
            text1 = text1 + selectedCheese + "<br>";
        }
    }
    if (selectedCheese === "Extra") {
        cheesePrice = 3;
    } else {
        cheesePrice = 0;
    }
    runningTotal = (runningTotal + cheesePrice);
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total <strong>$" + runningTotal + ".00" + "</strong></h3>"
    getSauce(text1);
};

function getSauce(text1) {
    var sauceArray = document.getElementsByClassName('sauce');
    for (var d = 0; d < sauceArray.length; d++) {
        if (sauceArray[d].checked) {
            var selectedSauce =  sauceArray[d].value;
            text1 = text1 + selectedSauce + "</br>";
        }
    }
    document.getElementById("showText").innerHTML = text1;
};



