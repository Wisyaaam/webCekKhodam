'use client'
import Image from "next/image";
import { useState, useRef } from "react";

export default function Home() {
  const daftarKhodam = [
    "Sosok Hitam Pekat", "Sapi Pemakan Jembut", "Bayangan Tanpa Nama", "Kucing Berbulu Naga", "Ular Berbisa Merah",
    "Harimau Belang Buntung", "Bayangan Tanpa Suara", "Hantu Penjaga Angkringan", "Pocong Keliling", "Tuyul Penghisap Debu",
    "Jin Botol Kocak", "Genderuwo Penjaga Gudang", "Kuntilanak Penjual Gorengan", "Arwah Tukang Becak", "Setan Penunggu WC Umum",
    "Peri Pembuat Bakso", "Nyai Roro Kidul Tipe 2", "Bangsa Siluman Kadal", "Peri Penjaga Kamar Mandi", "Raksasa Berambut Ungu",
    "Setan Nyasar", "Hantu Jalan Tol", "Jin Asyik Nongkrong", "Tuyul Tukang Pijat", "Hantu Penunggu Kafe",
    "Genderuwo Tukang Kebun", "Nyi Blorong Jaman Now", "Pocong Gaul", "Kuntilanak Penjaga Warung", "Bayangan Penghuni Loteng",
    "Jin Tergelak", "Peri Tukang Nyanyi", "Hantu Pecandu Kopi", "Tuyul Bermuka Dua", "Nyi Rantau",
    "Lelembut Ganas", "Hantu Tukang Bakso", "Genderuwo Periang", "Kuntilanak Genit", "Tuyul Pencuri Sendal",
    "Jin Pencinta Kopi", "Pocong Selfie", "Arwah Tukang Cukur", "Setan Penghisap Debu", "Hantu Tukang Parkir",
    "Genderuwo Penunggu Sumur", "Kuntilanak Penari", "Tuyul Berambut Pirang", "Jin Penggila Karaoke", "Pocong Hobi Mancing",
    "Hantu Penjaga Warnet", "Arwah Penjual Siomay", "Setan Tukang Ngibul", "Genderuwo Jago Masak", "Kuntilanak Pecinta Dangdut",
    "Tuyul Tukang Ojek", "Jin Pemalu", "Pocong Narsis", "Hantu Penunggu Sekolah", "Arwah Pemain Kuda Lumping",
    "Setan Penjual Bakpia", "Genderuwo Berhati Lembut", "Kuntilanak Penggila Drama Korea", "Tuyul Pelukis", "Jin Penyair",
    "Pocong Pelukis Jalanan", "Hantu Penjaga Stasiun", "Arwah Tukang Kebun", "Setan Penjual Ketoprak", "Genderuwo Tukang Servis AC",
    "Kuntilanak Penjaga Pantai", "Tuyul Penjual Martabak", "Jin Pemain Gitar", "Pocong Jago Ngelawak", "Hantu Penunggu Terminal",
    "Arwah Tukang Rongsok", "Setan Penjaga Pasar", "Genderuwo Tukang Galon", "Kuntilanak Penjahit Baju", "Tuyul Penggila Sepak Bola",
    "Jin Pemain Drum", "Pocong Penggila Selfie", "Hantu Penjaga Perpustakaan", "Arwah Pemain Wayang", "Setan Tukang Sate",
    "Genderuwo Tukang Tambal Ban", "Kuntilanak Pecinta Kucing", "Tuyul Pemain Bola", "Jin Penjual Es Krim", "Pocong Hobi Traveling",
    "Hantu Penjaga Bioskop", "Arwah Tukang Tambal Ban", "Setan Penghuni Mall", "Genderuwo Tukang Jaga Parkiran", "Kuntilanak Penghuni Villa",
    "Tuyul Penjaga Kebun", "Jin Tukang Sulap", "Pocong Penari", "Hantu Penjaga Supermarket", "Arwah Penjual Jus",
    "Setan Penghuni Ruko", "Genderuwo Pengantar Surat", "Kuntilanak Penjaga Toko", "Tuyul Pemain Basket", "Jin Tukang Ramal",
    "Pocong Penjaga Toko Kelontong", "Hantu Penjaga ATM", "Arwah Penjual Nasi Goreng", "Setan Tukang Masak", "Genderuwo Pemilik Warung",
    "Kuntilanak Pecinta Selfie", "Tuyul Penjual Gorengan", "Jin Tukang Sablon", "Pocong Penjaga Lantai", "Hantu Penjaga ATM",
    "Arwah Penjual Sate", "Setan Penghuni Kantor", "Genderuwo Penggila Game", "Kuntilanak Penjual Susu", "Tuyul Tukang Servis Motor",
    "Jin Penjual Kerupuk", "Pocong Penjaga Kuburan", "Hantu Penjaga Kamar Mayat", "Arwah Tukang Ledeng", "Setan Penghuni Pabrik",
    "Genderuwo Penjual Donat", "Kuntilanak Pemain Piano", "Tuyul Tukang Tambal Ban", "Jin Penjual Teh", "Pocong Penjaga Taman",
    "Hantu Penjaga Hutan", "Arwah Tukang Ojek", "Setan Penghuni Apartemen", "Genderuwo Tukang Cuci", "Kuntilanak Penjual Ayam",
    "Tuyul Tukang Kebun", "Jin Pemain Suling", "Pocong Penjaga Toko Roti", "Hantu Penjaga Stasiun", "Arwah Pemain Angklung",
    "Setan Tukang Pijat", "Genderuwo Penjual Kopi", "Kuntilanak Penghuni Kafe", "Tuyul Penjual Jus", "Jin Tukang Parkir",
    "Pocong Penjaga Kolam Renang", "Hantu Penjaga Karaoke", "Arwah Tukang Las", "Setan Penjaga Perpustakaan", "Genderuwo Pemain Sepak Bola",
    "Kuntilanak Tukang Nasi Uduk", "Tuyul Pemain Musik", "Jin Penjual Rujak", "Pocong Penjaga Pantai", "Hantu Penghuni Kamar Kos",
    "Arwah Tukang Listrik", "Setan Penjual Koran", "Genderuwo Pemain Silat", "Kuntilanak Tukang Sop Buntut", "Tuyul Penjual Tahu",
    "Jin Tukang Las", "Pocong Penjaga Peron", "Hantu Penghuni Kantor", "Arwah Tukang Kunci", "Setan Penjual Tape",
    "Genderuwo Tukang Perahu", "Kuntilanak Penjual Soto", "Tuyul Tukang Cukur", "Jin Tukang Jual Kacang", "Pocong Penjaga Stadion",
    "Hantu Penghuni Kebun", "Arwah Tukang Kue", "Setan Penjual Tahu Bulat",

    // Mulai tambahan 2000 nama khodam lagi
    "Sosok Berwajah Pucat", "Setan Penghisap WiFi", "Jin Pencinta Dangdut", "Hantu Penjaga Pulau", "Genderuwo Pembawa Petaka",
    "Kuntilanak Pembawa Malapetaka", "Tuyul Penghuni Gua", "Jin Pemikat Wanita", "Pocong Pemburu Malam", "Arwah Tukang Jagal",
    "Setan Penghuni Istana", "Genderuwo Pemakan Waktu", "Kuntilanak Penggila Film Horor", "Tuyul Penjual Tahu Gejrot", "Jin Penjual Donat",
    "Pocong Penjaga Kafe", "Hantu Penjaga Apartemen", "Arwah Tukang Sapu", "Setan Penghuni Kelas", "Genderuwo Tukang Cendol",
    "Kuntilanak Penari Balet", "Tuyul Penjaga Warnet", "Jin Pencuri WiFi", "Pocong Penjual Jus Alpukat", "Hantu Penjaga Toko Serba Ada",
    "Arwah Tukang Kompresor", "Setan Penghuni Gereja", "Genderuwo Penjual Kacang", "Kuntilanak Pembawa Maut", "Tuyul Penjaga Lahan Parkir",
    "Jin Peminta Hujan", "Pocong Pembawa Pesan", "Hantu Penjaga Jembatan", "Arwah Tukang Bangunan", "Setan Penghuni Perut Bumi",
    "Genderuwo Penjual Coklat", "Kuntilanak Pemakan Pikiran", "Tuyul Pemotong Rambut", "Jin Pencuri Selimut", "Pocong Penjaga Langit-langit",
    "Hantu Penghuni Sungai", "Arwah Tukang Gesek", "Setan Penghuni Langit", "Genderuwo Penjual Emas", "Kuntilanak Pemikat Hati",
    "Tuyul Penjaga Pemakaman", "Jin Penjual Batu Akik", "Pocong Penjaga Wisma", "Hantu Penjaga Sektor", "Arwah Tukang Urut",
    "Setan Penghuni Dunia", "Genderuwo Penjual Poci", "Kuntilanak Pemangsa Hati", "Tuyul Penjual Kelapa", "Jin Pemindah Hati",
    "Pocong Pemburu Roh Jahat", "Hantu Penjaga Gereja", "Arwah Tukang Beluk", "Setan Penghuni Pusat Bumi", "Genderuwo Penjual Jagung",
    "Kuntilanak Penari Jaipong", "Tuyul Penjaga Candi", "Jin Pemikat Hantu", "Pocong Penjaga Warga", "Hantu Penghuni Wilayah",
    "Arwah Tukang Gendang", "Setan Penghuni Dunia Lain", "Genderuwo Penjual Tahu Campur", "Kuntilanak Pemikat Manusia", "Tuyul Penjaga Gubuk",
    "Jin Penjual Batu Cincin", "Pocong Penjaga Sungai", "Hantu Penjaga Nisan", "Arwah Tukang Obor", "Setan Penghuni Batu",
    "Genderuwo Penjual Roti Bakar", "Kuntilanak Pemikat Jiwa", "Tuyul Penjaga Kubu", "Jin Pemikat Cinta", "Pocong Penjaga Jembatan",
    "Hantu Penghuni Bangunan", "Arwah Tukang Panci", "Setan Penghuni Zaman", "Genderuwo Penjual Gadis", "Kuntilanak Penari Kontemporer",
    "Tuyul Penjaga Kayu", "Jin Penjual Batu Mulia", "Pocong Penjaga Kandang", "Hantu Penjaga Kandang", "Arwah Tukang Rongsokan",
    "Setan Penghuni Dunia Nyata", "Genderuwo Penjual Duren", "Kuntilanak Pemikat Pengembara", "Tuyul Penjaga Bendungan", "Jin Pemikat Waktu",
    "Pocong Penjaga Persimpangan", "Hantu Penjaga Laut", "Arwah Tukang Semen", "Setan Penghuni Kerajaan", "Genderuwo Penjual Rambutan",
    "Kuntilanak Penari Tari", "Tuyul Penjaga Kudus", "Jin Pemikat Nafsu", "Pocong Penjaga Belantara", "Hantu Penjaga Makam",
    "Arwah Tukang Kikis", "Setan Penghuni Dunia Gaib", "Genderuwo Penjual Kupat", "Kuntilanak Pemikat Kejayaan", "Tuyul Penjaga Gua",
    "Jin Penjual Kebab", "Pocong Penjaga Pasar", "Hantu Penjaga Gubuk", "Arwah Tukang Geser", "Setan Penghuni Alam",
    "Genderuwo Penjual Kacang Ijo", "Kuntilanak Pemikat Alam", "Tuyul Penjaga Kumbang", "Jin Pemikat Kebahagiaan", "Pocong Penjaga Tugu",
    "Hantu Penjaga Jalan", "Arwah Tukang Pingsan", "Setan Penghuni Kamar", "Genderuwo Penjual Keju", "Kuntilanak Penari Ballet",
    "Tuyul Penjaga Guci", "Jin Penjual Coklat", "Pocong Penjaga Jalur", "Hantu Penjaga Gudang", "Arwah Tukang Pecut",
    "Setan Penghuni Malam", "Genderuwo Penjual Jambu", "Kuntilanak Pemikat Wajah", "Tuyul Penjaga Jembatan", "Jin Pemikat Roh",
    "Pocong Penjaga Peristiwa", "Hantu Penjaga Candi", "Arwah Tukang Setan", "Setan Penghuni Keranda", "Genderuwo Penjual Permen",
    "Kuntilanak Penari Cilik", "Tuyul Penjaga Pagar", "Jin Pemikat Kesedihan", "Pocong Penjaga Lintasan", "Hantu Penjaga Ladang",
    "Arwah Tukang Kremasi", "Setan Penghuni Api", "Genderuwo Penjual Kacang Hijau", "Kuntilanak Pemikat Jiwa", "Tuyul Penjaga Gunung",
    "Jin Penjual Sosis", "Pocong Penjaga Desa", "Hantu Penjaga Gunung", "Arwah Tukang Serampang", "Setan Penghuni Iblis",
    "Genderuwo Penjual Es Batu", "Kuntilanak Pemikat Kematian", "Tuyul Penjaga Gelanggang", "Jin Pemikat Nafas", "Pocong Penjaga Perumahan",
    "Hantu Penjaga Medan", "Arwah Tukang Jelujur", "Setan Penghuni Dosa", "Genderuwo Penjual Ayam Geprek", "Kuntilanak Pemikat Alam",
    "Tuyul Penjaga Tugu", "Jin Penjual Lalapan", "Pocong Penjaga Pemakaman", "Hantu Penjaga Tempat", "Arwah Tukang Bianglala",
    "Setan Penghuni Nisan", "Genderuwo Penjual Es Krim", "Kuntilanak Penari Topeng", "Tuyul Penjaga Kereta", "Jin Pemikat Malam",
    "Pocong Penjaga Selatan", "Hantu Penjaga Utara", "Arwah Tukang Lengser", "Setan Penghuni Seribu", "Genderuwo Penjual Ayam Betutu",
    "Kuntilanak Pemikat Kalbu", "Tuyul Penjaga Kuali", "Jin Pemikat Rasa", "Pocong Penjaga Konstruksi", "Hantu Penjaga Bahan",
    "Arwah Tukang Mendekorasi", "Setan Penghuni Ruang", "Genderuwo Penjual Nasi Kuning", "Kuntilanak Pemikat Manusia", "Tuyul Penjaga Jalanan",
    "Jin Penjual Gerobak", "Pocong Penjaga Penutup", "Hantu Penjaga Batu", "Arwah Tukang Runduk", "Setan Penghuni Orang",
    "Genderuwo Penjual Pempek", "Kuntilanak Pemikat Kalbu", "Tuyul Penjaga Jati", "Jin Pemikat Pikiran", "Pocong Penjaga Jalan",
    "Hantu Penjaga Perluas", "Arwah Tukang Manja", "Setan Penghuni Halaman", "Genderuwo Penjual Tahu", "Kuntilanak Pemikat Jalan",
    "Tuyul Penjaga Lintah", "Jin Pemikat Jantung", "Pocong Penjaga Pukul", "Hantu Penjaga Darat", "Arwah Tukang Pecut",
    "Setan Penghuni Perak", "Genderuwo Penjual Kue Cubit", "Kuntilanak Penari Klasik", "Tuyul Penjaga Pelabuhan", "Jin Pemikat Pekerja",
    "Pocong Penjaga Bapak", "Hantu Penjaga Panas", "Arwah Tukang Kura-kura", "Setan Penghuni Adat", "Genderuwo Penjual Kepiting",
    "Kuntilanak Pemikat Jiwa", "Tuyul Penjaga Jalan", "Jin Pemikat Cinta", "Pocong Penjaga Alam", "Hantu Penjaga Taman",
    "Arwah Tukang Beluk", "Setan Penghuni Budaya", "Genderuwo Penjual Jagung", "Kuntilanak Pemikat Nyawa", "Tuyul Penjaga Jamu",
    "Jin Pemikat Teman", "Pocong Penjaga Pesona", "Hantu Penjaga Peristiwa", "Arwah Tukang Kuncup", "Setan Penghuni Dunia",
    "Genderuwo Penjual Koboi", "Kuntilanak Pemikat Nyali", "Tuyul Penjaga Kandang", "Jin Pemikat Hewan", "Pocong Penjaga Persimpangan",
    "Hantu Penjaga Pusara", "Arwah Tukang Setem", "Setan Penghuni Ghaib", "Genderuwo Penjual Kismis", "Kuntilanak Pemikat Gila",
    "Tuyul Penjaga Penjara", "Jin Pemikat Gadget", "Pocong Penjaga Gunung", "Hantu Penjaga Penyu", "Arwah Tukang Timpuk",
    "Setan Penghuni Bidadari", "Genderuwo Penjual Pecel", "Kuntilanak Pemikat Padang", "Tuyul Penjaga Keranda", "Jin Pemikat Angin",
    "Pocong Penjaga Angkasa", "Hantu Penjaga Alur", "Arwah Tukang Fosil", "Setan Penghuni Alam Sempit", "Genderuwo Penjual Babi",
    "Kuntilanak Pemikat Santri", "Tuyul Penjaga Pesan", "Jin Pemikat Bangsa", "Pocong Penjaga Sumpah", "Hantu Penjaga Utama",
    "Arwah Tukang Rancang", "Setan Penghuni Rantau", "Genderuwo Penjual Gule", "Kuntilanak Pemikat Tumpeng", "Tuyul Penjaga Cangkir",
    "Jin Pemikat Lahir", "Pocong Penjaga Surat", "Hantu Penjaga Sisi", "Arwah Tukang Karantina", "Setan Penghuni Selatan",
    "Genderuwo Penjual Kelinci", "Kuntilanak Pemikat Pesta", "Tuyul Penjaga Kaleng", "Jin Pemikat Alam", "Pocong Penjaga Sosok",
    "Hantu Penjaga Kantor", "Arwah Tukang Bangun", "Setan Penghuni Rasa", "Genderuwo Penjual Ramal", "Kuntilanak Pemikat Kalender",
    "Tuyul Penjaga Sayap", "Jin Pemikat Nyawa", "Pocong Penjaga Salam", "Hantu Penjaga Adat", "Arwah Tukang Perah",
    "Setan Penghuni Rakyat", "Genderuwo Penjual Kremesan", "Kuntilanak Pemikat Kalimantan", "Tuyul Penjaga Kawan", "Jin Pemikat Seri",
    "Pocong Penjaga Limbah", "Hantu Penjaga Lintasan", "Arwah Tukang Kekar", "Setan Penghuni Lelaki", "Genderuwo Penjual Kembang",
    "Kuntilanak Pemikat Pemilik", "Tuyul Penjaga Tumpeng", "Jin Pemikat Manusia", "Pocong Penjaga Gunung", "Hantu Penjaga Perdamaian",
    "Arwah Tukang Rancang", "Setan Penghuni Perasaan", "Genderuwo Penjual Ketoprak", "Kuntilanak Pemikat Karang", "Tuyul Penjaga Gajah",
    "Jin Pemikat Nyi", "Pocong Penjaga Petir", "Hantu Penjaga Panti", "Arwah Tukang Limbah", "Setan Penghuni Kediaman",
    "Genderuwo Penjual Lelaki", "Kuntilanak Pemikat Penduduk", "Tuyul Penjaga Sampah", "Jin Pemikat Pustaka", "Pocong Penjaga Awan",
    "Hantu Penjaga Aneh", "Arwah Tukang Kuat", "Setan Penghuni Agama", "Genderuwo Penjual Pasal", "Kuntilanak Pemikat Apa",
    "Tuyul Penjaga Harga", "Jin Pemikat Manusia", "Pocong Penjaga Gelar", "Hantu Penjaga Gunung", "Arwah Tukang Pura",
    "Setan Penghuni Keadaan", "Genderuwo Penjual Kandang", "Kuntilanak Pemikat Hari", "Tuyul Penjaga Dosen", "Jin Pemikat Pemilik",
    "Pocong Penjaga Gudang", "Hantu Penjaga Kertas", "Arwah Tukang Tuah", "Setan Penghuni Lahir", "Genderuwo Penjual Perasaan",
    "Kuntilanak Pemikat Kantor", "Tuyul Penjaga Buku", "Jin Pemikat Pejabat", "Pocong Penjaga Bunyi", "Hantu Penjaga Lelaki",
    "Arwah Tukang Dagu", "Setan Penghuni Membaca", "Genderuwo Penjual Kedua", "Kuntilanak Pemikat Pria", "Tuyul Penjaga Putus",
    "Jin Pemikat Orang", "Pocong Penjaga Bangsa", "Hantu Penjaga Alas", "Arwah Tukang Ayam", "Setan Penghuni Alam",
    "Genderuwo Penjual Makanan", "Kuntilanak Pemikat Kalimantan", "Tuyul Penjaga Alam", "Jin Pemikat Alam", "Pocong Penjaga Pesona",
    "Hantu Penjaga Antara", "Arwah Tukang Berita", "Setan Penghuni Nyawa", "Genderuwo Penjual Telur", "Kuntilanak Pemikat Jiwa",
    "Tuyul Penjaga Hidup", "Jin Pemikat Kanan", "Pocong Penjaga Kembar", "Hantu Penjaga Negeri", "Arwah Tukang Kepala",
    "Setan Penghuni Rahasia", "Genderuwo Penjual Kepala", "Kuntilanak Pemikat Bangsa", "Tuyul Penjaga Pukul", "Jin Pemikat Cinta",
    "Pocong Penjaga Jalan", "Hantu Penjaga Bukan", "Arwah Tukang Cinta", "Setan Penghuni Hidup", "Genderuwo Penjual Ketupat",
    "Kuntilanak Pemikat Jatuh", "Tuyul Penjaga Kecil", "Jin Pemikat Berat", "Pocong Penjaga Setia", "Hantu Penjaga Cinta",
    "Arwah Tukang Pagi", "Setan Penghuni Rendah", "Genderuwo Penjual Pasar", "Kuntilanak Pemikat Kalbu", "Tuyul Penjaga Kertas",
    "Jin Pemikat Alam", "Pocong Penjaga Besar", "Hantu Penjaga Hati", "Arwah Tukang Bangsa", "Setan Penghuni Alam",
    "Genderuwo Penjual Bangsa", "Kuntilanak Pemikat Cinta", "Tuyul Penjaga Tahu", "Jin Pemikat Jiwa", "Pocong Penjaga Alam",
    "Hantu Penjaga Perempuan", "Arwah Tukang Peran", "Setan Penghuni Rakyat", "Genderuwo Penjual Rakyat", "Kuntilanak Pemikat Bukan",
    "Tuyul Penjaga Rakyat", "Jin Pemikat Makna", "Pocong Penjaga Alam", "Hantu Penjaga Suara", "Arwah Tukang Pecah",
    "Setan Penghuni Alam", "Genderuwo Penjual Tersesat", "Kuntilanak Pemikat Tersesat", "Tuyul Penjaga Tersesat", "Jin Pemikat Jalan",
    "Pocong Penjaga Pagi", "Hantu Penjaga Sore", "Arwah Tukang Malam", "Setan Penghuni Siang", "Genderuwo Penjual Bahaya",
    "Kuntilanak Pemikat Bahaya", "Tuyul Penjaga Bahaya", "Jin Pemikat Angin", "Pocong Penjaga Perempuan", "Hantu Penjaga Pria",
    "Arwah Tukang Alam", "Setan Penghuni Makanan", "Genderuwo Penjual Raja", "Kuntilanak Pemikat Raja", "Tuyul Penjaga Raja",
    "Jin Pemikat Kejahatan", "Pocong Penjaga Kejahatan", "Hantu Penjaga Kejahatan", "Arwah Tukang Pemakaman", "Setan Penghuni Alam",
    "Genderuwo Penjual Jalan", "Kuntilanak Pemikat Jalan", "Tuyul Penjaga Jalan", "Jin Pemikat Lembah", "Pocong Penjaga Lembah",
    "Hantu Penjaga Lembah", "Arwah Tukang Hari", "Setan Penghuni Malam", "Genderuwo Penjual Hari", "Kuntilanak Pemikat Hari",
    "Tuyul Penjaga Hari", "Jin Pemikat Lelaki", "Pocong Penjaga Lelaki", "Hantu Penjaga Lelaki", "Arwah Tukang Ayam",
    "Setan Penghuni Ayam", "Genderuwo Penjual Ayam", "Kuntilanak Pemikat Ayam", "Tuyul Penjaga Ayam", "Jin Pemikat Laki-laki",
    "Pocong Penjaga Laki-laki", "Hantu Penjaga Laki-laki", "Arwah Tukang Cinta", "Setan Penghuni Cinta", "Genderuwo Penjual Cinta",
    "Kuntilanak Pemikat Cinta", "Tuyul Penjaga Cinta", "Jin Pemikat Remaja", "Pocong Penjaga Remaja", "Hantu Penjaga Remaja",
    "Arwah Tukang Putus", "Setan Penghuni Putus", "Genderuwo Penjual Putus", "Kuntilanak Pemikat Putus", "Tuyul Penjaga Putus",
    "Jin Pemikat Warna", "Pocong Penjaga Warna", "Hantu Penjaga Warna", "Arwah Tukang Pecat", "Setan Penghuni Pecat",
    "Genderuwo Penjual Pecat", "Kuntilanak Pemikat Pecat", "Tuyul Penjaga Pecat", "Jin Pemikat Cinta", "Pocong Penjaga Cinta",
    "Hantu Penjaga Cinta", "Arwah Tukang Cinta", "Setan Penghuni Cinta", "Genderuwo Penjual Cinta", "Kuntilanak Pemikat Cinta",
    "Tuyul Penjaga Cinta", "Jin Pemikat Merah", "Pocong Penjaga Merah", "Hantu Penjaga Merah", "Arwah Tukang Merah",
    "Setan Penghuni Merah", "Genderuwo Penjual Merah", "Kuntilanak Pemikat Merah", "Tuyul Penjaga Merah", "Jin Pemikat Serangga",
    "Pocong Penjaga Serangga", "Hantu Penjaga Serangga", "Arwah Tukang Papan", "Setan Penghuni Papan", "Genderuwo Penjual Papan",
    "Kuntilanak Pemikat Papan", "Tuyul Penjaga Papan", "Jin Pemikat Telur", "Pocong Penjaga Telur", "Hantu Penjaga Telur",
    "Arwah Tukang Kacang", "Setan Penghuni Kacang", "Genderuwo Penjual Kacang", "Kuntilanak Pemikat Kacang", "Tuyul Penjaga Kacang",
    "Jin Pemikat Sosial", "Pocong Penjaga Sosial", "Hantu Penjaga Sosial", "Arwah Tukang Memuji", "Setan Penghuni Memuji",
    "Genderuwo Penjual Memuji", "Kuntilanak Pemikat Memuji", "Tuyul Penjaga Memuji", "Jin Pemikat Orang", "Pocong Penjaga Orang",
    "Hantu Penjaga Orang", "Arwah Tukang Akhirat", "Setan Penghuni Akhirat", "Genderuwo Penjual Akhirat", "Kuntilanak Pemikat Akhirat",
    "Tuyul Penjaga Akhirat", "Jin Pemikat Emas", "Pocong Penjaga Emas", "Hantu Penjaga Emas", "Arwah Tukang Emas",
    "Setan Penghuni Emas", "Genderuwo Penjual Emas", "Kuntilanak Pemikat Emas", "Tuyul Penjaga Emas", "Jin Pemikat Ayam",
    "Pocong Penjaga Ayam", "Hantu Penjaga Ayam", "Arwah Tukang Ayam", "Setan Penghuni Ayam", "Genderuwo Penjual Ayam",
    "Kuntilanak Pemikat Ayam", "Tuyul Penjaga Ayam", "Jin Pemikat Cinta", "Pocong Penjaga Cinta", "Hantu Penjaga Cinta",
    "Arwah Tukang Cinta", "Setan Penghuni Cinta", "Genderuwo Penjual Cinta", "Kuntilanak Pemikat Cinta", "Tuyul Penjaga Cinta",
    "Jin Pemikat Cinta", "Pocong Penjaga Cinta", "Hantu Penjaga Cinta", "Arwah Tukang Cinta", "Setan Penghuni Cinta",
    "Genderuwo Penjual Cinta", "Kuntilanak Pemikat Cinta", "Tuyul Penjaga Cinta", "Jin Pemikat Jalan", "Pocong Penjaga Jalan",
    "Hantu Penjaga Jalan", "Arwah Tukang Jalan", "Setan Penghuni Jalan", "Genderuwo Penjual Jalan", "Kuntilanak Pemikat Jalan",
    "Tuyul Penjaga Jalan", "Jin Pemikat Ketika", "Pocong Penjaga Ketika", "Hantu Penjaga Ketika", "Arwah Tukang Ketika",
    "Setan Penghuni Ketika", "Genderuwo Penjual Ketika", "Kuntilanak Pemikat Ketika", "Tuyul Penjaga Ketika", "Jin Pemikat Jiwa",
    "Pocong Penjaga Jiwa", "Hantu Penjaga Jiwa", "Arwah Tukang Jiwa", "Setan Penghuni Jiwa", "Genderuwo Penjual Jiwa",
    "Kuntilanak Pemikat Jiwa", "Tuyul Penjaga Jiwa", "Jin Pemikat Pemikiran", "Pocong Penjaga Pemikiran", "Hantu Penjaga Pemikiran",
    "Arwah Tukang Pemikiran", "Setan Penghuni Pemikiran", "Genderuwo Penjual Pemikiran", "Kuntilanak Pemikat Pemikiran",
    "Tuyul Penjaga Pemikiran", "Jin Pemikat Rasa", "Pocong Penjaga Rasa", "Hantu Penjaga Rasa", "Arwah Tukang Rasa",
    "Setan Penghuni Rasa", "Genderuwo Penjual Rasa", "Kuntilanak Pemikat Rasa", "Tuyul Penjaga Rasa", "Jin Pemikat Suara",
    "Pocong Penjaga Suara", "Hantu Penjaga Suara", "Arwah Tukang Suara", "Setan Penghuni Suara", "Genderuwo Penjual Suara",
    "Kuntilanak Pemikat Suara", "Tuyul Penjaga Suara", "Jin Pemikat Suara", "Pocong Penjaga Suara", "Hantu Penjaga Suara",
    "Arwah Tukang Suara", "Setan Penghuni Suara", "Genderuwo Penjual Suara", "Kuntilanak Pemikat Suara", "Tuyul Penjaga Suara",
    "Jin Pemikat Jantung", "Pocong Penjaga Jantung", "Hantu Penjaga Jantung", "Arwah Tukang Jantung", "Setan Penghuni Jantung",
    "Genderuwo Penjual Jantung", "Kuntilanak Pemikat Jantung", "Tuyul Penjaga Jantung", "Jin Pemikat Kepala",
    "Pocong Penjaga Kepala", "Hantu Penjaga Kepala", "Arwah Tukang Kepala", "Setan Penghuni Kepala", "Genderuwo Penjual Kepala",
    "Kuntilanak Pemikat Kepala", "Tuyul Penjaga Kepala", "Jin Pemikat Kepala", "Pocong Penjaga Kepala", "Hantu Penjaga Kepala",
    "Arwah Tukang Kepala", "Setan Penghuni Kepala", "Genderuwo Penjual Kepala", "Kuntilanak Pemikat Kepala", "Tuyul Penjaga Kepala",
    "Jin Pemikat Kepala", "Pocong Penjaga Kepala", "Hantu Penjaga Kepala", "Arwah Tukang Kepala", "Setan Penghuni Kepala",
    "Genderuwo Penjual Kepala", "Kuntilanak Pemikat Kepala", "Tuyul Penjaga Kepala", "Jin Pemikat Kepala", "Pocong Penjaga Kepala",
    "Hantu Penjaga Kepala", "Arwah Tukang Kepala", "Setan Penghuni Kepala", "Genderuwo Penjual Kepala", "Kuntilanak Pemikat Kepala",
    "Tuyul Penjaga Kepala", "Jin Pemikat Kepala", "Pocong Penjaga Kepala", "Hantu Penjaga Kepala", "Arwah Tukang Kepala",
    "Setan Penghuni Kepala", "Genderuwo Penjual Kepala", "Kuntilanak Pemikat Kepala", "Tuyul Penjaga Kepala", "Jin Pemikat Kepala",
    "Pocong Penjaga Kepala", "Hantu Penjaga Kepala", "Arwah Tukang Kepala", "Setan Penghuni Kepala", "Genderuwo Penjual Kepala",
    "Kuntilanak Pemikat Kepala", "Tuyul Penjaga Kepala", "Jin Pemikat Kepala", "Pocong Penjaga Kepala", "Hantu Penjaga Kepala",
   
  ];

  const [nama, setNama] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [khodam, setKhodam] = useState("");
  const [loading, setLoading] = useState(false); // State untuk menunjukkan loading
  const usedIndexes = useRef<number[]>([]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * daftarKhodam.length);
    } while (usedIndexes.current.includes(randomIndex) && usedIndexes.current.length < daftarKhodam.length);

    usedIndexes.current.push(randomIndex);
    if (usedIndexes.current.length >= daftarKhodam.length) {
      usedIndexes.current = [];
    }

    const randomKhodam = daftarKhodam[randomIndex];

    setTimeout(() => {
      setKhodam(randomKhodam);
      setShowResult(true);
      setLoading(false);
    }, 2000);
  };

  const resetForm = () => {
    setNama("");
    setShowResult(false);
    setKhodam("");
  };

  return (
    <div className="relative w-screen h-screen bg-cover bg-center" style={{ backgroundImage: "url('/Background.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h1 className="text-white text-[36px] md:text-[50px] mb-10 relative font-Cafe">
          Cek Khodam <span className="text-[#54e5ff]">Kamu!</span>
        </h1>
        <div className="bg-black p-8 rounded-lg shadow-lg max-w-md w-full backdrop-blur-lg backdrop-filter bg-opacity-0 border border-[#54e5ff]">
          {!showResult && (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-white font-light mb-[20px] ml-4">Masukan nama yang ingin di cek</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  className="px-4 py-2 text-white border-[2px] border-[#54e5ff] rounded-full w-full h-[50px] focus:outline-none focus:border-[#3dbdd4] bg-black bg-opacity-50 backdrop-blur-lg"
                  required
                  placeholder="Kak Ros"
                />
              </div>
              <div className="flex justify-center w-full">
                <button type="submit"
                  style={{
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08)",
                  }}
                  className="relative bg-[#116a7a71] hover:bg-[#116a7a] text-white px-4 py-2 rounded-full focus:outline-none">
                  {loading ? (
                    <div className="animate-wave w-20">👻</div>
                  ) : (
                    "👻 Check Khodam 👻"
                  )}
                </button>
              </div>
            </form>
          )}
          {showResult && (
            <div className="text-center">
              <h1 className="text-white text-[18px] md:text-[20px] font-light mb-4">Selamat <span className="text-[#93f3fa]">{nama}</span>, Khodam kamu adalah</h1>
              <p className="text-[#93f3fa] text-[36px] md:text-[47px] font-bold mb-4">{khodam}</p>
              <h1 className="text-white text-[18px] md:text-[20px] font-light mb-4">Jangan lupa share ke teman teman kamu agar mereka juga tahu khodam yang ada di diri nya! 👻👻👻</h1>
              <button onClick={resetForm}
                style={{
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08)",
                }}
                className="bg-[#29a7be6e] hover:bg-[#29a8bea4] text-white px-4 py-2 rounded-full text-[15px] md:text-sm w-[200px] focus:outline-none">Coba Nama Lain👻</button>
            </div>
          )}
        </div>
        <div className="mt-8">
          <a
            href="https://trakteer.id/icamganteng/tip?quantity=1"
            target="_blank"
            rel="noopener noreferrer"
            className="block wave-sigma bg-[#116a7a71] hover:bg-[#116a7a] font-semibold text-[12px] md:text-[13px] h-[40px] text-white px-4 py-2 rounded-full text-center w-[250px] md:w-[200px] mx-auto focus:outline-none"
            style={{
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08)",
            }}
          >
            💸Dukung saya di trakteer
          </a>
        </div>
        <p className="text-gray-400 mt-4">Made by <a href="https://www.instagram.com/icamril/" target="_blank" className="hover:text-white">@icam</a></p>
      </div>
    </div>
  );
}
