const text = document.getElementById("field");
const pos = document.getElementById("num");
text.addEventListener("input", (e) => {
    let val = e.target.value.length;
    pos.innerText = 200 - val;
})
