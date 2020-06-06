<template>
    <b-nav-form @submit.prevent="logout">
        <b-button type="submit" class="my-2 ml-2"> Logout</b-button>
    </b-nav-form>
</template>

<script>
export default {
    name: 'Logout',
    components: {

    },
    data() {
        return{
            token: localStorage.getItem('user-token') || null,
        }
    },
    methods:{
        logout() {
            localStorage.removeItem('user-token');
            this.token = null;
            this.$router.push('/')
    },
},

}
</script>
