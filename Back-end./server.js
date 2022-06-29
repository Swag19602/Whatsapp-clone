import express from 'express'
import mongoose from 'mongoose'
import Messages from './dbMessage.js'
import Pusher from 'pusher';
import cors from 'cors'
const app=express();
const port=process.env.port || 9000;
const connection_url='mongodb+srv://Swag19602:Swagbidisha1986@cluster0.qxhdbht.mongodb.net/whatsappdb?retryWrites=true&w=majority'
//app config

const pusher = new Pusher({
  appId: "1430630",
  key: "75a0bfc31c66c64ea19b",
  secret: "ef9c261609dfe67f4300",
  cluster: "ap2",
  useTLS: true
});

const db=mongoose.connection
db.once('open',()=>{
    console.log('DB is Connected')

const msgCollection =db.collection("messagecontents");
const changeStream=msgCollection.watch();
changeStream.on('change',(change)=>{
    console.log(change)
    if(change.operationType==='insert'){
        const messageDetails=change.fullDocument;
        pusher.trigger('messages','inserted',{
            name:messageDetails.name,
            message:messageDetails.message,
            timestamp:messageDetails.timestamp,
            received:messageDetails.received,
        })
    }
    else{
        console.log('Error triggering Pusher')
    }
})
})
//middleware
app.use(express.json())
app.use(cors())

//ommiting security
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin",'*');
    res.setHeader("Access-Control-Allow-Headers",'*');
    next();
})
//db config
mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
})
app.get('/messages/sync',(req,res)=>{
    Messages.find((err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data);
        }
    })
})
app.post('/messages/new',(req,res)=>{
    const dbMessage=req.body;
    Messages.create(dbMessage,(err,data)=>{
        if(err){
            res.status(501).send(err);
        }
        else{
            res.status(201).send(data);
        }
    })
})
//api routes
app.get('/',(req,res)=>{
res.status(200).send("Hello World")

})



//listen
app.listen(port,()=>console.log(`Server running on localhost:${port}`))
