<template>
    <div>
        <h3>Add Post</h3>
        <div class="add">
            Location:
                    <select @change="setLocationOption($event)">
                        <option value="Location_None">{{location}}</option>
                        <option v-for="location in Locations" :key="location.id" value:location.place>{{ location.place }}</option>
                    </select>
                    Category:
                    <select @change="setCategoryOption($event)">
                        <option value="Category_None">{{category}}</option>
                        <option v-for="category in Categories" :key="category.id" value:category.cat>{{ category.cat }}</option>
                    </select>
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
            username: "Anonymous",
            location: "",
            category: "",
            groupID: -1,
            Locations: [{
                id: 1,
                place: "Cape Town"
            },
            {
                id: 2,
                place: "Port Elizabeth"
            },
            {
                id: 3,
                place: "Kimberley"
            }
            ],
            Categories: [{
                id: 1,
                cat: "Photos"
            },
            {
                id: 2,
                cat: "Reviews"
            },
            {
                id: 3,
                cat: "Sports"
            }
            ]
        }
    },
    methods: {
        ...mapActions(['addPost']),
        onSubmit(e) {
            e.preventDefault();
            this.addPost({user: 1, content: this.content, location: this.location, category: this.category, groupID: this.groupID, username: this.username});
        },
        setLocationOption(e) {
            const filtOpt = e.target.options[e.target.options.selectedIndex].innerText;
            this.location = filtOpt
        },
        setCategoryOption(e) {
            const filtOpt = e.target.options[e.target.options.selectedIndex].innerText;
            this.category = filtOpt
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