fetch("https://api.github.com/users/techsameer")
.then((respone) => {
    return respone.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})