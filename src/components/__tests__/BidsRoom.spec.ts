import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BidsRoom from '../BidsRoom.vue'

describe('BidsRoom', () => {
  // Test du rendu initial
  it('affiche correctement le titre', () => {
    const wrapper = mount(BidsRoom)
    expect(wrapper.find('.bids-title').text()).toBe('Enchère au deuxième prix')
  })

  // Test de l'ajout d'un enchérisseur
  it('ajoute un nouvel enchérisseur avec ses offres', async () => {
    const wrapper = mount(BidsRoom)

    await wrapper.find('input[placeholder="Nom"]').setValue('Alice')
    await wrapper
      .find('input[placeholder="Offres (séparées par des virgules)"]')
      .setValue('150,200,175')

    await wrapper.find('.bidder-section form').trigger('submit.prevent')
    await wrapper.vm.$nextTick()

    expect(wrapper.find('.bidders-items').text()).toContain('Alice : 150, 200, 175')
  })

  // Test du calcul du gagnant et du prix
  it('calcule correctement le gagnant et le prix pour plusieurs enchérisseurs', async () => {
    const wrapper = mount(BidsRoom)

    // Ajout du premier enchérisseur
    await wrapper.find('input[placeholder="Nom"]').setValue('Bob')
    await wrapper
      .find('input[placeholder="Offres (séparées par des virgules)"]')
      .setValue('120,180')

    await wrapper.find('.bidder-section form').trigger('submit.prevent')
    await wrapper.vm.$nextTick()

    // Ajout du deuxième enchérisseur
    await wrapper.find('input[placeholder="Nom"]').setValue('Charlie')
    await wrapper
      .find('input[placeholder="Offres (séparées par des virgules)"]')
      .setValue('150,200')

    await wrapper.find('.bidder-section form').trigger('submit.prevent')
    await wrapper.vm.$nextTick()

    // Vérification du gagnant et du prix
    const resultSection = wrapper.find('.result-section')
    expect(resultSection.exists()).toBe(true)

    console.log(resultSection)

    expect(resultSection.text()).toContain('Gagnant : Charlie')
    expect(resultSection.text()).toContain('Prix gagnant : 180')
  })

  // Test du prix de réserve
  it('respecte le prix de réserve', async () => {
    const wrapper = mount(BidsRoom)

    // Définition d'un prix de réserve
    await wrapper.find('#reserve-price').setValue(160)

    // Ajout d'un enchérisseur avec des offres inférieures au prix de réserve
    await wrapper.find('input[placeholder="Nom"]').setValue('Eve')
    await wrapper
      .find('input[placeholder="Offres (séparées par des virgules)"]')
      .setValue('140,150')
    await wrapper.find('button').trigger('click')

    // Vérification qu'il n'y a pas de gagnant
    expect(wrapper.find('.result-section').exists()).toBe(false)
  })
})
