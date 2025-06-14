// Constante pour Personals.jsx
export const PERSONALS_WELCOME = "Voici mes ";
export const PERSONALS_PROJECT = "Projets Personnels";
export const VISIT = "Visiter";
export const GITHUB_LINK = "Organisation GitHub";
export const GITHUB_REPO = "Répertoire GitHub";
export const GH_BE = "Répertoire GitHub (Backend)";
export const GH_FE = "Répertoire GitHub (Frontend)";

//COOKING LAB PROJECT
export const COOKINGLAB_PROJECT = {
    title: "Application Cooking Lab",
    period: "2024-Présent",
    description: "CookingLab est une application de découverte de recettes personnalisées, conçue pour simplifier la planification des repas de manière ludique. Inspirée par la difficulté de choisir quoi cuisiner avec des restrictions alimentaires, CookingLab génère des recettes adaptées en fonction des préférences de l’utilisateur, telles que le type de cuisine, le type de repas, les régimes alimentaires et les allergies. Alimentée par l’API Edamam, l’application propose une variété d’options de recettes pour satisfaire tous les goûts et contraintes, permettant ainsi de trouver le plat idéal facilement. Développée en collaboration avec ma partenaire, CookingLab est une solution innovante pour tous ceux qui recherchent des idées de repas sans prise de tête.",
    contributions: [
        "Joué le rôle de Propriétaire de Produit (PO). Définir la vision du produit, créer le backlog du produit et hiérarchiser les fonctionnalités en fonction des besoins des utilisateurs et de la valeur commerciale.",
        "Créé un prototype statique avec AxureRP pour la conception UI/UX.",
        "Créé et séparé les récits utilisateur pour l'application.",
        "Développé le front-end en utilisant React, Redux et Bootstrap.",
        "Récupéré les données de l'API Edamam pour afficher les recettes en créant un proxy avec Node.js et Express.",
        "Utilisation de Redux pour conserver les sélections de l'utilisateur à travers les étapes, permettant aux utilisateurs de conserver leurs choix lors de la navigation en arrière.",
        "Implémenté une architecture de micro-frontends pour permettre le développement et le déploiement indépendants des fonctionnalités.",
        "Construit un panneau de débogage pour sauter des étapes, qui accélère les tests et le débogage, rationalisant le flux de travail de développement.",
        "Créé des tests unitaires pour obtenir une couverture de plus de 95% de la base de code.",
        "Créé des tests de bout en bout avec Cypress.",
        "Construit un API back end en Java pour exposer les recettes personnelles à l'utilisateur.",
        "Implémenté un pipeline CI pour s'assurer que les tests sont exécutés automatiquement à chaque push sur la branche principale.",
        "Implémenté un bot de révision de pull request CookingLab personnalisé en Python qui vérifie les erreurs de Lint et donne un commentaire amusant si le code est propre ou nécessite des améliorations.",
        "Ajouté un bot Discord pour rapidement notifier l'équipe lorsqu'une nouvelle pull request est créée et fusionnée.",
    ],
    tools: [
        "Language(s): TypeScript, CSS, Java, Python",
        "Framework(s): React, Bootstrap, Redux, Node.js, Express, Jest, Cypress, Spring, JUnit",
        "Base de données: MongoDB",
        "Architecture: Micro-frontends, Redux, Patron MVC, REST API, Architecture de microservices",
        "Methodologie: Agile, Scrum, DevOps",
        "Outil(s): Git/GitHub, GitHub Project Board, GitHub Actions, Organisation GitHub, Jira, VSCode, IntelliJ, AxureRP, Edamam API, Postman, Swagger, SonarQube, Netlify, Render, Discord, Microsoft Teams"
    ],
    imgAlt: "cookinglab"
};

