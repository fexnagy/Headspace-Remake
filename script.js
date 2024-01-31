const box1 = document.getElementById("box");
const box2 = document.getElementById("box2");
const txt = document.getElementById("subtitle");

const a1 = document.getElementById("a1");
const a2 = document.getElementById("a2");

const words = [
    "kind",
    "sweet",
    "gentle",
    "mellow",
    "warm",
    "tender",
    "caring",
    "soft",
    "loving",
    "mild",
    "heartful",
];

const random = document.getElementById("random");

const confirm = document.getElementById("confirm");
const btn = document.getElementById("btn");

box1.addEventListener("click", () => {
    box1.style.backgroundColor = "#ffce00";
    box2.style.backgroundColor = "white";
    txt.innerHTML = "After your free trial, the annual subscription is €57.99 EUR and automatically renews each year.";
    a1.innerHTML = "check_box";
    a2.innerHTML = "check_box_outline_blank";
    random.innerHTML = words[Math.floor(Math.random() * words.length)];
});

box2.addEventListener("click", () => {
    box2.style.backgroundColor = "#ffce00";
    box1.style.backgroundColor = "white";
    txt.innerHTML = "After free trial, monthly subscription is €12.99 EUR and automatically renews each month.";
    a2.innerHTML = "check_box";
    a1.innerHTML = "check_box_outline_blank";
    random.innerHTML = words[Math.floor(Math.random() * words.length)];
});

random.addEventListener("click", () => {
    random.innerHTML = words[Math.floor(Math.random() * words.length)];
});

btn.addEventListener("mouseover", () => {
    confirm.innerText = "Confirm";
});

btn.addEventListener("mouseleave", () => {
    confirm.innerText = "Select";
});