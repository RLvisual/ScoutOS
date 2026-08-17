/* =========================================
   VARIABLES & RESET
========================================= */
:root {
    --primary: #15803d;
    --primary-dark: #14532d;
    --primary-light: #dcfce7;
    --primary-soft: #ecfdf3;
    --accent: #f59e0b;
    --background: #f3f6f4;
    --surface: #ffffff;
    --text-main: #17251a;
    --text-muted: #6b7280;
    --border: #e6eae7;
    --danger: #dc2626;
    --danger-light: #fee2e2;
    --warning: #d97706;
    --warning-light: #fef3c7;
    --info: #2563eb;
    --info-light: #dbeafe;
    --shadow-sm: 0 1px 2px 0 rgba(16, 40, 24, 0.06);
    --shadow-md: 0 6px 16px -4px rgba(16, 40, 24, 0.12), 0 2px 6px -2px rgba(16, 40, 24, 0.08);
    --shadow-lg: 0 20px 40px -12px rgba(16, 40, 24, 0.22);
    --radius-md: 10px;
    --radius-lg: 16px;
    --radius-xl: 22px;
    --transition: all 0.2s ease;
}

* { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Segoe UI', system-ui, -apple-system, sans-serif; }
body { background-color: var(--background); background-image: radial-gradient(circle at top right, rgba(21, 128, 61, 0.06), transparent 55%); color: var(--text-main); line-height: 1.5; overflow-x: hidden; }
::-webkit-scrollbar { width: 8px; height: 8px; }
::-webkit-scrollbar-thumb { background: #c8d4cb; border-radius: 999px; }
::-webkit-scrollbar-track { background: transparent; }

.hidden { display: none !important; }
.desktop-only { display: none; }
@media (min-width: 768px) { .desktop-only { display: block; } }

/* =========================================
   LOGIN PAGE
========================================= */
.login-layout { display: flex; min-height: 100vh; background-color: var(--background); }
.login-brand { display: none; flex: 1; background: linear-gradient(150deg, var(--primary-dark) 0%, var(--primary) 55%, #1d9a52 100%); color: white; padding: 3rem; align-items: center; justify-content: center; position: relative; overflow: hidden; }
.login-brand::before { content: ''; position: absolute; inset: 0; background-image: radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08) 0, transparent 35%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.08) 0, transparent 35%); }
.login-brand .brand-content { position: relative; z-index: 1; }
@media (min-width: 1024px) { .login-brand { display: flex; } }
.brand-content { text-align: center; }
.brand-logo-large svg { width: 120px; height: 120px; margin-bottom: 1.5rem; opacity: 0.9; }
.brand-content h1 { font-size: 3rem; margin-bottom: 0.5rem; font-weight: 700; }
.brand-content p { font-size: 1.25rem; opacity: 0.8; }
.login-form-container { flex: 1; display: flex; align-items: center; justify-content: center; padding: 2rem; }
.login-form-box { background: var(--surface); padding: 2.5rem; border-radius: var(--radius-xl); box-shadow: var(--shadow-lg); width: 100%; max-width: 420px; border: 1px solid var(--border); }
.mobile-brand { text-align: center; margin-bottom: 2rem; color: var(--primary); }
@media (min-width: 1024px) { .mobile-brand { display: none; } }
.mobile-brand svg { width: 60px; height: 60px; }
.login-form-box h3 { font-size: 1.5rem; margin-bottom: 0.25rem; }
.text-muted { color: var(--text-muted); font-size: 0.875rem; margin-bottom: 1.5rem; }

.alert-error { background-color: var(--danger-light); color: var(--danger); padding: 0.75rem; border-radius: var(--radius-md); font-size: 0.875rem; margin-bottom: 1.5rem; border-left: 4px solid var(--danger); }

/* Forms & Controls */
.form-group { margin-bottom: 1.25rem; }
.form-group label { display: block; font-size: 0.875rem; font-weight: 500; margin-bottom: 0.5rem; }
input[type="text"], input[type="password"], input[type="tel"], select {
    width: 100%; padding: 0.75rem 1rem; border: 1px solid var(--border);
    border-radius: var(--radius-md); outline: none; transition: var(--transition);
    background-color: var(--surface); color: var(--text-main); font-size: 0.875rem;
}
input:focus, select:focus { border-color: var(--primary); box-shadow: 0 0 0 3px var(--primary-light); }
.password-input { position: relative; }
.password-input button { position: absolute; right: 10px; top: 50%; transform: translateY(-50%); background: none; border: none; color: var(--text-muted); cursor: pointer; }
.password-input button svg { width: 20px; height: 20px; }

/* Buttons */
.btn-primary { background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%); color: white; padding: 0.75rem 1.25rem; border: none; border-radius: var(--radius-md); font-weight: 600; font-size: 0.875rem; cursor: pointer; transition: var(--transition); display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem; box-shadow: 0 4px 10px -2px rgba(21, 128, 61, 0.35); }
.btn-primary:hover { filter: brightness(1.08); transform: translateY(-1px); box-shadow: 0 8px 16px -4px rgba(21, 128, 61, 0.4); }
.btn-primary:active { transform: translateY(0); }
.btn-secondary { background-color: #eef1ef; color: var(--text-main); padding: 0.75rem 1.25rem; border: 1px solid var(--border); border-radius: var(--radius-md); font-weight: 500; font-size: 0.875rem; cursor: pointer; transition: var(--transition); }
.btn-secondary:hover { background-color: #e2e7e3; border-color: #d1d9d3; }
.btn-danger { background-color: var(--danger); color: white; padding: 0.5rem 1rem; border: none; border-radius: var(--radius-md); font-weight: 500; font-size: 0.875rem; cursor: pointer; transition: var(--transition); }
.btn-danger:hover { background-color: #b91c1c; }
.btn-sm { padding: 0.4rem 0.75rem; font-size: 0.75rem; border-radius: 7px; }
.form-hint { font-size: 0.75rem; color: var(--text-muted); margin-top: 0.25rem; }

/* Ikon SVG di dalam tombol wajib dibatasi ukurannya — tanpa aturan ini,
   SVG tanpa atribut width/height (seperti ikon plus) akan tampil pada
   ukuran default browser yang sangat besar dan merusak tata letak tombol. */
.btn-primary svg, .btn-secondary svg, .btn-danger svg, .btn-sm svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
}
.btn-sm svg { width: 14px; height: 14px; }

/* Demo Accounts */
.demo-accounts { margin-top: 2rem; border-top: 1px solid var(--border); padding-top: 1.5rem; }
.demo-title { font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 1rem; text-align: center; }
.demo-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; }
.demo-btn { background: var(--background); border: 1px solid var(--border); padding: 0.5rem; border-radius: var(--radius-md); font-size: 0.75rem; color: var(--text-main); cursor: pointer; transition: var(--transition); }
.demo-btn:hover { border-color: var(--primary); color: var(--primary); background: var(--primary-light); }

/* =========================================
   APP LAYOUT & SIDEBAR
========================================= */
#app-view { display: flex; height: 100vh; overflow: hidden; }
.sidebar { width: 260px; background-color: var(--surface); border-right: 1px solid var(--border); display: flex; flex-direction: column; position: fixed; height: 100vh; z-index: 40; transform: translateX(-100%); transition: transform 0.3s ease-in-out; }
@media (min-width: 1024px) { .sidebar { transform: translateX(0); position: relative; } }
.sidebar.open { transform: translateX(0); }
.sidebar-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 30; opacity: 0; pointer-events: none; transition: opacity 0.3s ease; }
.sidebar-backdrop.show { opacity: 1; pointer-events: auto; }
@media (min-width: 1024px) { .sidebar-backdrop { display: none; } }
.sidebar-header { padding: 1.5rem; border-bottom: 1px solid var(--border); }
.sidebar-logo { display: flex; align-items: center; gap: 1rem; color: var(--primary); }
.sidebar-logo svg { width: 32px; height: 32px; }
.sidebar-logo h2 { font-size: 1.25rem; font-weight: 700; color: var(--text-main); line-height: 1.2; }
.sidebar-logo span { font-size: 0.75rem; color: var(--text-muted); }
.sidebar-nav { flex: 1; overflow-y: auto; padding: 1rem 0.5rem; }
.nav-item { display: flex; align-items: center; gap: 0.75rem; padding: 0.7rem 1rem; color: var(--text-muted); text-decoration: none; border-radius: var(--radius-md); margin-bottom: 0.2rem; transition: var(--transition); cursor: pointer; border-left: 3px solid transparent; }
.nav-item svg { width: 20px; height: 20px; flex-shrink: 0; }
.nav-item:hover { background-color: var(--primary-soft); color: var(--primary); }
.nav-item.active { background: linear-gradient(90deg, var(--primary-light) 0%, transparent 100%); color: var(--primary-dark); font-weight: 600; border-left-color: var(--primary); }
.sidebar-footer { padding: 1rem; border-top: 1px solid var(--border); }
.user-profile-small { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem; }
.avatar { width: 40px; height: 40px; background-color: var(--primary); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 1.25rem; flex-shrink: 0; }
.user-info { display: flex; flex-direction: column; overflow: hidden; }
.user-info strong { font-size: 0.875rem; white-space: nowrap; text-overflow: ellipsis; overflow: hidden; }
.user-info span { font-size: 0.75rem; color: var(--text-muted); }
.btn-logout { width: 100%; display: flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 0.5rem; background: none; border: 1px solid var(--border); border-radius: var(--radius-md); color: var(--danger); font-size: 0.875rem; cursor: pointer; transition: var(--transition); }
.btn-logout:hover { background-color: var(--danger-light); border-color: var(--danger); }
.btn-logout svg { width: 16px; height: 16px; }

