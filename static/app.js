document.addEventListener("DOMContentLoaded", function() {
    // Ambil elemen dengan ID kamar-list
    const kamarList = document.getElementById("kamar-list");

    // Data dummy kamar kos (dapat diganti dengan data yang diambil dari backend)
    const kamarData = [
        { nama: "Centro", harga: "Rp 1.000.000/bulan", lokasi: "Boyolali", deskripsi: "Kamar luas dengan Meja Rias dan Wi-Fi gratis." },
        { nama: "TengahKota1", harga: "Rp 800.000/bulan", lokasi: "Boyolali", deskripsi: "Kamar nyaman dekat dengan mana aja dan pusat perbelanjaan." },
        { nama: "TengahKota2", harga: "Rp 700.000/bulan", lokasi: "Boyolali", deskripsi: "Kamar nyaman dekat dengan mana aja dan pusat perbelanjaan." }
    ];

    // Fungsi untuk menampilkan daftar kamar
    function tampilkanKamar() {
        kamarData.forEach(function(kamar) {
            const kamarDiv = document.createElement("div");
            kamarDiv.classList.add("kamar-item");

            const kamarNama = document.createElement("h3");
            kamarNama.textContent = kamar.nama;

            const kamarHarga = document.createElement("p");
            kamarHarga.textContent = kamar.harga;

            const kamarLokasi = document.createElement("p");
            kamarLokasi.textContent = kamar.lokasi;

            kamarDiv.appendChild(kamarNama);
            kamarDiv.appendChild(kamarHarga);
            kamarDiv.appendChild(kamarLokasi);

            kamarDiv.addEventListener("click", function() {
                alert(`Detail Kamar: ${kamar.deskripsi}`);
            });

            kamarList.appendChild(kamarDiv);
        });
    }

    // Panggil fungsi untuk menampilkan kamar
    tampilkanKamar();
});
