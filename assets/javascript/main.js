const burger = document.getElementById("burger");
const menu = document.getElementById("menu__custom");
function tradeIcon(element) {
    console.log(burger.getAttribute("class"))
    
    if (burger.getAttribute("class") === "fa fa-bars") {
        burger.removeAttribute("class");
        burger.setAttribute("class", "fa fa-times")
        menu.style.display = 'block';
    } else {
        burger.removeAttribute("class");
        burger.setAttribute("class", "fa fa-bars")
        menu.style.display = 'none';
    }
}