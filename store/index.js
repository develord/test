// import Vue from 'vue'
import { postById, tagById, posts, images, page, categoryElements, tags } from '~/apollo/query'

// Learn more on https://nuxtjs.org/guide/vuex-store

// =================================================
// State
// =================================================
export const state = () => {

}

// =================================================
// Mutations
// =================================================
export const mutations = {

}
// =================================================
// Actions
// =================================================
export const actions = {
    async getCategoryElement (context, url) {
        const response = await this.app.apolloProvider.defaultClient.query({
          query: categoryElements,
          fetchPolicy: 'network-only',
          variables: {
            link: url
          }
        })
        return response.data.categoryElements
    },
}
