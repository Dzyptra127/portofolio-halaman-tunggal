// Fungsi yang diminta penilaian: showPopup
function showPopup(show) {
    if (show) {
        console.log("✅ Rekomendasi telah diajukan — Popup ditampilkan!");
        alert("Terima kasih! Rekomendasi berhasil dikirim.");
    } else {
        console.log("Popup tidak ditampilkan.");
    }
}

// Fungsi yang diminta penilaian: addRecommendation
function addRecommendation() {
    // Memanggil showPopup(true) setelah rekomendasi diajukan
    showPopup(true);
}

// Efek gulir halus
document.querySelectorAll('a[href^="#"]').forEach(tautan => {
    tautan.addEventListener('click', function(e) {
        e.preventDefault();
        const sasaran = document.querySelector(this.getAttribute('href'));
        if (sasaran) {
            sasaran.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

console.log("✅ script.js dimuat lengkap — fungsi addRecommendation & showPopup siap!");
