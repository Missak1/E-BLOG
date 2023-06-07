<template>
    <div>
    <div class="container mx-auto">

        <h1 class="text-center"><span class="text-success">E-</span>BLOG</h1>

    </div>

    <div id="nav">
        <router-link to="/">Accueil</router-link>
        <router-link to="/blog">Blog</router-link>
        <router-link to="/blog/post">Compte</router-link>
    </div>
    <div class="container">
        <router-view></router-view>
    </div>
</div>
</template>


<script>
export default {
    name:"MyBlog",
}

</script>



<style scoped>
#nav{
    width:100%;
    height: 80px;
    background: #000;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 200;
 }
 a{
    font-weight: bold;
    color: #f1f1f1;
    margin: 0 1rem;
    text-decoration: none;
 }


a:hover{
    color: green;
}

h1{
    margin-top: 50px;
}

h1 span{
    font-weight: bold;
}


</style>