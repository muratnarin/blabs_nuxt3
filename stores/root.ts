interface State {
  mini: boolean
}

export const useRootStore = defineStore('root', {
    state: (): State => ({
        mini: false
    }),
    getters: {
        getMini: (state) => state.mini,
    },
    actions: {
        setMini (payload:boolean) {
            this.mini = payload
        }
    },
})