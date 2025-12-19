const menu = [
    { 
        id: 1,
        nom: "Burger classique", 
        choix: "Burger",
        description: "Burger classique avec steak, salade, tomate et sauce maison",
        prix: 8.99,
        image : "../image/AdobeStock_301644355.jpeg",
    },
    { 
        id: 2,
        nom: "Burger Raclette", 
        choix: "Burger",
        description: "Burger au fromage à raclette, jambon cru et oignons caramélisés avec son double steak",
        prix: 10.99,
        image : "../image/burgerraclette.jpg",
    },
    { 
        id: 3,
        nom: "Burger Kebab", 
        choix: "Burger",
        description: "Burger au kebab, sauce blanche, salade, tomates et oignons pour les vraies Hommes",
        prix: 11.99,
        image : "../image/burgerkebab.jpg",
    },
    { 
        id: 4,
        nom: "Tacos aux crevettes", 
        choix: "Tacos",
        description: "Tacos crevette avec sa sauce au grumaux",
        prix: 7.99,
        image : "../image/tacoscrevette.jpg",
    },
    { 
        id: 5,
        nom: "Tacos cramé", 
        choix: "Tacos",
        description: "Tacos viande hachée trop cuite épicée et fromage fondu",
        prix: 8.99,
        image : "../image/tacoscrame.jpg",
    },
    { 
        id: 6,
        nom: "Tacos Végé ta rien", 
        choix: "Tacos",
        description: "Tacos aux légumes grillés et guacamole",
        prix: 7.49,
        image : "../image/tacosveget.jpg",
    },
    { 
        id: 7,
        nom: "Frites Maison", 
        choix: "Accompagnements",
        description: "Frites fraîches coupées à la main",
        prix: 3.99,
        image : "../image/frite.jpg",
    },
    { 
        id: 8,
        nom: "Onion Rings", 
        choix: "Accompagnements",
        description: "Rondelles d'oignons panées et croustillantes",
        prix: 4.49,
        image : "../image/onionring.jpg",
    },
    { 
        id: 9,
        nom: "frite de patatete douce", 
        choix: "Accompagnements",
        description: "frite de patate douce maison",
        prix: 5.99,
        image : "../image/fritepatatedouce.jpg",
    },
    { 
        id: 10,
        nom: "Coca-Cola", 
        choix: "boissons",
        description: "Boisson gazeuse classique 33cl",
        prix: 2.50,
        image : "../image/coca.jpg",
    },
    { 
        id: 11,
        nom: "Oasis", 
        choix: "boissons",
        description: "Boisson gazeuse à l'orange 33cl",
        prix: 2.50,
        image : "../image/oasis.webp",
    },
    { 
        id: 12,
        nom: "Pepsi", 
        choix: "boissons",
        description: "Boisson gazeuse classique 33cl",
        prix: 3.50,
        image : "../image/pepsi.jpg",
    },
]

function Creercartemenu(menu) {
    const carte = document.createElement('div');
    carte.classList.add('menu-carte');
    carte.classList.add(`menu-${menu.id}`);
    carte.classList.add(`menu-${menu.choix}`);

    const nom = document.createElement('h2');
    nom.classList.add('menu-nom');
    nom.textContent = menu.nom;
    carte.appendChild(nom);

    const img = document.createElement('img');
    img.classList.add('menu-image');
    img.src = menu.image;
    img.alt = menu.nom;
    carte.appendChild(img);

    const description = document.createElement('p');
    description.classList.add('menu-description');
    description.textContent = menu.description;
    carte.appendChild(description);

    const prix = document.createElement('p');
    prix.classList.add('menu-prix');
    prix.textContent = `${menu.prix.toFixed(2)}`;
    carte.appendChild(prix);

    return carte;
}

function afficherMenu() {
    const burgerSection = document.getElementById('burger');
    const tacosSection = document.getElementById('tacos');
    const accompagnementSection = document.getElementById('accompagnement');
    const boissonSection = document.getElementById('boisson');

    menu.forEach(plats => {
        const carteMenu = Creercartemenu(plats);
        
        if (plats.choix === 'Burger') {
            burgerSection.appendChild(carteMenu);
        } else if (plats.choix === 'Tacos') {
            tacosSection.appendChild(carteMenu);
        } else if (plats.choix === 'Accompagnements') {
            accompagnementSection.appendChild(carteMenu);
        } else if (plats.choix === 'boissons') {
            boissonSection.appendChild(carteMenu);
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    afficherMenu();

    const boutonmenu = document.querySelectorAll('.bouton-menu');

    boutonmenu.forEach(bouton => {
        bouton.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionMenu = document.getElementById('menu');
            if (sectionMenu) {
                sectionMenu.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    const boutonformule = document.querySelectorAll('.bouton-formule');

    boutonformule.forEach(bouton => {
        bouton.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionformule = document.getElementById('formule-menu');
            if (sectionformule) {
                sectionformule.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});