<template>
    <div>
        
        <h1>{{ title }}</h1>
        
        <button @click="orderASC">Sort (ASC)</button>
        <button @click="orderDSC">Sort (DESC)</button>
        
        <ul class="users-list">
            <li v-for="user in users" :key="user.id">
                <strong>{{ user.username }} ({{ user.name }})</strong> <br>
                <small>Company: {{ user.company.name }}</small>
            </li>
        </ul>
    </div>
</template>

<script>

    require('../app/app.store.js');

    export default{
    	data: function () {
    	    return {
                title: 'Users page',
                users: [
                    {
                        "id": 1,
                        "name": "Leanne Graham",
                        "username": "Bret",
                        "email": "Sincere@april.biz",
                        "address": {
                            "street": "Kulas Light",
                            "suite": "Apt. 556",
                            "city": "Gwenborough",
                            "zipcode": "92998-3874",
                            "geo": {
                                "lat": "-37.3159",
                                "lng": "81.1496"
                            }
                        },
                        "phone": "1-770-736-8031 x56442",
                        "website": "hildegard.org",
                        "company": {
                            "name": "Romaguera-Crona",
                            "catchPhrase": "Multi-layered client-server neural-net",
                            "bs": "harness real-time e-markets"
                        }
                    },
                    {
                        "id": 2,
                        "name": "Alin Zvinca",
                        "username": "zvincaalin",
                        "email": "alin.zvanca@yahoo.com",
                        "address": {
                            "street": "Soseaua Pacurari",
                            "suite": "Nr 1",
                            "city": "Iasi",
                            "zipcode": "700536",
                            "geo": {
                                "lat": "47.173743",
                                "lng": "27.551199"
                            }
                        },
                        "phone": "0745063805",
                        "website": "alinzvinca.eu",
                        "company": {
                            "name": "Interactively",
                            "catchPhrase": "Our work helps companies improve their online identity, gain and engage more customers and maximise their profit.",
                            "bs": "cooked enough to be hired"
                        }
                    }
                ]
            }
    	},
    	computed: {
            msg: function () {
                return this.$store.state.users_msg;
            }
    	},
    	mounted: function () {
    	},
        methods: {
            orderASC: function () {
                this.users = this.users.sort((a, b) => b.name.localeCompare(a.name));
            },
            orderDSC: function () {
                this.users = this.users.sort((a, b) => a.name.localeCompare(b.name));
            }
        }
    }
</script>