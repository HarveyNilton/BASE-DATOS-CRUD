const express = require('express')
const cors = require('cors')
const userRouter = require('./routes/user.routes')
const db = require('./Utils/database')


const PORT = 1999
const app = express()
app.use(cors())
app.use(express.json())
app.use(userRouter)


db.authenticate()
.then(()=>console.log('Conexion exitosa'))
.catch(
    (error)=>{
        console.log(error);
    }
)

db.sync()
.then(()=>{
    console.log('db sincronizada');
})
.catch((error)=>{
    console.log(error)
})


app.listen(PORT, ()=>{
    console.log(`Servidor funcionando en el port ${PORT}` );
})