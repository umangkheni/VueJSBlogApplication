<template>
  <main class="tm-main">
    <!-- Search form -->
    <div class="row tm-row">
      <div class="col-12">
        <form method="GET" class="form-inline tm-mb-80 tm-search-form">
          <input
            class="form-control tm-search-input"
            name="query"
            type="text"
            placeholder="Search..."
            aria-label="Search"
          />
          <button class="tm-search-button" type="submit">
            <i class="fas fa-search tm-search-icon" aria-hidden="true">
              <img
                  class="imag "
                  src="../assets/search-cartoon-icon-transparent-png-stickpng-19.png"
                  alt=""
                />
            </i>
          </button>
        </form>
      </div>
    </div>
    <div class="row tm-row">
      <RouterLink id="Up" :to="'/UpdateBlog/'+ BlogData._id" class="bt bt2">
        <img class="img" src="../assets/Edit_icon_(the_Noun_Project_30184).svg.png" alt="" />
      </RouterLink>
      <a id="de" v-on:click="Delete" class="bt ">
        <img class="img" src="../assets/1345874.png" alt="" />
      </a>

      <div class="col-12">
        <hr class="tm-hr-primary tm-mb-55" />
        <img width="100%" height="100%" class="tm-mb-40" :src="`${BlogData.imgUrl}`" alt="" />
      </div>
    </div>
    <div class="row tm-row grid">
      <div class="col-lg-8 tm-post-col">
        <div class="tm-post-full">
          <div class="mb-4">
            <h2 class="pt-2 tm-color-primary tm-post-title">{{ BlogData.TiTel }}</h2>
            <p class="tm-mb-40">
              {{ BlogData.Date }}
            </p>
            <!-- <p > -->
            <div class="p" v-html="BlogData.Pera"></div>
            <!-- </p> -->
            <span class="d-block text-right tm-color-primary">{{ BlogData.Type }}</span>
          </div>

          <!-- Comments -->
          <div>
            <h2 class="tm-color-primary tm-post-title">Comments</h2>
            <hr class="tm-hr-primary tm-mb-45" />
            <div class="tm-comment tm-mb-45">
              <figure class="tm-comment-figure">
                <img
                  src="img/comment-1.jpg"
                  alt="Image"
                  class="mb-2 rounded-circle img-thumbnail"
                />
                <figcaption class="tm-color-primary text-center">Mark Sonny</figcaption>
              </figure>
              <div>
                <p>
                  Praesent aliquam ex vel lectus ornare tritique. Nunc et eros quis enim feugiat
                  tincidunt et vitae dui. Nullam consectetur justo ac ex laoreet rhoncus. Nunc id
                  leo pretium, faucibus sapien vel, euismod turpis.
                </p>
                <div class="d-flex justify-content-between">
                  <a href="#" class="tm-color-primary">REPLY {{ Data }}</a>
                  <span class="tm-color-primary">June 14, 2020</span>
                </div>
              </div>
            </div>

            <!-- comment form -->
            <form action="" class="mb-5 tm-comment-form">
              <h2 class="tm-color-primary tm-post-title mb-4">Your comment</h2>
             
              <div class="mb-4">
                <textarea class="form-control" name="message" rows="8"></textarea>
              </div>
              <div class="text-right">
                <button class="tm-btn tm-btn-primary tm-btn-small">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
    </div>
    <footer class="row tm-row">
      <div class="col-md-6 col-12 tm-color-gray">
        <!-- Design: <a rel="nofollow" target="_parent" href="https://templatemo.com" class="tm-external-link">TemplateMo</a> -->
      </div>
      <div class="col-md-6 col-12 tm-color-gray tm-copyright">
        Copyright 2020 Xtra<br />
        Blog Company Co. Ltd.
      </div>
    </footer>
  </main>
</template>

