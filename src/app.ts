import express, { Express } from "express";
import cors from 'cors'
import mongoose from "mongoose";
import todoRoutes from './routes/routesIndex'

const app:Express = express()

const PORT: string|number = process.env.PORT||4000

app.use(cors())
app.use(todoRoutes)
//Jack 20221018 change .raz9g. to .ud8uiem.
//const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@clustertodo.raz9g.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@clustertodo.ud8uiem.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`

const options = { useNewUrlParser: true, useUnifiedTopology: true }
//Jack 20221018 no longer need to set option in newest version
// mongoose.set("useFindAndModify", false)

mongoose
//Jack 20221018 no longer need to set option in newest version
  //.connect(uri, options)
  .connect(uri)
  .then(() => 
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch(error => {
    throw error
  })