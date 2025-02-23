document.addEventListener("DOMContentLoaded", function() {
    // Form Pemesanan
    const bookingForm = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const checkinInput = document.getElementById("checkin");
    const checkoutInput = document.getElementById("checkout");
    const roomsInput = document.getElementById("rooms");
    const submitButton = document.querySelector(".btn-primary");

    // Fungsi validasi form
    function validateForm() {
        // Menghapus pesan kesalahan yang sebelumnya ada
        const errorMessages = document.querySelectorAll(".error-message");
        errorMessages.forEach((msg) => msg.remove());

        let valid = true;

        // Validasi nama
        if (nameInput.value.trim() === "") {
            showErrorMessage(nameInput, "Nama lengkap harus diisi.");
            valid = false;
        }

        // Validasi tanggal check-in
        if (!checkinInput.value) {
            showErrorMessage(checkinInput, "Tanggal check-in harus dipilih.");
            valid = false;
        }

        // Validasi tanggal check-out
        if (!checkoutInput.value) {
            showErrorMessage(checkoutInput, "Tanggal check-out harus dipilih.");
            valid = false;
        }

        // Validasi jumlah kamar
        if (roomsInput.value < 1 || roomsInput.value === "") {
            showErrorMessage(roomsInput, "Jumlah kamar harus lebih dari 0.");
            valid = false;
        }

        return valid;
    }

    // Fungsi untuk menampilkan pesan kesalahan
    function showErrorMessage(inputElement, message) {
        const errorMessage = document.createElement("div");
        errorMessage.classList.add("error-message");
        errorMessage.textContent = message;
        errorMessage.style.color = "red";
        errorMessage.style.fontSize = "14px";
        inputElement.parentElement.appendChild(errorMessage);
    }

    // Menangani submit form
    bookingForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Mencegah form mengirimkan data secara default

        if (validateForm()) {
            // Jika form valid, tampilkan pesan sukses
            alert("Pemesanan Anda berhasil!");
            window.location.href = "pembayaran.html";  // Ganti dengan URL halaman setelah login
        } else {
            alert("Periksa kembali data yang Anda masukkan.");
        }
    });

    // Menambahkan animasi pada tombol saat hover
    submitButton.addEventListener("mouseover", function() {
        submitButton.style.backgroundColor = "#5cb85c"; // Warna tombol saat hover
    });

    submitButton.addEventListener("mouseout", function() {
        submitButton.style.backgroundColor = "#4cae4c"; // Warna tombol kembali seperti semula
    });

    // Animasi scroll untuk tombol "Pesan Sekarang"
    const btnPesan = document.querySelector(".btn-primary");
    btnPesan.addEventListener("click", function() {
        document.getElementById("booking").scrollIntoView({ behavior: "smooth" });

        // landing.page.js

// Fungsi untuk menampilkan alert saat memilih kamar
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', function() {
        const roomName = this.parentElement.querySelector('h3').textContent;
        alert(`Anda telah memilih ${roomName}. Silakan lanjutkan untuk pemesanan.`);

        
    });
});

    });
});

function raiden() {
    window.location.href = "kamar.html";
}
