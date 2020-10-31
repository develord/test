import { createCategory } from '@/apollo/mutations'
import { categories } from '@/apollo/query'

export const state = () => ({
  listCategory: []
})

export const getters = {
}

export const mutations = {
  SET_CATEGORIES (state, categories) {
    state.listeCategory = categories
  },

  ADD_CATEGORY (state, category) {
    state.listeCategory.push(category)
  }
}

export const actions = {
  /** Get all Categories */
  async getCategories ({ commit }) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: categories,
      fetchPolicy: 'network-only'
    })

    commit('SET_CATEGORIES', response.data.categories)
  },

  /** New Category */
  async createCategory ({ commit }, category) {
    try {
      const response = await this.app.apolloProvider.defaultClient.mutate({
        mutation: createCategory,
        variables: {
          ...category
        }
      })
      commit('ADD_CATEGORY', response.data.createCategory)
      return response.data.createCategory
    } catch (error) {
      console.log('EEEEEEEE', error)
    }
  }

}
