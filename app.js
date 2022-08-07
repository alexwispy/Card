/*
    form
    #addForm

    document.getElementById("addCard");
    document.getElementsByTagName("form")[0];
    document.querySelectorAll("form")[0]; // как в CSS
    document.querySelector("form");
    document.querySelector("#addCard");
*/
let form = document.forms.addCard;
let table = document.querySelector("tbody");
/*
    console.log(form.elements); // только элементы формы - input / select / button / textarea
    console.log(form.children); // childNodes - все html-теги (дочерние)
*/
// console.log(form);
let cnt = 0;
let headers = ["cnt", "bank", "system", "user", "number", "expire"];
form.onsubmit = function(event) {
    event.preventDefault(); // остановить событие, запрограмированное браузером (для отпраки форм, нажатия на ссылку)
    let childs = this.elements;
    cnt++;
    // console.log(childs);
    let data = {
        cnt: cnt
    };
    for (let i = 0; i < childs.length; i++) {
        // console.log(childs[i]);
        if (childs[i].name) {
            let name = childs[i].name;
            let val = childs[i].value;
            data[name] = val;
        }
    }
    // console.log(data);
    addRow(data);
}

function addRow(obj) {
    let html = "<tr>"
    headers.forEach(function(name) {
        if (name === "number") {
            let val = setNumber(obj[name]);
            html += `<td>${val}</td>`;
        } else {
            html += `<td>${obj[name]}</td>`;
        }
    });
    html += "</tr>";
    table.innerHTML += html;
}

let inp = form.elements.n;
console.log(inp);

inp.oninput = function() {
    console.log(this.value);
    console.log(setNumber(this.value));
}

function setNumber(num,a = " ", b = "", c = "") {
    let result = num;
    for (let i = result.length; i < 16; i++) {
        result += "_";
    }
    // console.log(result);
    let itog = c;
    for (let i = 0; i < result.length; i++) {
        if (i % 4 === 0 && i !== 0) {
            itog += (b + a + c);
        }
        itog += result[i];
    }
    itog +=b;
    // console.log(itog);
    return itog;
}