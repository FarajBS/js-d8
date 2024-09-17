// Variables //
const url           = "https://66e8036bb17821a9d9daf500.mockapi.io/users";
const nameIn        = document.getElementById("nameInput");
const emailIn       = document.getElementById("emailInput");
const passIn        = document.getElementById("password");
const confPassIn    = document.getElementById("confPassword");
const signupBtn     = document.getElementById("signUp");
const answerDiv     = document.getElementById('answerDiv');
const answer        = document.getElementById('answer');
const answerDivRig  = document.getElementById('answerDivRig');
const answerRig     = document.getElementById('answerRig');
//=== Variables ===//
//=== Variables ===//

function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
  

let eeee = `${emailIn.value}`

signupBtn.addEventListener("click", () => {
    if (typeof(nameIn.value) == "string" && nameIn.value.length > 5) {
        if (emailIsValid(emailIn.value)) {
            if ((passIn.value.length > 8)) {
                if (passIn.value == confPassIn.value) {
                    answerDivRig.style.display = "block"; 
                    answerDiv.style.display = "none";
                    answer.textContent = "Your Are Register";
                    fetch(url, {
                        method: 'POST',
                        body: JSON.stringify({
                            name: nameIn.value,
                            email: emailIn.value,
                            password: passIn.value
                        }),
                        headers: {
                          'Content-type': 'application/json; charset=UTF-8',
                        },
                    })
                    .then((response) => response.json())
                    .then((json) => console.log(json));
                } else {
                    answerDiv.style.display = "block";
                    answerDivRig.style.display = "none";
                    answer.textContent = "Password And Confirm Password Not Matched.";
                };
            } else {
                answerDiv.style.display = "block";
                answerDivRig.style.display = "none";
                answer.textContent = "Your Password Is Less Than 9 Numbers";
            }
        } else {
            answerDiv.style.display = "block";
            answerDivRig.style.display = "none";
            answer.textContent = "Your Email Is Not Valid";
        };
    } else {
        answerDiv.style.display = "block";
        answerDivRig.style.display = "none";
        answer.textContent = "Your Name Is Not A String Or Your Name Is Less Than 6 Characters";
    };
});