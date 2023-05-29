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

  