function buildUsersForm(currentId) {
    formContent = document.getElementsByClassName("form-content");

    formContent[0].innerHTML =
        "<h2>User Form</h2> " +
        "<p><label for='username' class='floatLabel'>Username</label><input id='username' name='username' type='text'>" +
        "<span>Enter a username</span></p> " +
        "<p><label for='password' class='floatLabel'>Password</label><input id='password' name='password' type='password'> " +
        "<span>Enter a password</span></p> " +
        "<p><label for='name' class='floatLabel'>Name</label><input id='name' name='name' type='text'> " +
        "<span>Enter a name</span></p> " +
        "<p><label for='lastname' class='floatLabel'>Last Name</label><input id='lastname' name='lastname' type='text'> " +
        "<span>Enter a last name</span></p> " +
        "<p><input class='input-submit' type='submit' value='Save' id='submit'></p>";


    const inputUsername = document.getElementById("username");
    const inputPassword = document.getElementById("password");
    const inputName = document.getElementById("name");
    const inputLastname = document.getElementById("lastname");

    if (currentId) {
        const recordEdited = arrayUsers.find(element => element.id == currentId);
        inputUsername.value = recordEdited.username;
        inputPassword.value = recordEdited.password;
        inputName.value = recordEdited.name;
        inputLastname.value = recordEdited.lastname;
    }

    var $username = $("#username");
    $username.next().hide();
    var $password = $("#password");
    $password.next().hide();
    var $name = $("#name");
    $name.next().hide();
    var $lastname = $("#lastname");
    $lastname.next().hide();
    //$username.next().show();
    //$("#submit").prop("disabled", true);
    //$("#submit").prop("disabled", false);

    const inputSubmit = document.getElementsByClassName("input-submit");
    inputSubmit[0].addEventListener("click", () => {
        const username = inputUsername.value;
        const password = inputPassword.value;
        const name = inputName.value;
        const lastname = inputLastname.value;
        const newUser = { id: arrayUsers.length + 1, username, password, name, lastname };
        if (currentId) {
            const editUser = { ...newUser, id: currentId };
            for (let i = 0; i < arrayUsers.length; i++) {
                if (arrayUsers[i].id == currentId) {
                    arrayUsers[i] = editUser;
                }
            }
        } else {
            arrayUsers.push(newUser);
        }
        alert("record was saved");
        navigateUsersForm();
    });
}