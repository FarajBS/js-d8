// Variables //
const url           = "https://66e8036bb17821a9d9daf500.mockapi.io/users";
const nameIn        = document.getElementById("nameInput");
const emailIn       = document.getElementById("emailInput");
const passIn        = document.getElementById("password");
const confPassIn    = document.getElementById("confPassword");
const signupBtn     = document.getElementById("signUp");
const answerDiv     = document.getElementById('answerDiv');
const answer        = document.getElementById('answer');
const answerRight  = document.getElementById('answerRight');
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
                    .then((json) => {
                        answerRight.style.display = "block"; 
                        answerDiv.style.display = "none";
                        answerRig.textContent = "You Are Registered Now";
                        setTimeout(() => {
                            window.location="login.html";
                        }, 3000)
                    });
                } else {
                    answerDiv.style.display = "block";
                    answerDivRig.style.display = "none";
                    answer.textContent = "Password And Confirm Password Not Matched.";
                    setTimeout(() => {
                    answerDiv.style.display = "none";
                }, 3000)
                };
            } else {
                answerDiv.style.display = "block";
                answerDivRig.style.display = "none";
                answer.textContent = "Your Password Is Less Than 9 Numbers";
                setTimeout(() => {
                    answerDiv.style.display = "none";
                }, 3000)
            }
        } else {
            answerDiv.style.display = "block";
            answerDivRig.style.display = "none";
            answer.textContent = "Your Email Is Not Valid";
            setTimeout(() => {
                    answerDiv.style.display = "none";
                }, 3000)
        };
    } else {
        answerDiv.style.display = "block";
        answerDivRig.style.display = "none";
        answer.textContent = "Your Name Is Not A String Or Your Name Is Less Than 6 Characters";
        setTimeout(() => {
                    answerDiv.style.display = "none";
                }, 3000)
    };
});