<template>
    <div>
        <div class="sort">
            Sort By:
            <select name="sort" @change="showFilter($event), setFilterType($event)">
            <option value="timeAsc">Time</option>
            <option value="location">Location</option>
            <option value="category">Category</option>
            <option value="group_user">Group/User</option>
        </select>
        </div>
        <div v-if="timeActive === true">
            Time: 
            <select @change="setFilterOption($event)">
                <option value="Time_None">Select an order...</option>
                <option value="Ascending">Ascending</option>
                <option value="Descending">Descending</option>
            </select>
            <button @click="onSubmit">Go</button>
        </div>
        <div v-if="locActive === true">
            Location: 
            <select @change="setFilterOption($event)">
                <option value="Location_None">Select a Location...</option>
                <option v-for="location in Locations" :key="location.id" value:location.place>{{ location.place }}</option>
            </select>
            <button @click="onSubmit">Find</button>
        </div>
        <div v-if="catActive === true">
            Category: 
            <select @change="setFilterOption($event)">
                <option value="Category_None">Select a Category...</option>
                <option v-for="category in Categories" :key="category.id" value:category.cat>{{ category.cat }}</option>
            </select>
            <button @click="onSubmit">Find</button>
        </div>
        <div v-if="guActive === true">
            Group/User: 
            <select @change="setFilterOption($event)">
                <option value="Group_User_None">Select a Group/User...</option>
                <optgroup label="Groups:">
                    <option v-for="group in Groups_Users[0].grpUsr" :key="group.id" value:group>{{ group }}</option>
                </optgroup>
                <optgroup label="Users:">
                    <option v-for="user in Groups_Users[1].grpUsr" :key="user.id" value:user>{{ user }}</option>
                </optgroup>
            </select>
            <button @click="onSubmit">Find</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "FilterPosts",
    data() {
        return {
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
            }
            ],
            Groups_Users: [{
                id: 1,
                grpUsr: ["group1", "group2", "group3"]
            },
            {
                id: 2,
                grpUsr: ["user1", "user2", "user3"]
            }
            ],

            locActive: false,
            catActive: false,
            guActive: false,
            timeActive: true,

            filterType: "Time",
            filterOption: "Select an order..."
        }
    },
    methods: {
        ...mapActions(["filterPosts"]),
        showFilter(e) {
            const filterType = e.target.options[e.target.options.selectedIndex].innerText;

            switch (filterType) {
            case 'Time':
                this.timeActive = true
                this.locActive = false
                this.catActive = false
                this.guActive = false
                break;

            case 'Location':
                this.timeActive = false
                this.locActive = true
                this.catActive = false
                this.guActive = false
                break;

            case 'Category':
                this.timeActive = false
                this.locActive = false
                this.catActive = true
                this.guActive = false
                break;

            case 'Group/User':
                this.timeActive = false
                this.locActive = false
                this.catActive = false
                this.guActive = true
                break;
        
            default:
                break;
            }
        },
        setFilterOption(e) {
            const filtOpt = e.target.options[e.target.options.selectedIndex].innerText;
            this.filterOption = filtOpt
        },
        setFilterType(e) {
            const filtType = e.target.options[e.target.options.selectedIndex].innerText;
            this.filterType = filtType
        },
        onSubmit(e) {
            e.preventDefault();
            this.filterPosts({filterType: this.filterType, filterOption: this.filterOption});
        }
    }
};
</script>

<style scoped>
select {
    margin-top: 20px;
    padding: 6px;
    border: #2c3e50 1px solid;
}

.sort {
    margin-left: -10%;
}
</style>