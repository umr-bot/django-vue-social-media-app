<template>
    <div>
        <h3>Add Post</h3>
        <div class="add">
            <form @submit="onSubmit">
                <input type="text" v-model="title" placeholder="Add title...">
                <input type="text" v-model="body" placeholder="Add text...">
                <input type="submit" value="Submit">
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "AddPost",
    data() {
        return {
            title: "",
            body: ""
        }
    },
    methods: {
        ...mapActions(['addPost', 'updateCommentPostID']),
        onSubmit(e) {
            e.preventDefault();
            this.updateCommentPostID();
            this.addPost({userID: 1, title: this.title, body: this.body});
        }
    }
}
</script>

<style scoped>
form {
    display: flex;
}

input[type="text"] {
    flex: 10;
    padding: 10px;
    border: 1px solid #ccc;
    outline: 0;
}

input[type="submit"] {
    flex: 2;
    background: #2c3e50;
    color: #fff;
    border: 1px #41b883 solid;
    cursor: pointer;
}
</style>