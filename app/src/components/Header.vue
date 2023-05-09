<template>
    <header :class="{ show:Class }"  class="tm-header" id="tm-header">
        <div class="tm-header-wrapper">
            <button v-on:click="Class=!Class" class="navbar-toggler" type="button" aria-label="Toggle navigation">
                <i class="fas fa-bars">
                    <img
                  class="imag img"
                  src="../assets/search-cartoon-icon-transparent-png-stickpng-19.png"
                  alt=""
                />
                </i>
                
            </button>
            <div class="tm-site-header">
                <div class="mb-3 mx-auto tm-site-logo">
                    <i class="fas fa-times fa-2x">
                        <img class="img" src="../assets/pngwing.com (1).png" alt="">
                    </i>
                    </div>            
                <h1 class="text-center">{{userName}}</h1>
            </div>
            <nav class="tm-nav" id="tm-nav">            
                <ul>
                    <li  class="tm-nav-item "><RouterLink  class="tm-nav-link" to="/">
                        <i class="fas fa-home"></i>

                        Blog Home
                    </RouterLink></li>
                    <li  class="tm-nav-item"><router-link  class="tm-nav-link" to="AddBlog">
                        <i class="fas fa-pen"></i>
                        Add Blog
                    </router-link></li>
                    <li class="tm-nav-item"><router-link to="/MyBlog" class="tm-nav-link">
                        <i class="far fa-comments"></i>
                        My Blog
                    </router-link></li>
                    <li id="singUp"  class="tm-nav-item "><router-link  class="tm-nav-link" to="SignUp">
                        <i class="far fa-comments"></i>
                        Sign Up
                    </router-link></li>
                    <li id="LogOut"  class="tm-nav-item "><router-link v-on:click="LogOut" class="tm-nav-link" to="SignUp">
                        <i class="far fa-comments"></i>
                        Log Out
                    </router-link></li>
                </ul>
            </nav>
            <div class="tm-mb-65">
                <a rel="nofollow" href="" class="tm-social-link">
                    <i class="fab fa-facebook tm-social-icon"></i>
                </a>
                <a href="" class="tm-social-link">
                    <i class="fab fa-twitter tm-social-icon"></i>
                </a>
                <a href="" class="tm-social-link">
                    <i class="fab fa-instagram tm-social-icon"></i>
                </a>
                <a href="" class="tm-social-link">
                    <i class="fab fa-linkedin tm-social-icon"></i>
                </a>
                
            </div>
            <p class="tm-mb-80 pr-5 text-white">
                Xtra Blog is a multi-purpose HTML template from TemplateMo website. Left side is a sticky menu bar. Right side content will scroll up and down.
            </p>
        </div>
    </header>
    <RouterView/>

</template>


<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
    Name:'Header',
    components:{
        
    },
    data() {
         return {
           userName:'',
           user:"",
           Class: false
     }
    },

    methods:{
        LogOut(){
            localStorage.clear();
            document.getElementById('singUp').style.display = 'block';
            document.getElementById('LogOut').style.display = 'none';
            const user = localStorage.getItem('user-info');
            const userName = JSON.parse(user)
            this.userName = userName.name;
            alert('logout successfully')

        },
        navbarToggler(){

        }
        // AddBlog(){

        //     const user = localStorage.getItem('user-info');
        //     if(user){
        //         this.$route.push({name:'AddBlog'});
        //     }else{
        //         this.$route.push({name:'SignUp'})
        //     }

        // }
    },
    mounted(){
        
        const user = localStorage.getItem('user-info');
        this.user = user
        if(user){
            const userName = JSON.parse(user)
            // console.log(userName.Name);
            this.userName = userName.name || userName.data.name;
            document.getElementById('singUp').style.display = 'none';
            document.getElementById('LogOut').style.display = 'block';


        }else{
            document.getElementById('LogOut').style.display = 'none';
            document.getElementById('singUp').style.display = 'block';

        }
        

    }

}
</script>

