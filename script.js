//ESERCIZIO 1
//Crea un semplice form di registrazione con un input field in cui l'utente possa inserire il proprio nome.
//A fianco di questo input field crea due pulsanti: uno salverà il valore in localStorage,
//uno rimuoverà il valore precedentemente salvato (se presente).

window.addEventListener("DOMContentLoaded", () => {
  const saveButton = document.getElementById("btnSave");
  const removeButton = document.getElementById("btnRemove");

  saveButton.addEventListener("click", saveName);
  removeButton.addEventListener("click", removeName);

  showSavedName();
});

const saveName = (event) => {
  event.preventDefault();
  const input = document.getElementById("name");
  const name = input.value;
  localStorage.setItem("name", name);
  showSavedName();
};

const removeName = (event) => {
  event.preventDefault();
  localStorage.removeItem("name");
  showSavedName();
};

const showSavedName = () => {
  const nameSaved = document.getElementById("nameSaved");
  const name = localStorage.getItem("name");
  if (name) {
    nameSaved.textContent = `Name saved: ${name}`;
  } else {
    nameSaved.textContent = "";
  }
};

//ESERCIZIO 2
//Crea un contatore che tenga conto del tempo che passa, utilizzando sessionStorage.
//Aggiornando la pagina il valore prosegue, chiudendo la pagina - ovviamente - ricomincia.
//Il valore del contatore deve aggiornarsi ad ogni secondo.

function updateCounter() {
  let currentCounter = sessionStorage.getItem("counter") || 0;
  currentCounter++;
  sessionStorage.setItem("counter", currentCounter);
  document.getElementById("counterDisplay").innerText = currentCounter;
}

function startCounter() {
  updateCounter();
  setInterval(updateCounter, 1000);
}
window.onload = startCounter;
