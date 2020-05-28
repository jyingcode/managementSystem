const state = {
	list: [],
	loading: false,
}
const mutations = {
	SET_LIST: (s, v) => {
		s.list = v
	},
	SET_LOADING: (s, v) => {
		s.loading = v
	},

	TOGGLE_SIDEBAR: (state) => {
		state.sidebar.opened = !state.sidebar.opened
		state.sidebar.withoutAnimation = false
	},
	CLOSE_SIDEBAR: (state, withoutAnimation) => {
		state.sidebar.opened = false
		state.sidebar.withoutAnimation = withoutAnimation
	},
	TOGGLE_DEVICE: (state, device) => {
		state.device = device
	},
	SET_SIZE: (state, size) => {
		state.size = size
	},
}

const actions = {
	// getList({ commit }, p) {
	// 	commit('SET_LOADING', true)
	// 	getList(p).then((data) => {
	// 		console.log(data)
	// 		console.log(commit)
	// 		const list = data.list
	// 		commit('SET_LIST', list)
	// 		commit('SET_LOADING', false)
	// 	})
	// },
	// addOrder(data) {
	// 	return submit(data)
	// },
	// deleteData(data) {
	// 	return onDelete(data)
	// },
}

export default {
	state,
	mutations,
	actions,
}
