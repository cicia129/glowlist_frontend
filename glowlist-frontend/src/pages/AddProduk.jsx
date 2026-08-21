import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddProduk() {
    const [formData, setFormData] = useState({
        judul: "",
        deskripsi: "",
        harga: "",
        id_kategori: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(formData);

        try {
            const res = await fetch("http://localhost:5000/produk", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                alert("Produk berhasil ditambahkan!");
                navigate("/produk");
            } else {
                const data = await res.json();
                alert(data.message || "Gagal menambahkan produk");
            }
        } catch (err) {
            console.error("Error:", err);
            alert("Terjadi kesalahan saat menambah produk");
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-3">Tambah Produk</h2>
            <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
                <div className="mb-3">
                    <label className="form-label">Judul Produk</label>
                    <input
                        type="text"
                        name="judul"
                        value={formData.judul}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Masuk nama produk"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="from-label">Deskripsi</label>
                    <textarea
                        name="deskripsi"
                        value={formData.deskripsi}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Masukkan harga"
                    ></textarea>
                </div>

                <div className="mb-3">
                    <label className="form-label">Harga</label>
                    <input
                        type="number"
                        name="harga"
                        value={formData.harga}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Masuk harga"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Kategori</label>
                    <select
                        type="number"
                        name="id_kategori"
                        value={formData.id_kategori}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Masukkan kategori"
                    >
                        <option value="">---Pilih Kategori---</option>
                        <option value="2">Tone Up</option>
                        <option valie="3">Sunscreen</option>
                        <option value="4">Musturizer</option>
                        <option value="5">Lip balm</option>
                    </select>
                </div>


                <div className="mb-3">
                    <label className="from-label">Nama File</label>
                    <input
                        type="text"
                        name="nama_file"
                        value={formData.nama_file}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Masukkan Nama File"
                        required
                    />
                </div>

                <button type="submit" className="btn btn-success">
                    Simpan
                </button>
            </form>
        </div>
    );
}