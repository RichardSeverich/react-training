function navigateToHomePage() {
    hideTable();
    hideForm();
}

function navigateUsersForm(currentId) {
    hideTable();
    showForm();
    $.getScript('src/javascript/buildFormUsers.js', function () {
        buildUsersForm(currentId);
    });
}

function navigateUsersTable() {
    hideForm();
    showTable();
    $.getScript('src/javascript/buildTableUsers.js', function () {
        buildUsersTable();
    });
}

function hideForm() {
    componentForm = document.getElementsByClassName("container-form");
    componentForm[0].classList.add("hidden");
}

function showForm() {
    componentForm = document.getElementsByClassName("container-form");
    componentForm[0].classList.remove("hidden");
}

function hideTable() {
    componentTable = document.getElementsByClassName("container-table");
    componentTable[0].classList.add("hidden");
}

function showTable() {
    componentTable = document.getElementsByClassName("container-table");
    componentTable[0].classList.remove("hidden");
}

function addListeners() {
    const buttonNavigateHome = document.getElementsByClassName("navigate-home");
    buttonNavigateHome[0].addEventListener("click", navigateToHomePage);

    const buttonNavigateFormUser = document.getElementsByClassName("navigate-form-user");
    buttonNavigateFormUser[0].addEventListener("click", () => navigateUsersForm());

    const buttonNavigateTableUser = document.getElementsByClassName("navigate-table-user");
    buttonNavigateTableUser[0].addEventListener("click", () => navigateUsersTable());
}
