//Creates an array list for all <p>
let pTags = document.getElementsByTagName('p');
//Iterate through pTags list, note: Bubbling = false
for(let i = 0; i < pTags.length; i++){
    pTags[i].addEventListener('mouseover', function(){
        this.style.backgroundColor='yellow';
    }, false);
    pTags[i].addEventListener('mouseout', function(){
        this.style.backgroundColor='transparent';
    }, false);
}

//Creates an array list for all <input>
let inputTags = document.getElementsByTagName('input');
//Iterate through pTags list, note: Bubbling = false
for(let i = 0; i < inputTags.length; i++){
    inputTags[i].addEventListener('mouseover', function(){
        this.style.backgroundColor='yellow';
    }, false);
    inputTags[i].addEventListener('mouseout', function(){
        this.style.backgroundColor='transparent';
    }, false);
}

//Function linked to enterdata.html
function validateForm(){
    let empName = document.forms["frmCollectWeights"]["empName"];
    let empWeight = document.forms["frmCollectWeights"]["empWeight"];
    if (empName.value == "") {
        document.getElementById("emptyName").innerHTML="Name cannot be ";
        empName.focus();
        return false;
    }
    return true;
}

//Instantiate global variables
let xHTTP = new XMLHttpRequest();
let file = "json.txt"

function getRecords(){
    fetch(file)
    .then(function(response){
        return(response.json());
    }.then(function(data){
        console.log(data);
    }))
}

//
function getRecords(){
    console.log("Starting getRecords()");
    xHTTP.onreadystatechange = function(){
        if(xHTTP.status == 200 && xHTTP.readyState == 4){
            console.log(xHTTP.responseText);
            console.log(JSON.parse(xHTTP.responseText))
        }
    }
    xHTTP.open("GET", file, false);
    xHTTP.send(null);
}

//
function displayData(dataArray){
    let htmlOut = "";
    for(let i=0; i<dataArray.length; i++){
        htmlOut+=dataArray[i].empName+" weighed" + dataArray[i].empWeight + " kg" + " BREAK TAG";
    }
    document.getElementById("records").innerHTML = htmlOut;
}