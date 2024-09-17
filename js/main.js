const url           = "https://66e8036bb17821a9d9daf500.mockapi.io/users";
const addIm         = document.getElementById("addImg");
const addTitle      = document.getElementById("addTitle");
const addP          = document.getElementById("addPg");
const img           = document.getElementById("img");


const signOut = document.getElementById('signOut');

signOut.addEventListener("click", () => {
    sessionStorage.clear();
});




addIm.addEventListener("click", () => {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            img: img.value,
            title: addTitle.value,
            prag: addP.value
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => {
        location.reload();
    });
});
