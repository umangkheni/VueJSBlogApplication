<template>
    <div class="main">
        <div class="box">
            <h1>Login</h1>

            <input type="email"    v-model="LData.email"      placeholder="Enter Email Id">
            <input type="password" v-model="LData.password"   placeholder="Enter Password">
             <div class="vel"> 
              <h2>Forget Password</h2>  
            </div>
            <button v-on:click="LogIn" type="submit" >SIGN UP</button>
            <div class="login">
                <RouterLink href="" to="/SignUp"> Don't Have an Account? Create Now! </RouterLink>
            </div>

        </div>
    </div>
</template>

<script>
import  axiOs from 'axios';
export default{
    data(){
       return{
       LData:{
        email:'',
        password:''
       }
    }
    },
    
    methods:{
       async LogIn(){
        const Result = await axiOs.post("http://localhost:8080/login", this.LData );

        //    console.log(Result);
           if(Result.status == 200){

            alert("Login Done!")
            localStorage.setItem("user-info",JSON.stringify(Result.data))
            this.$router.push({name:'home'})
           }else{
           alert("information is in correct")
           }
           
        }
    },


    mounted() {
        let user = localStorage.getItem('user-info');
        if(user){
            this.$router.push({name:'home'})
        }
        console.log();
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
    margin: 4% auto;
    width: 70%;
    height: 7%;
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
    height: 500px;
    width: 75%;
    margin: 20% auto;
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
    height: 830px !important;
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
    width: 70%;
    height: 710px
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
    height: 600px;
}
}
@media (max-width: 800px){

.box{
    width: 90%;
    height: 550px;
}
}
@media (max-width: 700px){

.box{
    width: 90%;
    height: 500px;
}
}
@media (max-width: 600px){

    .box{
        width: 90%;
        height: 490px;
    }
}
@media (max-width: 400px){

.box{
    width: 95%;
    height: 490px;
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