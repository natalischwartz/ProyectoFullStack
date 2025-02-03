import {Sequelize} from 'sequelize'

//nombre de la db- user- contraseña- objeto (donde esta alojado-lenguaje-port)
const db = new Sequelize("socialmedia","root","",{
    host: "localhost",
    dialect: "mysql",
    port: 3306
})

export default db;