/* =========================================
   MAIN WRAPPER & HEADER
========================================= */
.main-wrapper { flex: 1; display: flex; flex-direction: column; height: 100vh; overflow: hidden; }
.top-header { background-color: var(--surface); height: 70px; padding: 0 1.5rem; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--border); z-index: 20; }
.header-left { display: flex; align-items: center; gap: 1rem; }
.header-left h2 { font-size: 1.25rem; font-weight: 600; }
.btn-icon { background: none; border: none; color: var(--text-muted); cursor: pointer; padding: 0.5rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
.btn-icon:hover { background-color: var(--background); color: var(--primary); }
.btn-icon svg { width: 24px; height: 24px; }
@media (min-width: 1024px) { #btn-menu { display: none; } }
.header-right { display: flex; align-items: center; gap: 1rem; }
.header-profile { display: flex; align-items: center; gap: 0.75rem; }
.header-user-info { text-align: right; }
.header-user-info strong { display: block; font-size: 0.875rem; }
.header-user-info span { font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; }

/* =========================================
   MAIN CONTENT & DASHBOARD
========================================= */
.main-content { flex: 1; overflow-y: auto; padding: 1.5rem; }
.dashboard-header { margin-bottom: 2rem; display: flex; flex-direction: column; gap: 0.5rem; }
.dashboard-header h3 { font-size: 1.5rem; color: var(--text-main); }
.role-badge { display: inline-block; padding: 0.25rem 0.75rem; background-color: var(--primary-light); color: var(--primary-dark); border-radius: 999px; font-size: 0.75rem; font-weight: 600; letter-spacing: 0.05em; align-self: flex-start; }

.stats-grid { display: grid; grid-template-columns: 1fr; gap: 1rem; margin-bottom: 2rem; }
@media (min-width: 640px) { .stats-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .stats-grid { grid-template-columns: repeat(4, 1fr); } }

.stat-card { background-color: var(--surface); padding: 1.5rem; border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); border: 1px solid var(--border); transition: var(--transition); position: relative; overflow: hidden; }
.stat-card::before { content: ''; position: absolute; top: 0; left: 0; width: 4px; height: 100%; background: linear-gradient(180deg, var(--primary) 0%, var(--accent) 100%); opacity: 0.8; }
.stat-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-md); border-color: var(--primary-light); }
.stat-title { font-size: 0.875rem; color: var(--text-muted); margin-bottom: 0.5rem; }
.stat-value { font-size: 1.85rem; font-weight: 700; color: var(--primary-dark); }

