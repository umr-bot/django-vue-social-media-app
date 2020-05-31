const state = {
    comments: [
        {
            postid: 1,
            commentid: 1,
            text: 'Comment 1',
            isOpen: false
        },
        {
            postid: 1,
            commentid: 2,
            text: 'Comment 2',
            isOpen: false
        },
        {
            postid: 2,
            commentid: 3,
            text: 'Comment 3',
            isOpen: false
        },
        {
            postid: 2,
            commentid: 4,
            text: 'Comment 4',
            isOpen: false
        },
        {
            postid: 3,
            commentid: 5,
            text: 'Comment 5',
            isOpen: false
        },
        {
            postid: 3,
            commentid: 6,
            text: 'Comment 6',
            isOpen: false
        },
        {
            postid: 4,
            commentid: 7,
            text: 'Comment 7',
            isOpen: false
        },
        {
            postid: 4,
            commentid: 8,
            text: 'Comment 8',
            isOpen: false
        },
        {
            postid: 5,
            commentid: 9,
            text: 'Comment 9',
            isOpen: false
        },
        {
            postid: 5,
            commentid: 10,
            text: 'Comment 10',
            isOpen: false
        },
        {
            postid: 1,
            commentid: 11,
            text: 'Comment 11',
            isOpen: false
        },
        {
            postid: 4,
            commentid: 12,
            text: 'Comment 12',
            isOpen: false
        },
        {
            postid: 4,
            commentid: 13,
            text: 'Comment 13',
            isOpen: false
        }
    ]
};

const getters = {
    allComments: (state) => state.comments
};

const actions = {
    async setIsOpen ({ commit }, id) {
        commit('changeIsOpen', id)
    },
    async updateCommentPostID ({ commit }) {
        commit('updatePostIDs')
    },
    async addComment ({ commit }, {text, postID}) {
        commit('plusComment', {text, postID})
    }
};

const mutations = {
    changeIsOpen: (state, id) => {
        var i = 0;
        for (i = 0; i < state.comments.length; i++) {
            if (state.comments[i].postid == id) {
                state.comments[i].isOpen = !state.comments[i].isOpen
            }
        }
    },
    updatePostIDs: (state) => {
        var i = 0;
        for (i = 0; i < state.comments.length; i++) {
            state.comments[i].postid++
        }
    },
    plusComment: (state, {text, postID}) => {
        var indx = 0;
        var postIsOpen = false;
        for (let i = 0; i < state.comments.length; i++) {
            indx = i + 2
            if (state.comments[i].postid == postID && state.comments[i].isOpen == true) {
                postIsOpen = true
            }
        }
        const comment = {
            postid: postID,
            commentid: indx,
            text: text,
            isOpen: postIsOpen
        };
        state.comments.unshift(comment);
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};