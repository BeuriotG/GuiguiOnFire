const textArea = document.getElementById("text"); 
const div = document.getElementById("div");

const creaParaBold = document.createElement("p");
const creaParaItAndCap = document.createElement("p");
const creaParaRevAndCap = document.createElement("p");

function update (event){  
    let textBold = `<b>${textArea.value}</b>`;
    creaParaBold.innerHTML = textBold;
    div.appendChild(creaParaBold);

    let textItAndCap = `<i>${textArea.value.toUpperCase()}</i>`;
    creaParaItAndCap.innerHTML = textItAndCap;
    div.appendChild(creaParaItAndCap);

    let textRevAndCap = `${textArea.value.split("").reverse().join("")}`;
    let textRevAndCapToLower = textRevAndCap.toLowerCase();
    let textRevAndCapToUpper = textRevAndCapToLower.replace(textRevAndCapToLower[0], textRevAndCapToLower[0].toUpperCase());
    creaParaRevAndCap.innerHTML = textRevAndCapToUpper;
    div.appendChild(creaParaRevAndCap);
    
}

