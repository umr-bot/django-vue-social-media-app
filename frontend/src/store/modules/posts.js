import axios from "axios";

const state = {
    posts: [{
        user: 1,
        time: 0,
        location: 'Cape Town',
        id: 1,
        groupid: null,
        content: 'Post 2',
        comments: [{
            id: 3,
            content: 'Comment 3',
            isOpen: false,
            user: 1
        },
        {
            id: 2,
            content: 'Comment 2',
            isOpen: false,
            user: 1
        },
        {
            id: 1,
            content: 'Comment 1',
            isOpen: false,
            user: 1
        }
        ],
        category: null
    },
    {
        id: 2,
        content: 'Post 1',
        user: 1,
        comments: [{
            id: 3,
            content: 'Comment 3',
            isOpen: false,
            user: 1
        },
        {
            id: 2,
            content: 'Comment 2',
            isOpen: false,
            user: 1
        },
        {
            id: 1,
            content: 'Comment 1',
            isOpen: false,
            user: 1
        }
        ]
    }
    ]
};

const getters = {
    allPosts: (state) => state.posts
};

const actions = {

    async fetchPosts({ commit }) {
        //const response = await axios.get("http://127.0.0.1:8000/api/Post/"); // TODO: setup backend to work with this part

        commit('setPosts', state.posts);
    },

    async addPost({ commit }, {user, content, location, category, groupID}) {
        //const response = await axios.post('https://jsonplaceholder.typicode.com/posts', { title, body }); // TODO: setup backend to work with this part

        const now = new Date();
        var time = now.getTime();
        commit('incrementPostIDs')
        commit('newPost', {user, content, time, location, category, groupID})
    },

    async filterPosts({ commit }, {filterType, filterOption}) {

        console.log(filterType, filterOption);

        //const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_filter=${filterType}'); // TODO: setup backend to work with this part

        commit('sortPostsBy', {filterType, filterOption})
        commit('setPosts', state.posts);
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
        for (let i = 0; i < state.posts[id-1].comments.length; i++) {
            state.posts[id-1].comments[i].isOpen = !state.posts[id-1].comments[i].isOpen
        }
    },

    setPosts: (state, posts) => (state.posts = posts),

    newPost: (state, {user, content, time, location, category, groupID}) => {
        const post = {
            user: user,
            id : 1,
            content: content,
            time: time,
            location: location,
            category: category,
            groupid: groupID,
            comments: []
        };
        state.posts.unshift(post);
    },

    incrementPostIDs: (state) => {
        for (let i = 0; i < state.posts.length; i++) {
            state.posts[i].id = state.posts[i].id + 1
        }
    },

    plusComment: (state, {content, postID, user}) => {
        var indx = 1;
        var postIsOpen = false;
        for (let i = 0; i < state.posts[postID-1].comments.length; i++) {
            indx = i + 2
            if (state.posts[postID-1].comments[i].isOpen == true) {
                postIsOpen = true
            }
        }
        const comment = {
            id: indx,
            content: content,
            isOpen: postIsOpen,
            user: user
        };
        state.posts[postID-1].comments.unshift(comment);
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