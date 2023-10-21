








// responsive 

const burger = () =>{
    const burger = document.querySelector("#burger")
    const cross = document.querySelector("#cross")
    const menu_text = document.querySelector("#home_menu")
    const container_burger_menu = document.querySelector(".hamburger_container")

    cross.style.opacity = "1"
    burger.style.opacity = "0"
    burger.style.zIndex = "-1"
    container_burger_menu.style.transform = "translateX(0%)"
    

}

const cross = () =>{
    const burger = document.querySelector("#burger")
    const cross = document.querySelector("#cross")
    const menu_text = document.querySelector("#home_menu")
    const container_burger_menu = document.querySelector(".hamburger_container")

    cross.style.opacity = "0"
    burger.style.opacity = "1"
    burger.style.zIndex = "1"
    container_burger_menu.style.transform = "translateX(100%)"
}

window.addEventListener("scroll", cross);
