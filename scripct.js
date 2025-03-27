document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("hitungLuas").addEventListener("click", hitungLuas);
    document.getElementById("resetLuas").addEventListener("click", resetLuas);
    document.getElementById("hitungKeliling").addEventListener("click", hitungKeliling);
    document.getElementById("resetKeliling").addEventListener("click", resetKeliling);
});

function hitungLuas() {
    let sisi = document.getElementById("sisiLuas").value;
    if (sisi === "" || isNaN(sisi) || sisi <= 0) {
        alert("Masukkan nilai sisi yang valid!");
        return;
    }
    let luas = sisi * sisi;
    document.getElementById("hasilLuas").innerText = `Luas = ${sisi} x ${sisi} = ${luas}`;
}

function resetLuas() {
    document.getElementById("sisiLuas").value = "";
    document.getElementById("hasilLuas").innerText = "";
}

function hitungKeliling() {
    let sisi = document.getElementById("sisiKeliling").value;
    if (sisi === "" || isNaN(sisi) || sisi <= 0) {
        alert("Masukkan nilai sisi yang valid!");
        return;
    }
    let keliling = 4 * sisi;
    document.getElementById("hasilKeliling").innerText = `Keliling = 4 x ${sisi} = ${keliling}`;
}

function resetKeliling() {
    document.getElementById("sisiKeliling").value = "";
    document.getElementById("hasilKeliling").innerText = "";
}
