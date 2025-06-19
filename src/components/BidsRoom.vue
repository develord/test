<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Bidder, Bid } from '../types/auction'

// Initialisation
const reservePrice = ref<number>(100) // Prix de réserve initial
const bidders = ref<Bidder[]>([]) // Liste des enchérisseurs
const newBidder = ref<{ name: string; bids: string }>({ name: '', bids: '' }) // Nouvel enchérisseur temporaire

// Ajouter un nouvel enchérisseur
function addBidder(): void {
  // Vérification des champs requis
  if (!newBidder.value.name || !newBidder.value.bids) return
  // Conversion et validation des offres
  const bidsArray: number[] = newBidder.value.bids
    .split(',') // Séparation des offres par virgule
    .map((b) => parseFloat(b.trim())) // Conversion en nombres
    .filter((b) => !isNaN(b)) // Élimination des valeurs non numériques
  if (bidsArray.length > 0) {
    bidders.value.push({ name: newBidder.value.name, bids: bidsArray })
    newBidder.value = { name: '', bids: '' } // Réinitialisation du formulaire
  }
}

// Obtenir toutes les offres valides (supérieures ou égales au prix de réserve)
function getValidBids(): Bid[] {
  // Transformation de la structure des offres
  const allBids: Bid[] = bidders.value.flatMap(bidder =>
    bidder.bids.map(bid => ({ name: bidder.name, bid }))
  )
  // Filtrage des offres valides et tri par ordre décroissant
  const validBids = allBids.filter((b) => b.bid >= reservePrice.value)
  return validBids.sort((a, b) => b.bid - a.bid)
}

// Calcul réactif du gagnant de l'enchère
const winner = computed<string | null>(() => {
  const validBids = getValidBids()
  return validBids.length > 0 ? validBids[0].name : null
})

// Calcul réactif du prix gagnant (deuxième prix le plus élevé)
const winningPrice = computed<number | null>(() => {
  const validBids = getValidBids()
  if (validBids.length === 0) return null

  const highest = validBids[0] // Offre la plus élevée
  const others = validBids.filter((b) => b.name !== highest.name) // Autres offres
  // Le prix est soit la deuxième offre la plus élevée, soit le prix de réserve
  return others.length > 0 ? others[0].bid : reservePrice.value
})
</script>

<template>
  <main class="bids-container" role="main">
    <h1 class="bids-title">Enchère au deuxième prix</h1>

    <form class="reserve-price" @submit.prevent>
      <label for="reserve-price" class="reserve-price-label">Prix de réserve :</label>
      <input id="reserve-price" v-model.number="reservePrice" type="number" class="input-field" min="0" required
        aria-label="Prix de réserve" />
    </form>

    <section class="bidder-section" aria-labelledby="add-bidder-title">
      <h2 id="add-bidder-title" class="bidder-title">Ajouter un enchérisseur</h2>
      <form @submit.prevent="addBidder">
        <input v-model="newBidder.name" type="text" placeholder="Nom" class="input-field bidder-input" required
          aria-label="Nom de l'enchérisseur" />
        <input v-model="newBidder.bids" type="text" placeholder="Offres (séparées par des virgules)"
          class="input-field bidder-input" required aria-label="Offres de l'enchérisseur" />
        <button type="submit" class="add-button">Ajouter</button>
      </form>
    </section>

    <section class="bidders-list" aria-labelledby="bidders-title">
      <h2 id="bidders-title" class="bidders-list-title">Soumissionnaires</h2>
      <ul class="bidders-items" role="list">
        <li v-for="(bidder, index) in bidders" :key="index" role="listitem">
          {{ bidder.name }} : {{ bidder.bids.join(', ') }}
        </li>
      </ul>
    </section>

    <section v-if="winner" class="result-section" aria-labelledby="result-title">
      <h2 id="result-title" class="result-title">Résultat</h2>
      <p role="status">Gagnant : {{ winner }}</p>
      <p role="status">Prix gagnant : {{ winningPrice }} €</p>
    </section>
  </main>
</template>
