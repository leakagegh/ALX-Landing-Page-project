// get button element - Get started
let getStartedEl = document.getElementById("get-started")

//function to redirect to the deployed project to a new page
function deployedProject() {
    window.open("https://leakagegh.github.io/ALX-Landing-Page-project/", "_blank")
}

getStartedEl.addEventListener("click", deployedProject)
