from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    # Data dummy kamar kos
    kamar_list = [
        {"nama": "Kamar 1", "harga": "Rp 1.000.000/bulan", "lokasi": "Jakarta"},
        {"nama": "Kamar 2", "harga": "Rp 800.000/bulan", "lokasi": "Bandung"},
    ]
    return render_template('index.html', kamar_list=kamar_list)

if __name__ == '__main__':
    app.run(debug=True)
