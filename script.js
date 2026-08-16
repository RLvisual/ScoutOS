/* =========================================================================
   KONFIGURASI SUPABASE — TEMPEL URL & ANON KEY KAMU DI SINI
   =========================================================================
   1. Buka project Supabase kamu > Project Settings > API.
   2. Salin "Project URL" ke SUPABASE_URL di bawah.
   3. Salin "anon public" API key ke SUPABASE_ANON_KEY di bawah.
   4. Pastikan tabel di Supabase kamu punya struktur kolom yang sama seperti
      di bawah (lihat catatan skema di akhir chat). Kalau nama kolom/tabel
      kamu beda, kasih tahu saya supaya kode ini saya sesuaikan.
========================================================================= */
const SUPABASE_URL = 'PASTE_SUPABASE_URL_DISINI';
const SUPABASE_ANON_KEY = 'PASTE_SUPABASE_ANON_KEY_DISINI';

const supabaseClient = (SUPABASE_URL.startsWith('http') && window.supabase)
    ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
    : null;

// Nama tabel di Supabase — sesuaikan di sini kalau nama tabelmu berbeda
const TABLES = {
    members: 'members',
    kegiatan: 'kegiatan',
    absensi: 'absensi_sesi',
    sku: 'sku',
    skk: 'skk'
};

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

