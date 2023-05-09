<template>
    <div class="main">
        <div class="box">
            <h1>Sign UP</h1>

            <input type="text" v-model="RData.name" name=""  placeholder="Enter Yor Name">
            <input type="email" v-model="RData.email" email=""  placeholder="Enter Email Id">
            <input type="password" v-model="RData.password" name="" placeholder="Enter Password">
            <input type="password" v-model="CPassword" name="" placeholder="Conform Password">

             <div class="vel"> <input type="checkbox" id="scales" name="" checked>
              <h2>Eligibility criteria. Accurate information. Pay fee. Respectful behavior.
                </h2>  
            </div>
            <button v-on:click="Submit" type="submit">SIGN UP</button>
            <div class="login">
                <router-link href="" to="/login"> Already have an account? Login </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import  axiOs from 'axios'

export default {
    data(){
       return{
       RData:{
        name:'',
        email:'',
        password:''
        
       },
       CPassword:''
    }
    },
    methods:{
       async Submit(){

        if(this.RData.password === this.CPassword){
            let result = await axiOs.post("http://localhost:8080/User", this.RData );
               
               //    console.log(result);
                  if(result.status==200){
                   alert("SingUp Done!");
                   localStorage.setItem("user-info",JSON.stringify(result.data));
                   this.$router.push({name:'home'});
                  }else{
                    this.$router.push({name:'Alert'});
                  }
               }else {
            alert('password are not matching');
        }

        }    
          
    },


    mounted() {
        let user = localStorage.getItem('user-info');
        if(user){
            this.$router.push({name:'home'})
        }
        // console.log();
    }

}
           
</script>

<style scoped>
.main{
    margin: 5% 5% 5% 30%;
}
h1{
    text-align: center;
    padding: 30px;
}
input{
    display: block;
    margin: 3% auto;
    width: 70%;
    height: 6%;
    font-size: 130%;
    padding-left: 2%;
    padding-right: 2%;
    border-radius: 15px;
}
.box{
    background-image: linear-gradient(
  50deg,
  hsl(180deg 100% 40%) 0%,
  hsl(177deg 100% 37%) 11%,
  hsl(175deg 100% 34%) 22%,
  hsl(172deg 100% 30%) 33%,
  hsl(168deg 100% 27%) 43%,
  hsl(164deg 100% 24%) 53%,
  hsl(168deg 100% 27%) 63%,
  hsl(172deg 100% 30%) 72%,
  hsl(175deg 100% 34%) 82%,
  hsl(177deg 100% 37%) 91%,
  hsl(180deg 100% 40%) 100%
);
    border-radius: 2rem;
    height: 760px;
    width: 90%;
    margin: auto;
}
.vel{
    margin-left: 0px;
    width: 80%;
    margin: 2% auto;
    display: flex;
    flex-direction: row;
    
}
.vel input{
    margin: 7% 3% !important;
    width: 50px;
    height: 25px;
}
.vel h2{
    color: black;
}
button{
    width: 70%;
    margin: 2% 15% auto;
    height: 7%;
    font-size: 140%;
    border-radius: 20px;
}
.login{
    width: 80%;
    padding: 5%;
}
.login a{
    float:right;
    font-size: 130%;
}
button:hover{
    box-shadow: 0px 0px 30px 7px white;
    border: none;
}
@media (min-width: 2720px){

.box{
    width: 90%;
    height: 1000px !important;
}
}
@media (min-width: 2700px){

.box{
    width: 90%;
    height: 1350px !important;
}
}
@media (min-width: 2500px){

.box{
    width: 90%;
    height: 950px;
}
}
@media (min-width: 2200px){

.box{
    width: 90%;
    height: 1000px;
}
}
@media (min-width: 1700px){

.box{
    width: 90%;
    height: 750px ;
}
}
@media (min-width: 1500px){

.box{
    width: 90%;
    height: 850px;
}
}

@media (max-width: 1200px){

.main{
    margin: 10% 5% 10% 35%;
}
}
@media (max-width: 991px){

.main{
    margin: 10% 5% 10% 5%;
}
}
@media (max-width: 900px){

.box{
    width: 90%;
    height: 730px;
}
}
@media (max-width: 800px){

.box{
    width: 90%;
    height: 700px;
}
}
@media (max-width: 700px){

.box{
    width: 90%;
    height: 700px;
}
}
@media (max-width: 600px){

    .box{
        width: 90%;
        height: 700px;
    }
}
@media (max-width: 400px){

.box{
    width: 95%;
    height: 680px;
}
input{
    width: 85%;
    height: 5%;
    font-size: 110%;
}
.vel{
    width: 90%;
}
button{
    width: 85%;
    margin: 7%;
}
.login{
    width: 88%;
    padding: 2%;
}
}
</style>