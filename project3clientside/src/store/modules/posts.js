import axios from "axios";

const state = {
    posts: []
};

const getters = {
    allPosts: (state) => state.posts
};

const actions = {
    async fetchPosts({ commit }) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5'); // TODO: setup backend to work with this part

        commit('setPosts', response.data);
    },
    async addPost({ commit }, {userID, title, body, location, category, groupID}) {
        //const response = await axios.post('https://jsonplaceholder.typicode.com/posts', { title, body }); // TODO: setup backend to work with this part

        const now = new Date();
        var time = now.getTime();
        commit('incrementPostIDs')
        commit('newPost', {userID, title, body, time, location, category, groupID})
    },
    async filterPosts({ commit }, e) {
        const filterType = e.target.options[e.target.options.selectedIndex].innerText;

        console.log(filterType);

        //const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_filter=${filterType}'); // TODO: setup backend to work with this part

        commit('sortPostsBy', filterType)
        commit('setPosts', state.posts);
    }
};

const mutations = {
    setPosts: (state, posts) => (state.posts = posts),
    newPost: (state, {userID, title, body, time, location, category, groupID}) => {
        const post = {
            userId: userID,
            title: title,
            id : 1,
            body: body,
            time: time,
            location: location,
            category: category,
            groupid: groupID
        };
        state.posts.unshift(post);
    },
    incrementPostIDs: (state) => {
        var i = 0;
        for (i = 0; i < state.posts.length; i++) {
            state.posts[i].id = state.posts[i].id + 1
        }
    },
    sortPostsBy: (state, filterType) => {
        switch (filterType) {
            case 'Time':

                console.log("Todo: SORT BY TIME ON SERVER SIDE")

                break;

            case 'Location':

                console.log("Todo: SORT BY LOCATION ON SERVER SIDE")

                break;

            case 'Category':

                console.log("Todo: SORT BY CATEGORY ON SERVER SIDE")

                break;

            case 'Group/User':

                console.log("Todo: SORT BY GROUP/USER ON SERVER SIDE")

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