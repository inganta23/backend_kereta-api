import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Tickets = db.define('tickets',{
    kota_asal:{
        type: DataTypes.STRING
    },
    waktu_berangkat:{
        type: DataTypes.DATE
    },
    kota_tujuan:{
        type: DataTypes.STRING
    },
    waktu_tiba:{
        type: DataTypes.DATE
    },
    nama_kereta:{
        type: DataTypes.STRING
    },
    harga:{
        type: DataTypes.STRING
    },
},{
    freezeTableName:true
});

export default Tickets;