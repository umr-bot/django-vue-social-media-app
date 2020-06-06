<template>
    <div>
        <h3>Add Post</h3>
        <div class="add">
            <form @submit="onSubmit">
                <input type="text" v-model="content" placeholder="Add text...">
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
            content: "",
            location: "",
            category: "",
            groupID: null
        }
    },
    methods: {
        ...mapActions(['addPost']),
        onSubmit(e) {
            e.preventDefault();
            this.addPost({user: 1, content: this.content, location: this.location, category: this.category, groupID: this.groupID});
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