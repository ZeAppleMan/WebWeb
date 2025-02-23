// Fungsi untuk memilih hotel
function selectHotel(hotelName) {
    // Menampilkan hotel yang dipilih
    document.getElementById('selectedHotel').innerText = Anda  (hotelName);

    // Menampilkan tombol lanjut ke pemesanan
    document.getElementById('bookButton').style.display = 'inline-block';
}

// Fungsi untuk melanjutkan ke halaman pemesanan kamar
function redirectToBooking() {
    // Menyimpan nama hotel yang dipilih di localStorage
    const selectedHotel = document.getElementById('selectedHotel').innerText.replace('Anda memilih ', '').replace('.', '');
    localStorage.setItem('selectedHotel', selectedHotel);

    // Mengarahkan ke halaman pemesanan kamar
    window.location.href = 'pembayaran.html';
}