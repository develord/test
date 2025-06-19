# Vickrey Auction

Ce projet a été réalisé avec **Vue.js 3** car la mission imposait un front en Vue.js. J'ai choisi de garder le projet aussi simple que possible :

- **Pas de router** : inutile pour une application mono-page.
- **Pas de store (ex: Vuex, Pinia)** : la gestion d'état globale n'est pas nécessaire ici.
- **Pas de factorisation de composants** : il n'y a pas de composants réutilisables, donc pas de sur-ingénierie.
- **Keep it simple, keep it stupid (Régle KISS)** : le code reste lisible, direct et facile à maintenir.

## Démo en ligne

<a href="https://test-five-sigma-26.vercel.app/" style="color:#4F46E5;font-weight:bold;" target="_blank">Accéder à la démo https://test-five-sigma-26.vercel.app/</a>

## Scénarios de test

J'ai créé 4 scénarios de test unitaires principaux :

1. Affichage initial du composant
2. Ajout d'un nouvel enchérisseur avec ses offres
3. Calcul du gagnant et du prix gagnant
4. Réinitialisation du formulaire après soumission

## Prérequis

- Node.js **v22**

## Installation

```sh
npm install
```

## Lancer le projet en développement

```sh
npm run dev
```

## Lancer les tests unitaires

```sh
npm run test:unit
```
