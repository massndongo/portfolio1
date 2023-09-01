  // Sélectionnez tous les liens de la navbar avec la classe "nav-link"
  var navLinks = document.querySelectorAll('.nav-link');
  var downloadButton = document.getElementById('downloadButton');
  // Parcourez tous les liens et ajoutez un gestionnaire d'événement pour le clic
  navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Empêche le comportement par défaut du navigateur
      var target = this.getAttribute('href'); // Récupère l'attribut href du lien
      console.log(target);
      scrollToSection(target); // Appelle la fonction de défilement vers la section cible
      // document.querySelector('#propos').style.marginTop = '30%';
      navLinks.forEach(function(link) {
        link.classList.remove('active');
      });
      link.classList.add('active');
      });

  });

  // Fonction pour déplacer l'utilisateur vers une section spécifique
  function scrollToSection(sectionId) {
    var section = document.querySelector(sectionId);
  
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      });
  
      var marginTop = 0.3; // Ajustez la valeur de la marge supérieure en pourcentage
      var sectionTop = section.getBoundingClientRect().top + window.scrollY;
      var offset = sectionTop - (window.innerHeight * marginTop);
      
  
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
  }

  
  var backToTopBtn = document.getElementById("back-to-top");

  // Afficher ou masquer le bouton en fonction du défilement de la page
  window.addEventListener("scroll", function() {
    if (window.scrollY > 100) {
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

  function downloadFile(url) {
    var link = document.createElement('a');
    link.href = url;
    link.target = '_blank'; // Ouvre le lien dans un nouvel onglet
    link.download = 'CVMassam.pdf'; // Nom du fichier à télécharger
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  document.addEventListener('DOMContentLoaded', function() {
    const startchange = document.querySelector('#startchange');
    const navbar = document.querySelector('.navbar');
    const offset = startchange.getBoundingClientRect().top;
  
    document.addEventListener('scroll', function() {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      
      if (scrollY > offset) {
        navbar.style.backgroundColor = 'white';
      } else {
        navbar.style.backgroundColor = 'transparent';
      }
    });

    downloadButton.addEventListener('click', function() {
      var cvUrl = 'cv/CVMassam.pdf'; // Remplacez par le chemin réel de votre CV
      downloadFile(cvUrl);
    });
    
  });
  