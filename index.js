const addItems = document.querySelector('.add-items');
const plates = document.querySelector('.plates'); /*parent*/

let valeur = document.getElementById("Saisie");
let compteur = localStorage.length - 1;
let liste = document.querySelector(".liste")

addItems.addEventListener("submit", function(event) {
    event.preventDefault();
    liste.style.color = "white";

    const items = document.createElement('li');

    items.textContent = (valeur.value)
    plates.appendChild(items);
    compteur++;
    localStorage.setItem(compteur, valeur.value);

})

for (let i = 0; i < localStorage.length; i++) {
    const item = document.createElement('li');
    item.textContent = (localStorage.getItem(i))
    plates.appendChild(item);
}