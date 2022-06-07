import Tickets from "../models/TiketModel.js";

export const getTickets = async (req, res) => {
    try {
      const tickets = await Tickets.findAll({
        attributes: ["id", "kota_asal", "waktu_berangkat", "kota_tujuan", "waktu_tiba", "nama_kereta", "harga"],
      });
      res.json(tickets);
    } catch (error) {
      console.log(error);
    }
  };

  export const insertTickets = async (req, res) => {
    const { kota_asal, waktu_berangkat, kota_tujuan, waktu_tiba, nama_kereta, harga } = req.body;
    try {
      await Tickets.create({
        kota_asal: kota_asal,
        waktu_berangkat: waktu_berangkat,
        kota_tujuan: kota_tujuan,
        waktu_tiba: waktu_tiba,
        nama_kereta: nama_kereta,
        harga: harga
      });
      res.json({ msg: "Insert Ticket Berhasil" });
    } catch (error) {
      console.log(error);
    }
  };