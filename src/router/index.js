import { createRouter, createWebHistory } from 'vue-router'
import Messages from '../views/Messages.vue'
import Account from '../views/Account.vue'
import Lobby from '../views/Lobby.vue'
import MessagesDetail from '../views/MessagesDetail.vue'
const routes = [
 
  {
    path: '/messages',
    name: 'Messages',
    component: Messages
  },
  {
    path: '/account',
    name: 'Account',
    component: Account
  },
  {
    path: '/lobby',
    name: 'Lobby',
    component: Lobby
  },
  {
    path: '/messages/:id',
    name: 'MessagesDetail',
    component: MessagesDetail,
    props:true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
