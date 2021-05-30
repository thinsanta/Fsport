<template>
 
 <div v-if="messages">
     <div id="message-detail-background">
        <h2>{{messages.title}}</h2>
        <p>{{messages.body}}</p>
        <p>{{new Date(messages.timestamp).toLocaleString("se-SE")}}</p>

     </div>

 </div>
 
</template>

<script>
export default {

    
    data(){
        return{
            id: this.$route.params.id,
            messages: null
        }
    },

    mounted(){
         fetch('http://localhost:3000/messages/' + this.id)
     .then(res=> res.json())
     .then(data => this.messages = data)
     .catch(err => console.log(err))
    }


}
</script>

<style>
#message-detail-background{
    width: 1000px;
    margin: 0px auto;
    font-size: 14px;
}

#message-detail-background p{
    text-align: left;
}
</style>