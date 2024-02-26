//On enregistre tous les éléments de notre page qui ont la classe "accordion-content" dans une variable
const accordionContent = document.querySelectorAll('.accordion-content')

//On boucle sur tous nos accordéons
accordionContent.forEach((accordion, index) => {
    //On récupère le header de chaque élément
    let header = accordion.querySelector('header')

    //On écoute l'évènement "clique" sur notre élément
    header.addEventListener('click', () => {
        //On ajoute une classe "open" au click sur notre accordéon
        accordion.classList.toggle('open')

        //On récupère la description de l'accordéon qu'on met dans une variable
        let description = accordion.querySelector('.description')
        //Si l'accordéon est "open" on affiche la description, sinon on la masque
        if(accordion.classList.contains('open')) {
            description.style.height = `${description.scrollHeight}px`
            accordion.querySelector('i').classList.replace('fa-plus', 'fa-minus')
        } else {
            description.style.height = '0px'
            accordion.querySelector('i').classList.replace('fa-minus', 'fa-plus')
        }
        //Appelle de la fonction "removeOpen" en lui passant l'index du header concerné
        removeOpen(index)
    })
})

//Fonction pour enlever la classe "Open" a un accordéon selon son index
function removeOpen(index) {
    //Pour chaque accordéon
    accordionContent.forEach((accordionSelected, i) => {
        //Si l'index reçu n'est pas égal à l'index de la boucle
        if(index !== i) {
            //On supprime la classe "open", on réduit la description et on change le "+" en "-"
            accordionSelected.classList.remove("open")
            let desc = accordionSelected.querySelector('.description')
            desc.style.height = '0px'
            accordionSelected.querySelector('i').classList.replace('fa-minus', 'fa-plus')
        }
    })
}