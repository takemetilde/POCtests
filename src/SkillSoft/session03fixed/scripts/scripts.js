//let xHTTP = new XMLHttpRequest();
let url = "http://localhost:8000/getweights";
function getRecords(){
	fetch(url)
	.then(function(response){
		return (response.json());
	}).then(function(data){
		console.log(data);
		displayData(data);
	});
}
//
function displayData(dataArray){
	let htmlOut = "";
	for(let i=0; i<dataArray.length; i++){
		htmlOut+=dataArray[i].empName + " weighed " + dataArray[i].empWeight + " Kgs<br />";
	}
	document.getElementById("records").innerHTML=htmlOut;
}
//
let pTags = document.getElementsByTagName('p'); 
for(let i = 0; i < pTags.length; i++) { 
	pTags[i].addEventListener('mouseover', function(){ 
		this.style.backgroundColor='lightyellow';}, false); 
	//
	pTags[i].addEventListener('mouseout', function(){ 
		this.style.backgroundColor='transparent';}, false); 
}			
//
let inputTags = document.getElementsByTagName('input'); 
for(let i = 0; i < inputTags.length; i++) { 
	inputTags[i].addEventListener('focus', function(){ 
		this.style.backgroundColor='lightyellow';}, false); 
	//
	inputTags[i].addEventListener('blur', function(){ 
		this.style.backgroundColor='transparent';}, false); 
}
//
function validateForm(){  
    document.getElementById("emptyName").innerHTML=""; 
    document.getElementById("emptyWeight").innerHTML=""; 
    let empName = document.forms["frmCollectWeights"]["empName"];  
    let empWeight = document.forms["frmCollectWeights"]["empWeight"];  
    let badName = /^([^0-9]*)$/; 
// 
    if (empName.value == "") {   
        document.getElementById("emptyName").innerHTML="Name cannot be empty!";  
        empName.focus();   
        return false;   
    }   
// 
    if (empName.value.length < 3 && empName.value != "") {   
        document.getElementById("emptyName").innerHTML="Name too short!";  
        empName.focus();   
        return false;   
    } 
// 
     if (!empName.value.match(badName)) {   
        document.getElementById("emptyName").innerHTML="Name cannot contain numbers!";  
        empName.focus();   
        return false;   
    } 
// 
    if (empWeight.value == "") {   
        document.getElementById("emptyWeight").innerHTML="Weight cannot be empty!";  
        empWeight.focus();   
        return false;   
    }   
//
    if (isNaN(empWeight.value)) {   
        document.getElementById("emptyWeight").innerHTML="Weight must be a number";  
        empWeight.focus();   
        return false;   
    }  
//
    return true;  
 }