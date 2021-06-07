import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/posts.js'

const app=express()
app.use('/posts',postRoutes)

app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors())

const Connection_url='mongodb+srv://sonyadwr:S@nchit7911@cluster0.g6wr0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT= process.env.PORT ||8000

mongoose.connect(Connection_url,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=>console.log(`Server running on port:${PORT}`)))
.catch((error)=>console.log(error.message))

mongoose.set('useFindAndModify',false)