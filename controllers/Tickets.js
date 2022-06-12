import Tickets from "../models/TiketModel.js";
import { Op } from "sequelize";

export const getTickets = async (req, res) => {
  try {
    const tickets = await Tickets.findAll();
    res.json(tickets);
  } catch (error) {
    console.log(error);
  }
};

export const getTicketsById = async (req, res) => {
  try {
    const tickets = await Tickets.findAll({
      where: {
        id: req.params.id
      }
    });
    res.json(tickets[0]);
  } catch (error) {
    console.log(error);
  }
};

export const searchTickets = async (req, res) => {
  const { tanggal_berangkat, kotaAsal, kotaTujuan, namaKereta } = req.body;
  try {
    const tickets = await Tickets.findAll({
      where: {
        waktu_berangkat: {
          [Op.gt]: new Date(tanggal_berangkat),
        },
        kota_asal: kotaAsal,
        kota_tujuan: kotaTujuan,
        nama_kereta: namaKereta
      }
    });
    res.json(tickets);
  } catch (error) {
    console.log(error);
  }
};

export const insertTickets = async (req, res) => {
  const {
    kota_asal,
    waktu_berangkat,
    kota_tujuan,
    waktu_tiba,
    nama_kereta,
    harga,
  } = req.body;
  try {
    await Tickets.create({
      kota_asal: kota_asal,
      waktu_berangkat: waktu_berangkat,
      kota_tujuan: kota_tujuan,
      waktu_tiba: waktu_tiba,
      nama_kereta: nama_kereta,
      harga: harga,
    });
    res.json({ msg: "Insert Ticket Berhasil" });
  } catch (error) {
    console.log(error);
  }
};
