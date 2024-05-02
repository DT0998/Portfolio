interface NavState {
    isHoverMenu: number;
    isActiveLinkMenu: number;
}
// mutation types
export const onHoverMenu = 'onHoverMenu'
export const onActiveLinkMenu = 'onActiveLinkMenu'

export const navModule = {
    state: () => ({
        // Add state properties here
        isHoverMenu: 0,
        isActiveLinkMenu: 0
    }),
    mutations: {
        // Add mutations here synchronously
        [onHoverMenu](state: NavState, payload: number) {
            state.isHoverMenu = payload;
        },
        [onActiveLinkMenu](state: NavState, payload: number) {
            state.isActiveLinkMenu = payload;
        }
    },
    actions: {
        // Add actions here asynchronously
    },
    getters: {
        // Add getters here

    }
}

