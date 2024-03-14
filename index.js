function showMenu() {
    const x = document.getElementById("mainMenu");
    const y = document.getElementById("main");
    // console.log(y);
    if (x.style.width === "0px") {
        x.style.width = "60px";
        y.style.marginLeft = "60px";
    } else {
        x.style.width = "0px";
        y.style.marginLeft = "0px";
    }
}

function showHistory() {
    const y = document.getElementById("converstation-history");
    if (y.style.width === "0px") {
        y.style.width = "200px";
    } else {
        y.style.width = "0px";
    }
}



const mainMenuItemArr = document.querySelectorAll(".grid_menu_items");
const ticketMenuItemArr = document.querySelectorAll(".ticket_header_menu_item");
const ticketListArr = document.querySelectorAll('.ticket_list_item');
const mainContentArr = document.querySelectorAll('.main-content')


// Переключение табов
mainMenuItemArr.forEach((tab, index) => {
    tab.onclick = () => {
        changeTab(index)
    };

});

function changeTab(index) {
    setActiveaClass(mainMenuItemArr, index);
    setActiveaClass(mainContentArr, index);
}

function setActiveaClass(arr, index) {
    for (let el of arr) {
        el.classList.remove('active');
    }
    arr[index].classList.add('active');
}




//  Переключатель состояния актив.
 activeSwitcher(ticketMenuItemArr);
 activeSwitcher(ticketListArr);

function delActive(arr) {
    for (let arrItem of arr) {
        arrItem.classList.remove('active');
    }
}

function activeSwitcher(arr) {
    for (let arrItem of arr) {
        arrItem.onclick = function() {
            delActive(arr);
            this.classList.add('active');
        }
    }
}

