/* =========================================
   ICONS DICTIONARY (SVG INLINE)
========================================= */
const svgIcons = {
    dashboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>',
    users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
    role: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>',
    org: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>',
    settings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>',
    activity: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>',
    education: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>',
    achievement: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>',
    report: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>',
    announce: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path></svg>',
    task: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>',
    inventory: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>',
    finance: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>',
    profile: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>',
    calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>',
    default: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle></svg>'
};

function getIcon(name) {
    return svgIcons[name] || svgIcons.default;
}

/* =========================================
   MOCK SEED MEMBERS DATA
========================================= */
const initialMembersData = [
    { id: 'mbr_001', name: 'Administrator ScoutOS', username: 'admin', password: 'admin123', class_name: 'XII-TKJ-1', phone: '081234567890', sku_level: 'Garuda', status: 'aktif', primary_role: 'super_admin' },
    { id: 'mbr_002', name: 'Pembina Pramuka', username: 'pembina', password: 'pembina123', class_name: 'Pembina/Guru', phone: '081299887766', sku_level: 'Garuda', status: 'aktif', primary_role: 'pembina' },
    { id: 'mbr_003', name: 'Ketua Pramuka', username: 'ketua', password: 'ketua123', class_name: 'XII-RPL-1', phone: '082198765432', sku_level: 'Laksana', status: 'aktif', primary_role: 'ketua' },
    { id: 'mbr_004', name: 'Wakil Ketua', username: 'wakil', password: 'wakil123', class_name: 'XII-TKJ-2', phone: '085712345678', sku_level: 'Bantara', status: 'aktif', primary_role: 'wakil_ketua' },
    { id: 'mbr_005', name: 'Sekretaris', username: 'sekretaris', password: 'sekretaris123', class_name: 'XI-AKL-1', phone: '089611223344', sku_level: 'Bantara', status: 'aktif', primary_role: 'sekretaris' },
    { id: 'mbr_006', name: 'Bendahara', username: 'bendahara', password: 'bendahara123', class_name: 'XI-OTKP-2', phone: '088199001122', sku_level: 'Bantara', status: 'aktif', primary_role: 'bendahara' },
    { id: 'mbr_007', name: 'Koordinator', username: 'koordinator', password: 'koordinator123', class_name: 'XI-RPL-2', phone: '081377889900', sku_level: 'Terap', status: 'aktif', primary_role: 'koordinator' },
    { id: 'mbr_008', name: 'Anggota Pramuka', username: 'anggota', password: 'anggota123', class_name: 'X-TKJ-1', phone: '083812341234', sku_level: 'Ramu', status: 'aktif', primary_role: 'anggota' }
];

const roleLabels = {
    super_admin: 'SUPER ADMIN', pembina: 'PEMBINA', ketua: 'KETUA', wakil_ketua: 'WAKIL KETUA',
    sekretaris: 'SEKRETARIS', bendahara: 'BENDAHARA', koordinator: 'KOORDINATOR', anggota: 'ANGGOTA'
};

