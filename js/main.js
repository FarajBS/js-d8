const signOut = document.getElementById('signOut');

signOut.addEventListener("click", () => {
    sessionStorage.clear();
});