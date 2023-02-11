

interface State {
  firstName: string
  lastName: string
  userId: number | null
}

export const useAuthUserStore = defineStore('authUser', {
  // convert to a function
  state: (): State => ({
    firstName: '',
    lastName: '',
    userId: null
  }),
  getters: {
    // firstName getter removed, no longer needed
    fullName: (state) => `${state.firstName} ${state.lastName}`,
    loggedIn: (state) => state.userId !== null,

  },
  actions: {
    // no context as first argument, use `this` instead
    async loadUser (id: number) {
      if (this.userId !== null) throw new Error('Already logged in')
      // @ts-ignore
      const {data} = await fetch(`/api/users/${id}`)
      this.updateUser(data)
    },
    // mutations can now become actions, instead of `state` as first argument use `this`
    updateUser (payload:State) {
      this.firstName = payload.firstName
      this.lastName = payload.lastName
      this.userId = payload.userId
    },
    // easily reset state using `$reset`
    clearUser () {
      this.$reset()
    }
  }
})