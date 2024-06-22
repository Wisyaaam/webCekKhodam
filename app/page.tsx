import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-screen h-screen bg-cover bg-center" style={{ backgroundImage: "url('/Background.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      {/* Konten halaman Anda bisa ditambahkan di sini */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-4xl">Selamat Datang</h1>
      </div>
    </div>
  );
}
