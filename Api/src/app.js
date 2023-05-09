require('dotenv').config()
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
require("./db/conn");
const Blog = require("./models/Blog.js");
const User = require("./models/User.js");
const cors = require("cors");
const bcript = require('bcryptjs');
const Multer = require('multer');
const path = require('path');
const multer = require('multer');

const saImg = require('./models/Img')      


app.use(express.json());
app.use(express.static(__dirname+"./public" ));
app.use(cors({ origin: "http://localhost:5173"}));



app.post("/User", async (req, res) => {
  const user = new User(req.body);
  const users = await user.save();
  const data = {
    status: 200,
    data: user,
  };
  res.send(data);
});

app.post("/login", async (req, res) => {
  try {
    const Email = req.body.email;
    const Password = req.body.password;
    const nData = await User.findOne({ email : Email });
    const isMatch = bcript.compare(Password, nData.password)
    if (isMatch) {
      res.send(nData);
    } else {
      res.status(400).send('password is in correct');} 
    } catch (error) {
    res.status(400).send('information is in correct');}
});

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
     cb(null, './src/public');
  },
  filename: function (req, file, cb) {
     cb(null, Date.now() + '-' + file.originalname);
  }
});
var upload = multer({ storage: storage });
app.post('/upload', upload.single('file'),(req, res, next) => {
  const file = req.file;
  const Filename = file.filename;

  console.log(file);
  const saveImg = new saImg({filename: Filename });
   const saveData = saveImg.save();
     if(saveData.err){
      res.send(err)
    }else{
      // res.send({imagId : saveImg})
     res.json({ fileUrl: `http://127.0.0.1:8080/img/${saveImg.id}` });
    };
});

app.get('/img/:Id', async (req, res) => {
const findImage = await saImg.findById( req.params.Id);
res.sendFile(path.join(__dirname, `./public/${findImage.filename}`));
});



app.post('/blog', async (req, res) => {
  const BlogData = req.body;
  console.log(BlogData);
  const DBlog = new Blog(BlogData);
  const RData = await DBlog.save();
  res.send(RData)

});

app.get('/allBlog', async (req, res) => {

const AllBlog = await  Blog.find().limit(1);
res.send(AllBlog);

});
app.get('/allBlog/:Id', async (req, res) => {

  
  const BlogData = await Blog.findById( req.params.Id);
  // BlogData.Pera.replaceAll(/\n/gi,'<br>');
  console.log(BlogData);
  res.send(BlogData);
  
  });

app.post('/Delete', async (req, res) => {

  const Id = req.body;
  console.log(Id);

  if(Id){
    await Blog.deleteOne({_id:Id.uId})
    await saImg.deleteOne({_id:Id.iid})
    res.send('blog Deleted')

  }else{
    res.send('you are not user');
  }
    


}); 
app.get('/MyBlog/:Id', async (req, res) => {

  const MyData = await Blog.find({UserId: req.params.Id});
  // BlogData.Pera.replaceAll(/\n/gi,'<br>');
  console.log(MyData);
  res.send(MyData);
  
  });


app.put('/update/:id', async (req, res) => {

    var id = req.params.id;
    console.log(id);

    const updateData = await Blog.findByIdAndUpdate(id, req.body, {new:true});
    res.send(updateData);
    console.log(updateData); 

});
app.get('/Search/:data', async (req, res) => {

  // console.log(req.params.data);
  // console.log(req.params.data);
  // const saData = req.params.data
  // const StData = JSON.stringify(saData)

  var regex = new RegExp(req.params.data ,'i');

  Blog.find({"$or":[{Type:regex},{Pera:regex },{TiTel:regex }]})
  .then((result)=>{
    res.send(result);
  });

  // const SData =  Blog.find({$text: {$search: `${saData}`}}).limit(3);
  // console.log(SData);
  // res.send(SData);


});
  


app.listen(port, () => {
  console.log(`connection is setup at ${port}`);
});
