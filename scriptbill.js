document.getElementById("bill form").addEventListener("submit",function(event){




event.preventDefault();
let name=document.getElementById("Name").value ;
let id= Number(document.getElementById("customerId").value) ;
let previous= Number(document.getElementById("Previous").value) ;
let current= Number(document.getElementById("Current").value) ;
let total=current-previous


document.getElementById("Enter").innerHTML=("Customer Name:"+name)
document.getElementById("button").innerHTML=("Customer id:"+id)
document.getElementById("click").innerHTML=("Previous Meter Reading:"+previous)
document.getElementById("fast").innerHTML=("Current Meter Reading:"+current)
document.getElementById("Message").innerHTML="Unit Consumed:"+total+"<br>"

if (total>0&&total<100){
    document.getElementById("untitled").innerHTML=("Total bill:"+total*2)
}else if(total>101&&total<200){
document.getElementById("untitled").innerHTML=("Total bill:"+total*3)
}else if(total>201&&total<300){
document.getElementById("untitled").innerHTML=("Total bill:"+total*5)
}else {
document.getElementById("untitled").innerHTML=("Total bill:"+total*7)

}
if(name==""){
    document.getElementById("Enter").innerHTML=("Please Enter Customer Name")
} if(current<previous){
    document.getElementById("fast").innerHTML=("Invalid Meter Reading")
}if(current||previous<0){
    document.getElementById("Message").innerHTML=("Meter reading cannot be negative")
}
localStorage.setItem("Name",name)
document.getElementById("forml").addEventListener("submit",function(event){
    event.preventDefault()
    let name = localStorage.getItem("Name")
    document.getElementById("displayln").innerHTML = name
})

document.getElementById("formc").addEventListener("submit",function(event){
    event.preventDefault()
    let name = localStorage.removeItem("Name")
    document.getElementById("displayln").innerHTML = ("Removed",name)
})

})
















