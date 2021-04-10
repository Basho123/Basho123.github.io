    /* Write a simple register program that will take new user's username and password and save it. Display the usernames of all existing users in a list.
    Users should be stored in array of User objects
    Array need to have one admin user by default when the application is started
    User need to have at least 3 properties: Username, Password and isAdmin
    Write a simple login program that will require user's username and password to be entered. Display a message for the user that is logged in (ex. "Welcome Bob to our awesome app").
    
    Add an option for logging out.
    
    Add some further validation to all input fields for the usernames and passwords
    
    The user has to enter both username and password
    Register or login should not proceed with empty inputs
    Username needs to include more than 3 characters
    Password has to be longer than 6 characters
    Add an admin panel that will check if the user is admin and display a message (ex. Welcome SuperAdmin). Display all usernames and passwords in a list or table.
    Flow
    HTML!!! (Login form, Register form, Logout, Admin panel (unordered list or table))
    Global variables array of users and currentUser object of user
    Function constructor User(username, password, isAdmin)
    Events and other function (don't forget the checks) */

    //LOGIN AND PASSWORD INPUT FIELDS
    let logInInput = document.getElementById("logInInput");
    let passwordInput = document.getElementById("passwordInput");

    //REGISTER FORM INPUT FIELDS
    let registerUserNameInput = document.getElementById("registerUserName");
    let registerPasswordInput = document.getElementById("registerPassword");
    let verifyPasswordInput = document.getElementById("verifyPassword");

    //LOGIN BUTTON AND SIGN OUT BUTTON
    let loginButton = document.getElementById("logInButton");
    let signOutButton = document.getElementById('signOutButton');

    //APPROVE REGISTRATION BUTTON
    let registerNewButton = document.getElementById("registerNewButton");

    //LOG IN FORM PAGE, OR THE HOME PAGE BY DEFAULT
    let logInForm = document.getElementById('logInForm');

    //REGISTRATION PAGE
    let registerDiv = document.getElementById("registerDiv");

    //PAGE SHOWN WHEN LOGGED IN
    let loggedInDiv = document.getElementById("loggedInDiv");

    //CONTAINER FOR THE ADMIN TABLE
    let adminTableDiv = document.getElementById("adminTableDiv");
    let adminTable = document.getElementById("adminTable");

    //used to manipulate some validations
    let signedIn = false;

    //HERE ARE ALL THE USERS STORED
    let usersArray = []

    //THE CLASS FOR THE USER
    class User {
        constructor(name, password, isAdmin = false) {
            this.name = name;
            this.password = password;
            this.isAdmin = isAdmin;
        }
    }

    //SOME EXISTING USERS
    usersArray.push(new User(`Ivan`, `123456`, true));
    usersArray.push(new User(`Darko`, `223-305`, true));
    usersArray.push(new User(`Ceca`, `krknicki`, false));
    usersArray.push(new User(`Jana`, `tamanamBlagoVoSekoeVreme`, false));
    usersArray.push(new User(`Nikola`, `doruckuvamZgibovi`, false));

    fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(convert => convert.json())
        .then(users => {
            for (let each of users) {
                usersArray.push(new User(each.username, each.email, false))
            }
        })
    console.log(usersArray);


    //THIS IS WHERE SOME THINGS ARE HIDDEN AND SOME ARE SHOWN
    loggedInDiv.style.display = `none`;
    logInForm.style.display = `flex`;
    registerDiv.hidden = true;
    adminTableDiv.hidden = true;


    //REGISTER NEW MEMBER LINK BUTTON
    let simpleSwitch = true;
    document.getElementById("registerNowButton").addEventListener('click', function () {
        debugger;
        switch (simpleSwitch) {
            case true:
                logInForm.style.display = `none`;
                logInForm.style.height = `0px`;
                registerDiv.hidden = !registerDiv.hidden;
                document.getElementById("registerNowButton").innerText = `Назад на почетна страна`

                simpleSwitch = false;
                break;

            case false:
                logInForm.style.display = `flex`;
                logInForm.style.height = `200px`;
                registerDiv.hidden = !registerDiv.hidden;
                document.getElementById("registerNowButton").innerText = `Регистрирај се`
                simpleSwitch = true;
                break;

            default:
                break;
        }
    })

    // REGISTER BUTTON WHEN REGISTER FORM SHOWS
    registerNewButton.addEventListener('click', function () {
        let canCreate = true;

        //console.log(logInForm.style.display);
        //CHECK IF USERNAME IS ALREADY TAKEN
        for (let user of usersArray) {
            if (user.name === registerUserName.value) {
                alert(`Корисничкото име е зафатено, ве молиме одберете друго корисничко име!`);
                canCreate = false;
            }
        }

        //USERNAME OR PASSWORD TOO SHORT
        if (registerUserName.value.length <= 2
            && registerPassword.value.length <= 5
            && verifyPassword.value === registerPassword.value
            && canCreate === true) {
            alert(`Ве молиме внесете корисничко име со повеќе од 2 карактери и лозинка со повеќе од 5 карактери`)
            canCreate = false;
        }

        //PASSWORD VERIFICATION DURING CREATION
        else if (verifyPassword.value !== registerPassword.value
            && canCreate === true) {
            alert(`Ве молиме повторете ја истата лозинка во второто поле`)
            canCreate = false;
        }

        //WHEN REQUIRED VALIDATION PASSES
        else if (registerUserName.value.length > 2
            && registerPassword.value.length > 5
            && verifyPassword.value === registerPassword.value
            && canCreate === true) {
            registerDiv.hidden = true;
            usersArray.push(new User(registerUserName.value, registerPassword.value));
            alert(`Корисничкот профил со име ${registerUserName.value} е успешно креиран`);
            registerDiv.hidden = true;
            console.log(usersArray);

            logInInput.value = registerUserName.value;
            passwordInput.value = registerPassword.value;
            registerUserName.value = ``;
            registerPassword.value = ``;
            verifyPassword.value = ``;
            logInForm.style.display = `flex`;
            logInForm.style.height = `200px`;
            loginButton.click();
        }

        //IF ANYHING BAD HAPPENS
        else alert(`Регистрирањето е неуспешно!`);

    })

    //BUTTON FOR LOG IN
    loginButton.addEventListener('click', function () {

        //IF CORRECT LENGTH OF DATA IS INPUTED IN FIELDS
        if (logInInput.value.length > 2 && passwordInput.value.length > 5) {
            //PROGRAM IS ITERATING THROUGH ALL THE USERS
            for (let each of usersArray) {
                //IF MATCHING USER IS FOUND
                if (logInInput.value === each.name && passwordInput.value === each.password) {
                    signedIn = true;
                    //CHANGE WHICH CONTAINERS TO BE SHOWN AND HOW
                    loggedInDiv.style.display = `flex`;
                    loggedInDiv.childNodes[1].style.width = `100%`
                    adminTableDiv.style.width = `0%`;

                    document.getElementById("paragraphToChange").innerHTML = `Добредојде ${each.name}, <a href=# id="signOutButton">Одјави се</a> `
                    logInForm.style.display = `none`;


                    //IF THE USER IS ADMIN
                    if (each.isAdmin === true) {
                        document.getElementById("paragraphToChange").innerHTML = `Добредојде ${each.name} админу.<a href=# id="signOutButton">Одјави се</a> `
                        adminTableDiv.hidden = false;

                        loggedInDiv.childNodes[1].style.width = `70%`
                        adminTableDiv.style.width = `30%`;
                        adminTable.innerHTML = ``;
                        adminTable.innerHTML = `
                                <tr>
                                        <th>Корисник</th>
                                        <th>Лозинка</th>
                                        <th>Дали е админ</th>
                                        <th>Промени статус на корисник</th>
                                </tr>`;
                        for (let each of usersArray) {
                            adminTable.innerHTML += `
                                <tr>
                                    <td>${each.name}</td>
                                    <td>${each.password}</td>
                                    <td class="status">${each.isAdmin}</td>
                                    <td><button class="promoteDemoteButton">Унапреди или деградирај</button></td>
                                </tr>
                            `
                        }

                        //PROMOTE DEMOTE BUTTON IS CALLED AFTER IT IS CREATED
                        let promoteDemoteButton = document.getElementsByClassName('promoteDemoteButton');
                        let status = document.getElementsByClassName('status');

                        //PROGRAM IS ITERATING THROUGH USERS AND CHANGES ADMIN STATUS ON CLICK
                        for (let i = 0; i < usersArray.length; i++) {
                            promoteDemoteButton[i].addEventListener('click', function () {
                                usersArray[i].isAdmin = !usersArray[i].isAdmin
                                console.log(usersArray[i].isAdmin);
                                status[i].innerHTML = `${usersArray[i].isAdmin}`

                            }, false)
                        };
                    }

                    //THE HEADLINE
                    document.getElementById('headline').innerText = `Добредојде ${each.name}`;

                    //SIGN OUT BUTTON
                    document.getElementById('signOutButton').addEventListener(`click`, function () {
                        loggedInDiv.style.display = `none`;
                        registerDiv.hidden = true;
                        adminTableDiv.hidden = true;
                        simpleSwitch = true;
                        signedIn = false;
                        document.getElementById("paragraphToChange").innerHTML = `Не сте корисник? <a href=# id="registerNowButton">Регистрирај се</a>`
                        logInForm.style.display = `flex`;

                        // THIS IS CALLED AGAIN BEACUSE THE HTML WAS DESTROYED
                        document.getElementById("registerNowButton").addEventListener('click', function () {
                            debugger;
                            switch (simpleSwitch) {
                                case true:
                                    logInForm.style.display = `none`;
                                    logInForm.style.height = `0px`;
                                    registerDiv.hidden = !registerDiv.hidden;
                                    document.getElementById("registerNowButton").innerText = `Назад на почетна страна`

                                    simpleSwitch = false;
                                    break;

                                case false:
                                    logInForm.style.display = `flex`;
                                    logInForm.style.height = `200px`;
                                    registerDiv.hidden = !registerDiv.hidden;
                                    document.getElementById("registerNowButton").innerText = `Регистрирај се`
                                    simpleSwitch = true;
                                    break;
                                default:
                                    break;
                            }
                        })
                    })
                    //RESETING INPUT VALUES
                    logInInput.value = ``;
                    passwordInput.value = ``;
                    break;
                }
            }
            //IF SOME OF THE LOGIN DATA IS INCORRECT, BUT MEETS THE CHARACTER LENGTH VALIDATION
            if (signedIn == false) {
                alert(`Податоците не се валидни, или не постои таков корисник.`)
            }
        }
        else {
            alert(`Ве молиме внесете корисничко име или лозинка, доколку немате профил, регистрирајте се.`)
        }
    })