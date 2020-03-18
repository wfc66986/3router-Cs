import Cookies from 'js-cookie'

const view = {
    namespaced: true,
    state:{
        sidebar:{
            opened: Cookies.get('sidebarStatus')?(!!+Cookies.get('sidebarStatus')):true,
            withoutAnimation:false
        },
        visitedViews:[],
        cachedViews:[]
    },
    mutations:{
        TOGGLE_SIDEBAR: state => {
            state.sidebar.opened = !state.sidebar.opened
            state.sidebar.withoutAnimation = false
            if (state.sidebar.opened) {
                Cookies.set('sidebarStatus', 1)
            } else {
                Cookies.set('sidebarStatus', 0)
            }
        }
    },
    actions:{
        toggleSideBar({ commit }) {
            commit('TOGGLE_SIDEBAR')
        }
    }
}

export default view