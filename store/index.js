export const state = () => ({
    favouriteList: []
})
  
export const mutations = {
      add(state, astre) {
        state.favouriteList.push(astre);
      },
      remove(state, astre) {
        state.favouriteList.splice(state.favouriteList.indexOf(astre), 1)
      }
}

export const getters = {
    getFavourites: (state) => {
        return state.favouriteList;
    }
}