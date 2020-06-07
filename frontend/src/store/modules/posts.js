import axios from "axios";

const state = {
    posts: [],
    comments: []
};

const getters = {
    allPosts: (state) => state.posts
};

const actions = {

    async fetchPosts({ commit }) {
        const response1 = await axios.get("http://127.0.0.1:8000/api/Post/"); // TODO: setup backend to work with this part
        const posts = response1.data.results

        const response2 = await axios.get("http://127.0.0.1:8000/api/Comment/"); // TODO: setup backend to work with this part
        const comms = response2.data.results

        commit('setPosts', {posts, comms});
    },

    async addPost({ commit }, {user, content, location, category, groupID, username}) {

        //const response = await axios.post('http://127.0.0.1:8000/api/Post/', {newPost}); // TODO: setup backend to work with this part

        const now = new Date();
        var time = now.getTime();
        commit('incrementPostIDs')
        commit('newPost', {user, content, time, location, category, groupID, username})
    },

    async filterPosts({ commit }, {filterType, filterOption}) {

        console.log(filterType, filterOption);

        //const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_filter=${filterType}'); // TODO: setup backend to work with this part

        commit('sortPostsBy', {filterType, filterOption})
        //TODO: filter local posts //commit('setPosts', {posts: state.posts, comms: state.comments});
    },

    async setIsOpen ({ commit }, id) {
        commit('changeIsOpen', id)
    },

    async addComment ({ commit }, {content, postID, user}) {
        commit('plusComment', {content, postID, user})
    }
};

const mutations = {

    changeIsOpen: (state, id) => {
        for (let i = 0; i < state.posts[state.posts[0].id - id].comments.length; i++) {
            state.posts[state.posts[0].id - id].comments[i].isOpen = !state.posts[state.posts[0].id - id].comments[i].isOpen
        }
    },

    setPosts: (state, {posts, comms}) => {

        const createdPostsTemp = posts

        for (let i = 0; i < posts.length; i++) {
            if(posts[i].comments.length != 0) {
                for (let j = 0; j < posts[i].comments.length; j++) {
                    for (let k = 0; k < comms.length; k++) {
                        if(posts[i].comments[j] === comms[k].id){
                            createdPostsTemp[i].comments[j] = comms[k]
                        }
                    }
                }
            }
        }

        const createdPosts = []
        for (let i = 0; i < createdPostsTemp.length; i++) {
            createdPosts.unshift(createdPostsTemp[i])
        }

        state.posts = createdPosts
        state.comments = comms

    },

    newPost: (state, {user, content, time, location, category, groupID, username}) => {
        const post = {
            user: user,
            username: username,
            id : state.posts[0].id + 1,
            content: content,
            time: time,
            location: location,
            category: category,
            groupid: groupID,
            comments: [{
                id: 8,
                content: "---------------------------------",
                isOpen: false,
                user: 6
            }]
        };
        state.posts.unshift(post);
    },

    incrementPostIDs: (state) => {
        for (let i = 0; i < state.posts.length; i++) {
            state.posts[i].id = state.posts[i].id + 1
        }
    },

    plusComment: (state, {content, postID, user}) => {
        var postIsOpen = false;
        for (let i = 0; i < state.posts[state.posts[0].id - postID].comments.length; i++) {
            if (state.posts[state.posts[0].id - postID].comments[i].isOpen == true) {
                postIsOpen = true
            }
        }

        var indx = 0
        for (let i = 0; i < state.comments.length; i++) {
            indx = state.comments[i].id
        }

        const comment = {
            id: indx + 1,
            content: content,
            isOpen: postIsOpen,
            user: user
        };
        state.posts[state.posts[0].id - postID].comments.unshift(comment);
    },

    sortPostsBy: (state, {filterType, filterOption}) => {
        switch (filterType) {
            case 'Time':

                switch (filterOption) {
                    case 'Ascending':
                        console.log("TODO: SORT BY ASCENDING ORDER ON BACK-END")
                        break;

                    case 'Descending':
                        console.log("TODO: SORT BY DESCENDING ORDER ON BACK-END")
                    break;    
                
                    default:
                        console.log("SELECT A PROPER OPTION")
                        break;
                }

                break;

            case 'Location':

                console.log("Todo: SORT BY LOCATION ON SERVER SIDE USING: ", filterOption)

                break;

            case 'Category':

                console.log("Todo: SORT BY CATEGORY ON SERVER SIDE USING: ", filterOption)

                break;

            case 'Group/User':

                console.log("Todo: SORT BY GROUP/USER ON SERVER SIDE USING: ", filterOption)

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