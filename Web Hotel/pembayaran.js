document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Mencegah form dikirim langsung

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;
    const amount = document.getElementById('amount').value;

    // Validasi form
    if (!fullName || !email || !cardNumber || !expiryDate || !cvv || !amount) {
    document.getElementById('error-message').style.display = 'block';
    document.getElementById('error-message').innerText = 'Semua kolom wajib diisi!';
    return;
    }

    // Cek format nomor kartu kredit (hanya angka dan 16 digit)
    const cardNumberPattern = /^\d{16}$/;
    if (!cardNumberPattern.test(cardNumber)) {
    document.getElementById('error-message').style.display = 'block';
    document.getElementById('error-message').innerText = 'Nomor kartu kredit tidak valid!';
    return;
    }

    // Simulasi pembayaran sukses
    alert(`Pembayaran sebesar Rp ${amount} telah berhasil! Terima kasih, ${fullName}.`);

    // Reset form setelah sukses
    document.getElementById('paymentForm').reset();
});
