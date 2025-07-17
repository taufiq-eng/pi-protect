// Senarai alamat wallet yang disekat
const blacklist = [
  'GCOR3TJAYA4JDV6GJSREO4TRDUW32IA7BQN3IMY553HQ26NL77W7TEAM'
];

function handleTransaction() {
  const receiver = document.getElementById("receiver").value.trim();  
  const amount = document.getElementById("amount").value.trim();      
  const messageEl = document.getElementById("message");               

  if (blacklist.includes(receiver)) {
    messageEl.innerText = "⚠️ Transaksi dihalang: Wallet ini berada dalam senarai sekatan.";
    return;
  }

  if (!amount || isNaN(amount)) {
    messageEl.innerText = "⚠️ Masukkan jumlah Pi yang sah.";
    return;
  }

  messageEl.innerText = "✅ Transaksi dibenarkan. Sedang diproses...";

  Pi.createPayment({
    amount: amount,
    memo: "Transaksi diluluskan AI Bot",
    metadata: { to: receiver },
  }, {
    onReadyForServerApproval: function(paymentId) {
      console.log("Ready for server approval", paymentId);
    },
    onReadyForServerCompletion: function(paymentId, txid) {
      console.log("Ready for server completion", paymentId, txid);
    },
    onCancel: function(paymentId) {
      console.log("Transaksi dibatalkan", paymentId);
    },
    onError: function(error, paymentId) {
      console.error("Ralat semasa transaksi:", error);
    }
  });
}