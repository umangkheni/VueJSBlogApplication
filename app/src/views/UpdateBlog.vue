<template>
    <div class="main">
      <div class="box">
        <h1>Add Your Blog</h1>
        <form action="">
          <input class="input" v-model="blog.TiTel" type="text" placeholder="Enter Blog Title" />
          <input type="file" accept="image/*" ref="file" @change="previewImage" class="input" id="my-file"  />
  
          <button  v-on:click="uploadImg"  type="button" class="input" > Upload file </button>
          
          <div class="img-box">
            <template v-if="preview">
              <img :src="preview"  class="input-img" />
              <!-- <p class=" ">file name: {{ image.name }}</p> -->
              <!-- <p class="">size: {{ image.size / 1024 }}KB</p> -->
            </template>
          </div>
          <textarea class="input" v-model="blog.Pera" rows="5" placeholder="Enter Blog content"></textarea>
          <input class="input" type="text" v-model="blog.Type" placeholder="Enter Blog type" />
          <button class="input" type="button" v-on:click="blogData">Update Blog</button>
        </form>
      </div>
    </div>
</template>
  
  
<script>
   import axiOs from 'axios';
export default {
  data() {
    return {
      blog:{
        UserId:"",
        TiTel:"",
        imgUrl:"",
        Pera:"",
        Type:"",
        Date:"",
        Name:''
      },
      preview: null,
      image: null,
      imgUrl:"",
      file:"",
      id:""
    }
    

  },
  methods: {

    
    async previewImage(event) {
      var input = event.target;
      this.file = this.$refs.file.files[0];

        // console.log(this.file);

      if (input.files) {
        var reader = new FileReader()
        reader.onload = (e) => {
          this.preview = e.target.result
        }
        // console.log(input.files[0]);
        this.image = input.files[0]
        reader.readAsDataURL(input.files[0])
      }

    },
   async uploadImg(){

    const formData = new FormData();
    formData.append("file", this.file);
    this.blog.Pera.replace(/\n/i,'<br>')

      const Result = await axiOs.post('http://localhost:8080/upload', formData)
      this.imgUrl = Result.data.fileUrl
      this.preview = Result.data.fileUrl
      this.blog.imgUrl = Result.data.fileUrl

      // console.log(Result);
      // get user id for save in localStorage
      const user = localStorage.getItem('user-info');
      const userName = JSON.parse(user)
      this.blog.UserId = userName._id || userName.data._id;
      // console.log(this.blog.UserId);
      console.log(this.blog);
      alert('image are uploaded successfully')

    },

    async blogData(){
      const user = localStorage.getItem('user-info');
      const userName = JSON.parse(user)
      const uId = userName._id || userName.data._id;

      if(this.blog.UserId == uId){
      // this.blog.Pera.replace('\n' ,'<br>');
      // const data = this.blog.Pera.replace(/\n/gi ,' <br/>');
      const date = new Date()
      this.blog.Date =  (date.getMonth()+1)+'/'+date.getDate()+'/'+date.getFullYear()+' '+(date.getHours() > 12 ? date.getHours() - 12 : date.getHours())+':'+date.getMinutes()+' '+(date.getHours() >= 12 ? "PM" : "AM");
      // this.blog.Pera = data;

      const user = localStorage.getItem('user-info');
      const userName = JSON.parse(user)
      this.blog.Name = userName.name || userName.data.name;

      if(this.blog.imgUrl){
        const BlogData = await axiOs.put(`http://localhost:8080/update/${this.id}`, this.blog);
        console.log(BlogData);
        alert('blog Updated sucsseccfully')
        console.log(this.blog);
        this.$router.push({name:'home'})

      }else{
       alert("image dose not uploaded")
      }
    }else{
        alert('you are not the blog creator');
    }
  },
},
  async mounted() {
      let id = this.$route.params._id;
      console.log(id);
      // console.log('name');
    let data = await axiOs.get(`http://127.0.0.1:8080/allBlog/${id}`);
    this.preview = data.data.imgUrl;
    this.blog = data.data;
    this.id = id;
    // console.log(data.data.imgUrl);
    // this.BlogData.Pera.replaceState('/n', '<br>')
    // console.log(this.blog.UserId)
  }  
}
</script>
  
  <style scoped>
  .main {
    margin: 10% 5% 10% 30%;
  }
  .box {
    margin: auto;
  }
  h1 {
    text-align: center;
  }
  form .input {
    display: block;
    margin: 3% auto;
    width: 95%;
    padding: 1.5%;
    font-size: 125%;
  }
  img {
    max-width: 100%;
  }
  input[type='file'] {
    padding: 10px;
  }
  .img-box img {
    width: 100%;
    height: auto;
  }
  .img-box {
    width: 95%;
    margin: auto;
  }
  
  @media (min-width: 2720px) {
    .box {
      width: 90%;
      height: 1000px !important;
    }
  }
  @media (min-width: 2700px) {
    .box {
      width: 90%;
      height: 1050px !important;
    }
  }
  @media (min-width: 2500px) {
    .box {
      width: 90%;
      height: 950px;
    }
  }
  @media (min-width: 2200px) {
    .box {
      width: 90%;
      height: 1000px;
    }
  }
  @media (min-width: 1700px) {
    .box {
      width: 90%;
      height: 750px;
    }
  }
  @media (min-width: 1500px) {
    .box {
      width: 90%;
      height: 850px;
    }
  }
  
  @media (max-width: 1200px) {
    .main {
      margin: 10% 5% 10% 35%;
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
  @media (max-width: 900px) {
    .box {
      width: 90%;
      height: 600px;
    }
  }
  @media (max-width: 800px) {
    .box {
      width: 90%;
      height: 550px;
    }
  }
  @media (max-width: 700px) {
    .box {
      width: 90%;
      height: 500px;
    }
  }
  @media (max-width: 600px) {
    .box {
      width: 90%;
      height: 490px;
    }
  }
  @media (max-width: 400px) {
    .box {
      width: 95%;
      height: 490px;
    }
    input {
      width: 85%;
      height: 5%;
      font-size: 110%;
    }
    .vel {
      width: 90%;
    }
    button {
      width: 85%;
      margin: 7%;
    }
    .login {
      width: 88%;
      padding: 2%;
    }
  }
  </style>
  