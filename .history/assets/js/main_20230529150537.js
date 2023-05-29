// Fonction pour déplacer l'utilisateur vers une section spécifique
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    console.log(section);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
    }