<script>
import axiOs from 'axios'
export default {
  data() {
    return {
      BlogData: [],
      Pera: '',
      user:''
    }
  },
  methods:{
    async Delete(){
         const Data = {
            uId:this.BlogData._id,
            iid:this.BlogData.imgUrl.slice(26,)
        };
        const user = localStorage.getItem('user-info');
        const userName = JSON.parse(user)
        const uId = userName._id || userName.data._id;
        if(this.BlogData.UserId == uId){
            const Delete = await axiOs.post('http://127.0.0.1:8080/Delete', Data);
            console.log(Delete);
            alert('blog Delete successfully');
            this.$router.push({name:'home'});
        }else{
            alert('you are not the blog creator');
        }
    }
  },
    async mounted() {

      document.getElementById('Up').style.display = 'none';
      document.getElementById('de').style.display = 'none';
      
    let id = this.$route.params.id
    let data = await axiOs.get(`http://127.0.0.1:8080/allBlog/${id}`);
    this.Pera = data.data.Pera;
    this.BlogData = data.data;
    // this.BlogData.Pera.replaceState('/n', '<br>')
    // console.log(this.user)

    const user = localStorage.getItem('user-info');
    const userName = JSON.parse(user);
    const uId = userName._id || userName.data._id;
    // console.log(this.BlogData.UserId);
    // console.log(uId);

    if(this.BlogData.UserId == uId){
      document.getElementById('Up').style.display = 'block';
      document.getElementById('de').style.display = 'block';
    }else{
      document.getElementById('Up').style.display = 'none';
      document.getElementById('de').style.display = 'none';
    }
  }
}
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
}
.imag{
  width: 60%;
  height: 50%;
}
.bt {
  position: absolute;
  left: 88%;
  margin-top: 10px;
  width: 50px;
  height: 50px;
}
.bt2 {
  left: 83%;
}
.img {
  width: 50%;
  height: 50%;
}
.d-block {
  display: block !important;
}
.text-right {
  text-align: right !important;
}
.grid {
  display: grid;
  grid-template-columns: 75% 25%;
  grid-row: auto auto;
  gap: 2.5%;
}
html {
  overflow-x: hidden;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 19px;
  line-height: 2em;
  overflow-x: hidden;
}

.p,
span {
  color: #999;
  margin-top: 30px;
}
hr {
  border-top-color: #ccc;
  margin-top: 10px;
  margin-bottom: 10px;
}
.form-control::-webkit-input-placeholder {
  color: #999;
}
.form-control:-ms-input-placeholder {
  color: #999;
}
.form-control::placeholder {
  color: #999;
}

.tm-header {
  background-color: #0cc;
  color: white;

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 100;
  width: 400px;
  overflow-y: visible;
}

.tm-header-wrapper {
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding: 30px;
  width: 100%;
  height: 100%;
}

.tm-header-wrapper::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.tm-site-header {
  margin-top: 50px;
  margin-bottom: 115px;
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

.tm-site-logo i {
  color: #0cc;
}

.tm-main {
  margin-left: 400px;
  padding: 80px 100px 25px;
}

.tm-post {
  max-width: 470px;
}

.tm-row {
  max-width: 980px;
  justify-content: space-between;
}

.tm-nav {
  margin-bottom: 100px;
}

.tm-nav-item {
  list-style: none;
  margin-bottom: 30px;
}

.tm-nav-link {
  color: white;
  background-color: transparent;
  height: 75px;
  width: 100%;
  max-width: 300px;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  padding: 30px;
}

.tm-nav-item:hover .tm-nav-link,
.tm-nav-item.active .tm-nav-link {
  color: #0cc;
  background-color: white;
  text-decoration: none;
}

.tm-nav ul {
  position: relative;
}

.tm-nav-item:hover:after,
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
}

.tm-nav-link i {
  margin-right: 37px;
}

ul {
  margin: 0;
  padding: 0;
}

.tm-nav {
  margin-left: -30px;
}

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
  color: #0cc;
  transition: all 0.3s ease;
}

.tm-social-link:hover .tm-social-icon.fa-facebook {
  color: #3b5998;
}
.tm-social-link:hover .tm-social-icon.fa-twitter {
  color: #00acee;
}
.tm-social-link:hover .tm-social-icon.fa-instagram {
  color: #3f729b;
}
.tm-social-link:hover .tm-social-icon.fa-linkedin {
  color: #0e76a8;
}
.navbar-toggler {
  display: none;
}

