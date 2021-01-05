
let seconde= document.getElementById("seconde"),
first = document.getElementById("first"),
first_div =document.getElementById("first-div"),
seconded_div = document.getElementById("seconde-div")

seconde.addEventListener("click",function(){
this.classList.add("active")
first.classList.remove("active")
if(seconde.getAttribute("class")=="active"){
    first_div.style.display = "none"
    seconded_div.style.display = "block"
}
})

first.addEventListener("click",function(){
this.classList.add("active")
seconde.classList.remove("active")
if(first.getAttribute("class")=="active"){
    seconded_div.style.display = "none"
    first_div.style.display = "block"
}
})
