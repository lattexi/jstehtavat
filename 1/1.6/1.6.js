let number = parseInt(prompt("Enter a positive integer:"))

let tableHTML = "<table>"

for (let i = 1; i <= number; i++) {
    tableHTML += "<tr>"
    for (let j = 1; j <= number; j++) {
        let product = i * j
        tableHTML += `<td>${product}</td>`
    }
    tableHTML += "</tr>"
}

tableHTML += "</table>"

document.getElementById("target").innerHTML = tableHTML