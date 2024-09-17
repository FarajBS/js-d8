// Variables //
const url           = "https://66e8036bb17821a9d9daf500.mockapi.io/users";
const nameEmailSign = document.getElementById('nameEmail');
const passwordSign  = document.getElementById('passSign');
const signInBtn     = document.getElementById('signBtn');
//=== Variables ===//

signInBtn.addEventListener("click", () => {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        data.find(element => {
            if (nameEmailSign.value == element.name && passwordSign.value == element.password || 
                nameEmailSign.value == element.email && passwordSign.value == element.password ) {

                    window.sessionStorage.setItem("userName", element.name);
                    window.location="index.html";
            } else {
                console.log("Your Name, Your Email Or Your Password Is Not Valid");
            };
        });
    });
});