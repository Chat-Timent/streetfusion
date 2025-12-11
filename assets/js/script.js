const menu = [
    { 
        id: 1,
        nom: "Burger classique", 
        choix: "Burger",
        description: "Burger classique avec steak, salade, tomate et sauce maison",
        prix: 8.99,
        image : "./assets/image/AdobeStock_301644355.jpeg",
    },
    { 
        id: 2,
        nom: "Burger Raclette", 
        choix: "Burger",
        description: "Burger au fromage à raclette, jambon cru et oignons caramélisés avec son double steak",
        prix: 10.99,
        image : "./assets/image/street_food_2.jpg",
    },
    { 
        id: 3,
        nom: "Burger Kebab", 
        choix: "Burger",
        description: "Burger au kebab, sauce blanche, salade, tomates et oignons pour les vraies Hommes",
        prix: 11.99,
        image : "./assets/image/street_food_3.jpg",
    },
    { 
        id: 4,
        nom: "Tacos aux crevettes", 
        choix: "Tacos",
        description: "Tacos crevette avec sa sauce au grumaux",
        prix: 7.99,
        image : "./assets/image/street_food_4.jpg",
    },
    { 
        id: 5,
        nom: "Tacos cramé", 
        choix: "Tacos",
        description: "Tacos viande hachée trop cuite épicée et fromage fondu",
        prix: 8.99,
        image : "./assets/image/street_food_5.jpg",
    },
    { 
        id: 6,
        nom: "Tacos Végétarien", 
        choix: "Tacos",
        description: "Tacos aux légumes grillés et guacamole",
        prix: 7.49,
        image : "./assets/image/street_food_6.jpg",
    },
    { 
        id: 7,
        nom: "Frites Maison", 
        choix: "Accompagnements",
        description: "Frites fraîches coupées à la main",
        prix: 3.99,
        image : "./assets/image/street_food_7.jpg",
    },
    { 
        id: 8,
        nom: "Onion Rings", 
        choix: "Accompagnements",
        description: "Rondelles d'oignons panées et croustillantes",
        prix: 4.49,
        image : "./assets/image/street_food_8.jpg",
    },
    { 
        id: 9,
        nom: "Salade César", 
        choix: "Accompagnements",
        description: "Salade fraîche avec sauce césar et parmesan",
        prix: 5.99,
        image : "./assets/image/street_food_9.jpg",
    },
    { 
        id: 10,
        nom: "Coca-Cola", 
        choix: "boissons",
        description: "Boisson gazeuse classique 33cl",
        prix: 2.50,
        image : "./assets/image/street_food_10.jpg",
    },
    { 
        id: 11,
        nom: "Bannanitron", 
        choix: "boissons",
        description: "une boisson fait de bannane et de citron 25cl",
        prix: 2.50,
        image : "./assets/image/street_food_10.jpg",
    },
    { 
        id: 12,
        nom: "Cacaorange", 
        choix: "boissons",
        description: "Jus d'orange frais pressé avec une touche de cacahuète 25cl",
        prix: 3.50,
        image : "./assets/image/street_food_10.jpg",
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
});
