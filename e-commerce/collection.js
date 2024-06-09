var productContainer = document.getElementById("products")
var search = document.getElementById("search")
var productlist = productContainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredValue = event.target.value.toUpperCase()

    for(c=0;c<productlist.length;c=c+1){
        var productname = productlist[c].querySelector("p").textContent

        if(productname.toUpperCase().indexOf(enteredValue)<0){
            productlist[c].style.display="none"
        }
        else{
            productlist[c].style.display="block"
        }
    }
})