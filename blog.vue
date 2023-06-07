<template>
    
    <div>
        <h1 class="text-center">Bienvenue sur le blog</h1>

        <h2 class="texte-center text-success">Découvrez les article</h2>

        <ul>
            <li v-for="(article,index) in allArticle" v-bind:key="index">     



                <router-link v-bind:to="`/blog/post/${index + 1}`">
                <div class="card m-2">
                    <img v-bind:src="article.thumbnaiUrl" alt="">
                    <h4> {{ article.title }}</h4>
                    <p> ID : {{ article.id }}</p>
                    <p> URL : {{ article.url }}</p>
                </div>
            
            </router-link>
            </li>
        </ul>


    </div>
</template>


<script>
import axios from 'axios'
export default {
    name:"MyBlog",
    data(){
        return{
            allArticle: []
        }
    },
    created(){
        axios.get(`https://jsonplaceholder.typicode.com/photos`)
    .then(reponse => {
        console.log(reponse);
        for(const blogPost of reponse.data){
            this.allArticle.push(blogPost)
        }
    })
    }
}

</script>



<style scoped>

.card{
    width: 350px;
    height: 550px;
}
 ul{
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
 }

</style>