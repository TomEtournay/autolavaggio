const formswitch = () => {
    const btn_return = document.querySelector(".btn_return")
    const inputs = document.querySelector(".container_textarea_input")
    const submit = document.querySelector(".submit")
    const next = document.querySelector(".next")

    submit.style.display = "block"
    next.style.display = "none"
    btn_return.classList.remove("return")

    inputs.style.transform = "translateX(-50%)";
};

const return_form = () =>{
    const btn_return = document.querySelector(".btn_return")
    const inputs = document.querySelector(".container_textarea_input")
    const submit = document.querySelector(".submit")
    const next = document.querySelector(".next")

    submit.style.display = "none"
    next.style.display = "block"

    btn_return.classList.add("return")

    inputs.style.transform = "translateX(0%)";
}