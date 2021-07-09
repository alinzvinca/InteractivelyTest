<template>
    <div>
        
        <h1>{{ title }}</h1>
        
        <ul class="posts-list">
            <div v-for="group in posts" :key="group[0].userId">
                <h3>User {{group[0].userId}}</h3>
                <li v-for="post in group" :key="post.id">
                    <span class="title">{{post.title}}</span> <br>
                    <small class="body">{{post.body}}</small>
                </li>
            </div>
        </ul>
    </div>
</template>

<script>

    require('../app/app.store.js');

    export default{
    	data: function () {
    	    return {
                title: 'Posts',
                posts: []
            }
    	},
    	computed: {
    	},
    	mounted: function () {
            this.loadData();
    	},
        methods: {
            loadData: async function() {
                await Vue.axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
                    console.log(response);
                    let groups = response.data.reduce((r, a) => {
                        r[a.userId] = [...r[a.userId] || [], a];
                        return r;
                    }, {});
                    this.posts = groups;
                })
            },
        }
    }
</script>