.tm-search-form {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.form-inline .form-control.tm-search-input {
  display: block;
  height: 60px;
  width: 480px;
  margin-right: 30px;
  border-radius: 0;
  border-color: #0cc;
  font-size: 1.2rem;
}

.tm-search-button {
  width: 70px;
  height: 75px;
  border: none;
  background-color: #0cc;
  transition: all 0.3s ease;
}

.tm-search-button:hover {
  background-color: #09b6b6;
}

.tm-search-icon {
  color: white;
  font-size: 1.3rem;
}

.tm-post-link {
  display: block;
  position: relative;
  cursor: pointer;
}

.tm-post-link-inner {
  overflow: hidden;
  background: #3085a3;
}

.tm-post-link img {
  position: relative;
  display: block;
  min-height: 100%;
  max-width: 100%;
  opacity: 0.8;
}

.effect-lily img {
  max-width: none;
  width: -webkit-calc(100% + 50px);
  width: calc(100% + 50px);
  opacity: 0.7;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translate3d(-40px, 0, 0);
  transform: translate3d(-40px, 0, 0);
}

.effect-lily:hover img {
  opacity: 1;
}

.effect-lily:hover img {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.tm-post {
  margin-bottom: 75px;
}

.tm-new-badge {
  top: 25px;
  right: -10px;
  background-color: #0cc;
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

.tm-post-link:hover .tm-post-title {
  color: #0cc;
}

.tm-btn {
  display: inline-block;
  border-radius: 5px;
  font-size: 1.3rem;
  transition: all 0.3s ease;
}

.tm-btn-primary {
  background-color: #0cc;
  color: white;
  padding: 8px 43px;
  border: none;
}

.tm-btn-small {
  padding: 8px 33px;
}

.tm-btn-primary:hover {
  background-color: #09b6b6;
  color: white;
}

.tm-paging-nav ul li {
  list-style: none;
  display: inline-block;
  margin-right: 10px;
}

.tm-paging-nav ul li:last-child {
  margin-right: 0;
}

.tm-paging-link {
  background-color: #f0f0f0;
  color: #999;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tm-paging-item .tm-paging-link:hover,
.tm-paging-item.active .tm-paging-link {
  background-color: #0cc;
  color: white;
}

.tm-btn.disabled {
  background-color: #f0f0f0;
  color: #999;
  cursor: not-allowed;
}

.tm-external-link {
  color: #0cc;
}
.tm-external-link:hover {
  color: #09b6b6;
}

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

.tm-copyright {
  text-align: right;
}

/* Single Post page */
hr.tm-hr-primary {
  border-top: 5px solid #0cc;
}

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

.tm-comment-reply {
  padding-left: 37px;
}

.form-control {
  height: 45px;
  border-color: #0cc;
  border-radius: 0;
}

/* .tm-comment-form {
  max-width: 360px;
} */
.tm-category-list {
  list-style-type: none;
}
figure {
  margin: 0;
}
figcaption {
  line-height: 1.4;
}

.tm-post-full {
  max-width: 630px;
}

.tm-post-sidebar {
  max-width: 280px;
  margin-left: auto;
  margin-right: 0;
}

.tm-pt-20 {
  padding-top: 20px;
}
.tm-pt-30 {
  padding-top: 30px;
}
.tm-pt-45 {
  padding-top: 45px;
}
.tm-pt-60 {
  padding-top: 60px;
}
.tm-mb-40 {
  margin-bottom: 10px;
}
.tm-mb-45 {
  margin-bottom: 45px;
}
.tm-mb-55 {
  margin-bottom: 55px;
}
.tm-mb-60 {
  margin-bottom: 60px;
}
.tm-mb-65 {
  margin-bottom: 65px;
}
.tm-mb-75 {
  margin-bottom: 75px;
}
.tm-mb-80 {
  margin-bottom: 80px;
}
.tm-mb-120 {
  margin-bottom: 120px;
}
.tm-mt-40 {
  margin-top: 40px;
}
.tm-mt-100 {
  margin-top: 100px;
}
.tm-mr-20 {
  margin-right: 20px;
}
.tm-color-primary,
span.tm-color-primary {
  color: #099;
}
a.tm-color-gray,
.tm-color-gray {
  color: #999;
}
a.tm-color-gray:hover {
  color: #099;
}
.tm-bg-gray {
  background-color: #f3f4f5;
}
button:focus {
  outline: none;
}
a:hover {
  text-decoration: none;
  color: #048c8c;
}

a:hover figcaption {
  color: #056767;
}
.img-thumbnail {
  max-width: none;
}
.tm-about-pad {
  padding: 40px 35px;
}
.tm-person {
  max-width: 430px;
}
.tm-line-height-short {
  line-height: 1.8;
}

.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 477px;
  width: 100%;
}

.tm-social-links li {
  list-style: none;
  display: inline-block;
}

.tm-social-links li a {
  display: block;
  color: white;
  background-color: #0cc;
  width: 45px;
  height: 45px;
  margin-right: 15px;
}
.tm-row {
  max-width: 980px;
  justify-content: space-between;
}

.tm-social-links li a i {
  transition: all 0.3s ease;
}
.tm-social-links li a:hover i.fa-facebook {
  color: #3b5998;
}
.tm-social-links li a:hover i.fa-twitter {
  color: #00acee;
}
.tm-social-links li a:hover i.fa-youtube {
  color: #c4302b;
}
.tm-social-links li a:hover i.fa-instagram {
  color: #3f729b;
}

.tm-contact-right {
  padding-left: 55px;
}
.tm-contact-form {
  max-width: 488px;
}

.tm-contact-form input,
.tm-contact-form textarea {
  max-width: 360px;
}

.tm-contact-form label {
  font-size: 1.4rem;
}
.tm-contact-form .form-group {
  display: flex;
}

@media (max-width: 1540px) {
  .tm-header {
    width: 320px;
  }

  .tm-main {
    margin-left: 290px;
    width: calc(85% - 320px);
  }
}

@media (max-width: 1300px) {
  .tm-about-col {
    flex: 0 0 100%;
    max-width: 100%;
    margin-bottom: 30px;
  }
}

@media (max-width: 1288px) {
  .tm-social-link {
    margin-right: 10px;
  }
}

@media (max-width: 1199px) {
  .tm-post-sidebar {
    max-width: 440px;
  }
  .form-inline .form-control.tm-search-input {
    width: 420px;
  }
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

  .tm-header.show {
    left: 0;
  }
  .tm-header-wrapper {
    padding: 15px;
  }

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

  .tm-header.show .navbar-toggler {
    left: 320px;
  }

  .tm-main {
    margin-left: 0;
    padding: 50px 40px;
    width: 90%;
  }

  .tm-post-sidebar {
    margin-left: 0;
    margin-right: auto;
    margin-bottom: 40%;
  }

  .tm-person-col {
    width: 50%;
  }
  .tm-person {
    flex-direction: row;
  }

  .tm-contact-left {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .tm-contact-right {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .tm-post-full {
    max-width: none;
  }
}

@media (max-width: 767px) {
  .form-inline .form-control.tm-search-input {
    width: 70%;
    max-width: 375px;
    margin-right: 15px;
  }

  .tm-search-form {
    justify-content: flex-start;
  }
  .tm-main {
    padding: 60px 30px;
  }

  .tm-prev-next-wrapper,
  .tm-paging-wrapper {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .grid {
    grid-template-columns: 100%;
  }

  .tm-paging-wrapper {
    margin-top: 50px;
    justify-content: flex-start;
  }

  .tm-copyright {
    text-align: left;
  }
}
@media (min-width: 992px) {
  .col-lg-4 {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 90%;
  }
  .col-lg-8 {
    -ms-flex: 0 0 66.666667%;
    flex: 0 0 66.666667%;
    max-width: 100%;
  }
}
@media (max-width: 1199px) and (min-width: 992px) {
  .tm-person-col,
  .tm-contact-left,
  .tm-contact-right {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .tm-contact-right {
    padding-left: 15px;
  }

  .tm-post-col,
  .tm-aside-col {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .tm-post-sidebar {
    margin-left: 0;
    margin-right: auto;
    margin-bottom: 20% !important;
  }
}

@media (max-width: 709px) {
  .tm-person-col {
    width: 100%;
  }
}

@media (max-width: 991px) and (min-width: 826px) {
  .tm-about-col {
    flex: 0 0 33.3333%;
    max-width: 33.3333%;
  }
  .bt2 {
    left: 79%;
  }

  .tm-person {
    flex-direction: row;
  }
}

@media (max-width: 630px) {
  .tm-contact-left,
  .tm-contact-right {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .bt2 {
    left: 78%;
  }

  .tm-contact-right {
    padding-left: 15px;
  }
}

@media (max-width: 575px) {
  .tm-contact-form input,
  .tm-contact-form textarea {
    max-width: 100%;
  }
  .bt2 {
    left: 77%;
  }
}

@media (max-width: 480px) {
  .tm-person-col {
    width: 100%;
  }
  .tm-person {
    flex-direction: row;
  }
  .bt2 {
    left: 76%;
  }
}

@media (max-width: 380px) {
  .tm-person img {
    max-width: 120px;
  }
  .bt2 {
    left: 75%;
  }
}

@media (max-width: 1200px) {
  .main {
    margin: 10% 5% 10% 35%;
  }
}
@media (max-width: 991px) {
  .main {
    margin: 10% 5% 10% 5%;
  }
}
.tm-color-primary,
span.tm-color-primary {
  color: #099;
}
.tm-post-title {
  font-size: 1.7rem;
  transition: all 0.3s ease;
}
.mb-4,
.my-4 {
  margin-bottom: 1.5rem !important;
}
.mb-4,
.my-4 {
  margin-bottom: 1.5rem !important;
}
.form-control {
  height: 45px;
  border-color: #0cc;
  border-radius: 0;
}
.form-control {
  display: block;
  width: 95%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
</style>
