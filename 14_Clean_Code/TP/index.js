// ==========================================
// 1. DATA LAYER
// ==========================================
async function fetchOrderData(orderId, token) {
    const response = await fetch(`https://example.com/api/order/${orderId}`, {
        headers: { 'Authorization': token }
    });
    
    if (!response.ok) {
        throw new Error('Gagal mengambil detail pesanan');
    }
    return response.json();
}

// ==========================================
// 2. VIEW LAYER
// ==========================================
function renderOrderDetails(order) {
    const detailsDiv = document.getElementById('orderDetails');
    
    // Menggunakan Template Literal untuk HTML yang lebih bersih
    detailsDiv.innerHTML = `
        <h3>Order ID: ${order.id}</h3>
        <p>Status: ${order.status}</p>
    `;
}

function toggleModal(isVisible) {
    const modal = document.getElementById('orderModal');
    modal.style.display = isVisible ? 'block' : 'none';
}

function setupConfirmButton(order, token) {
    const confirmBtn = document.getElementById('confirmOrderBtn');
    
    if (order.status === 'Delivered') {
        confirmBtn.style.display = 'none';
    } else {
        confirmBtn.style.display = 'inline-block'; // Pastikan tombol muncul jika sebelumnya disembunyikan
        
        // Menggunakan properti onclick untuk menghindari duplikasi event listener
        // setiap kali modal dibuka dengan data pesanan yang berbeda.
        confirmBtn.onclick = () => confirmOrder(order.id, token);
    }
}

// ==========================================
// 3. CONTROLLER
// ==========================================
async function handleViewOrderDetails(orderId, token) {
    try {
        // 1. Ambil data
        const order = await fetchOrderData(orderId, token);
        
        // 2. Perbarui UI
        renderOrderDetails(order);
        setupConfirmButton(order, token);
        
        // 3. Tampilkan Modal
        toggleModal(true);
    } catch (error) {
        console.error('Error:', error.message);
        // Opsional: Tampilkan pesan error ke pengguna di sini
    }
}

// ==========================================
// 4. SETUP AWAL
// ==========================================
function initializeModalListeners() {
    const closeBtn = document.querySelector('#orderModal .close');
    // Event listener untuk tombol close cukup dipasang SATU KALI saja
    closeBtn.addEventListener('click', () => {
        toggleModal(false);
    });
}

// Panggil setup ini saat file dimuat
initializeModalListeners();