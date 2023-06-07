import {createRouter,createWebHistory} from 'vue-router'
import Accueil from './components/Blog/accueil.vue'
import Blog from'./components/Blog/blog.vue'
import Post from './components/Blog/article.vue'


const routes = [
{name:"Accueil", path:"/", component: Accueil},
{name:"Blog", path:"/blog", component: Blog},
{name:"post", path:"/blog/post/:id", component: Post}
]


const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router