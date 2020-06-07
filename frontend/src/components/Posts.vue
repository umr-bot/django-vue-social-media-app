<template>
  <div>
      <h3>Posts</h3>
      <div class="posts">
            <div v-for="post in allPosts" :key="post.id" class="post" @click.self="setIsOpen(post.id)">
                User: {{ post.username }}<br>Location: {{ post.location }} <br><br>
                Text: {{ post.content }} <br><br>
                Category: {{ post.category }} <br><br>
                <div class="comments">
                    <AddComment :parentData="post.id" /> <br>
                    <transition-group name="fade">
                        <div v-for="comment in post.comments" :key="comment.id">
                            <p v-if="comment.isOpen == true"> Comment: {{comment.content}} </p>
                        </div>
                    </transition-group>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AddComment from './AddComment'

export default {
    name: "Posts",
    components: {
        AddComment
    },
    methods: {
        ...mapActions(['fetchPosts', 'setIsOpen'])
    },
    computed: mapGetters(['allPosts']),
    created() {
        this.fetchPosts();
    }
}

</script>

<style scoped>
.posts {
    display: block;
    border: solid #ccc 2pt;
    grid-template-rows: auto;
    grid-gap: 1rem;
}

.post {
    border: 1px solid #2c3e50;
    background: #ccc;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
}
.comments {
    border: solid #ccc 2pt;
    background: #ccc;
}
</style>