const state = {
    users: [
        {
          id:1,
          name:'Tharun',
          grouplist: ['lel','wow','lawl']

        }
      ]
};

const getters = {
    allUsers: (state) => state.users
};

const actions = {
    async fetchUsers({commit}){
        commit('setUsers',state.users)
    },

    async changeVal({commit},args){
        commit('changeit',args)
        console.log(args[1])
    }
};

const mutations = {
    setUsers: (state,users) => (state.users=users),
    
    changeit: (state,args) => {
        switch (args[0]) {
            case 'Join':
                state.users[0].grouplist[0] = args[1]
                break;
            case 'Create':
                state.users[0].grouplist[0] = 'lol2'
                break;
            case 'Delete':
                state.users[0].grouplist[0] = 'lol3'
                break;
            default:
                break;
            
        }

        
        
    }


};

export default {
    state,
    getters,
    actions,
    mutations
};