import { isBlacklisted } from './blacklist.js';

window.initiateTransaction = function () {
  const recipient = prompt("Masukkan wallet address penerima:");
  const amount = prompt("Masukkan jumlah Pi:");

  if (isBlacklisted(recipient)) {
    alert("⚠️ Transaksi ke alamat ini telah disekat oleh sistem.");
    return;
  }

  alert("✅ Transaksi dibenarkan (simulasi).");
  // Di sini anda boleh sambungkan ke Pi SDK sebenar
}
