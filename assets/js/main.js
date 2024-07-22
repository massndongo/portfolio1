  // Sélectionnez tous les liens de la navbar avec la classe "nav-link"

  // Parcourez tous les liens et ajoutez un gestionnaire d'événement pour le clic


  document.addEventListener('DOMContentLoaded', function() {
    var menu = document.querySelector('.menu');
    var btnToggleMenu = document.querySelector('.navbar-toggler');
    var navLinks = document.querySelectorAll('.nav-link');
    var downloadButton = document.getElementById('downloadButton');
    var navbar = document.querySelector('.navbar');
    var btnCv = document.querySelector('.btnCv');
    var btnMode = document.querySelector('.btnMode');
    const imageModeClair = document.getElementById('logoClair');
    const imageModeSombre = document.getElementById('logoSombre');
    const startchange = document.querySelector('#startchange');
    const offset = startchange.getBoundingClientRect().top;
    btnToggleMenu.addEventListener("click", function () {
      menu.classList.toggle("mobile");
    });
    document.addEventListener('scroll', function() {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (scrollY > offset) {
        navbar.style.backgroundColor = 'white';
      } else {
        navbar.style.backgroundColor = 'transparent';
      }
    });
    navLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Empêche le comportement par défaut du navigateur
        var target = this.getAttribute('href'); // Récupère l'attribut href du lien
        console.log(target);
        scrollToSection(target); // Appelle la fonction de défilement vers la section cible
        // document.querySelector('#propos').style.marginTop = '30%';
        navLinks.forEach(function(link) {
          link.classList.remove('active');
          menu.classList.toggle("mobile");
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

    downloadButton.addEventListener('click', function() {
      var cvUrl = 'cv/CVMassam.pdf'; // Remplacez par le chemin réel de votre CV
      downloadFile(cvUrl);
    });

    const toggleButton = document.getElementById('toggleButton');
    const body = document.body;
    const card = document.querySelectorAll('.card');
    const iconSkills = document.querySelectorAll('.icons-skills');
    // const titleSkills = document.querySelectorAll('.title-skills');
    const liSkills = document.querySelectorAll('.li-skills');
    var animatedText = document.querySelector('.animated-text');
    var img = document.querySelector('.aboutImg');
    var circleSpin = document.querySelector('.circle-spin');
    imageModeSombre.style.display = 'none';
    backToTopBtn.classList.add('backToTopSombre');

    animatedText.classList.add('animated-text');
    toggleButton.addEventListener('click', () => {
      menu.classList.toggle("mobile");
      if (body.classList.contains('dark-mode')) {
          body.classList.remove('dark-mode');
          body.classList.add('light-mode');
          navbar.classList.add('bg-body');
          navbar.classList.remove('bg-dark');
          btnCv.classList.add('btn-dark');
          btnCv.classList.remove('btn-light');
          btnMode.classList.add('btn-outline-dark');
          btnMode.classList.remove('btn-outline-light');
          imageModeClair.style.display = 'block';
          imageModeSombre.style.display = 'none';
          backToTopBtn.classList.remove('backToTop');
          backToTopBtn.classList.add('backToTopSombre');
          animatedText.classList.add('animated-text');
          animatedText.classList.remove('animated-text-mode-sombre');
          img.classList.add('aboutImg');
          img.classList.remove('img-border-light');
          circleSpin.classList.add('circle-spin');
          circleSpin.classList.remove('circle-spin-dark');
          document.querySelectorAll('.link-icons-rs').forEach(function (bgIcons) {
            bgIcons.classList.add('link-dark');
            bgIcons.classList.remove('link-light');
          });
          document.querySelectorAll('.nav-link').forEach(function(link) {
            link.style.color = '';
          });
          card.forEach(function (bgCard) {
            bgCard.classList.remove('bg-dark');
            bgCard.classList.add('bg-light');
            bgCard.classList.remove('border');
            bgCard.classList.remove('border-light');
          });
          iconSkills.forEach(function (iconSkill) {
            iconSkill.classList.add('btn-dark');
            iconSkill.classList.remove('btn-light');
          });
          liSkills.forEach(function (liSkill) {
            liSkill.classList.add('bg-dark');
            liSkill.classList.remove('bg-light');
            liSkill.classList.add('text-bg-dark');
            liSkill.classList.remove('text-bg-light');
          });

      } else {
          body.classList.remove('light-mode');
          body.classList.add('dark-mode');
          navbar.classList.remove('bg-body');
          navbar.classList.add('bg-dark');
          btnCv.classList.remove('btn-dark');
          btnCv.classList.add('btn-light');
          btnMode.classList.add('btn-outline-light');
          btnMode.classList.remove('btn-outline-dark');
          imageModeClair.style.display = 'none';
          imageModeSombre.style.display = 'block';
          backToTopBtn.classList.add('backToTop');
          menu.style.backgroundColor = "transparent";
          btnToggleMenu.classList.add('bg-light');
          animatedText.classList.remove('animated-text');
          animatedText.classList.add('animated-text-mode-sombre');
          circleSpin.classList.remove('circle-spin');
          circleSpin.classList.add('circle-spin-dark');
          document.querySelectorAll('.link-icons-rs').forEach(function (bgIcons) {
            bgIcons.classList.remove('link-dark');
            bgIcons.classList.add('link-light');
            img.classList.remove('aboutImg');
            img.classList.add('img-border-light');
          });
          document.querySelectorAll('.nav-link').forEach(function(link) {
            link.style.color = 'white';
          });
          card.forEach(function (bgCard) {
            bgCard.classList.add('bg-dark');
            bgCard.classList.add('border');
            bgCard.classList.add('border-light');
            bgCard.classList.remove('bg-light');
          });
          iconSkills.forEach(function (iconSkill) {
            iconSkill.classList.remove('btn-dark');
            iconSkill.classList.add('btn-light');
          });
          liSkills.forEach(function (liSkill) {
            liSkill.classList.remove('bg-dark');
            liSkill.classList.add('bg-light');
            liSkill.classList.remove('text-bg-dark');
            liSkill.classList.add('text-bg-light');
          });
      } 
    });
    
  });
  


  