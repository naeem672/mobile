function getprocess(){
    let button = document.getElementById("button")
    let rex = document.getElementById("rex")
    button.classList.toggle("active")
    rex.classList.toggle("show")
}


let myitems = document.querySelectorAll(".remote")
myitems.forEach((element, index) => {
element.addEventListener('click', function(){
const content = element.innerHTML;
document.getElementById("popup-content").innerHTML = content;
document.getElementById("popup").classList.add("apply");
});
});

function getbutton(){
    let container = document.getElementById("popup")
    container.classList.remove("apply")
}



let myname = document.querySelectorAll(".now");
let myitem = document.querySelectorAll(".tabs")
myname.forEach((item,index) =>{
    item.addEventListener("click", function(){
        myitem.forEach(img => img.classList.remove("active"))
        myitem[index].classList.add("active")
        myname.forEach(call => call.classList.remove("active"))
        myname[index].classList.add("active")
    })
})
