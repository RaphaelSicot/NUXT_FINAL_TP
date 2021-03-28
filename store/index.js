export const state = () => ({
    favouriteList: []
})
  
export const mutations = {
      // Ajoute un astre à la liste des favoris 
      add(state, astre) {
        state.favouriteList.push(astre);
      },
      // Retire un astre de la liste des favoris
      remove(state, astre) {
        state.favouriteList.splice(state.favouriteList.indexOf(astre), 1)
      }
}

export const getters = {
    getFavourites: (state) => {
        return state.favouriteList;
    }
}