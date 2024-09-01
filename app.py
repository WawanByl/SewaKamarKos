from flask import Flask, render_template
import os

app = Flask(__name__)

@app.route('/')
def home():
    # Data dummy kamar kos
    kamar_list = [
        {"nama": "Centro", "harga": "Rp 1.000.000/bulan", "lokasi": "Boyolali"},
        {"nama": "TengahKota 1", "harga": "Rp 800.000/bulan", "lokasi": "Boyolali"},
        {"nama": "TengahKota 2", "harga": "Rp 700.000/bulan", "lokasi": "Boyolali"},
    ]
    return render_template('index.html', kamar_list=kamar_list)

if __name__ == "__main__":
    # Menggunakan port yang ditentukan oleh Heroku, atau 5000 jika dijalankan secara lokal
    port = int(os.environ.get("PORT", 5000))
    # Menggunakan host "0.0.0.0" agar aplikasi dapat diakses dari semua antarmuka
    app.run(host="0.0.0.0", port=port, debug=True)
