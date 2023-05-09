<template>
  <div class="container-fluid">
    <main class="tm-main">
      <!-- Search form -->
      <div class="row tm-row">
        <div class="col-12">
          <form method="GET" class="form-inline tm-mb-80 tm-search-form">
            <input
              v-model="Data"
              class="form-control tm-search-input"
              name="query"
              type="text"
              placeholder="Search..."
              aria-label="Search"
            />
            <button v-on:click="Search" class="tm-search-button" type="button">
              <i class="fas fa-search tm-search-icon" aria-hidden="true">
                <img
                  class="imag img"
                  src="../assets/search-cartoon-icon-transparent-png-stickpng-19.png"
                  alt=""
                />
              </i>
            </button>
          </form>
          <h2 v-if="SearchData">You are Search is {{ SearchData }}</h2>
        </div>
      </div>
      <div class="row tm-row store-grid">

        <Blog v-bind:Data="SearchData" />
      </div>

      <!-- button -->
      <!-- <div class="overflow-auto"> -->
        <!-- Use HTML and sub-components in slots -->
        <!-- <b-pagination-nav number-of-pages="10" base-url="#" class="mt-4">
          <template #first-text><span class="text-success">First</span></template>
          <template #prev-text><span class="text-danger">Prev</span></template>
          <template #next-text><span class="text-warning">Next</span></template>
          <template #last-text><span class="text-info">Last</span></template>
          <template #ellipsis-text>
            <b-spinner small type="grow"></b-spinner>
            <b-spinner small type="grow"></b-spinner>
            <b-spinner small type="grow"></b-spinner>
          </template>
          <template #page="{ page, active }">
            <b v-if="active">{{ page }}</b>
            <i v-else>{{ page }}</i>
          </template>
        </b-pagination-nav> -->
      <!-- </div> -->
      


<!-- 
      <ul v-if="pager.pages && pager.pages.length" class="pagination" :style="ulStyles">
        <li class="page-item first" :class="{'disabled': pager.currentPage === 1}" :style="liStyles">
            <a class="page-link" @click="setPage(1)" :style="aStyles">{{labels.first}}</a>
        </li>
        <li class="page-item previous" :class="{'disabled': pager.currentPage === 1}" :style="liStyles">
            <a class="page-link" @click="setPage(pager.currentPage - 1)" :style="aStyles">{{labels.previous}}</a>
        </li>
        <li v-for="page in pager.pages" :key="page" class="page-item page-number" :class="{'active': pager.currentPage === page}" :style="liStyles">
            <a class="page-link" @click="setPage(page)" :style="aStyles">{{page}}</a>
        </li>
        <li class="page-item next" :class="{'disabled': pager.currentPage === pager.totalPages}" :style="liStyles">
            <a class="page-link" @click="setPage(pager.currentPage + 1)" :style="aStyles">{{labels.next}}</a>
        </li>
        <li class="page-item last" :class="{'disabled': pager.currentPage === pager.totalPages}" :style="liStyles">
            <a class="page-link" @click="setPage(pager.totalPages)" :style="aStyles">{{labels.last}}</a>
        </li>
    </ul> -->
  



    <div class="overflow-auto">
    

    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      class="mt-4"
    >
      <template #prev-text><span class="text-danger">Prev</span></template>
      <template #next-text><span class="text-warning">Next</span></template>
      <template #ellipsis-text>
        <b-spinner small type="grow"></b-spinner>
        <b-spinner small type="grow"></b-spinner>
        <b-spinner small type="grow"></b-spinner>
      </template>
      <template #page="{ page, active }">
        <b v-if="active">{{ page }}</b>
        <i v-else>{{ page }}</i>
      </template>
    </b-pagination>
  </div>
  
      
      <div class="overflow-auto">
        <b-pagination-nav :link-gen="linkGen" :number-of-pages="10" use-router></b-pagination-nav>
      </div>
      <footer class="row tm-row">
        <hr class="col-12" />
        <div class="col-md-6 col-12 tm-color-gray">
          <!-- Design: <a rel="nofollow" target="_parent" href="https://templatemo.com" class="tm-external-link">TemplateMo</a> -->
        </div>
        <div class="col-md-6 col-12 tm-color-gray tm-copyright">
          Copyright 2020 Xtra Blog Company Co. Ltd.
        </div>
      </footer>
    </main>
  </div>
</template>

<script>
import Blog from '../components/Blog.vue'

export default{
  components: {
    Blog,
  },
  data() {
    return {
      SearchData: '',
      Data: '',
      rows: 100,
        perPage: 10,
        currentPage: 1
      
    }
  },
  methods: {
    Search() {
      this.SearchData = this.Data
      //  console.log(this.SearchData);
    },
    
  },
  compatConfig: { MODE: 3 }

}

</script>
<style scoped>
.container-fluid,
.container-lg,
.container-md,
.container-sm,
.container-xl {
  width: 100%;
  /* padding-right: 15px;
    padding-left: 15px; */
  margin-right: auto;
  margin-left: auto;
}
.tm-main {
  margin-left: 440px;
  padding: 80px 100px 25px;
}
.tm-row {
  max-width: 980px;
  justify-content: space-between;
}

.row {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -30px;
  margin-left: -30px;
}
.store-grid {
  display: grid;
  grid-template-columns: 48% 48%;
}
.tm-mb-75 {
  margin-bottom: 75px;
}
.tm-mt-100 {
  margin-top: 100px;
}
.mr-3 {
  margin: 10px;
}
.col-12 {
  /* -ms-flex: 0 0 100%; */
  /* flex: 0 0 100%; */
  max-width: 100%;
}
.row {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -30px;
  margin-left: -30px;
}
.tm-prev-next-wrapper,
.tm-paging-wrapper {
  flex: 0 0 50%;
  max-width: 43%;
  padding-left: 15px;
  padding-right: 15px;
}
.tm-paging-wrapper {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.col-12 {
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
[type='submit']:not(:disabled),
button:not(:disabled) {
  cursor: pointer;
}
.tm-search-button {
  width: 70px;
  height: 75px;
  border: none;
  background-color: #0cc;
  transition: all 0.3s ease;
}
/* button {
    -webkit-appearance: button;
} */
button,
select {
  text-transform: none;
  overflow: visible;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  border-radius: 0;
}
.tm-search-icon {
  color: white;
  font-size: 1.3rem;
}
.fa,
.fas {
  font-weight: 900;
}
.fa,
.far,
.fas {
  font-family: 'Font Awesome 5 Free';
}
.fa,
.fab,
.fad,
.fal,
.far,
.fas {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1;
}
@media (max-width: 1540px) {
  .tm-main {
    margin-left: 290px;
    /* width: calc(100% - 320px); */
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
    padding: 10% 8%;
    width: 80%;
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
    margin-left: 0;
    padding: 10% 7%;
    width: 80%;
  }

  .tm-prev-next-wrapper,
  .tm-paging-wrapper {
    flex: 0 0 100%;
    max-width: 225px;
    margin: 20px auto;
  }

  .tm-paging-wrapper {
    margin-top: 0px;
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
</style>
