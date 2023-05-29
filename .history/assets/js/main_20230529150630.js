// Fonction pour déplacer l'utilisateur vers une section spécifique
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        console.log(section);
        section.scrollIntoView({ behavior: 'smooth' });
    }
    }