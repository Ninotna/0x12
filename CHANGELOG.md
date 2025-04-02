* 2025-04-02 - style: refactor complet du composant KeyData pour responsivité au-dessous de 1024px
* 2025-04-02 - style: mise à jour SCSS du Dashboard pour responsive 1024px
* 2025-04-02 - FIXING: Files in the public directory are served at the root path. Instead of /public/logoSportSee.svg, use /logoSportSee.svg.
* 2025-03-30 - MAJ title SportSee
* 2025-03-30 - Modification du Favicon
* 2025-03-30 - Nettoyage: Suppression des console.log sur les Composants pour la soutenance.
* 2025-03-30 - Commentaire des console.log..
* 2025-03-30 - Implémentation de JSDOC...
* 2025-03-30 - Rédaction d'un README
* 2025-03-30 - Fixing
* 2025-03-30 - Révision du code css conformément à la maquette figma. Correctifs d'affichage...
* 2025-03-30 - MAJ de l'App.jsx
* 2025-03-30 - Suppression (soft) index.css
* 2025-03-30 - Revue du Header
* 2025-03-27 - del .env
* 2025-03-27 - Installation normalize.css
* 2025-03-27 - Correction Aside conformement a la maquette.
* 2025-03-27 - Modifier les requêtes de données côté données mockées qui n'ont pas la même structure de données.
* 2025-03-27 - Removing obsolete files
* 2025-03-27 - fix(keydata): correction de l'accès aux données nutritionnelles dans KeyData
* 2025-03-27 - fix(banner): correction de l'accès au prénom dans Banner via user.data.userInfos.firstName
* 2025-03-27 - fix(chart): correction de l'accès au score utilisateur dans DailyScoreChart
* 2025-03-27 - fix(chart): correction du parsing dans AverageSessionsChart (accès à result.data.sessions)
* 2025-03-27 - fix(chart): correction de la récupération des données dans ActivityChart
* 2025-03-27 - fix(chart): correction du format des données dans PerformanceChart suite à une mauvaise désérialisation
* 2025-03-27 - Ajout d'un toggle manuel sur le .env pour récupérer soit les données mockées soit les données de l'API..
* 2025-03-27 - correction de la route vers le Dashboard pour recuperer les données du user (profile)
* 2025-03-27 - Refactoring du sass (cf. commit precedent)
* 2025-03-27 - refacto(scss) : migration complète de @import vers @use avec gestion des namespaces pour variables et mixins
* 2025-03-27 - Replacing @import with @use for the sass statements
* 2025-03-27 - Update style.scss
* 2025-03-27 - Adding sass and normalize.css
* 2025-03-27 - changing page names
* 2025-03-27 - Removing underconstruction page css. revamping Home css.
* 2025-03-27 - Fixing DataService
* 2025-03-27 - New CSS instead of styled components
* 2025-03-27 - Fixing the DataService endpoint
* 2025-03-27 - New Loader Component
* 2025-03-27 - Creating a new Dashboard Page
* 2025-03-27 - ActivityChart...
* 2025-03-27 - Adding New AverageSessionsChart
* 2025-03-27 - Working on PerformanceChart
* 2025-03-27 - New KeyDatas block
* 2025-03-27 - New DailySchoreChart
* 2025-03-27 - Creation of 404 page layout
* 2025-03-27 - Adding complexe styles folder with scss code
* 2025-03-27 - Adding Header component
* 2025-03-27 - Revamping Banner component
* 2025-03-27 - working on Aside component
* 2025-03-27 - Correction de CustomToolTip dans AverageSessionsChart pour éviter les erreurs de payload undefined
* 2025-03-20 - MAJ Microservices Data API
* 2025-03-20 - Update ProfilePage, App et suppression d'anciens composants..
* 2025-03-20 - Composant SpinLoader
* 2025-03-20 - Refactorisation et MAJ des composants Charts
* 2025-03-20 - Creation composant Aside
* 2025-03-20 - Chargement des icones
* 2025-03-20 - Revue et amélioration de l'ActivityChart (à finir)
* 2025-03-20 - Ajout des méthodes API pour récupérer toutes les données utilisateur dans DataService.js
* 2025-03-20 - Ajout et structuration des données mockées dans MockData.js
* 2025-03-20 - Ajout du Chart AverageSessionsChart
* 2025-03-20 - MAJ données et Ajout de la documentation JSDoc pour MockData.js
* 2025-03-20 - Ajout d'un tooltip et d'un curseur personnalisé pour AverageSessionsChart Ajout d'une gestion des erreurs et logs pour débogage de AverageSessionsChart
* 2025-03-20 - Ajout du composant AverageSessionsChart avec styled-components et Recharts
* 2025-03-20 - Initialisation du monorepo pour le projet sportSee avec frontend et backend
* 2025-03-20 - Preparation du dossier frontend avant fusion des dossiers frontend et backend dans un seul repo github
* 2025-03-19 - Ajout du fichier .env pour la gestion des variables d’environnement et activation des données mockées
* 2025-03-13 - Ajout de la page ProfilePage et assemblage des composants pour afficher le profil utilisateur
* 2025-03-13 - Ajout du composant RadarChart pour afficher les performances utilisateur
* 2025-03-13 - Ajout du composant ScoreChart avec Recharts pour visualiser le score utilisateur
* 2025-03-13 - Ajout du composant ActivityChart avec Recharts pour afficher l'activité quotidienne
* 2025-03-13 - Ajout du composant Statistics pour afficher les données nutritionnelles
* 2025-03-13 - Ajout du composant ProfileHeader pour afficher le prénom de l'utilisateur
* 2025-03-13 - Service Gestion de données Ajout de JSDoc et commentaires explicatifs dans DataService et MockData
* 2025-03-13 - feat: initialisation du projet React avec Vite et configuration du Router
* 2025-03-13 - first commit