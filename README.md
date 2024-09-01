# Sewa Kamar Kos

Ini adalah proyek aplikasi web untuk menyewakan kamar kos yang dibangun menggunakan Flask dan dideploy ke Heroku.

## Deskripsi Proyek

Aplikasi ini memungkinkan pengguna untuk melihat daftar kamar kos yang tersedia beserta detail seperti nama, harga, lokasi, dan gambar kamar. Proyek ini juga menyediakan antarmuka pengguna yang responsif menggunakan HTML, CSS, dan JavaScript.

## Fitur

- Menampilkan daftar kamar kos beserta detailnya.
- Menampilkan gambar untuk setiap kamar kos.
- Responsif dan dapat diakses dari berbagai perangkat.

## Teknologi yang Digunakan

- **Flask** - Framework web Python untuk membangun aplikasi web.
- **HTML/CSS/JavaScript** - Teknologi front-end untuk antarmuka pengguna.
- **Gunicorn** - Server WSGI untuk aplikasi Python.
- **Heroku** - Platform untuk mendeploy aplikasi web.

## Cara Menjalankan Proyek Secara Lokal

1. **Clone repository ini:**

   ```bash
   git clone https://github.com/WawanByl/SewaKamarKos.git
   cd SewaKamarKos
   
2. **Buat virtual environment dan instal dependensi:**

   python -m venv venv
   venv\Scripts\activate # Untuk Windows
   source venv/bin/activate # Untuk MacOS/Linux

   pip install -r requirements.txt

3. **Jalankan aplikasi:**

   python app.py

4. **Akses aplikasi di browser:**

   Buka http://127.0.0.1:5000 di browser Anda.

## Deployment ke Heroku

1. **Login ke Heroku:**

   heroku login

2. **Buat aplikasi baru di Heroku:**

   heroku create kos-putri-boyolali

3. **Push kode ke Heroku:**

   git push heroku master

4. **Akses aplikasi:**

   Buka https://kos-putri-boyolali.herokuapp.com di browser Anda.

## Struktur Proyek

SewaKamarKos/
│
├── app.py                   # File utama aplikasi Flask
├── requirements.txt         # File dependensi Python
├── Procfile                 # File konfigurasi untuk Heroku
├── runtime.txt              # Versi Python untuk Heroku
├── static/                  # Folder untuk file statis (CSS, JavaScript, Images)
│   ├── style.css            # File CSS untuk styling
│   ├── app.js               # File JavaScript untuk interaktivitas
│   └── images/              # Folder untuk gambar kamar kos
│       ├── centro.jpg
│       ├── tengahkota1.jpg
│       └── tengahkota2.jpg
└── templates/               # Folder untuk template HTML
    └── index.html           # Template HTML utama

## Kontribusi

   Jika Anda ingin berkontribusi pada proyek ini, silakan fork repository ini dan buat pull request untuk perubahan yang ingin Anda lakukan.

## Lisensi
   
   Proyek ini dilisensikan di bawah MIT License.