.card { background-color: var(--surface); border-radius: var(--radius-lg); border: 1px solid var(--border); overflow: hidden; margin-bottom: 1.5rem; box-shadow: var(--shadow-sm); }
.card-header { padding: 1.25rem 1.5rem; border-bottom: 1px solid var(--border); background-color: #fafbfa; display: flex; justify-content: space-between; align-items: center; }
.card-header h4 { font-size: 1rem; font-weight: 600; }
.card-body { padding: 1.5rem; }
.empty-list { text-align: center; color: var(--text-muted); font-size: 0.875rem; padding: 2rem 0; }

.recent-activity-list { display: flex; flex-direction: column; gap: 0.75rem; }
.recent-activity-item { display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; border: 1px solid var(--border); border-radius: var(--radius-md); transition: var(--transition); }
.recent-activity-item:hover { background-color: var(--primary-soft); border-color: var(--primary-light); }
.recent-activity-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--primary); flex-shrink: 0; }
.recent-activity-item > div:nth-child(2) { flex: 1; display: flex; flex-direction: column; gap: 0.1rem; }
.recent-activity-item span { font-size: 0.75rem; color: var(--text-muted); }

/* =========================================
   MANAJEMEN ANGGOTA (TABLE & FILTERS)
========================================= */
.member-controls { display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.5rem; }
@media (min-width: 768px) { .member-controls { flex-direction: row; justify-content: space-between; align-items: center; } }
.search-filter-group { display: flex; flex-direction: column; gap: 0.75rem; flex: 1; }
@media (min-width: 640px) { .search-filter-group { flex-direction: row; } }
.search-input-box { flex: 1; }

