console.log("This is my script")

let result = {
    "tag": "",
    "free": false,
    "role": false,
    "user": "Thriloka",
    "email": "yadavthriloka@gmail.com",
    "score": 0.64,
    "state": "undeliverable",
    "domain": "",
    "reason": "invalid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "",
    "format_valid": true
}



submitBtn.addEventListener("click", async (a) => {
    a.preventDefault()
    console.log("Clicked!")
    resultCont.innerHTML = `<img width="100" src="./loading" alt="Loading">`
    let key = "ema_live_AFt6BfdnLI1wSGeJYr4YjuUZdWAbSSectxWmPhMl"
    let email = document.getElementById("username").value 
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`

    let response = await fetch(url)
    let result = await response.json()
    let str = ``
    for (key of Object.keys(result)) {
        if(result[key] !== "" && result[key]!== " "){ 
            str = str + `<div>${key}: ${result[key]}</div>`
        }
    }

    console.log(str)
    resultCont.innerHTML = str
})