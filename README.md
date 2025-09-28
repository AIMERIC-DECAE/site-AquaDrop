# Site AquaDrop

Ce dépôt contient la version Vite du site AquaDrop. Suivez les étapes ci-dessous pour installer les dépendances et prévisualiser le site en local.

## Prérequis
- [Node.js](https://nodejs.org/) version 18 ou supérieure (inclut npm)

## Installation
1. Installez les dépendances du projet :
   ```bash
   npm install
   ```

## Lancer le site en mode développement
1. Démarrez le serveur de développement Vite :
   ```bash
   npm run dev
   ```
2. Ouvrez l'URL indiquée dans le terminal (généralement [http://localhost:5173](http://localhost:5173)) pour explorer le site.

## Prévisualiser le build de production
1. Générez le bundle optimisé :
   ```bash
   npm run build
   ```
2. Lancez un serveur de prévisualisation :
   ```bash
   npm run preview
   ```
3. Ouvrez l'adresse fournie par Vite pour visualiser le rendu final.

## Scripts disponibles
- `npm run dev` : serveur de développement avec rechargement à chaud.
- `npm run build` : compilation du site pour la production.
- `npm run preview` : prévisualisation locale du build de production.
- `npm run lint` : exécute ESLint sur le projet.
- `npm run typecheck` : vérifie les types TypeScript.

## Résolution des problèmes courants
- **Port déjà utilisé** : précisez un autre port avec `npm run dev -- --port=3000`.
- **Erreur de dépendances** : supprimez `node_modules`, réinstallez avec `npm install`.

Bonne exploration !
