<template>
<div>

  <div id="background">
    
<div id="constrains">
  
  <div v-for="message in messages" :key="message.id"  id="inbox-overview" @click="toggleRead(message)">

    <router-link :to="{name: 'MessagesDetail', params: {id: message.id} }">

       <div id="inbox-constrains">
      <h3 :class="{newMessage: message.state}" id="inbox-title">{{message.title}}</h3>
      </div>
    
        <p id="message-body">{{message.body}}</p>
        
      <div id="timestamp" >{{new Date(message.timestamp).toLocaleString("se-SE")}}</div>
     
    </router-link>
     
     </div>

  </div>
  </div>
 </div>
</template>

<script>

export default {
data(){

    return{
      // to store the data in an array
        messages: [],
    }
 },
// Fetching the json data
 mounted(){
     fetch('http://localhost:3000/messages')
     .then(res=> res.json())
     .then(data => this.messages = data)
     .catch(err => console.log(err))
 },
 //This method vill change the message state from 1 to 0. Meaning the message has been read, but it won't work unless you press the corner of the boxes.
methods:{
  toggleRead(read){
   isFav = read.state = 0
  }
}
}
</script>

<style>

#inbox-constrains{
    margin: 0;
    border-bottom: solid 1.5px whitesmoke;
    height: 30px;
}
#inbox-overview{
  display: inline-block;
  width: 300px;
  height: 115px;
  border: solid #dbd7db;
  border-radius: 10px;
  text-align: left;
  margin-bottom: 15px;
  margin-left: auto;
  margin-right: 61px;
  margin-top: 30px;
  padding: 0px;
}
#inbox-overview:nth-child(3){
  margin-right: 0;
  
}
#inbox-overview a{
  text-decoration: none;
  color: #dbd7db;
  
}
#inbox-overview:hover{
  
  transform: scale(1.1);
  transition: all .2s ease-in-out;
}
#timestamp{
  text-align: right;
  font-size: 12px;
  padding-right: 10px;
  height: 35px;
}
#inbox-title{
  margin-top: 0;
  padding-top: 5px;
  padding-left: 5px;
}
#constrains{
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  margin-top: 90px;
  width: 1100px
}
#message-body{
      position: relative;
    overflow: hidden;
    max-height: 23px;
    padding-left: 10px;
    font-size: 13px;
}
#inbox-constrains .newMessage{
  background: linear-gradient(45deg, #ff8a00fc, transparent);
  border-radius: 5px;
}
/*#message-body::after{
  content: "";
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    pointer-events: none;
    width: 100%;
    height: 1em;
    background-image: linear-gradient(to bottom, transparent, white);
}*/
</style>