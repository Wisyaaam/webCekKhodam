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
    "Hantu Penghuni Kebun", "Arwah Tukang Kue", "Setan Penjual Tahu Bulat"
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