import { Sequelize } from 'sequelize';

const db = new Sequelize('kereta_api','root','johanes',{
    host: "127.0.0.1",
    port: "3307",
    dialect: "mysql"
})

export default db;