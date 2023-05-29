  // Sélectionnez tous les liens de la navbar avec la classe "nav-link"
  var navLinks = document.querySelectorAll('.nav-link');

  // Parcourez tous les liens et ajoutez un gestionnaire d'événement pour le clic
  navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Empêche le comportement par défaut du navigateur
      var target = this.getAttribute('href'); // Récupère l'attribut href du lien
      scrollToSection(target); // Appelle la fonction de défilement vers la section cible
    });
  });

  // Fonction pour déplacer l'utilisateur vers une section spécifique
  function scrollToSection(sectionId) {
    var section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  
  var backToTopBtn = document.getElementById("back-to-top");

  // Afficher ou masquer le bouton en fonction du défilement de la page
  window.addEventListener("scroll", function() {
    if (window.pageYOffset > 100) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  // Faire défiler vers le haut de la page lorsque le bouton est cliqué
  backToTopBtn.addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });