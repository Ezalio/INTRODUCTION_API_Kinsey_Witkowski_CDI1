
// Récupérer Id perso dans l'URL
function getCharacterIdFromUrl() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get("id");
}

// Récupérer info perso
const CharacterId = getCharacterIdFromUrl();
console.log(CharacterId);
function fetchCharacter() {
  return fetch("https://hp-api.lainocs.fr/characters/" + CharacterId).then(
    (response) => response.json()
  );
}

// Afficher info
async function displayCharacterDetails() {
      const data = await fetchCharacter();
      console.log(data);
      document.title = "Card info " + data.name;
  
      // Class par maison
      let houseClass = '';
      if (data.house) {
        houseClass = data.house.toLowerCase();
      } else {
        houseClass = 'unknown';
      }
  
      const characterDetailsContainer = document.getElementById("character-page");
      // Ajout class -> style CSS
      characterDetailsContainer.classList.add(houseClass);
      characterDetailsContainer.style.backgroundImage = `url(images/${data.house}-background.jpg)` //fond en foncttion de la maison
  
      // Ajout des informations sur la page HTML
      characterDetailsContainer.innerHTML = `
        <div id='character-details'>
        <h1>${data.name}</h1>
        <img src='${data.image}' alt='${data.name}' />
        <div>
          <p><span>Role :</span> ${data.role || "unknown"}</p>
          <p><span>Wand :</span> ${data.wand || "unknown"}</p>
          <p><span>House :</span> ${data.house || "unknown"}</p>
          <p><span>Blood :</span> ${data.blood || "unknown"}</p>
          <p><span>Eye color :</span> ${data.eyes || "unknown"}</p>
          <p><span>Hair color :</span> ${data.hairs || "unknown"}</p>
          <p><span>Patronus :</span> ${data.patronus || "unknown"}</p>
          <p><span>Actor :</span> ${data.actor || "unknown"}</p>
        </div>
        </div>
      `;
  }
  
  displayCharacterDetails();
  
  

///// SIDE NAV //////
// Fonction pour ouvrir la barre latérale
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
}

// Fonction pour fermer la barre latérale
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
}

document.addEventListener("DOMContentLoaded", function () {
  const topbarBtn = document.querySelector(".floating-btn");
  const modal = document.querySelector(".modal");

  // Fonction pour ouvrir la modale
  function openModal() {
    modal.style.display = "block";
  }

  // Fonction pour fermer la modale
  function closeModal() {
    modal.style.display = "none";
  }

  // Ouvrir la modale lors du clic sur le bouton flottant
  topbarBtn.addEventListener("click", openModal);

  // Fermer la modale lors du clic sur le bouton de fermeture
  const closeModalBtn = document.querySelector(".close");
  closeModalBtn.addEventListener("click", closeModal);

  // Fermer la modale lors du clic en dehors de celle-ci
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      closeModal();
    }
  });

  // Ouvrir la modale lors du clic sur le lien "trade" dans l'en-tête
  const tradeLink = document.querySelector("#trade-link");
  tradeLink.addEventListener("click", openModal);
});