.table-responsive { overflow-x: auto; width: 100%; border-radius: var(--radius-md); border: 1px solid var(--border); }
.data-table { width: 100%; border-collapse: collapse; text-align: left; font-size: 0.875rem; }
.data-table th, .data-table td { padding: 0.875rem 1rem; border-bottom: 1px solid var(--border); white-space: nowrap; }
.data-table th { background-color: #fafbfa; font-weight: 600; color: var(--text-muted); text-transform: uppercase; font-size: 0.7rem; letter-spacing: 0.04em; }
.data-table tbody tr { transition: var(--transition); }
.data-table tbody tr:hover { background-color: var(--primary-soft); }
.data-table tbody tr:last-child td { border-bottom: none; }
.attendance-select { padding: 0.4rem 0.6rem; border: 1px solid var(--border); border-radius: 7px; font-size: 0.8rem; background: var(--surface); text-transform: capitalize; }

/* Badges Status */
.status-badge { display: inline-block; padding: 0.2rem 0.6rem; border-radius: 999px; font-size: 0.75rem; font-weight: 600; text-transform: capitalize; }
.status-aktif { background-color: var(--primary-light); color: var(--primary-dark); }
.status-pending { background-color: var(--warning-light); color: var(--warning); }
.status-nonaktif { background-color: #f3f4f6; color: var(--text-muted); }
.status-diberhentikan { background-color: var(--danger-light); color: var(--danger); }

/* Action Buttons Grid */
.action-buttons { display: flex; gap: 0.5rem; }

/* =========================================
   MODAL
========================================= */
.modal { position: fixed; inset: 0; background: rgba(15, 30, 20, 0.55); backdrop-filter: blur(2px); z-index: 100; display: flex; align-items: center; justify-content: center; padding: 1rem; }
.modal-content { background: var(--surface); width: 100%; max-width: 400px; border-radius: var(--radius-lg); padding: 1.5rem; box-shadow: var(--shadow-lg); animation: modalIn 0.25s ease; max-height: 90vh; overflow-y: auto; }
.modal-lg { max-width: 600px; }
@keyframes modalIn { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
.modal-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem; border-bottom: 1px solid var(--border); padding-bottom: 0.75rem; }
.btn-close { background: none; border: none; font-size: 1.5rem; cursor: pointer; color: var(--text-muted); }
.modal-actions { display: flex; gap: 1rem; justify-content: flex-end; margin-top: 1.5rem; }
.modal-actions-split { justify-content: space-between; align-items: center; flex-wrap: wrap; }
.modal-actions-right { display: flex; gap: 1rem; }
.form-grid { display: grid; grid-template-columns: 1fr; gap: 1rem; }
@media (min-width: 640px) { .form-grid { grid-template-columns: 1fr 1fr; } }

/* Placeholder */
.placeholder-page { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; text-align: center; padding: 3rem 1rem; background-color: var(--surface); border-radius: var(--radius-lg); border: 1px solid var(--border); }
.placeholder-icon { width: 80px; height: 80px; background-color: var(--primary-light); color: var(--primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; }
.placeholder-icon svg { width: 40px; height: 40px; }
.badge-future { background-color: #f3f4f6; color: var(--text-muted); padding: 0.25rem 0.75rem; border-radius: 999px; font-size: 0.75rem; font-weight: 600; border: 1px solid var(--border); }

/* =========================================
   PROFIL ANGGOTA: TAB SWITCHER
========================================= */
.member-tabs { display: flex; gap: 0.25rem; border-bottom: 1px solid var(--border); margin-bottom: 1.25rem; overflow-x: auto; }
.member-tab-btn { background: none; border: none; padding: 0.65rem 1rem; font-size: 0.85rem; font-weight: 500; color: var(--text-muted); cursor: pointer; border-bottom: 2px solid transparent; white-space: nowrap; transition: var(--transition); }
.member-tab-btn:hover { color: var(--primary); }
.member-tab-btn.active { color: var(--primary-dark); border-bottom-color: var(--primary); font-weight: 600; }
.member-tab-content { min-height: 120px; }

.detail-grid { display: grid; grid-template-columns: 1fr; gap: 1rem; }
@media (min-width: 640px) { .detail-grid { grid-template-columns: 1fr 1fr; } }
.detail-grid label { display: block; font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.2rem; text-transform: uppercase; letter-spacing: 0.03em; }

/* =========================================
   MISC MODERN TOUCHES
========================================= */
.member-controls h4 { color: var(--text-main); }
code { background: var(--primary-soft); color: var(--primary-dark); padding: 0.15rem 0.4rem; border-radius: 5px; font-size: 0.8rem; }

.bulk-action-bar { display: flex; align-items: center; gap: 1rem; background: var(--danger-light); border: 1px solid #fca5a5; color: #7f1d1d; padding: 0.75rem 1rem; border-radius: var(--radius-md); margin-bottom: 1rem; flex-wrap: wrap; }
.bulk-action-bar span { font-weight: 600; font-size: 0.85rem; }

.proker-tabs { display: flex; gap: 0.4rem; flex-wrap: wrap; }
.proker-tabs .member-tab-btn { border: 1px solid var(--border); border-radius: 999px; padding: 0.45rem 1rem; border-bottom: 1px solid var(--border); }
.proker-tabs .member-tab-btn.active { background: var(--primary); color: white; border-color: var(--primary); }

.pengumuman-feed { display: flex; flex-direction: column; gap: 0.75rem; }
.pengumuman-item { display: flex; align-items: flex-start; gap: 0.75rem; padding: 0.85rem; border: 1px solid var(--border); border-radius: var(--radius-md); transition: var(--transition); }
.pengumuman-item:hover { background-color: var(--primary-soft); border-color: var(--primary-light); }
.pengumuman-item .recent-activity-dot { margin-top: 0.35rem; }
.pengumuman-item > div:nth-child(2) { display: flex; flex-direction: column; gap: 0.15rem; }
.pengumuman-item span { font-size: 0.75rem; color: var(--text-muted); }
