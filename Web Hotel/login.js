// Script untuk menangani login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Mencegah form untuk submit secara default
    
    // Ambil nilai input username dan password
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Mendefinisikan data login (misalnya untuk testing)
    const validUsername = "Fauzan556";  // Ganti dengan username yang valid
    const validPassword = "Rossweisse";  // Ganti dengan password yang valid
    
    // Cek apakah username dan password cocok
    if (username === validUsername && password === validPassword) {
        // Jika berhasil login, redirect ke halaman lain atau tampilkan sukses
        alert("Login berhasil!");
        window.location.href = "landing-page-hotel.html";  // Ganti dengan URL halaman setelah login
    } else {
        // Tampilkan pesan error jika login gagal
        const errorMessage = document.getElementById('error-message');
        errorMessage.textContent = "Username atau password salah!";
    }
});