<style >
nav a.router-link-exact-active::after {
  color: var(--color-text);
  color: #c4302b;
  content: '';
    width: 100%;
    max-width: 300px;
    height: 75px;
    display: block;
    border: 1px solid white;
    margin-left: -30px;;
    margin-top: 15px;
    position: absolute;
    z-index: -1000;
}
nav a.router-link-exact-active{
    color: #0CC;
    background-color: white;
    text-decoration: none;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}
.img{
    width: 60%;
    padding: 20%;
}
p, span { color: #999; }
hr { 
    border-top-color: #CCC; 
    margin-top: 10px;
    margin-bottom: 10px;
}
.form-control::-webkit-input-placeholder { color: #999; }  
.form-control:-ms-input-placeholder { color: #999; }  
.form-control::placeholder { color: #999; }

.text-center{
    text-align: center;
}
.mx-auto{
    margin: auto;
}
.tm-header {
    background-color: #0CC;
    color: white;
    
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 100;
    width: 400px;
    overflow-y: visible;     
}
.tm-nav-item:active{
    color: #0CC;
    background-color: white;
    text-decoration: none;
}

.tm-header-wrapper {
    overflow-y: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
    /* padding: 30px; */
    width: 100%;
    height: 100%; 
}

.tm-header-wrapper::-webkit-scrollbar {
    width: 0;
    height: 0;
}

.tm-site-header {
    margin-top: 50px;
    margin-bottom: 50px;
}

.tm-site-logo {
    width: 75px;
    height: 75px;
    border-radius: 50%;
    background-color: white;    
    display: flex;
    align-items: center;
    justify-content: center;
}

.tm-site-logo i { color: #0CC; }


.tm-post { max-width: 470px; }

.tm-row {
    max-width: 980px;
    justify-content: space-between;
}

.tm-nav { margin-bottom: 100px; }

.tm-nav-item {
    list-style: none;
    margin-bottom: 30px;
}

.tm-nav-link {
    color: white;
    background-color: transparent;
    height: 15px;
    width: 60%;
    max-width: 300px;    
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    padding: 30px;
}

.tm-nav-item:hover .tm-nav-link,
.tm-nav-item.active .tm-nav-link
 {
    color: #0CC;
    background-color: white;
    text-decoration: none;
}

.tm-nav ul { position: relative; }

/* .tm-nav-item:hover:after,
.tm-nav-item.active:after {
    content: '';
    width: 100%;
    max-width: 300px;    
    height: 75px;
    display: block;
    border: 1px solid white;
    margin-left: 10px;
    margin-top: -65px;
    position: absolute;
    z-index: -1000;
} */

.tm-nav-link i { margin-right: 37px; }

ul { 
    margin: 0; 
    padding: 0;
}

.tm-nav { margin-left: -30px; }

.tm-social-link {
    display: inline-block;
    background-color: white;    
    font-size: 1.4rem;
    width: 50px;
    height: 50px;
    text-align: center;
    padding-top: 8px; 
    margin-right: 15px;   
    margin-bottom: 15px;
}

.tm-social-icon { 
    color: #0CC;    
    transition: all 0.3s ease;
}

.tm-social-link:hover .tm-social-icon.fa-facebook { color: #3b5998; }
.tm-social-link:hover .tm-social-icon.fa-twitter { color: #00acee; }
.tm-social-link:hover .tm-social-icon.fa-instagram { color: #3f729b; }
.tm-social-link:hover .tm-social-icon.fa-linkedin { color: #0e76a8; }
.navbar-toggler { display: none; }

.tm-search-form {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}


.effect-lily:hover img { opacity: 1; }

.effect-lily:hover img {
    -webkit-transform: translate3d(0,0,0);
	transform: translate3d(0,0,0);
}

.tm-post { margin-bottom: 75px; }

.tm-new-badge {
    top: 25px;
    right: -10px;
    background-color: #0CC;
    color: white;
    padding: 5px 20px;
}

.tm-post-title {
    font-size: 1.7rem;
    transition: all 0.3s ease;
}

.tm-h3 {
    font-size: 1.3rem;
    color: #999;
}

.tm-post-link:hover .tm-post-title { color: #0CC; }

.tm-btn {
    display: inline-block;
    border-radius: 5px;
    font-size: 1.3rem;
    transition: all 0.3s ease;
}

.tm-btn-primary {    
    background-color: #0CC;
    color: white;  
    padding: 8px 30px;
    border: none;
}

.tm-btn-small { padding: 8px 33px; }

.tm-btn-primary:hover {
    background-color: #09b6b6;
    color: white;
}

.tm-paging-nav ul li {
    list-style: none;
    display: inline-block;
    margin-right: 10px;
}

.tm-paging-nav ul li:last-child { margin-right: 0; }

.tm-paging-link {
    background-color: #F0F0F0;
    color: #999;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;    
}

.tm-paging-item .tm-paging-link:hover,
.tm-paging-item.active .tm-paging-link {
    background-color: #0CC;
    color: white;
}

.tm-btn.disabled {
    background-color: #F0F0F0;
    color: #999;
    cursor: not-allowed;
}

.tm-external-link { color: #0CC; }
.tm-external-link:hover { color: #09b6b6; }

.tm-paging-wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.tm-prev-next-wrapper,
.tm-paging-wrapper {
    flex: 0 0 50%;
    max-width: 50%;
    padding-left: 15px;
    padding-right: 15px;
}

.tm-copyright { text-align: right; }

/* Single Post page */
hr.tm-hr-primary { border-top: 5px solid #0CC; }

video {
    width: 100%;
    height: auto;
}

.tm-comment {
    display: flex;
    align-items: flex-start;
}

.tm-comment-figure {
    margin-top: 10px;
    margin-right: 30px;
}

.tm-comment-reply { padding-left: 37px; }

.form-control {
    height: 45px;
    border-color: #0CC;
    border-radius: 0;
}

/* .tm-comment-form { max-width: 360px; } */
.tm-category-list { list-style-type: none; }
figure { margin: 0; }
figcaption { line-height: 1.4; }

.tm-post-full { max-width: 600px; }

.tm-post-sidebar {
    max-width: 280px;
    margin-left: auto;
    margin-right: 0;
}

.tm-pt-20 { padding-top: 20px; }
.tm-pt-30 { padding-top: 30px; }
.tm-pt-45 { padding-top: 45px; }
.tm-pt-60 { padding-top: 60px; }
.tm-mb-40 { margin-bottom: 40px; }
.tm-mb-45 { margin-bottom: 45px; }
.tm-mb-55 { margin-bottom: 55px; }
.tm-mb-60 { margin-bottom: 60px; }
.tm-mb-65 { margin-bottom: 65px; margin-left: 10%; }
.tm-mb-75 { margin-bottom: 75px; }
.tm-mb-80 { margin-bottom: 80px;     margin-left: 10%;
    margin-right: 10%;}
.tm-mb-120 { margin-bottom: 120px; }
.tm-mt-40 { margin-top: 40px; }
.tm-mt-100 { margin-top: 100px; }
.tm-mr-20 { margin-right: 20px; }
.tm-color-primary, span.tm-color-primary { color: #099; }
a.tm-color-gray, .tm-color-gray { color: #999; }
a.tm-color-gray:hover { color: #099; }
.tm-bg-gray { background-color: #F3F4F5; }
button:focus { outline: none; }
a:hover { 
    text-decoration: none; 
    color: #048c8c;
}

a:hover figcaption { color: #056767; }
.img-thumbnail { max-width: none; }
.tm-about-pad { padding: 40px 35px; }
.tm-person { max-width: 430px; }
.tm-line-height-short { line-height: 1.8; }

.gmap_canvas {
    overflow:hidden;
    background:none!important;
    height:477px;
    width:100%;
}

.tm-social-links li { 
    list-style: none; 
    display: inline-block;
}

.tm-social-links li a {
    display: block;
    color: white;
    background-color: #0CC;
    width: 45px;
    height: 45px;    
    margin-right: 15px;    
}

.tm-social-links li a i { transition: all 0.3s ease; }
.tm-social-links li a:hover i.fa-facebook { color: #3b5998; }
.tm-social-links li a:hover i.fa-twitter { color: #00acee; }
.tm-social-links li a:hover i.fa-youtube { color: #c4302b; }
.tm-social-links li a:hover i.fa-instagram { color: #3f729b; }

.tm-contact-right { padding-left: 55px; }
.tm-contact-form { max-width: 488px; }

.tm-contact-form input,
.tm-contact-form textarea {
    max-width: 360px;
}

.tm-contact-form label { font-size: 1.4rem; }
.tm-contact-form .form-group { display: flex; }

@media (max-width: 1540px) {
    .tm-header { width: 320px; }
}

@media (max-width: 1300px) {
    .tm-about-col {
        flex: 0 0 100%;
        max-width: 100%;
        margin-bottom: 30px;
    }
}

@media (max-width: 1288px) {
    .tm-social-link { margin-right: 10px; }
}

@media (max-width: 1199px) {
    .tm-post-sidebar { max-width: 440px; }
    .form-inline .form-control.tm-search-input { width: 420px; }
}

@media (max-width: 1086px) {
    .form-inline .form-control.tm-search-input {
        width: 80%;
        margin-right: 15px;
    }
}

/* Hide sidebar */
@media (max-width: 991px) {
    .tm-header {
        width: 320px;
        left: -320px;        
        transition: all 0.3s ease;
    }

    .tm-header.show { left: 0; }
    .tm-header-wrapper { padding: 15px; }

    .navbar-toggler {
        display: block;
        position: fixed;
        left: 0;
        top: 0;
        background-color: rgba(56, 204, 204, 0.75);
        color: white;
        padding: 10px 15px;
        transition: all 0.3s ease;
        border-radius: 0;
        top: 5px;
    }

    .tm-header.show .navbar-toggler { left: 320px; }


    .tm-post-sidebar {
        margin-left: 0;
        margin-right: auto;
    }

    .tm-person-col { width: 50%; }
    .tm-person { flex-direction: row; }

    .tm-contact-left {
        flex: 0 0 58.333333%;
        max-width: 58.333333%;
    }

    .tm-contact-right {
        flex: 0 0 41.666667%;
        max-width: 41.666667%;
    }

    .tm-post-full { max-width: none; }
}

@media (max-width: 767px) {
    .form-inline .form-control.tm-search-input {
        width: 70%;
        max-width: 375px;
        margin-right: 15px;
    }

    .tm-search-form { justify-content: flex-start; }
    .tm-main { padding: 60px 10px; }

    .tm-prev-next-wrapper,
    .tm-paging-wrapper {
        flex: 0 0 100%;
        max-width: 100%;
    }

    .tm-paging-wrapper { 
        margin-top: 50px; 
        justify-content: flex-start;
    }

    .tm-copyright { text-align: left; }
}

@media (max-width: 1199px) and (min-width: 992px) {
    .tm-person-col,
    .tm-contact-left,
    .tm-contact-right {
        flex: 0 0 100%;
        max-width: 100%;
    }

    .tm-contact-right { padding-left: 15px; }

    .tm-post-col,
    .tm-aside-col {
        flex: 0 0 100%;
        max-width: 100%;
    }

    .tm-post-sidebar {
        margin-left: 0;
        margin-right: auto;
    }
}

@media (max-width: 709px) {
    .tm-person-col { width: 100%; }
}

@media (max-width: 991px) and (min-width: 826px) {
    .tm-about-col {
        flex: 0 0 33.3333%;
        max-width: 33.3333%;
    }

    .tm-person { flex-direction: row; }
}

@media (max-width: 630px) {
    .tm-contact-left,
    .tm-contact-right {
        flex: 0 0 100%;
        max-width: 100%;
    }

    .tm-contact-right { padding-left: 15px; }
}

@media (max-width: 575px) {
    .tm-contact-form input, 
    .tm-contact-form textarea {
        max-width: 100%;
    }
}

@media (max-width: 480px) {
    .tm-person-col { width: 100%; }
    .tm-person { flex-direction: row; }
}

@media (max-width: 380px) {
    .tm-person img { max-width: 120px; }
}
</style>