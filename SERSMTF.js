function kirim() {
    let nama = document.getElementById("nama").value;
    let kelas = document.getElementById("kelas").value;
    let jadwal = document.querySelector('input[name="jadwal"]:checked');

    let valid = true;

    
    document.getElementById("errorNama").innerText = "";
    document.getElementById("errorKelas").innerText = "";
    document.getElementById("errorJadwal").innerText = "";


    if (nama === "") {
        document.getElementById("errorNama").innerText = "Nama wajib diisi!";
        valid = false;
    }

    if (kelas === "") {
        document.getElementById("errorKelas").innerText = "Kelas wajib diisi!";
        valid = false;
    }

    if (!jadwal) {
        document.getElementById("errorJadwal").innerText = "Pilih jadwal!";
        valid = false;
    }

    
    let ekskul = document.querySelectorAll('input[name="ekskul"]:checked');
    if (ekskul.length > 3) {
        alert("Maksimal pilih 3 ekstrakurikuler!");
        valid = false;
    }

    if (valid) {
        alert("Pendaftaran berhasil!");
    }
}