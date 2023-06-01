const navIcon = document.querySelector('.nav-icon');
const showDialog = document.querySelector('.show-dialog');
const showDiv = () => {
    showDialog.style.display = "flex";
    // // showDialog.style.flexDirection = "column";
    // // showDialog.style.justifyContent = "space-around";
    // showDialog.style.marginTop = "-1.5rem";
    // showDialog.style.alineItem = "space-between";
    // showDialog.style.backgroundColor = "red";
}

navIcon.addEventListener('click', showDiv);