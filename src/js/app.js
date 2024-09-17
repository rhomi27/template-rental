document.getElementById('calculateButton').addEventListener('click', function() {
    const startDate = new Date(document.getElementById('startDate').value);
    const endDate = new Date(document.getElementById('endDate').value);
    const pricePerDay = parseFloat(document.getElementById('pricePerDay').value);

    if (startDate && endDate && pricePerDay) {
        const duration = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
        const totalPrice = duration * pricePerDay;

        document.getElementById('duration').value = `${duration} hari`;
        document.getElementById('totalPrice').value = totalPrice.toFixed(2);
    } else {
        alert('Harap isi semua bidang yang diperlukan.');
    }
});