const navigationConfig = {
    super_admin: [
        { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
        { id: 'anggota', label: 'Manajemen Anggota', icon: 'users' },
        { id: 'manajemen_role', label: 'Manajemen Role', icon: 'role' },
        { id: 'organisasi', label: 'Organisasi', icon: 'org' },
        { id: 'pengaturan', label: 'Pengaturan Sistem', icon: 'settings' }
    ],
    pembina: [
        { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
        { id: 'anggota', label: 'Anggota', icon: 'users' },
        { id: 'kegiatan', label: 'Kegiatan', icon: 'activity' },
        { id: 'absensi', label: 'Absensi', icon: 'calendar' },
        { id: 'sku_skk', label: 'SKU & SKK', icon: 'achievement' },
        { id: 'pendidikan', label: 'Pendidikan Pramuka', icon: 'education' },
        { id: 'prestasi', label: 'Prestasi', icon: 'achievement' },
        { id: 'laporan', label: 'Laporan', icon: 'report' },
        { id: 'pengumuman', label: 'Pengumuman', icon: 'announce' }
    ],
    ketua: [
        { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
        { id: 'anggota', label: 'Anggota', icon: 'users' },
        { id: 'kegiatan', label: 'Kegiatan', icon: 'activity' },
        { id: 'absensi', label: 'Absensi', icon: 'calendar' },
        { id: 'sku_skk', label: 'SKU & SKK', icon: 'achievement' },
        { id: 'proker', label: 'Program Kerja', icon: 'task' },
        { id: 'tugas', label: 'Tugas', icon: 'task' },
        { id: 'prestasi', label: 'Prestasi', icon: 'achievement' },
        { id: 'inventaris', label: 'Inventaris', icon: 'inventory' },
        { id: 'pengumuman', label: 'Pengumuman', icon: 'announce' }
    ],
    wakil_ketua: [
        { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
        { id: 'anggota', label: 'Anggota', icon: 'users' },
        { id: 'kegiatan', label: 'Kegiatan', icon: 'activity' },
        { id: 'absensi', label: 'Absensi', icon: 'calendar' },
        { id: 'proker', label: 'Program Kerja', icon: 'task' },
        { id: 'tugas', label: 'Tugas', icon: 'task' },
        { id: 'pengumuman', label: 'Pengumuman', icon: 'announce' }
    ],
    sekretaris: [
        { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
        { id: 'anggota', label: 'Anggota', icon: 'users' },
        { id: 'kegiatan', label: 'Kegiatan', icon: 'activity' },
        { id: 'absensi', label: 'Absensi', icon: 'calendar' },
        { id: 'dokumen', label: 'Dokumen', icon: 'report' },
        { id: 'surat', label: 'Surat', icon: 'report' },
        { id: 'laporan', label: 'Laporan', icon: 'report' }
    ],
    bendahara: [
        { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
        { id: 'keuangan', label: 'Keuangan', icon: 'finance' },
        { id: 'laporan_keuangan', label: 'Laporan Keuangan', icon: 'report' }
    ],
    koordinator: [
        { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
        { id: 'kegiatan', label: 'Kegiatan', icon: 'activity' },
        { id: 'absensi', label: 'Absensi', icon: 'calendar' },
        { id: 'tugas', label: 'Tugas', icon: 'task' },
        { id: 'inventaris', label: 'Inventaris', icon: 'inventory' },
        { id: 'dokumentasi', label: 'Dokumentasi', icon: 'report' }
    ],
    anggota: [
        { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
        { id: 'profil', label: 'Profil Saya', icon: 'profile' },
        { id: 'kegiatan', label: 'Kegiatan', icon: 'activity' },
        { id: 'sku_skk', label: 'SKU & SKK', icon: 'achievement' },
        { id: 'jadwal', label: 'Jadwal', icon: 'calendar' },
        { id: 'pendidikan', label: 'Pendidikan', icon: 'education' },
        { id: 'prestasi', label: 'Prestasi', icon: 'achievement' },
        { id: 'poin', label: 'Poin Saya', icon: 'achievement' },
        { id: 'pengumuman', label: 'Pengumuman', icon: 'announce' }
    ]
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

document.addEventListener('DOMContentLoaded', async () => {
    setupEventListeners();
    await initDatabase();
    checkSession();
});

/* =========================================
   DATA LAYER — SUPABASE
   Semua fungsi di bawah menggantikan localStorage lama. Data disimpan
   secara online di Supabase dan diambil ulang (fetch) setiap kali ada
   perubahan, supaya tampilan selalu sinkron dengan server.
========================================= */
function ensureSupabaseReady() {
    if (!supabaseClient) {
        alert('Koneksi Supabase belum disiapkan. Tempel SUPABASE_URL & SUPABASE_ANON_KEY di bagian atas script.js terlebih dahulu.');
        return false;
    }
    return true;
}

function showDataError(context, error) {
    console.error(`Gagal ${context}:`, error);
    alert(`Gagal ${context}. Periksa koneksi internet atau konfigurasi Supabase kamu.\n\nDetail: ${error?.message || error}`);
}

async function initDatabase() {
    const loadingView = document.getElementById('loading-view');

    if (!ensureSupabaseReady()) {
        // Tanpa konfigurasi Supabase, tetap tampilkan halaman login dengan
        // data kosong supaya developer bisa lihat UI-nya sambil pasang kunci.
        membersList = [];
        activitiesList = [];
        absensiList = [];
        skuList = [];
        skkList = [];
        if (loadingView) loadingView.classList.add('hidden');
        return;
    }

    try {
        const [membersRes, kegiatanRes, absensiRes, skuRes, skkRes] = await Promise.all([
            supabaseClient.from(TABLES.members).select('*').order('name', { ascending: true }),
            supabaseClient.from(TABLES.kegiatan).select('*').order('date', { ascending: false }),
            supabaseClient.from(TABLES.absensi).select('*').order('date', { ascending: false }),
            supabaseClient.from(TABLES.sku).select('*'),
            supabaseClient.from(TABLES.skk).select('*')
        ]);

        [membersRes, kegiatanRes, absensiRes, skuRes, skkRes].forEach(res => {
            if (res.error) throw res.error;
        });

        membersList = membersRes.data || [];
        activitiesList = kegiatanRes.data || [];
        absensiList = absensiRes.data || [];
        skuList = skuRes.data || [];
        skkList = skkRes.data || [];

        // Seed data awal hanya jika tabel anggota masih benar-benar kosong
        // (misalnya baru pertama kali menyambungkan Supabase).
        if (membersList.length === 0) {
            const { data: seeded, error: seedError } = await supabaseClient
                .from(TABLES.members)
                .insert(initialMembersData)
                .select();
            if (seedError) throw seedError;
            membersList = seeded || initialMembersData;
        }
    } catch (err) {
        showDataError('memuat data dari Supabase', err);
        membersList = membersList.length ? membersList : [];
        activitiesList = activitiesList.length ? activitiesList : [];
        absensiList = absensiList.length ? absensiList : [];
        skuList = skuList.length ? skuList : [];
        skkList = skkList.length ? skkList : [];
    } finally {
        if (loadingView) loadingView.classList.add('hidden');
    }
}

async function refreshMembers() {
    const { data, error } = await supabaseClient.from(TABLES.members).select('*').order('name', { ascending: true });
    if (error) { showDataError('memuat ulang data anggota', error); return; }
    membersList = data || [];
}

async function refreshActivities() {
    const { data, error } = await supabaseClient.from(TABLES.kegiatan).select('*').order('date', { ascending: false });
    if (error) { showDataError('memuat ulang data kegiatan', error); return; }
    activitiesList = data || [];
}

async function refreshAbsensi() {
    const { data, error } = await supabaseClient.from(TABLES.absensi).select('*').order('date', { ascending: false });
    if (error) { showDataError('memuat ulang data absensi', error); return; }
    absensiList = data || [];
}

async function refreshSku() {
    const { data, error } = await supabaseClient.from(TABLES.sku).select('*');
    if (error) { showDataError('memuat ulang data SKU', error); return; }
    skuList = data || [];
}

async function refreshSkk() {
    const { data, error } = await supabaseClient.from(TABLES.skk).select('*');
    if (error) { showDataError('memuat ulang data SKK', error); return; }
    skkList = data || [];
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
    const navContainer = document.getElementB