// TODODUE PROJECT
export const TODODUE_PROJECT = {
    title: "Application ToDoDue",
    period: "2025",
    description: "ToDoDue est une application web de gestion de tâches de type Kanban conçue pour aider les étudiants à suivre efficacement leurs devoirs, avec un fort accent sur les dates limites. Les étudiants peuvent créer des tâches avec des champs tels que le nom, la description, le cours, la date d’échéance, le statut, l’estimation de l’effort et des notes. Les tâches sont affichées dans des colonnes selon leur statut (À faire, En cours ou Terminé) et peuvent être modifiées, supprimées ou déplacées par glisser-déposer. Un système de couleurs permet d’indiquer visuellement l’urgence des tâches, allant du vert (plus d’une semaine restante) au rouge vif (en retard), avec une légende pour guider les utilisateurs. L’application met également en avant les tâches les plus urgentes en-dessous du tableau de bord afin d’aider à mieux prioriser le travail.",
    contributions: [
        "Développé le front end en utilisant Angular, Typescript, Bootstrap et SASS.",
        "Implémenté une architecture de micro-frontends pour permettre le développement et le déploiement indépendants des fonctionnalités.",
        "Utilisé le stockage local pour conserver les données utilisateur.",
    ],
    tools: [
        "Language(s): TypeScript, CSS, SASS, HTML",
        "Framework(s): Angular, Bootstrap",
        "Architecture: Micro-frontends, Patron MVC",
        "Outil(s): NgRx, RxJS, Git/GitHub, VSCode, Netlify, Local Storage"
    ],
    imgAlt: "tododue"
};

//LE SSERAFIM PROJECT
export const LESSERAFIM_PROJECT = {
    title: "LE SSERAFIM Fanpage",
    period: "2025",
    description: "Une fanpage dédiée à LE SSERAFIM, mon groupe de K-pop préféré, où je montre mon appréciation pour leur musique et leur parcours. La page présente un aperçu de leur carrière, mettant en lumière les étapes clés et les réalisations au fil des ans. Elle comprend une liste complète de leurs clips musicaux. De plus, la page propose des profils détaillés de chaque membre, célébrant leurs talents uniques et leurs contributions au groupe. Ce projet m'a permis d'intégrer le design web et l'organisation du contenu tout en exprimant ma passion pour le groupe.",
    contributions: [
        "Créé une application full stack dédiée à LE SSERAFIM en utilisant React, Bootstrap et Spring.",
        "Implémenté une architecture de micro-frontends pour permettre le développement et le déploiement indépendants des fonctionnalités.",
        "Créé une API pour exposer les données au front end.",
        "Stockage des données dans une base de données MongoDB pour assurer la persistance et un accès facile.",
        "Créé des tests unitaires pour garantir la fiabilité de l'application."
    ],
    tools: [
        "Language(s): TypeScript, CSS, Java", 
        "Framework(s): React, Bootstrap, Spring, JUnit",
        "Base de données: MongoDB",
        "Architecture: Micro-frontends, Patron MVC, REST API, Architecture de microservices",
        "Outil(s): Git/GitHub, GitHub Actions, VSCode, IntelliJ, Netlify, Render, Swagger, Postman, Maven, MongoDB Atlas, MongoDB Compass"
    ],
    imgAlt: "lesserafim"
};

// PROJET TITITEA
export const TITITEA_PROJECT = {
    title: "Application Tititea",
    period: "2021",
    description: "Pour mon tout premier site web, j'ai créé une page pour TiTiTea, un salon de thé fictif. Sur cette page, les gens pouvaient commander du thé, donner leur avis et même appliquer pour un emploi. En travaillant dessus, j'ai acquis des compétences utiles en développement web. J'ai commencé par rendre la page attrayante et facile à utiliser. Ensuite, j'ai ajouté des fonctionnalités pour aider les utilisateurs, comme des messages qui apparaissent s'ils oublient de remplir toutes les informations requises dans un formulaire. Pour finir, j'ai mis en place un système à l'arrière-plan pour stocker en toute sécurité les informations saisies par les utilisateurs dans une base de données. Les utilisateurs recevaient un message de confirmation rapide, les informant que leur demande avait été envoyée avec succès à l'arrière-plan.",
    contributions: [
        "Créé une page pour TiTiTea, un salon de thé fictif",
        "Créé le front-end en utilisant HTML, CSS et JavaScript",
        "Créé le back-end en utilisant PHP, MySQL et la pile XAMPP"
    ],
    tools: [
        "Langue(s) : HTML, CSS, JavaScript, PHP, MySQL, Pile XAMPP",
        "Database: MySQL",
        "Outil(s) : Git/GitHub, VSCode"
    ],
    imgAlt: "tititea"
};
