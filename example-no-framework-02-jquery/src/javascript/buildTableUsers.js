function buildUsersTable() {
    const table = document.getElementsByClassName("table");
    let rows = "";
    console.log("arrayUsers length: " + arrayUsers.length);
    console.log("arrayUsers: " + arrayUsers)
    arrayUsers.forEach(element =>
        rows = rows + "<div class='table-row'>" +
        "<div class='table-data'>" + element.id + "</div>" +
        "<div class='table-data'>" + element.username + "</div>" +
        "<div class='table-data'>" + element.password + "</div>" +
        "<div class='table-data'>" + element.name + "</div>" +
        "<div class='table-data'>" + element.lastname + "</div>" +
        "<div class='table-data'><button class='edit-button' type='button'>Edit</button> </div>" +
        "<div class='table-data'><button class='delete-button' type='button'>Delete</button> </div>" +
        "</div>"
    );
    table[0].innerHTML =
        "<div class='table-header'>" +
        "<div class='header__item'><a id='name' class='filter__link' href='#'>Id</a></div>" +
        "<div class='header__item'><a id='name' class='filter__link' href='#'>Username</a></div>" +
        " <div class='header__item'><a id='wins' class='filter__link filter__link--number' href='#'>Password</a></div>" +
        "<div class='header__item'><a id='draws' class='filter__link filter__link--number' href='#'>Name</a></div>" +
        "<div class='header__item'><a id='losses' class='filter__link filter__link--number' href='#'>Last Name</a></div>" +
        "<div class='header__item'><a id='losses' class='filter__link filter__link--number' href='#'>Edit</a></div>" +
        "<div class='header__item'><a id='losses' class='filter__link filter__link--number' href='#'>Delete</a></div>" +
        "</div>" +
        "<div class='table-content'>" +
        rows +
        "</div >";

    // Add event listener to Delete buttons
    const arrayInputDelete = document.getElementsByClassName("delete-button");
    for (let i = 0; i < arrayInputDelete.length; i++) {
        arrayInputDelete[i].addEventListener("click", (event) => {
            let currentId = event.path[2].childNodes[0].outerText;
            arrayUsers = arrayUsers.filter(record => record.id != currentId);
            alert("record was deleted");
            navigateUsersTable();
        });
    }

    // Add event listener to Edit buttons
    const arrayInputEdit = document.getElementsByClassName("edit-button");
    for (let i = 0; i < arrayInputEdit.length; i++) {
        arrayInputEdit[i].addEventListener("click", (event) => {
            let currentId = event.path[2].childNodes[0].outerText;
            navigateUsersForm(currentId);
        });
    }
}