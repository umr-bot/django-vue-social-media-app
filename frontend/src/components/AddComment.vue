<template>
    <div>
        Add Comment
        <div class="addComment">
            <form @submit="onSubmit">
                <input type="text" v-model="text" placeholder="Add text...">
                <input type="submit" value="Submit">
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "AddComment",
    props: {
        parentData: {
            type: Number,
            default () {
                return ''
            }
        }
    },
    data() {
        return {
            text: ""
        }
    },
    methods: {
        ...mapActions(['addComment']),
        onSubmit(e) {
            e.preventDefault();
            this.addComment({text: this.text, postID: this.parentData});
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
    border: 1px solid #2c3e50;
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