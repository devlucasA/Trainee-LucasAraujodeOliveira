function checkBirthPlace(){

    var countryName = document.querySelector("input#birthplace")
    var res = document.querySelector("div#res")

    if (countryName.value == "Brasil" || countryName.value == "brasil" ) {
        res.innerHTML = "Você é brasileiro!"
    } else {
        res.innerHTML = `Você nasceu em um país chamado <strong>${countryName.value}</strong>, logo você é <strong>estrangeiro</strong>!`
    }
}