const express=require('express');
const mongoose=require('mongoose');
const TaskSchema=require("./modal")
const cors=require('cors')
const url="mongodb+srv://vijay:vijay@cluster0.eabz4xy.mongodb.net/?retryWrites=true&w=majority"
async  function connection(){
    try{
   await mongoose.connect(url).then(()=>console.log("db connected"));
    }
    catch(error){
        console.error(error);

    }
}
connection();
 const app=express();
 app.use(express.json());

 app.use(cors({
    origin:"*"
 }))

app.post("/addtask",async (req,res)=>{
    const {todo}=req.body;
    try{
        const newData=new TaskSchema({
            todo:todo,
        });   
    
    await newData.save();
    await newData.save();
        return res.json(await TaskSchema.find())
   
}
catch(err){
    console.log(err);
}
})
app.get("/gettask",async(req,res) => {
    try{
        return res.json(await TaskSchema.find()) ;
    }
    catch(err){
        console.err(err)
    }
})
app.delete('/delete/:id',async(req,res) => {
    try{
        await TaskSchema.findByIdAndDelete(req.params.id);
        return res.json(await TaskSchema.find())
    }
    catch(err){
        console.log(err)
    }
})
5

 app.listen(5000, (req,res)=>{
    console.log("server running on 5000");
 })