function showMenu() {
    const x = document.getElementById("side-menu");
    const y = document.getElementById("content");
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
    if (y.style.width === "200px") {
        y.style.width = "0px";
    } else {
        y.style.width = "200px";
    }
}



const mainMenuItemArr = document.querySelectorAll(".side-menu__item");
const ticketMenuItemArr = document.querySelectorAll(".ticket-section__submenu-item");
const ticketListArr = document.querySelectorAll('.ticket_list_item');
const mainContentArr = document.querySelectorAll('.content__item')


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

