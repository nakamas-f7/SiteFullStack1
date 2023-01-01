const express = require("express")
const mysql = require("mysql")
const cors = require("cors")
const app = express() 
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "senha",
    database: "cliente"
})

app.use(cors())
app.use(express.json())

app.post("/register", (req, res) => {
    const { Name } = req.body
    
    let SQL = `INSERT INTO t_cliente (Nome) VALUES ("${Name}")`

    db.query(SQL, (err, result) => {
        console.log(err)
    })
})

app.get("/getBanco", (req, res) => {
    let SQL = "SELECT * FROM t_cliente"

    db.query(SQL, (err, result) => {
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })

})

app.post("/deleta", (req, res) => {
    const { Id } = req.body
    let SQL = `DELETE FROM  T_cliente WHERE idT_cliente = ${Id}`

    db.query(SQL, (err, result) => {
        console.log(err)
    })
})

app.listen(3001, () => {
    console.log("rodando server")
})