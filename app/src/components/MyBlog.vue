<template>
    <div class="store-grid">
      <article 
        @mouseover="hover = true"
        @mouseleave="hover = false"
        class="col-12 col-md-6 tm-post"
        v-for="item in BlogData"
        :key="item.id"
      >
        <hr class="tm-hr-primary" />
        <RouterLink :to="'/FullBlog/'+item._id" class="effect-lily tm-post-link tm-pt-60">
          <div class="tm-post-link-inner">
            <!-- {{ item.imgUrl }} -->
            <img :class="{ active: hover }" :src="`${item.imgUrl}`" alt="Image" class="img-fluid" />
          </div>
          <span class="position-absolute tm-new-badge">New</span>
          <h2 class="tm-pt-30 tm-color-primary tm-post-title">{{ item.TiTel }}</h2>
        </RouterLink>
        <p class="tm-pt-30">
          {{ item.Pera.slice(0, 200) }}
        </p>
        <div class="d-flex justify-content-between tm-pt-45">
          <span class="tm-color-primary">{{ item.Type }}</span>
          <span class="tm-color-primary">{{ item.Date.slice(0,10) }}</span>
        </div>
        <hr />
        <div class="d-flex justify-content-between">
          <span>48 comments</span>
          <span>{{ item.Name }}</span>
        </div>
      </article>
    </div>
</template>
  
<script>
  import axiOs from 'axios';
  export default {
    data() {
      return {
        BlogData: [],
        hover: false,
        UserId:"",
      }
    },
  
    methods: {
      Hover() {
        document.getElementById('hover').style.transform = 'scale(1.3)'
      },
  
      async lodData() {
        const user = localStorage.getItem('user-info');
        const userName = JSON.parse(user)
        this.UserId = userName._id || userName.data._id;

        let data = await axiOs.get(`http://127.0.0.1:8080/MyBlog/${this.UserId}`)
        console.log(data)
        this.BlogData = data.data
      },
  
      // Fullblog(id){
      //     console.log(id);
  
      // }
    },
    mounted() {
      this.lodData()
      // let user = localStorage.getItem('user-info');
    }
  }
</script>
  
<style scoped>
  .active {
    transform: scale(1.2);
  }
  
  .store-grid {
    display: grid;
    grid-template-columns: auto auto;
    gap: 50px;
  }
  .effect-lily img {
    max-width: none;
    width: -webkit-calc(150% + 50px);
    /* transform: scale(1.3); */
  }
  
  .col-12 {
    /* -ms-flex: 0 0 100%; */
    /* flex: 0 0 100%; */
    max-width: 100%;
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
  }
  .tm-mb-80 {
    margin-bottom: 80px;
  }
  .tm-search-form {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .form-inline {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    -ms-flex-align: center;
    align-items: center;
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
  .form-control {
    height: 45px;
    border-color: #0cc;
    border-radius: 0;
  }
  .form-control {
    display: block;
    width: 100%;
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
  button,
  input {
    overflow: visible;
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
  [type='button']:not(:disabled),
  [type='reset']:not(:disabled),
  [type='submit']:not(:disabled),
  button:not(:disabled) {
    cursor: pointer;
  }
  .tm-search-button {
    width: 60px;
    height: 60px;
    border: none;
    background-color: #0cc;
    transition: all 0.3s ease;
  }
  /* [type=submit], button {
       -webkit-appearance: button;
  } */
  button,
  select {
    text-transform: none;
  }
  button,
  input {
    overflow: visible;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
  button {
    border-radius: 0;
  }
  .tm-post {
    margin-bottom: 75px;
    max-width: 470px;
  }
  hr.tm-hr-primary {
    border-top: 5px solid #0cc;
  }
  hr {
    border-top-color: #ccc;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }
  .tm-pt-60 {
    padding-top: 60px;
  }
  .tm-post-link {
    display: block;
    position: relative;
    cursor: pointer;
  }
  a {
    color: #007bff;
    text-decoration: none;
    background-color: transparent;
  }
  .tm-post-link-inner {
    overflow: hidden;
    background: #3085a3;
  }
  .tm-post-link {
    display: block;
    position: relative;
    cursor: pointer;
  }
  .effect-lily img {
    max-width: none;
    width: -webkit-calc(100% + 50px);
  }
  .tm-post-link img {
    position: relative;
    display: block;
    min-height: 100%;
    max-width: 100%;
    opacity: 0.8;
  }
  .img-fluid {
    max-width: 100%;
    height: auto;
  }
  img {
    vertical-align: middle;
    border-style: none;
  }
  .tm-new-badge {
    top: 25px;
    right: -10px;
    background-color: #0cc;
    color: white;
    padding: 5px 20px;
  }
  .position-absolute {
    position: absolute !important;
  }
  .tm-color-primary,
  span.tm-color-primary {
    color: #099;
  }
  .tm-pt-30 {
    padding-top: 30px;
  }
  .tm-post-title {
    font-size: 1.7rem;
    transition: all 0.3s ease;
  }
  .h2,
  h2 {
    font-size: 2rem;
  }
  .h1,
  .h2,
  .h3,
  .h4,
  .h5,
  .h6,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
  a {
    color: #007bff;
    text-decoration: none;
    background-color: transparent;
  }
  .tm-pt-30 {
    padding-top: 30px;
  }
  p,
  span {
    color: #999;
  }
  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  .tm-pt-45 {
    padding-top: 45px;
  }
  .justify-content-between {
    -ms-flex-pack: justify !important;
    justify-content: space-between !important;
  }
  .d-flex {
    display: -ms-flexbox !important;
    display: flex !important;
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
  
    .tm-post-sidebar {
      margin-left: 0;
      margin-right: auto;
    }
  
    .tm-person-col {
      width: 50%;
    }
    .tm-person {
      flex-direction: row;
    }
  
    .tm-contact-left {
      flex: 0 0 58.333333%;
      max-width: 58.333333%;
    }
  
    .tm-contact-right {
      flex: 0 0 41.666667%;
      max-width: 41.666667%;
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
      padding: 60px 10px;
    }
  
    .tm-prev-next-wrapper,
    .tm-paging-wrapper {
      flex: 0 0 100%;
      max-width: 30%;
    }
  
    .tm-paging-wrapper {
      margin-top: 50px;
      justify-content: flex-start;
    }
  
    .tm-copyright {
      text-align: left;
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
    .store-grid {
      display: grid;
      grid-template-columns: auto !important ;
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
  }
  
  @media (max-width: 480px) {
    .tm-person-col {
      width: 100%;
    }
    .tm-person {
      flex-direction: row;
    }
  }
  
  @media (max-width: 380px) {
    .tm-person img {
      max-width: 120px;
    }
  }
  @media (max-width: 2200px) {
    .store-grid {
      display: grid;
      grid-template-columns: auto auto auto;
      gap: 50px;
    }
  }
  </style>
  