// Menu-menu berikut WAJIB muncul di seluruh role (sesuai kebutuhan aplikasi),
// baru kemudian ditambah menu spesifik masing-masing role di bawahnya.
const REQUIRED_NAV_ITEMS = [
    { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
    { id: 'kegiatan', label: 'Kegiatan', icon: 'activity' },
    { id: 'sku_skk', label: 'SKU & SKK', icon: 'achievement' },
    { id: 'pendidikan', label: 'Pendidikan', icon: 'education' },
    { id: 'keuangan', label: 'Keuangan', icon: 'finance' },
    { id: 'tugas', label: 'Tugas', icon: 'task' },
    { id: 'inventaris', label: 'Inventaris', icon: 'inventory' },
    { id: 'prestasi', label: 'Prestasi', icon: 'achievement' },
    { id: 'poin', label: 'Poin Saya', icon: 'achievement' },
    { id: 'pengumuman', label: 'Pengumuman', icon: 'announce' },
    { id: 'proker', label: 'Program Kerja', icon: 'task' }
];

// Menggabungkan menu wajib dengan menu tambahan khusus tiap role, tanpa
// duplikat id (kalau role sudah punya menu dengan id yang sama, versi
// tambahan dari role tersebut yang dipakai).
function buildNav(extraItems) {
    const prefix = extraItems.filter(i => ['dashboard', 'anggota', 'profil'].includes(i.id));
    const suffix = extraItems.filter(i => !['dashboard', 'anggota', 'profil'].includes(i.id));
    const merged = [...prefix, ...REQUIRED_NAV_ITEMS, ...suffix];

    // Buang duplikat id, pertahankan kemunculan pertama
    const seen = new Set();
    return merged.filter(i => {
        if (seen.has(i.id)) return false;
        seen.add(i.id);
        return true;
    });
}

const navigationConfig = {
    super_admin: buildNav([
        { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
        { id: 'anggota', label: 'Manajemen Anggota', icon: 'users' },
        { id: 'manajemen_role', label: 'Manajemen Role', icon: 'role' },
        { id: 'organisasi', label: 'Organisasi', icon: 'org' },
        { id: 'pengaturan', label: 'Pengaturan Sistem', icon: 'settings' }
    ]),
    pembina: buildNav([
        { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
        { id: 'anggota', label: 'Anggota', icon: 'users' },
        { id: 'absensi', label: 'Absensi', icon: 'calendar' },
        { id: 'laporan', label: 'Laporan', icon: 'report' }
    ]),
    ketua: buildNav([
        { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
        { id: 'anggota', label: 'Anggota', icon: 'users' },
        { id: 'absensi', label: 'Absensi', icon: 'calendar' }
    ]),
    wakil_ketua: buildNav([
        { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
        { id: 'anggota', label: 'Anggota', icon: 'users' },
        { id: 'absensi', label: 'Absensi', icon: 'calendar' }
    ]),
    sekretaris: buildNav([
        { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
        { id: 'anggota', label: 'Anggota', icon: 'users' },
        { id: 'absensi', label: 'Absensi', icon: 'calendar' },
        { id: 'dokumen', label: 'Dokumen', icon: 'report' },
        { id: 'surat', label: 'Surat', icon: 'report' },
        { id: 'laporan', label: 'Laporan', icon: 'report' }
    ]),
    bendahara: buildNav([
        { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
        { id: 'laporan_keuangan', label: 'Laporan Keuangan', icon: 'report' }
    ]),
    koordinator: buildNav([
        { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
        { id: 'absensi', label: 'Absensi', icon: 'calendar' },
        { id: 'dokumentasi', label: 'Dokumentasi', icon: 'report' }
    ]),
    anggota: buildNav([
        { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
        { id: 'profil', label: 'Profil Saya', icon: 'profile' },
        { id: 'jadwal', label: 'Jadwal', icon: 'calendar' }
    ])
};

/* =========================================
   STATE MANAGEMENT
========================================= */
let currentUser = null;
let currentPath = 'dashboard';
let membersList = [];
let activitiesList = [];
let absensiList = [];
let skuList = [];
let skkList = [];
let activeMemberTab = 'info';
let activeDetailMemberId = null;
let selectedMemberIds = new Set();
let prokerList = [];
let tugasList = [];
let pengumumanList = [];
let activeProkerTab = 'mingguan';
let keuanganList = [];
let inventarisList = [];
let peminjamanList = [];
let activeInventarisTab = 'barang';
let prestasiList = [];
let pendidikanList = [];
let poinList = [];

document.addEventListener('DOMContentLoaded', async () => {
    await initDatabase();
    checkSession();
    setupEventListeners();
});

/* =========================================
   DATA LAYER — LOCAL STORAGE
========================================= */
async function initDatabase() {
    try {
        membersList = await apiGet('Anggota');
    } catch (err) {
        alert('Gagal mengambil data anggota dari server: ' + err.message);
        membersList = [];
    }

    activitiesList = loadFromStorage('scoutos_kegiatan', []);
    absensiList = loadFromStorage('scoutos_absensi', []);
    skuList = loadFromStorage('scoutos_sku', []);
    skkList = loadFromStorage('scoutos_skk', []);
    prokerList = loadFromStorage('scoutos_proker', []);
    tugasList = loadFromStorage('scoutos_tugas', []);
    pengumumanList = loadFromStorage('scoutos_pengumuman', []);
    keuanganList = loadFromStorage('scoutos_keuangan', []);
    inventarisList = loadFromStorage('scoutos_inventaris', []);
    peminjamanList = loadFromStorage('scoutos_peminjaman', []);
    prestasiList = loadFromStorage('scoutos_prestasi', []);
    pendidikanList = loadFromStorage('scoutos_pendidikan', []);
    poinList = loadFromStorage('scoutos_poin', []);
}

function loadFromStorage(key, fallback) {
    const stored = localStorage.getItem(key);
    if (!stored) {
        localStorage.setItem(key, JSON.stringify(fallback));
        return fallback;
    }
    try {
        return JSON.parse(stored);
    } catch (e) {
        return fallback;
    }
}

async function saveMembersToStorage() {
    try {
        await apiPost({ table: 'Anggota', action: 'replaceAll', data: membersList });
    } catch (err) {
        alert('Gagal menyimpan data anggota ke server: ' + err.message);
    }
}

function saveActivitiesToStorage() {
    localStorage.setItem('scoutos_kegiatan', JSON.stringify(activitiesList));
}

function saveAbsensiToStorage() {
    localStorage.setItem('scoutos_absensi', JSON.stringify(absensiList));
}

function saveSkuToStorage() {
    localStorage.setItem('scoutos_sku', JSON.stringify(skuList));
}

function saveSkkToStorage() {
    localStorage.setItem('scoutos_skk', JSON.stringify(skkList));
}

function saveProkerToStorage() {
    localStorage.setItem('scoutos_proker', JSON.stringify(prokerList));
}

function saveTugasToStorage() {
    localStorage.setItem('scoutos_tugas', JSON.stringify(tugasList));
}

function savePengumumanToStorage() {
    localStorage.setItem('scoutos_pengumuman', JSON.stringify(pengumumanList));
}

function saveKeuanganToStorage() {
    localStorage.setItem('scoutos_keuangan', JSON.stringify(keuanganList));
}

function saveInventarisToStorage() {
    localStorage.setItem('scoutos_inventaris', JSON.stringify(inventarisList));
}

function savePeminjamanToStorage() {
    localStorage.setItem('scoutos_peminjaman', JSON.stringify(peminjamanList));
}

function savePrestasiToStorage() {
    localStorage.setItem('scoutos_prestasi', JSON.stringify(prestasiList));
}

function savePendidikanToStorage() {
    localStorage.setItem('scoutos_pendidikan', JSON.stringify(pendidikanList));
}

function savePoinToStorage() {
    localStorage.setItem('scoutos_poin', JSON.stringify(poinList));
}

/* Menambahkan satu entri ke feed Pengumuman setiap kali ada perubahan data
   di sistem (tambah/ubah/hapus). Dipanggil dari berbagai handler CRUD. */
function addAnnouncement(text) {
    pengumumanList.unshift({
        id: 'ann_' + Date.now(),
        text,
        by: currentUser ? currentUser.name : 'Sistem',
        timestamp: new Date().toISOString()
    });
    // Batasi jumlah entri agar localStorage tidak membengkak
    if (pengumumanList.length > 200) {
        pengumumanList = pengumumanList.slice(0, 200);
    }
    savePengumumanToStorage();
}

/* =========================================
   AUTHENTICATION LOGIC
========================================= */
function checkSession() {
    const session = localStorage.getItem('scoutos_session');
    if (session) {
        try {
            currentUser = JSON.parse(session);
            showApp();
        } catch (e) {
            showLogin();
        }
    } else {
        showLogin();
    }
}

function handleLogin(e) {
    e.preventDefault();
    const userIn = document.getElementById('username').value.trim();
    const passIn = document.getElementById('password').value.trim();
    const errorDiv = document.getElementById('login-error');
    const btn = document.getElementById('btn-login');

    btn.textContent = 'Memeriksa...';
    btn.disabled = true;

    setTimeout(() => {
        const user = membersList.find(u => u.username === userIn && u.password === passIn);
        
        if (user) {
            if (user.status === 'nonaktif' || user.status === 'diberhentikan') {
                errorDiv.textContent = 'Akun Anda dinonaktifkan. Silakan hubungi Pembina / Admin.';
                errorDiv.classList.remove('hidden');
                btn.textContent = 'Masuk ke Sistem';
                btn.disabled = false;
                return;
            }
            const { password, ...sessionData } = user;
            currentUser = { ...sessionData, role: user.primary_role };
            localStorage.setItem('scoutos_session', JSON.stringify(currentUser));
            errorDiv.classList.add('hidden');
            showApp();
        } else {
            errorDiv.textContent = 'Username atau password salah.';
            errorDiv.classList.remove('hidden');
            btn.textContent = 'Masuk ke Sistem';
            btn.disabled = false;
        }
    }, 500);
}

function handleLogout() {
    localStorage.removeItem('scoutos_session');
    currentUser = null;
    closeModal('logout-modal');
    showLogin();
}

/* =========================================
   UI & NAVIGATION
========================================= */
function showLogin() {
    document.getElementById('app-view').classList.add('hidden');
    document.getElementById('login-view').classList.remove('hidden');
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    const btn = document.getElementById('btn-login');
    btn.textContent = 'Masuk ke Sistem';
    btn.disabled = false;
}

function showApp() {
    document.getElementById('login-view').classList.add('hidden');
    document.getElementById('app-view').classList.remove('hidden');
    
    renderHeader();
    renderSidebar();
    navigateTo('dashboard');
}

function renderHeader() {
    const avatarLetter = currentUser.name.charAt(0).toUpperCase();
    const roleString = roleLabels[currentUser.role];
    
    document.getElementById('sidebar-name').textContent = currentUser.name;
    document.getElementById('sidebar-role').textContent = roleString;
    document.getElementById('sidebar-avatar').textContent = avatarLetter;
    
    document.getElementById('header-name').textContent = currentUser.name;
    document.getElementById('header-role').textContent = roleString;
    document.getElementById('header-avatar').textContent = avatarLetter;
}

function renderSidebar() {
    const navMenu = navigationConfig[currentUser.role] || [];
    const navContainer = document.getElementById('sidebar-nav');
    navContainer.innerHTML = '';

    navMenu.forEach(item => {
        const a = document.createElement('a');
        a.className = `nav-item ${item.id === currentPath ? 'active' : ''}`;
        a.innerHTML = `${getIcon(item.icon)} <span>${item.label}</span>`;
        a.addEventListener('click', (e) => {
            e.preventDefault();
            navigateTo(item.id, item.label, item.icon);
            closeSidebar();
        });
        navContainer.appendChild(a);
    });
}

function navigateTo(path, label = 'Dashboard', iconName = 'dashboard') {
    currentPath = path;
    document.getElementById('page-title').textContent = label;
    
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(el => {
        if(el.textContent.trim() === label) el.classList.add('active');
    });

    const mainContent = document.getElementById('main-content');
    // Retrigger animasi fade-in setiap kali berpindah halaman
    mainContent.classList.remove('page-anim');
    void mainContent.offsetWidth;
    mainContent.classList.add('page-anim');

    if (path === 'dashboard') {
        renderDashboard(mainContent);
    } else if (path === 'anggota') {
        renderMembersPage(mainContent);
    } else if (path === 'profil') {
        renderProfile(mainContent);
    } else if (path === 'kegiatan') {
        renderKegiatan(mainContent);
    } else if (path === 'absensi') {
        renderAbsensi(mainContent);
    } else if (path === 'sku_skk') {
        renderSkuSkk(mainContent);
    } else if (path === 'proker') {
        renderProker(mainContent);
    } else if (path === 'tugas') {
        renderTugas(mainContent);
    } else if (path === 'pengumuman') {
        renderPengumuman(mainContent);
    } else if (path === 'keuangan') {
        renderKeuangan(mainContent);
    } else if (path === 'inventaris') {
        renderInventaris(mainContent);
    } else if (path === 'prestasi') {
        renderPrestasi(mainContent);
    } else if (path === 'pendidikan') {
        renderPendidikan(mainContent);
    } else if (path === 'poin') {
        renderPoin(mainContent);
    } else {
        renderPlaceholder(mainContent, label, iconName);
    }
}

/* renderAll(): dipanggil setiap kali data berubah agar halaman yang sedang
   aktif ikut merender ulang tanpa perlu navigasi ulang oleh pengguna. */
function renderAll() {
    const mainContent = document.getElementById('main-content');
    if (!mainContent || document.getElementById('app-view').classList.contains('hidden')) return;

    if (currentPath === 'dashboard') renderDashboard(mainContent);
    else if (currentPath === 'anggota') filterMembersTable();
    else if (currentPath === 'kegiatan') renderKegiatan(mainContent);
    else if (currentPath === 'absensi') renderAbsensi(mainContent);
    else if (currentPath === 'sku_skk') renderSkuSkk(mainContent);
    else if (currentPath === 'proker') renderProker(mainContent);
    else if (currentPath === 'tugas') renderTugas(mainContent);
    else if (currentPath === 'pengumuman') renderPengumuman(mainContent);
    else if (currentPath === 'keuangan') renderKeuangan(mainContent);
    else if (currentPath === 'inventaris') renderInventaris(mainContent);
    else if (currentPath === 'prestasi') renderPrestasi(mainContent);
    else if (currentPath === 'pendidikan') renderPendidikan(mainContent);
    else if (currentPath === 'poin') renderPoin(mainContent);
}

/* =========================================
   DASHBOARD VIEW
========================================= */
function sapaanWaktu() {
    const hour = new Date().getHours();
    if (hour < 10) return 'Selamat pagi';
    if (hour < 15) return 'Selamat siang';
    if (hour < 18) return 'Selamat sore';
    return 'Selamat malam';
}

function renderDashboard(container) {
    const activeCount = membersList.filter(m => m.status === 'aktif').length;
    const now = new Date();
    const activitiesThisMonth = activitiesList.filter(a => {
        if (!a.date) return false;
        const d = new Date(a.date);
        return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
    }).length;
    const recentActivities = [...activitiesList].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);

    container.innerHTML = `
        <div class="dashboard-header">
            <div class="dashboard-header-text">
                <span class="dashboard-greeting-eyebrow">${sapaanWaktu()}</span>
                <h3>Halo, ${currentUser.name.split(' ')[0]} 👋</h3>
                <span class="role-badge">${roleLabels[currentUser.role]}</span>
            </div>
            <div class="dashboard-header-logo">
                <svg viewBox="0 0 100 100" fill="currentColor"><ellipse cx="50" cy="83" rx="9" ry="6"/><path d="M50 83C50 58 50 33 50 10C57 33 57 58 50 83Z"/><path d="M50 83C50 58 50 33 50 10C43 33 43 58 50 83Z" opacity="0.85"/><path d="M50 83C38 64 26 46 17 24C30 33 43 54 50 83Z" opacity="0.9"/><path d="M50 83C62 64 74 46 83 24C70 33 57 54 50 83Z" opacity="0.9"/></svg>
            </div>
        </div>
        
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-icon-badge">${getIcon('users')}</div>
                <div class="stat-title">Total Anggota Aktif</div>
                <div class="stat-value">${activeCount}</div>
            </div>
            <div class="stat-card">
                <div class="stat-icon-badge">${getIcon('achievement')}</div>
                <div class="stat-title">Tingkat SKU Tertinggi</div>
                <div class="stat-value">Garuda</div>
            </div>
            <div class="stat-card">
                <div class="stat-icon-badge">${getIcon('activity')}</div>
                <div class="stat-title">Kegiatan Bulan Ini</div>
                <div class="stat-value">${activitiesThisMonth}</div>
            </div>
            <div class="stat-card">
                <div class="stat-icon-badge">${getIcon('dashboard')}</div>
                <div class="stat-title">Status Sistem</div>
                <div class="stat-value">Aktif</div>
            </div>
        </div>
        
        <div class="card">
            <div class="card-header"><h4>Aktivitas Terbaru Organisasi</h4></div>
            <div class="card-body">
                ${recentActivities.length === 0 ? `
                    <div class="empty-list">Belum ada catatan aktivitas baru hari ini.</div>
                ` : `
                    <div class="recent-activity-list">
                        ${recentActivities.map(a => `
                            <div class="recent-activity-item">
                                <div class="recent-activity-dot"></div>
                                <div>
                                    <strong>${a.title}</strong>
                                    <span>${formatTanggal(a.date)} • ${a.location || 'Lokasi belum ditentukan'}</span>
                                </div>
                                <span class="status-badge status-aktif">${a.status || 'Direncanakan'}</span>
                            </div>
                        `).join('')}
                    </div>
                `}
            </div>
        </div>
    `;
}

function formatTanggal(dateStr) {
    if (!dateStr) return '-';
    const d = new Date(dateStr);
    if (isNaN(d)) return dateStr;
    return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
}

/* =========================================
   MANAJEMEN ANGGOTA (TAHAP 2 CORE)
========================================= */
function canManageMembers() {
    return ['super_admin', 'ketua', 'sekretaris'].includes(currentUser.role);
}

function canManageProker() {
    return ['super_admin', 'ketua'].includes(currentUser.role);
}

function canManageTugas() {
    return ['super_admin', 'ketua', 'wakil_ketua', 'sekretaris'].includes(currentUser.role);
}

// Hak akses Keuangan:
// - canManageKeuangan: boleh mencatat/menghapus transaksi & lihat semua detail (termasuk bukti)
// - canViewKeuanganDetail: boleh lihat daftar transaksi & laporan lengkap, tapi tidak bisa ubah/hapus
// - Role lain: hanya lihat ringkasan saldo & grafik, tanpa rincian transaksi
function canManageKeuangan() {
    return ['super_admin', 'bendahara'].includes(currentUser.role);
}

function canViewKeuanganDetail() {
    return ['super_admin', 'bendahara', 'ketua', 'pembina'].includes(currentUser.role);
}

const KATEGORI_PEMASUKAN = ['Iuran Anggota', 'Sumbangan / Donasi', 'Dana BOS / Sekolah', 'Lain-lain'];
const KATEGORI_PENGELUARAN = ['Konsumsi', 'Transportasi', 'Perlengkapan & ATK', 'Kegiatan / Acara', 'Administrasi', 'Lain-lain'];

// Hak akses Inventaris: yang boleh kelola daftar barang & mencatat peminjaman
function canManageInventaris() {
    return ['super_admin', 'ketua', 'koordinator', 'pembina'].includes(currentUser.role);
}

const KATEGORI_INVENTARIS = ['Perlengkapan Kemah', 'Alat Masak', 'P3K & Kesehatan', 'Bendera & Atribut', 'Alat Tulis & Administrasi', 'Alat Musik / PDD', 'Lain-lain'];
const KONDISI_INVENTARIS = ['Baik', 'Rusak Ringan', 'Rusak Berat', 'Hilang'];

// Hak akses Prestasi: yang boleh menulis / mengedit berita prestasi
function canManagePrestasi() {
    return ['super_admin', 'pembina', 'ketua', 'wakil_ketua', 'sekretaris', 'koordinator'].includes(currentUser.role);
}

const KATEGORI_PRESTASI = ['Individu', 'Kelompok / Regu', 'Sekolah', 'Lomba / Kompetisi', 'Lain-lain'];

// Hak akses Pendidikan: yang boleh kelola materi/pelatihan kepramukaan
function canManagePendidikan() {
    return ['super_admin', 'pembina', 'ketua'].includes(currentUser.role);
}

const JENIS_PENDIDIKAN = ['Materi Kepramukaan', 'Pelatihan Pembina (KMD/KML)', 'Kursus Mahir', 'Workshop / Seminar', 'Lainnya'];

// Hak akses Poin: yang boleh memberi/mengurangi poin anggota
function canManagePoin() {
    return ['super_admin', 'pembina', 'ketua', 'wakil_ketua'].includes(currentUser.role);
}

function renderMembersPage(container) {
    const isManager = canManageMembers();
    const isSuperAdmin = currentUser.role === 'super_admin';
    selectedMemberIds = new Set();

    container.innerHTML = `
        <div class="member-controls">
            <div class="search-filter-group">
                <div class="search-input-box">
                    <input type="text" id="search-member" placeholder="Cari nama, username, kelas..." onkeyup="filterMembersTable()">
                </div>
                <select id="filter-status" onchange="filterMembersTable()" style="max-width: 160px;">
                    <option value="">Semua Status</option>
                    <option value="aktif">Aktif</option>
                    <option value="pending">Pending</option>
                    <option value="nonaktif">Nonaktif</option>
                    <option value="diberhentikan">Diberhentikan</option>
                </select>
                <select id="filter-sku" onchange="filterMembersTable()" style="max-width: 160px;">
                    <option value="">Semua SKU</option>
                    <option value="Ramu">Ramu</option>
                    <option value="Rakit">Rakit</option>
                    <option value="Terap">Terap</option>
                    <option value="Bantara">Bantara</option>
                    <option value="Laksana">Laksana</option>
                    <option value="Garuda">Garuda</option>
                </select>
            </div>
            ${isManager ? `
                <button class="btn-primary" onclick="openAddMemberModal()">
                    ${getIcon('plus')} Tambah Anggota
                </button>
            ` : ''}
        </div>

        ${isSuperAdmin ? `
            <div class="bulk-action-bar hidden" id="bulk-action-bar">
                <span id="bulk-selected-count">0 anggota dipilih</span>
                <button class="btn-danger btn-sm" id="btn-bulk-delete-members">Hapus Terpilih</button>
                <button class="btn-secondary btn-sm" id="btn-bulk-clear-selection">Batalkan Pilihan</button>
            </div>
        ` : ''}

        <div class="card">
            <div class="table-responsive">
                <table class="data-table" id="members-table">
                    <thead>
                        <tr>
                            ${isSuperAdmin ? `<th style="width:36px;"><input type="checkbox" id="select-all-members"></th>` : ''}
                            <th>NIS</th>
                            <th>Anggota</th>
                            <th>Username</th>
                            <th>Kelas</th>
                            <th>Sangga</th>
                            <th>SKU</th>
                            <th>Peran</th>
                            <th>Status</th>
                            <th style="text-align: right;">Aksi</th>
                        </tr>
                    </thead>
                    <tbody id="members-table-body"></tbody>
                </table>
            </div>
        </div>
    `;

    if (isSuperAdmin) {
        document.getElementById('btn-bulk-delete-members').addEventListener('click', handleBulkDeleteMembers);
        document.getElementById('btn-bulk-clear-selection').addEventListener('click', () => {
            selectedMemberIds.clear();
            filterMembersTable();
        });
    }

    filterMembersTable();
}

function filterMembersTable() {
    const search = (document.getElementById('search-member')?.value || '').toLowerCase();
    const statusFilter = document.getElementById('filter-status')?.value || '';
    const skuFilter = document.getElementById('filter-sku')?.value || '';
    const tbody = document.getElementById('members-table-body');
    const isManager = canManageMembers();

    if (!tbody) return;

    const isSuperAdmin = currentUser.role === 'super_admin';

    // Setiap field dibaca dengan fallback string kosong agar 1 baris data
    // yang tidak lengkap (mis. class_name kosong) tidak menyebabkan seluruh
    // render tabel gagal karena error pada .toLowerCase().
    const filtered = membersList.filter(m => {
        const name = (m.name || '').toLowerCase();
        const username = (m.username || '').toLowerCase();
        const className = (m.class_name || '').toLowerCase();
        const matchesSearch = name.includes(search) || username.includes(search) || className.includes(search);
        const matchesStatus = statusFilter === '' || m.status === statusFilter;
        const matchesSku = skuFilter === '' || m.sku_level === skuFilter;
        return matchesSearch && matchesStatus && matchesSku;
    });

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="${isSuperAdmin ? 10 : 9}" style="text-align:center; color: var(--text-muted);">Tidak ada data anggota ditemukan</td></tr>`;
        updateBulkDeleteBar();
        return;
    }

    try {
        tbody.innerHTML = filtered.map(m => `
            <tr>
                ${isSuperAdmin ? `<td><input type="checkbox" class="member-select-checkbox" value="${m.id}" ${selectedMemberIds.has(m.id) ? 'checked' : ''} ${m.id === currentUser.id ? 'disabled title="Tidak bisa menghapus akun sendiri"' : ''}></td>` : ''}
                <td><code>${m.nis || '-'}</code></td>
                <td>
                    <strong>${m.name || '-'}</strong>
                </td>
                <td><code>${m.username || '-'}</code></td>
                <td>${m.tingkat ? m.tingkat + ' - ' : ''}${m.class_name || '-'}</td>
                <td>${m.sangga || '-'}</td>
                <td><span class="badge-future">${m.sku_level || '-'}</span></td>
                <td><strong>${roleLabels[m.primary_role] || m.primary_role || '-'}</strong></td>
                <td><span class="status-badge status-${m.status || 'pending'}">${m.status || '-'}</span></td>
                <td style="text-align: right;">
                    <div class="action-buttons" style="justify-content: flex-end;">
                        <button class="btn-secondary btn-sm" onclick="openMemberDetailModal('${m.id}')">Detail</button>
                        ${isManager ? `
                            <button class="btn-secondary btn-sm" onclick="openEditMemberModal('${m.id}')">Edit</button>
                            ${currentUser.role === 'super_admin' ? `<button class="btn-danger btn-sm" onclick="deleteMember('${m.id}')">Hapus</button>` : ''}
                        ` : ''}
                    </div>
                </td>
            </tr>
        `).join('');
    } catch (err) {
        console.error('Gagal merender tabel anggota:', err);
        tbody.innerHTML = `<tr><td colspan="${isSuperAdmin ? 10 : 9}" style="text-align:center; color: var(--danger);">Terjadi kesalahan saat menampilkan data anggota. Cek console browser (F12) untuk detail.</td></tr>`;
        return;
    }

    if (isSuperAdmin) {
        attachMemberCheckboxListeners(filtered);
    }
}

/* =========================================
   PILIH BANYAK & HAPUS SEKALIGUS (BULK DELETE)
========================================= */
function attachMemberCheckboxListeners(filtered) {
    const selectAll = document.getElementById('select-all-members');
    const selectableIds = filtered.filter(m => m.id !== currentUser.id).map(m => m.id);

    if (selectAll) {
        selectAll.checked = selectableIds.length > 0 && selectableIds.every(id => selectedMemberIds.has(id));
        selectAll.addEventListener('change', () => {
            if (selectAll.checked) {
                selectableIds.forEach(id => selectedMemberIds.add(id));
            } else {
                selectableIds.forEach(id => selectedMemberIds.delete(id));
            }
            filterMembersTable();
        });
    }

    document.querySelectorAll('.member-select-checkbox').forEach(cb => {
        cb.addEventListener('change', () => {
            if (cb.checked) {
                selectedMemberIds.add(cb.value);
            } else {
                selectedMemberIds.delete(cb.value);
            }
            updateBulkDeleteBar();
            if (selectAll) {
                selectAll.checked = selectableIds.length > 0 && selectableIds.every(id => selectedMemberIds.has(id));
            }
        });
    });

    updateBulkDeleteBar();
}

function updateBulkDeleteBar() {
    const bar = document.getElementById('bulk-action-bar');
    if (!bar) return;
    const count = selectedMemberIds.size;
    if (count > 0) {
        bar.classList.remove('hidden');
        document.getElementById('bulk-selected-count').textContent = `${count} anggota dipilih`;
    } else {
        bar.classList.add('hidden');
    }
}

async function handleBulkDeleteMembers() {
    const count = selectedMemberIds.size;
    if (count === 0) return;

    if (confirm(`Apakah Anda yakin ingin menghapus ${count} anggota terpilih? Tindakan ini tidak dapat dibatalkan.`)) {
        membersList = membersList.filter(m => !selectedMemberIds.has(m.id));
        selectedMemberIds.clear();
        await saveMembersToStorage();
        addAnnouncement(`${count} anggota telah dihapus sekaligus.`);
        filterMembersTable();
    }
}

/* =========================================
   MEMBER MODAL & ACTIONS
========================================= */
function openAddMemberModal() {
    document.getElementById('modal-member-title').textContent = 'Tambah Anggota Baru';
    document.getElementById('member-id').value = '';
    document.getElementById('member-form').reset();
    document.getElementById('btn-delete-member').classList.add('hidden');
    document.getElementById('member-modal').classList.remove('hidden');
}

function openEditMemberModal(id) {
    const member = membersList.find(m => m.id === id);
    if (!member) return;

    document.getElementById('modal-member-title').textContent = 'Edit Data Anggota';
    document.getElementById('member-id').value = member.id;
    document.getElementById('m-nis').value = member.nis || '';
    document.getElementById('m-name').value = member.name;
    document.getElementById('m-username').value = member.username;
    document.getElementById('m-password').value = member.password;
    document.getElementById('m-tingkat').value = member.tingkat || 'X';
    document.getElementById('m-class').value = member.class_name;
    document.getElementById('m-sangga').value = member.sangga || 'Belum Ditentukan';
    document.getElementById('m-phone').value = member.phone || '';
    document.getElementById('m-sku').value = member.sku_level;
    document.getElementById('m-status').value = member.status;
    document.getElementById('m-role').value = member.primary_role;

    const btnDelete = document.getElementById('btn-delete-member');
    if (currentUser.role === 'super_admin' && member.id !== currentUser.id) {
        btnDelete.classList.remove('hidden');
    } else {
        btnDelete.classList.add('hidden');
    }

    document.getElementById('member-modal').classList.remove('hidden');
}

async function handleSaveMember(e) {
    e.preventDefault();
    const id = document.getElementById('member-id').value;
    const nis = document.getElementById('m-nis').value.trim();
    const name = document.getElementById('m-name').value.trim();
    const username = document.getElementById('m-username').value.trim();
    const password = document.getElementById('m-password').value.trim() || 'pramuka123';
    const tingkat = document.getElementById('m-tingkat').value;
    const className = document.getElementById('m-class').value.trim();
    const sangga = document.getElementById('m-sangga').value;
    const phone = document.getElementById('m-phone').value.trim();
    const sku = document.getElementById('m-sku').value;
    const status = document.getElementById('m-status').value;
    const role = document.getElementById('m-role').value;

    // Validasi username unik agar login tidak bentrok
    const usernameTaken = membersList.some(m => m.username === username && m.id !== id);
    if (usernameTaken) {
        alert('Username tersebut sudah digunakan anggota lain. Silakan gunakan username lain.');
        return;
    }

    if (id) {
        // Edit Existing Member
        const index = membersList.findIndex(m => m.id === id);
        if (index !== -1) {
            membersList[index] = { ...membersList[index], nis, name, username, password, tingkat, class_name: className, sangga, phone, sku_level: sku, status, primary_role: role };
        }
        addAnnouncement(`Data anggota "${name}" telah diperbarui.`);
    } else {
        // Add New Member
        const newMember = {
            id: 'mbr_' + Date.now(),
            nis, name, username, password, tingkat, class_name: className, sangga, phone, sku_level: sku, status, primary_role: role
        };
        membersList.unshift(newMember);
        addAnnouncement(`Anggota baru "${name}" telah ditambahkan.`);
    }

    await saveMembersToStorage();
    closeModal('member-modal');
    filterMembersTable();
}

async function deleteMember(id) {
    if (confirm('Apakah Anda yakin ingin menghapus anggota ini?')) {
        const member = membersList.find(m => m.id === id);
        membersList = membersList.filter(m => m.id !== id);
        await saveMembersToStorage();
        if (member) addAnnouncement(`Anggota "${member.name}" telah dihapus.`);
        closeModal('member-modal');
        filterMembersTable();
    }
}

/* =========================================
   PROFIL ANGGOTA & TAB SWITCHER
   (diperbaiki agar tidak bergantung pada objek
   `event` global yang tidak selalu tersedia di
   semua browser saat dipanggil lewat atribut
   onclick)
========================================= */
function openMemberDetailModal(id) {
    const member = membersList.find(m => m.id === id);
    if (!member) return;

    activeDetailMemberId = id;
    activeMemberTab = 'info';

    document.getElementById('detail-member-title').textContent = member.name;

    document.querySelectorAll('#member-tabs .member-tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-tab') === 'info');
    });

    renderMemberTabContent();
    document.getElementById('member-detail-modal').classList.remove('hidden');
}

// tId: id tab tujuan ('info' | 'sku' | 'skk' | 'absensi')
// btnEl: elemen tombol yang diklik (dikirim eksplisit lewat `this`, bukan
// mengandalkan window.event yang perilakunya tidak konsisten antar browser)
function switchMemberTab(tId, btnEl) {
    activeMemberTab = tId;

    document.querySelectorAll('#member-tabs .member-tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    if (btnEl) {
        btnEl.classList.add('active');
    } else {
        const fallbackBtn = document.querySelector(`#member-tabs .member-tab-btn[data-tab="${tId}"]`);
        if (fallbackBtn) fallbackBtn.classList.add('active');
    }

    renderMemberTabContent();
}

function renderMemberTabContent() {
    const member = membersList.find(m => m.id === activeDetailMemberId);
    const content = document.getElementById('member-tab-content');
    if (!member || !content) return;

    if (activeMemberTab === 'info') {
        content.innerHTML = `
            <div class="detail-grid">
                <div><label>NIS</label><div><strong>${member.nis || '-'}</strong></div></div>
                <div><label>Nama Lengkap</label><div><strong>${member.name}</strong></div></div>
                <div><label>Kelas</label><div><strong>${member.tingkat ? member.tingkat + ' - ' : ''}${member.class_name}</strong></div></div>
                <div><label>Sangga</label><div><strong>${member.sangga || '-'}</strong></div></div>
                <div><label>No. WhatsApp</label><div><strong>${member.phone || '-'}</strong></div></div>
                <div><label>Tingkat SKU</label><div><strong>${member.sku_level}</strong></div></div>
                <div><label>Peran</label><div><strong>${roleLabels[member.primary_role] || member.primary_role}</strong></div></div>
                <div><label>Status</label><div><span class="status-badge status-${member.status}">${member.status}</span></div></div>
            </div>
        `;
    } else if (activeMemberTab === 'sku') {
        const items = skuList.filter(s => s.member_id === member.id);
        content.innerHTML = items.length === 0
            ? `<div class="empty-list">Belum ada catatan SKU untuk anggota ini.</div>`
            : `<table class="data-table"><thead><tr><th>Butir SKU</th><th>Status</th></tr></thead><tbody>
                ${items.map(s => `<tr><td>${s.item}</td><td><span class="status-badge ${s.status === 'Selesai' ? 'status-aktif' : 'status-pending'}">${s.status}</span></td></tr>`).join('')}
               </tbody></table>`;
    } else if (activeMemberTab === 'skk') {
        const items = skkList.filter(s => s.member_id === member.id);
        content.innerHTML = items.length === 0
            ? `<div class="empty-list">Belum ada catatan SKK untuk anggota ini.</div>`
            : `<table class="data-table"><thead><tr><th>Nama SKK</th><th>Bidang</th><th>Status</th></tr></thead><tbody>
                ${items.map(s => `<tr><td>${s.name}</td><td>${s.bidang}</td><td><span class="status-badge ${s.status === 'Selesai' ? 'status-aktif' : 'status-pending'}">${s.status}</span></td></tr>`).join('')}
               </tbody></table>`;
    } else if (activeMemberTab === 'absensi') {
        const rows = [];
        absensiList.forEach(sesi => {
            const rec = (sesi.records || []).find(r => r.member_id === member.id);
            if (rec) rows.push({ title: sesi.title, date: sesi.date, status: rec.status });
        });
        content.innerHTML = rows.length === 0
            ? `<div class="empty-list">Belum ada riwayat absensi untuk anggota ini.</div>`
            : `<table class="data-table"><thead><tr><th>Sesi</th><th>Tanggal</th><th>Status</th></tr></thead><tbody>
                ${rows.map(r => `<tr><td>${r.title}</td><td>${formatTanggal(r.date)}</td><td>${attendanceBadge(r.status)}</td></tr>`).join('')}
               </tbody></table>`;
    }
}

/* =========================================
   MANAJEMEN KEGIATAN (TAHAP 3)
========================================= */
function renderKegiatan(container) {
    const isManager = ['super_admin', 'pembina', 'ketua', 'wakil_ketua', 'sekretaris', 'koordinator'].includes(currentUser.role);
    const sorted = [...activitiesList].sort((a, b) => new Date(b.date) - new Date(a.date));

    container.innerHTML = `
        <div class="member-controls">
            <h4 style="font-size:1.1rem;">Daftar Kegiatan</h4>
            ${isManager ? `
                <button class="btn-primary" id="btn-open-activity-modal">
                    ${getIcon('plus')} Buat Kegiatan
                </button>
            ` : ''}
        </div>
        <div class="card">
            <div class="table-responsive">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Nama Kegiatan</th>
                            <th>Tanggal</th>
                            <th>Lokasi</th>
                            <th>Penanggung Jawab</th>
                            <th>Status</th>
                            ${isManager ? '<th style="text-align:right;">Aksi</th>' : ''}
                        </tr>
                    </thead>
                    <tbody>
                        ${sorted.length === 0 ? `
                            <tr><td colspan="${isManager ? 6 : 5}" style="text-align:center; color: var(--text-muted);">Belum ada kegiatan yang dibuat</td></tr>
                        ` : sorted.map(a => `
                            <tr>
                                <td><strong>${a.title}</strong>${a.desc ? `<div style="color:var(--text-muted); font-size:0.75rem;">${a.desc}</div>` : ''}</td>
                                <td>${formatTanggal(a.date)}</td>
                                <td>${a.location || '-'}</td>
                                <td>${a.pj || '-'}</td>
                                <td><span class="status-badge ${activityStatusClass(a.status)}">${a.status}</span></td>
                                ${isManager ? `
                                    <td style="text-align:right;">
                                        <div class="action-buttons" style="justify-content:flex-end;">
                                            <button class="btn-secondary btn-sm" onclick="openEditActivityModal('${a.id}')">Edit</button>
                                            <button class="btn-danger btn-sm" onclick="deleteActivity('${a.id}')">Hapus</button>
                                        </div>
                                    </td>
                                ` : ''}
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;

    const btnOpen = document.getElementById('btn-open-activity-modal');
    if (btnOpen) btnOpen.addEventListener('click', openAddActivityModal);
}

function activityStatusClass(status) {
    if (status === 'Selesai') return 'status-aktif';
    if (status === 'Dibatalkan') return 'status-diberhentikan';
    if (status === 'Berlangsung') return 'status-pending';
    return 'status-nonaktif';
}

function openAddActivityModal() {
    document.getElementById('modal-activity-title').textContent = 'Buat Kegiatan Baru';
    document.getElementById('activity-form').reset();
    document.getElementById('a-id').value = '';
    document.getElementById('activity-modal').classList.remove('hidden');
}

function openEditActivityModal(id) {
    const activity = activitiesList.find(a => a.id === id);
    if (!activity) return;
    document.getElementById('modal-activity-title').textContent = 'Edit Kegiatan';
    document.getElementById('a-id').value = activity.id;
    document.getElementById('a-title').value = activity.title;
    document.getElementById('a-date').value = activity.date || '';
    document.getElementById('a-location').value = activity.location || '';
    document.getElementById('a-pj').value = activity.pj || '';
    document.getElementById('a-status').value = activity.status || 'Direncanakan';
    document.getElementById('a-desc').value = activity.desc || '';
    document.getElementById('activity-modal').classList.remove('hidden');
}

function handleSaveActivity(e) {
    e.preventDefault();
    const id = document.getElementById('a-id').value;
    const title = document.getElementById('a-title').value.trim();
    const date = document.getElementById('a-date').value;
    const location = document.getElementById('a-location').value.trim();
    const pj = document.getElementById('a-pj').value.trim();
    const status = document.getElementById('a-status').value;
    const desc = document.getElementById('a-desc').value.trim();

    if (id) {
        const index = activitiesList.findIndex(a => a.id === id);
        if (index !== -1) {
            activitiesList[index] = { ...activitiesList[index], title, date, location, pj, status, desc };
        }
        addAnnouncement(`Kegiatan "${title}" telah diperbarui.`);
    } else {
        activitiesList.unshift({ id: 'act_' + Date.now(), title, date, location, pj, status, desc });
        addAnnouncement(`Kegiatan baru "${title}" telah dibuat.`);
    }

    saveActivitiesToStorage();
    closeModal('activity-modal');
    renderKegiatan(document.getElementById('main-content'));
}

function deleteActivity(id) {
    if (confirm('Hapus kegiatan ini?')) {
        const activity = activitiesList.find(a => a.id === id);
        activitiesList = activitiesList.filter(a => a.id !== id);
        saveActivitiesToStorage();
        if (activity) addAnnouncement(`Kegiatan "${activity.title}" telah dihapus.`);
        renderKegiatan(document.getElementById('main-content'));
    }
}

/* =========================================
   ABSENSI (TAHAP 4)
========================================= */
function renderAbsensi(container) {
    const isManager = ['super_admin', 'pembina', 'ketua', 'wakil_ketua', 'sekretaris', 'koordinator'].includes(currentUser.role);
    const sorted = [...absensiList].sort((a, b) => new Date(b.date) - new Date(a.date));

    container.innerHTML = `
        <div class="member-controls">
            <h4 style="font-size:1.1rem;">Riwayat Sesi Absensi</h4>
            ${isManager ? `
                <button class="btn-primary" id="btn-open-absensi-modal">
                    ${getIcon('plus')} Buat Sesi Absensi
                </button>
            ` : ''}
        </div>
        <div class="card">
            <div class="table-responsive">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Nama Sesi</th>
                            <th>Tanggal</th>
                            <th>Hadir</th>
                            <th>Izin</th>
                            <th>Sakit</th>
                            <th>Alpa</th>
                            <th style="text-align:right;">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${sorted.length === 0 ? `
                            <tr><td colspan="7" style="text-align:center; color: var(--text-muted);">Belum ada sesi absensi yang dibuat</td></tr>
                        ` : sorted.map(s => {
                            const counts = countAttendance(s.records || []);
                            return `
                                <tr>
                                    <td><strong>${s.title}</strong></td>
                                    <td>${formatTanggal(s.date)}</td>
                                    <td>${counts.hadir}</td>
                                    <td>${counts.izin}</td>
                                    <td>${counts.sakit}</td>
                                    <td>${counts.alpa}</td>
                                    <td style="text-align:right;">
                                        <div class="action-buttons" style="justify-content:flex-end;">
                                            <button class="btn-secondary btn-sm" onclick="openAbsensiDetail('${s.id}')">${isManager ? 'Isi / Lihat' : 'Lihat'}</button>
                                            ${isManager ? `<button class="btn-danger btn-sm" onclick="deleteAbsensiSesi('${s.id}')">Hapus</button>` : ''}
                                        </div>
                                    </td>
                                </tr>
                            `;
                        }).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;

    const btnOpen = document.getElementById('btn-open-absensi-modal');
    if (btnOpen) btnOpen.addEventListener('click', () => {
        document.getElementById('absensi-form').reset();
        document.getElementById('absensi-modal').classList.remove('hidden');
    });
}

function countAttendance(records) {
    const counts = { hadir: 0, izin: 0, sakit: 0, alpa: 0 };
    records.forEach(r => {
        if (counts[r.status] !== undefined) counts[r.status]++;
    });
    return counts;
}

function deleteAbsensiSesi(id) {
    if (confirm('Hapus sesi absensi ini beserta seluruh data kehadirannya?')) {
        absensiList = absensiList.filter(s => s.id !== id);
        saveAbsensiToStorage();
        renderAbsensi(document.getElementById('main-content'));
    }
}

function attendanceBadge(status) {
    const map = { hadir: 'status-aktif', izin: 'status-pending', sakit: 'status-pending', alpa: 'status-diberhentikan' };
    const cls = map[status] || 'status-nonaktif';
    return `<span class="status-badge ${cls}">${status}</span>`;
}

function handleSaveAbsensiSesi(e) {
    e.preventDefault();
    const title = document.getElementById('ab-title').value.trim();
    const date = document.getElementById('ab-date').value;

    const records = membersList
        .filter(m => m.status === 'aktif')
        .map(m => ({ member_id: m.id, status: 'hadir' }));

    absensiList.unshift({ id: 'abs_' + Date.now(), title, date, records });
    saveAbsensiToStorage();
    addAnnouncement(`Sesi absensi "${title}" telah dibuat.`);
    closeModal('absensi-modal');
    renderAbsensi(document.getElementById('main-content'));
}

function openAbsensiDetail(sesiId) {
    const sesi = absensiList.find(s => s.id === sesiId);
    if (!sesi) return;
    const isManager = ['super_admin', 'pembina', 'ketua', 'wakil_ketua', 'sekretaris', 'koordinator'].includes(currentUser.role);

    document.getElementById('absensi-detail-title').textContent = `${sesi.title} — ${formatTanggal(sesi.date)}`;

    const body = document.getElementById('absensi-detail-body');
    body.innerHTML = `
        <table class="data-table">
            <thead><tr><th>Nama Anggota</th><th>Status Kehadiran</th></tr></thead>
            <tbody>
                ${(sesi.records || []).map(r => {
                    const m = membersList.find(mm => mm.id === r.member_id);
                    const name = m ? m.name : r.member_id;
                    if (!isManager) return `<tr><td>${name}</td><td>${attendanceBadge(r.status)}</td></tr>`;
                    return `
                        <tr>
                            <td>${name}</td>
                            <td>
                                <select class="attendance-select" onchange="updateAttendanceStatus('${sesi.id}', '${r.member_id}', this.value)">
                                    ${['hadir', 'izin', 'sakit', 'alpa'].map(st => `<option value="${st}" ${r.status === st ? 'selected' : ''}>${st}</option>`).join('')}
                                </select>
                            </td>
                        </tr>
                    `;
                }).join('')}
            </tbody>
        </table>
    `;

    document.getElementById('absensi-detail-modal').classList.remove('hidden');
}

function updateAttendanceStatus(sesiId, memberId, newStatus) {
    const sesi = absensiList.find(s => s.id === sesiId);
    if (!sesi) return;
    const rec = (sesi.records || []).find(r => r.member_id === memberId);
    if (rec) rec.status = newStatus;
    saveAbsensiToStorage();
    renderAbsensi(document.getElementById('main-content'));
}

/* =========================================
   SKU & SKK (TAHAP 5)
========================================= */
function renderSkuSkk(container) {
    const isManager = ['super_admin', 'pembina', 'ketua'].includes(currentUser.role);
    const memberOptions = membersList.map(m => `<option value="${m.id}">${m.name}</option>`).join('');

    container.innerHTML = `
        <div class="member-controls">
            <h4 style="font-size:1.1rem;">Pencapaian SKU</h4>
            ${isManager ? `<button class="btn-primary" id="btn-open-sku-modal">${getIcon('plus')} Tambah SKU</button>` : ''}
        </div>
        <div class="card">
            <div class="table-responsive">
                <table class="data-table">
                    <thead><tr><th>Anggota</th><th>Butir SKU</th><th>Status</th>${isManager ? '<th style="text-align:right;">Aksi</th>' : ''}</tr></thead>
                    <tbody>
                        ${skuList.length === 0 ? `<tr><td colspan="${isManager ? 4 : 3}" style="text-align:center; color:var(--text-muted);">Belum ada data SKU</td></tr>` :
                        skuList.map(s => `
                            <tr>
                                <td>${memberName(s.member_id)}</td>
                                <td>${s.item}</td>
                                <td><span class="status-badge ${s.status === 'Selesai' ? 'status-aktif' : 'status-pending'}">${s.status}</span></td>
                                ${isManager ? `<td style="text-align:right;"><button class="btn-danger btn-sm" onclick="deleteSku('${s.id}')">Hapus</button></td>` : ''}
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>

        <div class="member-controls" style="margin-top: 2rem;">
            <h4 style="font-size:1.1rem;">Pencapaian SKK</h4>
            ${isManager ? `<button class="btn-primary" id="btn-open-skk-modal">${getIcon('plus')} Tambah SKK</button>` : ''}
        </div>
        <div class="card">
            <div class="table-responsive">
                <table class="data-table">
                    <thead><tr><th>Anggota</th><th>Nama SKK</th><th>Bidang</th><th>Status</th>${isManager ? '<th style="text-align:right;">Aksi</th>' : ''}</tr></thead>
                    <tbody>
                        ${skkList.length === 0 ? `<tr><td colspan="${isManager ? 5 : 4}" style="text-align:center; color:var(--text-muted);">Belum ada data SKK</td></tr>` :
                        skkList.map(s => `
                            <tr>
                                <td>${memberName(s.member_id)}</td>
                                <td>${s.name}</td>
                                <td>${s.bidang}</td>
                                <td><span class="status-badge ${s.status === 'Selesai' ? 'status-aktif' : 'status-pending'}">${s.status}</span></td>
                                ${isManager ? `<td style="text-align:right;"><button class="btn-danger btn-sm" onclick="deleteSkk('${s.id}')">Hapus</button></td>` : ''}
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;

    document.getElementById('sku-member').innerHTML = memberOptions;
    document.getElementById('skk-member').innerHTML = memberOptions;

    const btnSku = document.getElementById('btn-open-sku-modal');
    if (btnSku) btnSku.addEventListener('click', () => {
        document.getElementById('sku-form').reset();
        document.getElementById('sku-modal').classList.remove('hidden');
    });

    const btnSkk = document.getElementById('btn-open-skk-modal');
    if (btnSkk) btnSkk.addEventListener('click', () => {
        document.getElementById('skk-form').reset();
        document.getElementById('skk-modal').classList.remove('hidden');
    });
}

function memberName(id) {
    const m = membersList.find(mm => mm.id === id);
    return m ? m.name : 'Anggota tidak ditemukan';
}

function handleSaveSku(e) {
    e.preventDefault();
    const member_id = document.getElementById('sku-member').value;
    const item = document.getElementById('sku-item').value.trim();
    const status = document.getElementById('sku-status').value;
    skuList.unshift({ id: 'sku_' + Date.now(), member_id, item, status });
    saveSkuToStorage();
    addAnnouncement(`Poin SKU baru ditambahkan untuk ${memberName(member_id)}.`);
    closeModal('sku-modal');
    renderSkuSkk(document.getElementById('main-content'));
}

function deleteSku(id) {
    if (confirm('Hapus catatan SKU ini?')) {
        skuList = skuList.filter(s => s.id !== id);
        saveSkuToStorage();
        renderSkuSkk(document.getElementById('main-content'));
    }
}

function handleSaveSkk(e) {
    e.preventDefault();
    const member_id = document.getElementById('skk-member').value;
    const name = document.getElementById('skk-name').value.trim();
    const bidang = document.getElementById('skk-bidang').value;
    const status = document.getElementById('skk-status').value;
    skkList.unshift({ id: 'skk_' + Date.now(), member_id, name, bidang, status });
    saveSkkToStorage();
    addAnnouncement(`Catatan SKK "${name}" ditambahkan untuk ${memberName(member_id)}.`);
    closeModal('skk-modal');
    renderSkuSkk(document.getElementById('main-content'));
}

function deleteSkk(id) {
    if (confirm('Hapus catatan SKK ini?')) {
        skkList = skkList.filter(s => s.id !== id);
        saveSkkToStorage();
        renderSkuSkk(document.getElementById('main-content'));
    }
}

/* =========================================
   PROGRAM KERJA (PROKER) — KETUA
========================================= */
function renderProker(container) {
    const isManager = canManageProker();
    const kategoriLabel = { mingguan: 'Mingguan', bulanan: 'Bulanan', tahunan: 'Tahunan' };

    container.innerHTML = `
        <div class="member-controls">
            <div class="proker-tabs" id="proker-tabs">
                <button type="button" class="member-tab-btn ${activeProkerTab === 'mingguan' ? 'active' : ''}" data-kategori="mingguan">Mingguan</button>
                <button type="button" class="member-tab-btn ${activeProkerTab === 'bulanan' ? 'active' : ''}" data-kategori="bulanan">Bulanan</button>
                <button type="button" class="member-tab-btn ${activeProkerTab === 'tahunan' ? 'active' : ''}" data-kategori="tahunan">Tahunan</button>
            </div>
            ${isManager ? `
                <button class="btn-primary" id="btn-open-proker-modal">
                    ${getIcon('plus')} Tambah Proker
                </button>
            ` : ''}
        </div>

        <div id="proker-list-container"></div>
    `;

    renderProkerList();

    document.querySelectorAll('#proker-tabs .member-tab-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            activeProkerTab = this.getAttribute('data-kategori');
            document.querySelectorAll('#proker-tabs .member-tab-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            renderProkerList();
        });
    });

    const btnOpen = document.getElementById('btn-open-proker-modal');
    if (btnOpen) btnOpen.addEventListener('click', () => {
        document.getElementById('proker-form').reset();
        document.getElementById('pk-kategori').value = activeProkerTab;
        document.getElementById('proker-modal').classList.remove('hidden');
    });
}

function renderProkerList() {
    const container = document.getElementById('proker-list-container');
    if (!container) return;

    const isManager = canManageProker();
    const filtered = prokerList.filter(p => p.kategori === activeProkerTab);

    container.innerHTML = `
        <div class="card">
            <div class="table-responsive">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Nama Program Kerja</th>
                            <th>Target</th>
                            <th>Status</th>
                            <th>Deskripsi</th>
                            ${isManager ? '<th style="text-align:right;">Aksi</th>' : ''}
                        </tr>
                    </thead>
                    <tbody>
                        ${filtered.length === 0 ? `
                            <tr><td colspan="${isManager ? 5 : 4}" style="text-align:center; color: var(--text-muted);">Belum ada program kerja pada kategori ini</td></tr>
                        ` : filtered.map(p => `
                            <tr>
                                <td><strong>${p.title}</strong></td>
                                <td>${p.target ? formatTanggal(p.target) : '-'}</td>
                                <td><span class="status-badge ${activityStatusClass(p.status)}">${p.status}</span></td>
                                <td>${p.desc || '-'}</td>
                                ${isManager ? `
                                    <td style="text-align:right;">
                                        <button class="btn-danger btn-sm" onclick="deleteProker('${p.id}')">Hapus</button>
                                    </td>
                                ` : ''}
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function handleSaveProker(e) {
    e.preventDefault();
    const title = document.getElementById('pk-title').value.trim();
    const kategori = document.getElementById('pk-kategori').value;
    const target = document.getElementById('pk-target').value;
    const status = document.getElementById('pk-status').value;
    const desc = document.getElementById('pk-desc').value.trim();

    prokerList.unshift({ id: 'pk_' + Date.now(), title, kategori, target, status, desc });
    saveProkerToStorage();
    addAnnouncement(`Program kerja ${kategori} baru "${title}" telah ditambahkan.`);

    activeProkerTab = kategori;
    closeModal('proker-modal');
    renderProker(document.getElementById('main-content'));
}

function deleteProker(id) {
    if (confirm('Hapus program kerja ini?')) {
        const proker = prokerList.find(p => p.id === id);
        prokerList = prokerList.filter(p => p.id !== id);
        saveProkerToStorage();
        if (proker) addAnnouncement(`Program kerja "${proker.title}" telah dihapus.`);
        renderProkerList();
    }
}

/* =========================================
   TUGAS — KETUA, WAKIL KETUA, SEKRETARIS
========================================= */
function renderTugas(container) {
    const isManager = canManageTugas();
    const sorted = [...tugasList].sort((a, b) => new Date(a.deadline || 0) - new Date(b.deadline || 0));

    container.innerHTML = `
        <div class="member-controls">
            <h4 style="font-size:1.1rem;">Daftar Tugas</h4>
            ${isManager ? `
                <button class="btn-primary" id="btn-open-tugas-modal">
                    ${getIcon('plus')} Tambah Tugas
                </button>
            ` : ''}
        </div>
        <div class="card">
            <div class="table-responsive">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Jenis Tugas</th>
                            <th>Bidang</th>
                            <th>Deadline</th>
                            <th>Status</th>
                            <th style="text-align:right;">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${sorted.length === 0 ? `
                            <tr><td colspan="5" style="text-align:center; color: var(--text-muted);">Belum ada tugas yang ditambahkan</td></tr>
                        ` : sorted.map(t => `
                            <tr>
                                <td><strong>${t.jenis}</strong>${t.desc ? `<div style="color:var(--text-muted); font-size:0.75rem;">${t.desc}</div>` : ''}</td>
                                <td>${t.bidang}</td>
                                <td>${t.deadline ? formatTanggal(t.deadline) : '-'}</td>
                                <td><span class="status-badge ${t.status === 'Selesai' ? 'status-aktif' : 'status-pending'}">${t.status}</span></td>
                                <td style="text-align:right;">
                                    <div class="action-buttons" style="justify-content:flex-end;">
                                        <button class="btn-secondary btn-sm" onclick="toggleTugasStatus('${t.id}')">${t.status === 'Selesai' ? 'Batal Selesai' : 'Tandai Selesai'}</button>
                                        ${isManager ? `<button class="btn-danger btn-sm" onclick="deleteTugas('${t.id}')">Hapus</button>` : ''}
                                    </div>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;

    const btnOpen = document.getElementById('btn-open-tugas-modal');
    if (btnOpen) btnOpen.addEventListener('click', () => {
        document.getElementById('tugas-form').reset();
        document.getElementById('tugas-modal').classList.remove('hidden');
    });
}

function handleSaveTugas(e) {
    e.preventDefault();
    const jenis = document.getElementById('tg-jenis').value.trim();
    const desc = document.getElementById('tg-desc').value.trim();
    const bidang = document.getElementById('tg-bidang').value;
    const deadline = document.getElementById('tg-deadline').value;

    tugasList.unshift({ id: 'tg_' + Date.now(), jenis, desc, bidang, deadline, status: 'Belum Selesai' });
    saveTugasToStorage();
    addAnnouncement(`Tugas baru "${jenis}" ditambahkan untuk bidang ${bidang}.`);

    closeModal('tugas-modal');
    renderTugas(document.getElementById('main-content'));
}

function toggleTugasStatus(id) {
    const tugas = tugasList.find(t => t.id === id);
    if (!tugas) return;
    tugas.status = tugas.status === 'Selesai' ? 'Belum Selesai' : 'Selesai';
    saveTugasToStorage();
    if (tugas.status === 'Selesai') addAnnouncement(`Tugas "${tugas.jenis}" telah diselesaikan.`);
    renderTugas(document.getElementById('main-content'));
}

function deleteTugas(id) {
    if (confirm('Hapus tugas ini?')) {
        const tugas = tugasList.find(t => t.id === id);
        tugasList = tugasList.filter(t => t.id !== id);
        saveTugasToStorage();
        if (tugas) addAnnouncement(`Tugas "${tugas.jenis}" telah dihapus.`);
        renderTugas(document.getElementById('main-content'));
    }
}

/* =========================================
   KEUANGAN — BENDAHARA
========================================= */
function formatRupiah(angka) {
    const n = Number(angka) || 0;
    return 'Rp' + n.toLocaleString('id-ID');
}

function hitungSaldo() {
    let masuk = 0, keluar = 0;
    keuanganList.forEach(t => {
        if (t.tipe === 'masuk') masuk += Number(t.jumlah) || 0;
        else keluar += Number(t.jumlah) || 0;
    });
    return { masuk, keluar, saldo: masuk - keluar };
}

// Rekap 6 bulan terakhir (pemasukan vs pengeluaran) untuk grafik batang sederhana
function rekapBulananKeuangan() {
    const bulanLabel = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
    const now = new Date();
    const bulanList = [];
    for (let i = 5; i >= 0; i--) {
        const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
        bulanList.push({ key: `${d.getFullYear()}-${d.getMonth()}`, label: bulanLabel[d.getMonth()], masuk: 0, keluar: 0 });
    }
    keuanganList.forEach(t => {
        if (!t.tanggal) return;
        const d = new Date(t.tanggal);
        if (isNaN(d)) return;
        const key = `${d.getFullYear()}-${d.getMonth()}`;
        const bulan = bulanList.find(b => b.key === key);
        if (bulan) {
            if (t.tipe === 'masuk') bulan.masuk += Number(t.jumlah) || 0;
            else bulan.keluar += Number(t.jumlah) || 0;
        }
    });
    return bulanList;
}

function renderKeuangan(container) {
    const isManager = canManageKeuangan();
    const canViewDetail = canViewKeuanganDetail();
    const { masuk, keluar, saldo } = hitungSaldo();
    const rekap = rekapBulananKeuangan();
    const maxNilai = Math.max(1, ...rekap.map(b => Math.max(b.masuk, b.keluar)));
    const sorted = [...keuanganList].sort((a, b) => new Date(b.tanggal) - new Date(a.tanggal));

    container.innerHTML = `
        <div class="stats-grid" style="margin-bottom: 1.5rem;">
            <div class="stat-card">
                <div class="stat-title">Saldo Saat Ini</div>
                <div class="stat-value">${formatRupiah(saldo)}</div>
            </div>
            <div class="stat-card">
                <div class="stat-title">Total Pemasukan</div>
                <div class="stat-value" style="color: var(--primary);">${formatRupiah(masuk)}</div>
            </div>
            <div class="stat-card">
                <div class="stat-title">Total Pengeluaran</div>
                <div class="stat-value" style="color: var(--danger);">${formatRupiah(keluar)}</div>
            </div>
        </div>

        <div class="card">
            <div class="card-header"><h4>Grafik Keuangan (6 Bulan Terakhir)</h4></div>
            <div class="card-body">
                <div class="chart-legend">
                    <span><i class="legend-dot legend-masuk"></i> Pemasukan</span>
                    <span><i class="legend-dot legend-keluar"></i> Pengeluaran</span>
                </div>
                <div class="bar-chart">
                    ${rekap.map(b => `
                        <div class="bar-chart-group">
                            <div class="bar-chart-bars">
                                <div class="bar-chart-bar bar-masuk" style="height:${Math.round((b.masuk / maxNilai) * 100)}%;" title="Pemasukan ${formatRupiah(b.masuk)}"></div>
                                <div class="bar-chart-bar bar-keluar" style="height:${Math.round((b.keluar / maxNilai) * 100)}%;" title="Pengeluaran ${formatRupiah(b.keluar)}"></div>
                            </div>
                            <span class="bar-chart-label">${b.label}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>

        ${canViewDetail ? `
            <div class="member-controls" style="margin-top: 1.5rem;">
                <h4 style="font-size:1.1rem;">Riwayat Transaksi</h4>
                ${isManager ? `
                    <button class="btn-primary" id="btn-open-keuangan-modal">
                        ${getIcon('plus')} Catat Transaksi
                    </button>
                ` : ''}
            </div>
            <div class="card">
                <div class="table-responsive">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Tanggal</th>
                                <th>Jenis</th>
                                <th>Kategori</th>
                                <th>Keterangan</th>
                                <th>Jumlah</th>
                                <th>Bukti</th>
                                ${isManager ? '<th style="text-align:right;">Aksi</th>' : ''}
                            </tr>
                        </thead>
                        <tbody>
                            ${sorted.length === 0 ? `
                                <tr><td colspan="${isManager ? 7 : 6}" style="text-align:center; color: var(--text-muted);">Belum ada transaksi yang tercatat</td></tr>
                            ` : sorted.map(t => `
                                <tr>
                                    <td>${formatTanggal(t.tanggal)}</td>
                                    <td><span class="status-badge ${t.tipe === 'masuk' ? 'status-aktif' : 'status-diberhentikan'}">${t.tipe === 'masuk' ? 'Masuk' : 'Keluar'}</span></td>
                                    <td>${t.kategori}</td>
                                    <td>${t.keterangan || '-'}</td>
                                    <td style="color: ${t.tipe === 'masuk' ? 'var(--primary)' : 'var(--danger)'}; font-weight: 600;">${t.tipe === 'masuk' ? '+' : '-'}${formatRupiah(t.jumlah)}</td>
                                    <td>${t.bukti ? `<img src="${t.bukti}" class="bukti-thumb" onclick="viewBuktiTransaksi('${t.id}')" alt="Bukti">` : '-'}</td>
                                    ${isManager ? `
                                        <td style="text-align:right;">
                                            <button class="btn-danger btn-sm" onclick="deleteTransaksi('${t.id}')">Hapus</button>
                                        </td>
                                    ` : ''}
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        ` : `
            <div class="card">
                <div class="card-body">
                    <div class="empty-list">Rincian transaksi hanya dapat dilihat oleh Bendahara, Ketua, dan Pembina.</div>
                </div>
            </div>
        `}
    `;

    const btnOpen = document.getElementById('btn-open-keuangan-modal');
    if (btnOpen) btnOpen.addEventListener('click', openAddTransaksiModal);
}

function openAddTransaksiModal() {
    document.getElementById('keuangan-form').reset();
    document.getElementById('kg-bukti-preview').classList.add('hidden');
    document.getElementById('kg-bukti-preview-img').src = '';
    populateKategoriOptions();
    document.getElementById('keuangan-modal').classList.remove('hidden');
    document.getElementById('keuangan-modal').dataset.buktiData = '';
}

function populateKategoriOptions() {
    const tipe = document.getElementById('kg-tipe').value;
    const kategoriSelect = document.getElementById('kg-kategori');
    const kategoriList = tipe === 'masuk' ? KATEGORI_PEMASUKAN : KATEGORI_PENGELUARAN;
    kategoriSelect.innerHTML = kategoriList.map(k => `<option value="${k}">${k}</option>`).join('');
}

// Mengompres gambar bukti transaksi via canvas sebelum disimpan sebagai
// base64 di localStorage, supaya tidak cepat memenuhi kuota penyimpanan.
function compressBuktiImage(file, callback) {
    const reader = new FileReader();
    reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
            const maxWidth = 800;
            const scale = Math.min(1, maxWidth / img.width);
            const canvas = document.createElement('canvas');
            canvas.width = img.width * scale;
            canvas.height = img.height * scale;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            callback(canvas.toDataURL('image/jpeg', 0.7));
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

function handleSaveTransaksi(e) {
    e.preventDefault();
    const tipe = document.getElementById('kg-tipe').value;
    const kategori = document.getElementById('kg-kategori').value;
    const jumlah = Number(document.getElementById('kg-jumlah').value);
    const tanggal = document.getElementById('kg-tanggal').value;
    const keterangan = document.getElementById('kg-keterangan').value.trim();
    const bukti = document.getElementById('keuangan-modal').dataset.buktiData || '';

    if (!jumlah || jumlah <= 0) {
        alert('Jumlah transaksi harus lebih dari 0.');
        return;
    }

    keuanganList.unshift({ id: 'kg_' + Date.now(), tipe, kategori, jumlah, tanggal, keterangan, bukti });
    saveKeuanganToStorage();
    // Jumlah nominal sengaja tidak dicantumkan di feed Pengumuman (yang bisa
    // dilihat semua role) demi menjaga privasi keuangan organisasi.
    addAnnouncement(`Transaksi kas ${tipe === 'masuk' ? 'masuk' : 'keluar'} kategori "${kategori}" telah dicatat oleh Bendahara.`);

    closeModal('keuangan-modal');
    renderKeuangan(document.getElementById('main-content'));
}

function deleteTransaksi(id) {
    if (confirm('Hapus transaksi ini? Saldo akan otomatis diperbarui.')) {
        keuanganList = keuanganList.filter(t => t.id !== id);
        saveKeuanganToStorage();
        addAnnouncement('Sebuah transaksi keuangan telah dihapus oleh Bendahara.');
        renderKeuangan(document.getElementById('main-content'));
    }
}

function viewBuktiTransaksi(id) {
    const t = keuanganList.find(k => k.id === id);
    if (!t || !t.bukti) return;
    document.getElementById('bukti-viewer-img').src = t.bukti;
    document.getElementById('bukti-viewer-modal').classList.remove('hidden');
}

/* =========================================
   INVENTARIS
========================================= */
// Jumlah barang yang sedang dipinjam (status masih "Dipinjam")
function jumlahSedangDipinjam(itemId) {
    return peminjamanList
        .filter(p => p.item_id === itemId && p.status === 'Dipinjam')
        .reduce((sum, p) => sum + (Number(p.jumlah) || 0), 0);
}

function jumlahTersedia(item) {
    return Math.max(0, (Number(item.jumlah) || 0) - jumlahSedangDipinjam(item.id));
}

function inventarisItemName(id) {
    const item = inventarisList.find(i => i.id === id);
    return item ? item.nama : 'Barang tidak ditemukan';
}

function kondisiBadgeClass(kondisi) {
    if (kondisi === 'Baik') return 'status-aktif';
    if (kondisi === 'Rusak Ringan') return 'status-pending';
    if (kondisi === 'Rusak Berat' || kondisi === 'Hilang') return 'status-diberhentikan';
    return 'status-nonaktif';
}

function renderInventaris(container) {
    const isManager = canManageInventaris();

    container.innerHTML = `
        <div class="member-controls">
            <div class="proker-tabs" id="inventaris-tabs">
                <button type="button" class="member-tab-btn ${activeInventarisTab === 'barang' ? 'active' : ''}" data-tab="barang">Daftar Barang</button>
                <button type="button" class="member-tab-btn ${activeInventarisTab === 'peminjaman' ? 'active' : ''}" data-tab="peminjaman">Peminjaman</button>
            </div>
            ${isManager ? `
                <button class="btn-primary" id="btn-open-inventaris-action">
                    ${getIcon('plus')} ${activeInventarisTab === 'barang' ? 'Tambah Barang' : 'Catat Peminjaman'}
                </button>
            ` : ''}
        </div>

        <div id="inventaris-content-container"></div>
    `;

    renderInventarisContent();

    document.querySelectorAll('#inventaris-tabs .member-tab-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            activeInventarisTab = this.getAttribute('data-tab');
            renderInventaris(document.getElementById('main-content'));
        });
    });

    const btnAction = document.getElementById('btn-open-inventaris-action');
    if (btnAction) btnAction.addEventListener('click', () => {
        if (activeInventarisTab === 'barang') {
            openAddInventarisModal();
        } else {
            openAddPeminjamanModal();
        }
    });
}

function renderInventarisContent() {
    const container = document.getElementById('inventaris-content-container');
    if (!container) return;
    const isManager = canManageInventaris();

    if (activeInventarisTab === 'barang') {
        container.innerHTML = `
            <div class="card">
                <div class="table-responsive">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Nama Barang</th>
                                <th>Kategori</th>
                                <th>Total</th>
                                <th>Tersedia</th>
                                <th>Kondisi</th>
                                <th>Lokasi</th>
                                ${isManager ? '<th style="text-align:right;">Aksi</th>' : ''}
                            </tr>
                        </thead>
                        <tbody>
                            ${inventarisList.length === 0 ? `
                                <tr><td colspan="${isManager ? 7 : 6}" style="text-align:center; color: var(--text-muted);">Belum ada barang inventaris yang tercatat</td></tr>
                            ` : inventarisList.map(item => {
                                const tersedia = jumlahTersedia(item);
                                return `
                                    <tr>
                                        <td><strong>${item.nama}</strong>${item.keterangan ? `<div style="color:var(--text-muted); font-size:0.75rem;">${item.keterangan}</div>` : ''}</td>
                                        <td>${item.kategori}</td>
                                        <td>${item.jumlah}</td>
                                        <td><span class="status-badge ${tersedia > 0 ? 'status-aktif' : 'status-diberhentikan'}">${tersedia}</span></td>
                                        <td><span class="status-badge ${kondisiBadgeClass(item.kondisi)}">${item.kondisi}</span></td>
                                        <td>${item.lokasi || '-'}</td>
                                        ${isManager ? `
                                            <td style="text-align:right;">
                                                <div class="action-buttons" style="justify-content:flex-end;">
                                                    <button class="btn-secondary btn-sm" onclick="openEditInventarisModal('${item.id}')">Edit</button>
                                                    <button class="btn-danger btn-sm" onclick="deleteInventaris('${item.id}')">Hapus</button>
                                                </div>
                                            </td>
                                        ` : ''}
                                    </tr>
                                `;
                            }).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    } else {
        const sorted = [...peminjamanList].sort((a, b) => new Date(b.tanggal_pinjam) - new Date(a.tanggal_pinjam));
        container.innerHTML = `
            <div class="card">
                <div class="table-responsive">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Barang</th>
                                <th>Jumlah</th>
                                <th>Peminjam</th>
                                <th>Tgl Pinjam</th>
                                <th>Estimasi Kembali</th>
                                <th>Status</th>
                                ${isManager ? '<th style="text-align:right;">Aksi</th>' : ''}
                            </tr>
                        </thead>
                        <tbody>
                            ${sorted.length === 0 ? `
                                <tr><td colspan="${isManager ? 7 : 6}" style="text-align:center; color: var(--text-muted);">Belum ada catatan peminjaman</td></tr>
                            ` : sorted.map(p => `
                                <tr>
                                    <td><strong>${inventarisItemName(p.item_id)}</strong></td>
                                    <td>${p.jumlah}</td>
                                    <td>${p.peminjam}</td>
                                    <td>${formatTanggal(p.tanggal_pinjam)}</td>
                                    <td>${p.estimasi_kembali ? formatTanggal(p.estimasi_kembali) : '-'}</td>
                                    <td><span class="status-badge ${p.status === 'Dikembalikan' ? 'status-aktif' : 'status-pending'}">${p.status}</span></td>
                                    ${isManager ? `
                                        <td style="text-align:right;">
                                            <div class="action-buttons" style="justify-content:flex-end;">
                                                ${p.status === 'Dipinjam' ? `<button class="btn-secondary btn-sm" onclick="tandaiDikembalikan('${p.id}')">Tandai Kembali</button>` : ''}
                                                <button class="btn-danger btn-sm" onclick="deletePeminjaman('${p.id}')">Hapus</button>
                                            </div>
                                        </td>
                                    ` : ''}
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    }
}

function openAddInventarisModal() {
    document.getElementById('modal-inventaris-title').textContent = 'Tambah Barang Inventaris';
    document.getElementById('inventaris-form').reset();
    document.getElementById('inv-id').value = '';
    document.getElementById('inv-kategori').innerHTML = KATEGORI_INVENTARIS.map(k => `<option value="${k}">${k}</option>`).join('');
    document.getElementById('inv-kondisi').innerHTML = KONDISI_INVENTARIS.map(k => `<option value="${k}">${k}</option>`).join('');
    document.getElementById('inventaris-modal').classList.remove('hidden');
}

function openEditInventarisModal(id) {
    const item = inventarisList.find(i => i.id === id);
    if (!item) return;
    document.getElementById('modal-inventaris-title').textContent = 'Edit Barang Inventaris';
    document.getElementById('inv-id').value = item.id;
    document.getElementById('inv-nama').value = item.nama;
    document.getElementById('inv-kategori').innerHTML = KATEGORI_INVENTARIS.map(k => `<option value="${k}" ${k === item.kategori ? 'selected' : ''}>${k}</option>`).join('');
    document.getElementById('inv-jumlah').value = item.jumlah;
    document.getElementById('inv-kondisi').innerHTML = KONDISI_INVENTARIS.map(k => `<option value="${k}" ${k === item.kondisi ? 'selected' : ''}>${k}</option>`).join('');
    document.getElementById('inv-lokasi').value = item.lokasi || '';
    document.getElementById('inv-keterangan').value = item.keterangan || '';
    document.getElementById('inventaris-modal').classList.remove('hidden');
}

function handleSaveInventaris(e) {
    e.preventDefault();
    const id = document.getElementById('inv-id').value;
    const nama = document.getElementById('inv-nama').value.trim();
    const kategori = document.getElementById('inv-kategori').value;
    const jumlah = Number(document.getElementById('inv-jumlah').value);
    const kondisi = document.getElementById('inv-kondisi').value;
    const lokasi = document.getElementById('inv-lokasi').value.trim();
    const keterangan = document.getElementById('inv-keterangan').value.trim();

    if (id) {
        const index = inventarisList.findIndex(i => i.id === id);
        if (index !== -1) {
            inventarisList[index] = { ...inventarisList[index], nama, kategori, jumlah, kondisi, lokasi, keterangan };
        }
        addAnnouncement(`Data barang inventaris "${nama}" telah diperbarui.`);
    } else {
        inventarisList.unshift({ id: 'inv_' + Date.now(), nama, kategori, jumlah, kondisi, lokasi, keterangan });
        addAnnouncement(`Barang inventaris baru "${nama}" telah ditambahkan.`);
    }

    saveInventarisToStorage();
    closeModal('inventaris-modal');
    renderInventaris(document.getElementById('main-content'));
}

function deleteInventaris(id) {
    if (confirm('Hapus barang inventaris ini? Riwayat peminjaman terkait barang ini tidak akan otomatis terhapus.')) {
        const item = inventarisList.find(i => i.id === id);
        inventarisList = inventarisList.filter(i => i.id !== id);
        saveInventarisToStorage();
        if (item) addAnnouncement(`Barang inventaris "${item.nama}" telah dihapus.`);
        renderInventaris(document.getElementById('main-content'));
    }
}

function openAddPeminjamanModal() {
    if (inventarisList.length === 0) {
        alert('Belum ada barang inventaris yang bisa dipinjam. Tambahkan barang terlebih dahulu.');
        return;
    }
    document.getElementById('peminjaman-form').reset();
    document.getElementById('pm-item').innerHTML = inventarisList.map(item => {
        const tersedia = jumlahTersedia(item);
        return `<option value="${item.id}" ${tersedia <= 0 ? 'disabled' : ''}>${item.nama} (tersedia: ${tersedia})</option>`;
    }).join('');
    document.getElementById('peminjaman-modal').classList.remove('hidden');
}

function handleSavePeminjaman(e) {
    e.preventDefault();
    const item_id = document.getElementById('pm-item').value;
    const jumlah = Number(document.getElementById('pm-jumlah').value);
    const peminjam = document.getElementById('pm-peminjam').value.trim();
    const tanggal_pinjam = document.getElementById('pm-tanggal-pinjam').value;
    const estimasi_kembali = document.getElementById('pm-estimasi-kembali').value;

    const item = inventarisList.find(i => i.id === item_id);
    const tersedia = item ? jumlahTersedia(item) : 0;

    if (!jumlah || jumlah <= 0) {
        alert('Jumlah yang dipinjam harus lebih dari 0.');
        return;
    }
    if (jumlah > tersedia) {
        alert(`Jumlah yang dipinjam melebihi stok tersedia. Stok tersedia saat ini: ${tersedia}.`);
        return;
    }

    peminjamanList.unshift({ id: 'pm_' + Date.now(), item_id, jumlah, peminjam, tanggal_pinjam, estimasi_kembali, status: 'Dipinjam' });
    savePeminjamanToStorage();
    addAnnouncement(`${peminjam} meminjam ${jumlah} ${inventarisItemName(item_id)}.`);

    closeModal('peminjaman-modal');
    renderInventaris(document.getElementById('main-content'));
}

function tandaiDikembalikan(id) {
    const p = peminjamanList.find(pm => pm.id === id);
    if (!p) return;
    p.status = 'Dikembalikan';
    p.tanggal_dikembalikan = new Date().toISOString().split('T')[0];
    savePeminjamanToStorage();
    addAnnouncement(`${p.peminjam} telah mengembalikan ${p.jumlah} ${inventarisItemName(p.item_id)}.`);
    renderInventaris(document.getElementById('main-content'));
}

function deletePeminjaman(id) {
    if (confirm('Hapus catatan peminjaman ini?')) {
        peminjamanList = peminjamanList.filter(p => p.id !== id);
        savePeminjamanToStorage();
        renderInventaris(document.getElementById('main-content'));
    }
}

/* =========================================
   PRESTASI — BERITA PRESTASI (GALERI)
========================================= */
function renderPrestasi(container) {
    const isManager = canManagePrestasi();
    const sorted = [...prestasiList].sort((a, b) => new Date(b.tanggal) - new Date(a.tanggal));

    container.innerHTML = `
        <div class="member-controls">
            <h4 style="font-size:1.1rem;">Berita Prestasi</h4>
            ${isManager ? `
                <button class="btn-primary" id="btn-open-prestasi-modal">
                    ${getIcon('plus')} Tambah Prestasi
                </button>
            ` : ''}
        </div>

        ${sorted.length === 0 ? `
            <div class="card"><div class="card-body"><div class="empty-list">Belum ada berita prestasi yang dipublikasikan.</div></div></div>
        ` : `
            <div class="prestasi-grid">
                ${sorted.map(p => `
                    <div class="prestasi-card">
                        ${p.gambar ? `<div class="prestasi-card-img" style="background-image:url('${p.gambar}');"></div>` : `<div class="prestasi-card-img prestasi-card-img-placeholder">${getIcon('achievement')}</div>`}
                        <div class="prestasi-card-body">
                            <span class="badge-future">${p.kategori}</span>
                            <h4>${p.judul}</h4>
                            <p class="prestasi-card-desc">${p.deskripsi}</p>
                            <div class="prestasi-card-meta">
                                <span>${formatTanggal(p.tanggal)}</span>
                                <span>oleh ${p.penulis}</span>
                            </div>
                            <div class="prestasi-card-actions">
                                <button class="btn-secondary btn-sm" onclick="openPrestasiDetail('${p.id}')">Baca Selengkapnya</button>
                                ${isManager ? `
                                    <button class="btn-secondary btn-sm" onclick="openEditPrestasiModal('${p.id}')">Edit</button>
                                    <button class="btn-danger btn-sm" onclick="deletePrestasi('${p.id}')">Hapus</button>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `}
    `;

    const btnOpen = document.getElementById('btn-open-prestasi-modal');
    if (btnOpen) btnOpen.addEventListener('click', openAddPrestasiModal);
}

function openAddPrestasiModal() {
    document.getElementById('modal-prestasi-title').textContent = 'Tulis Berita Prestasi';
    document.getElementById('prestasi-form').reset();
    document.getElementById('pr-id').value = '';
    document.getElementById('pr-kategori').innerHTML = KATEGORI_PRESTASI.map(k => `<option value="${k}">${k}</option>`).join('');
    document.getElementById('pr-gambar-preview').classList.add('hidden');
    document.getElementById('pr-gambar-preview-img').src = '';
    document.getElementById('prestasi-modal').dataset.gambarData = '';
    document.getElementById('prestasi-modal').classList.remove('hidden');
}

function openEditPrestasiModal(id) {
    const p = prestasiList.find(x => x.id === id);
    if (!p) return;

    document.getElementById('modal-prestasi-title').textContent = 'Edit Berita Prestasi';
    document.getElementById('pr-id').value = p.id;
    document.getElementById('pr-judul').value = p.judul;
    document.getElementById('pr-kategori').innerHTML = KATEGORI_PRESTASI.map(k => `<option value="${k}" ${k === p.kategori ? 'selected' : ''}>${k}</option>`).join('');
    document.getElementById('pr-tanggal').value = p.tanggal || '';
    document.getElementById('pr-deskripsi').value = p.deskripsi;
    document.getElementById('pr-artikel').value = p.artikel || '';

    const preview = document.getElementById('pr-gambar-preview');
    if (p.gambar) {
        document.getElementById('pr-gambar-preview-img').src = p.gambar;
        preview.classList.remove('hidden');
    } else {
        preview.classList.add('hidden');
    }
    document.getElementById('prestasi-modal').dataset.gambarData = p.gambar || '';

    document.getElementById('prestasi-modal').classList.remove('hidden');
}

function handleSavePrestasi(e) {
    e.preventDefault();
    const id = document.getElementById('pr-id').value;
    const judul = document.getElementById('pr-judul').value.trim();
    const kategori = document.getElementById('pr-kategori').value;
    const tanggal = document.getElementById('pr-tanggal').value;
    const deskripsi = document.getElementById('pr-deskripsi').value.trim();
    const artikel = document.getElementById('pr-artikel').value.trim();
    const gambar = document.getElementById('prestasi-modal').dataset.gambarData || '';

    if (id) {
        const index = prestasiList.findIndex(p => p.id === id);
        if (index !== -1) {
            prestasiList[index] = { ...prestasiList[index], judul, kategori, tanggal, deskripsi, artikel, gambar };
        }
        addAnnouncement(`Berita prestasi "${judul}" telah diperbarui.`);
    } else {
        prestasiList.unshift({ id: 'pr_' + Date.now(), judul, kategori, tanggal, deskripsi, artikel, gambar, penulis: currentUser.name });
        addAnnouncement(`Berita prestasi baru "${judul}" telah dipublikasikan.`);
    }

    savePrestasiToStorage();
    closeModal('prestasi-modal');
    renderPrestasi(document.getElementById('main-content'));
}

function deletePrestasi(id) {
    if (confirm('Hapus berita prestasi ini?')) {
        const p = prestasiList.find(x => x.id === id);
        prestasiList = prestasiList.filter(x => x.id !== id);
        savePrestasiToStorage();
        if (p) addAnnouncement(`Berita prestasi "${p.judul}" telah dihapus.`);
        renderPrestasi(document.getElementById('main-content'));
    }
}

function openPrestasiDetail(id) {
    const p = prestasiList.find(x => x.id === id);
    if (!p) return;

    const body = document.getElementById('prestasi-detail-body');
    body.innerHTML = `
        ${p.gambar ? `<img src="${p.gambar}" class="prestasi-detail-img" alt="${p.judul}">` : ''}
        <span class="badge-future" style="margin-top:1rem; display:inline-block;">${p.kategori}</span>
        <h2 class="prestasi-detail-title">${p.judul}</h2>
        <div class="prestasi-card-meta" style="margin-bottom:1rem;">
            <span>${formatTanggal(p.tanggal)}</span>
            <span>oleh ${p.penulis}</span>
        </div>
        <p class="prestasi-detail-artikel">${(p.artikel || p.deskripsi).replace(/\n/g, '<br>')}</p>
    `;

    document.getElementById('prestasi-detail-modal').classList.remove('hidden');
}

/* =========================================
   PENDIDIKAN — MATERI & PELATIHAN KEPRAMUKAAN
========================================= */
function renderPendidikan(container) {
    const isManager = canManagePendidikan();
    const sorted = [...pendidikanList].sort((a, b) => new Date(b.tanggal || 0) - new Date(a.tanggal || 0));

    container.innerHTML = `
        <div class="member-controls">
            <h4 style="font-size:1.1rem;">Materi & Pelatihan Kepramukaan</h4>
            ${isManager ? `
                <button class="btn-primary" id="btn-open-pendidikan-modal">
                    ${getIcon('plus')} Tambah Materi
                </button>
            ` : ''}
        </div>

        ${sorted.length === 0 ? `
            <div class="card"><div class="card-body"><div class="empty-list">Belum ada materi atau pelatihan yang ditambahkan.</div></div></div>
        ` : `
            <div class="pendidikan-list">
                ${sorted.map(p => `
                    <div class="card pendidikan-item">
                        <div class="card-body">
                            <div class="pendidikan-item-header">
                                <div>
                                    <span class="badge-future">${p.jenis}</span>
                                    <h4 style="margin-top:0.5rem;">${p.judul}</h4>
                                </div>
                                ${isManager ? `
                                    <div class="action-buttons">
                                        <button class="btn-secondary btn-sm" onclick="openEditPendidikanModal('${p.id}')">Edit</button>
                                        <button class="btn-danger btn-sm" onclick="deletePendidikan('${p.id}')">Hapus</button>
                                    </div>
                                ` : ''}
                            </div>
                            ${p.deskripsi ? `<p class="pendidikan-item-desc">${p.deskripsi.replace(/\n/g, '<br>')}</p>` : ''}
                            <div style="display:flex; gap:1rem; flex-wrap:wrap; font-size:0.75rem; color:var(--text-muted); margin-top:0.6rem;">
                                ${p.tanggal ? `<span>${formatTanggal(p.tanggal)}</span>` : ''}
                                ${p.pengajar ? `<span>Narasumber: ${p.pengajar}</span>` : ''}
                                ${p.link ? `<a href="${p.link}" target="_blank" rel="noopener" style="color:var(--primary); font-weight:600;">Buka Materi &rarr;</a>` : ''}
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `}
    `;

    const btnOpen = document.getElementById('btn-open-pendidikan-modal');
    if (btnOpen) btnOpen.addEventListener('click', openAddPendidikanModal);
}

function openAddPendidikanModal() {
    document.getElementById('modal-pendidikan-title').textContent = 'Tambah Materi Pendidikan';
    document.getElementById('pendidikan-form').reset();
    document.getElementById('pd-id').value = '';
    document.getElementById('pd-jenis').innerHTML = JENIS_PENDIDIKAN.map(j => `<option value="${j}">${j}</option>`).join('');
    document.getElementById('pendidikan-modal').classList.remove('hidden');
}

function openEditPendidikanModal(id) {
    const p = pendidikanList.find(x => x.id === id);
    if (!p) return;
    document.getElementById('modal-pendidikan-title').textContent = 'Edit Materi Pendidikan';
    document.getElementById('pd-id').value = p.id;
    document.getElementById('pd-judul').value = p.judul;
    document.getElementById('pd-jenis').innerHTML = JENIS_PENDIDIKAN.map(j => `<option value="${j}" ${j === p.jenis ? 'selected' : ''}>${j}</option>`).join('');
    document.getElementById('pd-tanggal').value = p.tanggal || '';
    document.getElementById('pd-pengajar').value = p.pengajar || '';
    document.getElementById('pd-link').value = p.link || '';
    document.getElementById('pd-deskripsi').value = p.deskripsi || '';
    document.getElementById('pendidikan-modal').classList.remove('hidden');
}

function handleSavePendidikan(e) {
    e.preventDefault();
    const id = document.getElementById('pd-id').value;
    const judul = document.getElementById('pd-judul').value.trim();
    const jenis = document.getElementById('pd-jenis').value;
    const tanggal = document.getElementById('pd-tanggal').value;
    const pengajar = document.getElementById('pd-pengajar').value.trim();
    const link = document.getElementById('pd-link').value.trim();
    const deskripsi = document.getElementById('pd-deskripsi').value.trim();

    if (id) {
        const index = pendidikanList.findIndex(p => p.id === id);
        if (index !== -1) {
            pendidikanList[index] = { ...pendidikanList[index], judul, jenis, tanggal, pengajar, link, deskripsi };
        }
        addAnnouncement(`Materi pendidikan "${judul}" telah diperbarui.`);
    } else {
        pendidikanList.unshift({ id: 'pd_' + Date.now(), judul, jenis, tanggal, pengajar, link, deskripsi });
        addAnnouncement(`Materi pendidikan baru "${judul}" telah ditambahkan.`);
    }

    savePendidikanToStorage();
    closeModal('pendidikan-modal');
    renderPendidikan(document.getElementById('main-content'));
}

function deletePendidikan(id) {
    if (confirm('Hapus materi pendidikan ini?')) {
        const p = pendidikanList.find(x => x.id === id);
        pendidikanList = pendidikanList.filter(x => x.id !== id);
        savePendidikanToStorage();
        if (p) addAnnouncement(`Materi pendidikan "${p.judul}" telah dihapus.`);
        renderPendidikan(document.getElementById('main-content'));
    }
}

/* =========================================
   POIN SAYA — SISTEM POIN ANGGOTA
========================================= */
function hitungTotalPoin(memberId) {
    return poinList
        .filter(p => p.member_id === memberId)
        .reduce((sum, p) => sum + (Number(p.poin) || 0), 0);
}

function renderPoin(container) {
    const isManager = canManagePoin();
    const myId = currentUser.id;
    const myTotal = hitungTotalPoin(myId);
    const myHistory = poinList.filter(p => p.member_id === myId).sort((a, b) => new Date(b.tanggal) - new Date(a.tanggal));

    container.innerHTML = `
        <div class="stats-grid" style="grid-template-columns: 1fr; max-width: 320px; margin-bottom: 1.5rem;">
            <div class="stat-card">
                <div class="stat-title">Total Poin Saya</div>
                <div class="stat-value">${myTotal}</div>
            </div>
        </div>

        <div class="card">
            <div class="card-header"><h4>Riwayat Poin Saya</h4></div>
            <div class="table-responsive">
                <table class="data-table">
                    <thead><tr><th>Tanggal</th><th>Keterangan</th><th>Poin</th><th>Diberikan Oleh</th></tr></thead>
                    <tbody>
                        ${myHistory.length === 0 ? `
                            <tr><td colspan="4" style="text-align:center; color:var(--text-muted);">Belum ada riwayat poin</td></tr>
                        ` : myHistory.map(p => `
                            <tr>
                                <td>${formatTanggal(p.tanggal)}</td>
                                <td>${p.keterangan}</td>
                                <td style="color: ${p.poin >= 0 ? 'var(--primary)' : 'var(--danger)'}; font-weight:600;">${p.poin >= 0 ? '+' : ''}${p.poin}</td>
                                <td>${p.oleh}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>

        ${isManager ? `
            <div class="member-controls" style="margin-top: 1.5rem;">
                <h4 style="font-size:1.1rem;">Papan Peringkat Poin Anggota</h4>
                <button class="btn-primary" id="btn-open-poin-modal">
                    ${getIcon('plus')} Tambah Poin
                </button>
            </div>
            <div class="card">
                <div class="table-responsive">
                    <table class="data-table">
                        <thead><tr><th>Peringkat</th><th>Nama</th><th>Kelas</th><th>Total Poin</th></tr></thead>
                        <tbody>
                            ${renderPapanPeringkat()}
                        </tbody>
                    </table>
                </div>
            </div>
        ` : ''}
    `;

    const btnOpen = document.getElementById('btn-open-poin-modal');
    if (btnOpen) btnOpen.addEventListener('click', openAddPoinModal);
}

function renderPapanPeringkat() {
    const ranked = membersList
        .map(m => ({ member: m, total: hitungTotalPoin(m.id) }))
        .sort((a, b) => b.total - a.total);

    if (ranked.length === 0) {
        return `<tr><td colspan="4" style="text-align:center; color:var(--text-muted);">Belum ada data anggota</td></tr>`;
    }

    return ranked.map((r, i) => `
        <tr>
            <td>#${i + 1}</td>
            <td><strong>${r.member.name}</strong></td>
            <td>${r.member.tingkat ? r.member.tingkat + ' - ' : ''}${r.member.class_name || '-'}</td>
            <td><strong>${r.total}</strong></td>
        </tr>
    `).join('');
}

function openAddPoinModal() {
    document.getElementById('poin-form').reset();
    document.getElementById('pn-member').innerHTML = membersList.map(m => `<option value="${m.id}">${m.name}</option>`).join('');
    document.getElementById('poin-modal').classList.remove('hidden');
}

function handleSavePoin(e) {
    e.preventDefault();
    const member_id = document.getElementById('pn-member').value;
    const poin = Number(document.getElementById('pn-poin').value);
    const keterangan = document.getElementById('pn-keterangan').value.trim();

    if (!poin) {
        alert('Jumlah poin tidak boleh 0.');
        return;
    }

    poinList.unshift({
        id: 'pn_' + Date.now(),
        member_id,
        poin,
        keterangan,
        tanggal: new Date().toISOString().split('T')[0],
        oleh: currentUser.name
    });
    savePoinToStorage();
    addAnnouncement(`${memberName(member_id)} mendapat ${poin >= 0 ? '+' : ''}${poin} poin: ${keterangan}.`);

    closeModal('poin-modal');
    renderPoin(document.getElementById('main-content'));
}

/* =========================================
   PENGUMUMAN — FEED PERUBAHAN SISTEM
   Halaman ini otomatis menampilkan apa saja yang baru terjadi di sistem
   (anggota, kegiatan, absensi, SKU/SKK, proker, tugas), tanpa perlu
   dibuat manual.
========================================= */
function renderPengumuman(container) {
    const sorted = [...pengumumanList].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    container.innerHTML = `
        <div class="card">
            <div class="card-header"><h4>Apa yang Baru</h4></div>
            <div class="card-body">
                ${sorted.length === 0 ? `
                    <div class="empty-list">Belum ada perubahan yang tercatat. Aktivitas terbaru di sistem akan muncul di sini secara otomatis.</div>
                ` : `
                    <div class="pengumuman-feed">
                        ${sorted.map(a => `
                            <div class="pengumuman-item">
                                <div class="recent-activity-dot"></div>
                                <div>
                                    <strong>${a.text}</strong>
                                    <span>${formatWaktuLengkap(a.timestamp)} • oleh ${a.by}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                `}
            </div>
        </div>
    `;
}

function formatWaktuLengkap(isoStr) {
    const d = new Date(isoStr);
    if (isNaN(d)) return isoStr;
    return d.toLocaleString('id-ID', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' });
}

/* =========================================
   OTHER VIEWS
========================================= */
function renderProfile(container) {
    container.innerHTML = `
        <div class="card" style="max-width: 600px; margin: 0 auto;">
            <div class="card-header"><h4>Profil Saya</h4></div>
            <div class="card-body">
                <div style="display: flex; gap: 1rem; align-items: center; margin-bottom: 2rem;">
                    <div class="avatar" style="width: 64px; height: 64px; font-size: 2rem;">
                        ${currentUser.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                        <h3>${currentUser.name}</h3>
                        <span class="role-badge">${roleLabels[currentUser.role]}</span>
                    </div>
                </div>
                <div style="display: grid; gap: 1rem;">
                    <div><label style="color: var(--text-muted); font-size: 0.875rem;">Username</label><div><strong>${currentUser.username}</strong></div></div>
                    <div><label style="color: var(--text-muted); font-size: 0.875rem;">Hak Akses Utama</label><div><strong>${roleLabels[currentUser.role]}</strong></div></div>
                </div>
            </div>
        </div>
    `;
}

function renderPlaceholder(container, label, iconName) {
    container.innerHTML = `
        <div class="placeholder-page">
            <div class="placeholder-icon">${getIcon(iconName)}</div>
            <h3>Manajemen ${label}</h3>
            <p>Fitur ini akan dikembangkan pada tahap selanjutnya.</p>
            <span class="badge-future">TAHAP BERIKUTNYA</span>
        </div>
    `;
}

/* =========================================
   EVENT LISTENERS
========================================= */
function setupEventListeners() {
    document.getElementById('login-form').addEventListener('submit', handleLogin);

    document.getElementById('toggle-password').addEventListener('click', () => {
        const passInput = document.getElementById('password');
        passInput.type = passInput.type === 'password' ? 'text' : 'password';
    });

    document.querySelectorAll('.demo-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.getElementById('username').value = e.target.getAttribute('data-user');
            document.getElementById('password').value = e.target.getAttribute('data-pass');
        });
    });

    document.getElementById('btn-menu').addEventListener('click', () => {
        document.getElementById('sidebar').classList.add('open');
        document.getElementById('sidebar-backdrop').classList.add('show');
    });

    document.getElementById('sidebar-backdrop').addEventListener('click', closeSidebar);
    document.getElementById('btn-logout').addEventListener('click', () => document.getElementById('logout-modal').classList.remove('hidden'));
    document.getElementById('btn-cancel-logout').addEventListener('click', () => closeModal('logout-modal'));
    document.getElementById('btn-confirm-logout').addEventListener('click', handleLogout);

    // Member Form Modal Events
    document.getElementById('member-form').addEventListener('submit', handleSaveMember);
    document.getElementById('btn-close-member-modal').addEventListener('click', () => closeModal('member-modal'));
    document.getElementById('btn-cancel-member').addEventListener('click', () => closeModal('member-modal'));
    document.getElementById('btn-delete-member').addEventListener('click', () => {
        const id = document.getElementById('member-id').value;
        if (id) deleteMember(id);
    });

    // Member Detail Modal (Tab Switcher) Events
    document.getElementById('btn-close-detail-modal').addEventListener('click', () => closeModal('member-detail-modal'));
    document.querySelectorAll('#member-tabs .member-tab-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            switchMemberTab(this.getAttribute('data-tab'), this);
        });
    });

    // Kegiatan Modal Events (Tahap 3)
    document.getElementById('activity-form').addEventListener('submit', handleSaveActivity);
    document.getElementById('btn-close-activity-modal').addEventListener('click', () => closeModal('activity-modal'));
    document.getElementById('btn-cancel-activity').addEventListener('click', () => closeModal('activity-modal'));

    // Absensi Modal Events (Tahap 4)
    document.getElementById('absensi-form').addEventListener('submit', handleSaveAbsensiSesi);
    document.getElementById('btn-close-absensi-modal').addEventListener('click', () => closeModal('absensi-modal'));
    document.getElementById('btn-cancel-absensi').addEventListener('click', () => closeModal('absensi-modal'));
    document.getElementById('btn-close-absensi-detail-modal').addEventListener('click', () => closeModal('absensi-detail-modal'));
    document.getElementById('btn-close-absensi-detail-2').addEventListener('click', () => closeModal('absensi-detail-modal'));

    // SKU Modal Events (Tahap 5)
    document.getElementById('sku-form').addEventListener('submit', handleSaveSku);
    document.getElementById('btn-close-sku-modal').addEventListener('click', () => closeModal('sku-modal'));
    document.getElementById('btn-cancel-sku').addEventListener('click', () => closeModal('sku-modal'));

    // SKK Modal Events (Tahap 5)
    document.getElementById('skk-form').addEventListener('submit', handleSaveSkk);
    document.getElementById('btn-close-skk-modal').addEventListener('click', () => closeModal('skk-modal'));
    document.getElementById('btn-cancel-skk').addEventListener('click', () => closeModal('skk-modal'));

    // Program Kerja Modal Events (Ketua)
    document.getElementById('proker-form').addEventListener('submit', handleSaveProker);
    document.getElementById('btn-close-proker-modal').addEventListener('click', () => closeModal('proker-modal'));
    document.getElementById('btn-cancel-proker').addEventListener('click', () => closeModal('proker-modal'));

    // Tugas Modal Events (Ketua, Wakil Ketua, Sekretaris)
    document.getElementById('tugas-form').addEventListener('submit', handleSaveTugas);
    document.getElementById('btn-close-tugas-modal').addEventListener('click', () => closeModal('tugas-modal'));
    document.getElementById('btn-cancel-tugas').addEventListener('click', () => closeModal('tugas-modal'));

    // Keuangan Modal Events (Bendahara)
    document.getElementById('keuangan-form').addEventListener('submit', handleSaveTransaksi);
    document.getElementById('btn-close-keuangan-modal').addEventListener('click', () => closeModal('keuangan-modal'));
    document.getElementById('btn-cancel-keuangan').addEventListener('click', () => closeModal('keuangan-modal'));
    document.getElementById('kg-tipe').addEventListener('change', populateKategoriOptions);
    document.getElementById('kg-bukti').addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        if (!file.type.startsWith('image/')) {
            alert('File bukti transaksi harus berupa gambar.');
            e.target.value = '';
            return;
        }
        compressBuktiImage(file, (dataUrl) => {
            document.getElementById('keuangan-modal').dataset.buktiData = dataUrl;
            document.getElementById('kg-bukti-preview-img').src = dataUrl;
            document.getElementById('kg-bukti-preview').classList.remove('hidden');
        });
    });

    // Lightbox Bukti Transaksi
    document.getElementById('btn-close-bukti-viewer').addEventListener('click', () => closeModal('bukti-viewer-modal'));

    // Inventaris Modal Events
    document.getElementById('inventaris-form').addEventListener('submit', handleSaveInventaris);
    document.getElementById('btn-close-inventaris-modal').addEventListener('click', () => closeModal('inventaris-modal'));
    document.getElementById('btn-cancel-inventaris').addEventListener('click', () => closeModal('inventaris-modal'));

    // Peminjaman Modal Events
    document.getElementById('peminjaman-form').addEventListener('submit', handleSavePeminjaman);
    document.getElementById('btn-close-peminjaman-modal').addEventListener('click', () => closeModal('peminjaman-modal'));
    document.getElementById('btn-cancel-peminjaman').addEventListener('click', () => closeModal('peminjaman-modal'));

    // Prestasi Modal Events
    document.getElementById('prestasi-form').addEventListener('submit', handleSavePrestasi);
    document.getElementById('btn-close-prestasi-modal').addEventListener('click', () => closeModal('prestasi-modal'));
    document.getElementById('btn-cancel-prestasi').addEventListener('click', () => closeModal('prestasi-modal'));
    document.getElementById('pr-gambar').addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        if (!file.type.startsWith('image/')) {
            alert('File gambar prestasi harus berupa gambar.');
            e.target.value = '';
            return;
        }
        compressBuktiImage(file, (dataUrl) => {
            document.getElementById('prestasi-modal').dataset.gambarData = dataUrl;
            document.getElementById('pr-gambar-preview-img').src = dataUrl;
            document.getElementById('pr-gambar-preview').classList.remove('hidden');
        });
    });
    document.getElementById('btn-close-prestasi-detail-modal').addEventListener('click', () => closeModal('prestasi-detail-modal'));

    // Pendidikan Modal Events
    document.getElementById('pendidikan-form').addEventListener('submit', handleSavePendidikan);
    document.getElementById('btn-close-pendidikan-modal').addEventListener('click', () => closeModal('pendidikan-modal'));
    document.getElementById('btn-cancel-pendidikan').addEventListener('click', () => closeModal('pendidikan-modal'));

    // Poin Modal Events
    document.getElementById('poin-form').addEventListener('submit', handleSavePoin);
    document.getElementById('btn-close-poin-modal').addEventListener('click', () => closeModal('poin-modal'));
    document.getElementById('btn-cancel-poin').addEventListener('click', () => closeModal('poin-modal'));
}

function closeSidebar() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebar-backdrop').classList.remove('show');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
}
