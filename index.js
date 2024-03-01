function showMenu() {
    const x = document.getElementById("mainMenu");
    // const y = document.querySelector(".grid_tickets");
    const y = document.getElementById("main");
    if (x.style.width === "0px") {
        x.style.width = "80px";
        y.style.marginLeft = "0px";
    } else {
        x.style.width = "0px";
        y.style.marginLeft = "-80px";
    }
    // const x = document.getElementById("mainMenu");
    // if (x.style.display === "flex") {
    //     x.style.display = "none";
    // } else {
    //     x.style.display = "flex";
    // }
}

const mainMenuItemArr = document.querySelectorAll(".grid_menu_items");

function mainMuneItemActive(event) {
    for (mainMuneItem of mainMenuItemArr) {
        mainMuneItem.classList.remove('grid_menu_items_active');
    }
    event.currentTarget.classList.add('grid_menu_items_active');
}

const ticketMenuItemArr = document.querySelectorAll(".ticket_header_menu_item");

function ticketMuneItemActive(event) {
    for (ticketMuneItem of ticketMenuItemArr) {
        ticketMuneItem.classList.remove('ticket_header_menu_item_active');
    }
    event.currentTarget.classList.add('ticket_header_menu_item_active');
}


const ticketListArr = document.querySelectorAll('.ticket_list_item');

function ticketListItemActiv(event) {
    for (ticketListItem of ticketListArr) {
        ticketListItem.classList.remove('ticket_list_item_active');
    }
    event.currentTarget.classList.add('ticket_list_item_active');
}
