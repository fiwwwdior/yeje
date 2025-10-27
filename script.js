// Tunggu sampai halaman selesai dimuat
document.addEventListener("DOMContentLoaded", () => {
  const joinBtn = document.getElementById("joinBtn");

  joinBtn.addEventListener("click", () => {
    // Ganti dengan link WhatsApp komunitas kamu
    const groupLink = "https://chat.whatsapp.com/BqiSNp5v3Xc8bw8iPUVXoU";

    // Arahkan ke link di tab baru / langsung buka di WA
    window.open(groupLink, "_blank");
  });
});