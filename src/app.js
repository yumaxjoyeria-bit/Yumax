/**
 * ============================================================================
 * YUMAX JOYERÍA — ELEGANTE Y ASPIRACIONAL
 * Sistema Integral de Gestión de Joyería, Inventario, Kardex & POS
 * 100% Local / Offline-First / Persistencia LocalStorage / Gestión de Datos Reales
 * ============================================================================
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'yumax_jewelry_system_data_v1';

  // LOGO EMBLEMA SVG VECTORIAL DE YUMAX JOYERÍA
  const YUMAX_LOGO_SVG = `
    <svg viewBox="0 0 240 240" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ygGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FBF3DF" />
          <stop offset="30%" stop-color="#E8C982" />
          <stop offset="70%" stop-color="#D8B168" />
          <stop offset="100%" stop-color="#9E7A32" />
        </linearGradient>
        <filter id="ygGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#D8B168" flood-opacity="0.3" />
        </filter>
      </defs>
      <g filter="url(#ygGlow)" stroke="url(#ygGold)" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <circle cx="120" cy="120" r="14" stroke="url(#ygGold)" stroke-width="7" fill="none" />
        <g transform="translate(120, 120)">
          <!-- 8 pétalos simétricos a 45 grados -->
          <path d="M 0,-18 C -14,-32 -22,-52 0,-82 C 22,-52 14,-32 0,-18 Z" />
          <path d="M -16,-34 C -36,-38 -54,-24 -36,-2" />
          <g transform="rotate(45)">
            <path d="M 0,-18 C -14,-32 -22,-52 0,-82 C 22,-52 14,-32 0,-18 Z" />
            <path d="M -16,-34 C -36,-38 -54,-24 -36,-2" />
          </g>
          <g transform="rotate(90)">
            <path d="M 0,-18 C -14,-32 -22,-52 0,-82 C 22,-52 14,-32 0,-18 Z" />
            <path d="M -16,-34 C -36,-38 -54,-24 -36,-2" />
          </g>
          <g transform="rotate(135)">
            <path d="M 0,-18 C -14,-32 -22,-52 0,-82 C 22,-52 14,-32 0,-18 Z" />
            <path d="M -16,-34 C -36,-38 -54,-24 -36,-2" />
          </g>
          <g transform="rotate(180)">
            <path d="M 0,-18 C -14,-32 -22,-52 0,-82 C 22,-52 14,-32 0,-18 Z" />
            <path d="M -16,-34 C -36,-38 -54,-24 -36,-2" />
          </g>
          <g transform="rotate(225)">
            <path d="M 0,-18 C -14,-32 -22,-52 0,-82 C 22,-52 14,-32 0,-18 Z" />
            <path d="M -16,-34 C -36,-38 -54,-24 -36,-2" />
          </g>
          <g transform="rotate(270)">
            <path d="M 0,-18 C -14,-32 -22,-52 0,-82 C 22,-52 14,-32 0,-18 Z" />
            <path d="M -16,-34 C -36,-38 -54,-24 -36,-2" />
          </g>
          <g transform="rotate(315)">
            <path d="M 0,-18 C -14,-32 -22,-52 0,-82 C 22,-52 14,-32 0,-18 Z" />
            <path d="M -16,-34 C -36,-38 -54,-24 -36,-2" />
          </g>
        </g>
      </g>
    </svg>
  `;

  // DATOS DE DEMOSTRACIÓN PREDETERMINADOS PARA YUMAX JOYERÍA
  const DEFAULT_DEMO_DATA = {
    products: [
      {
        id: '018e5f30-0010-7000-8000-000000000010',
        sku: 'YUM-AN-ORO-001',
        barcode: '7701234567890',
        qr_code: 'YUMAX-AN-001-2026',
        name: 'Anillo Solitario Diamante 0.50ct',
        description: 'Anillo de compromiso en oro amarillo 18k con diamante corte brillante certificado G/VS1.',
        category: 'Anillos',
        jewelry_type: 'Anillo de Compromiso',
        material: 'Oro Amarillo',
        metal_purity: '18k (750)',
        weight_grams: 4.2500,
        stone_type: 'Diamante Natural 0.50ct',
        size: '6.5',
        current_cost: 1950000,
        average_cost: 1950000,
        sale_price: 3450000,
        stock: 2,
        min_stock_alert: 1,
        location: 'Vitrina 1 - Alta Joyería',
        status: 'ACTIVE',
      },
      {
        id: '018e5f30-0011-7000-8000-000000000011',
        sku: 'YUM-CAD-ORO-002',
        barcode: '7701234567891',
        qr_code: 'YUMAX-CAD-002-2026',
        name: 'Cadena Eslabón Cubano 50cm',
        description: 'Cadena tejida eslabón cubano macizo con broche de seguridad tipo cajón en oro italiano 18k.',
        category: 'Cadenas',
        jewelry_type: 'Cadena',
        material: 'Oro Italiano',
        metal_purity: '18k (750)',
        weight_grams: 18.6000,
        stone_type: 'Sin Piedra',
        size: '50 cm',
        current_cost: 4100000,
        average_cost: 4050000,
        sale_price: 6890000,
        stock: 2,
        min_stock_alert: 2,
        location: 'Caja Fuerte - Gaveta 3',
        status: 'ACTIVE',
      },
      {
        id: '018e5f30-0012-7000-8000-000000000012',
        sku: 'YUM-PUL-PLT-003',
        barcode: '7701234567892',
        qr_code: 'YUMAX-PUL-003-2026',
        name: 'Pulsera Tejido Cartier Plata 925',
        description: 'Pulsera tejido Cartier 3x1 en plata legítima ley 925 con baño de rodio italiano.',
        category: 'Pulseras',
        jewelry_type: 'Pulsera',
        material: 'Plata',
        metal_purity: 'Ley 925',
        weight_grams: 12.1000,
        stone_type: 'Sin Piedra',
        size: '19 cm',
        current_cost: 210000,
        average_cost: 205000,
        sale_price: 480000,
        stock: 6,
        min_stock_alert: 3,
        location: 'Vitrina 2 - Plata',
        status: 'ACTIVE',
      },
      {
        id: '018e5f30-0013-7000-8000-000000000013',
        sku: 'YUM-ARE-ESM-004',
        barcode: '7701234567893',
        qr_code: 'YUMAX-ARE-004-2026',
        name: 'Aretes Topos Esmeralda Muzo 1.20ct',
        description: 'Aretes en oro blanco de 18k con esmeraldas colombianas naturales de Muzo.',
        category: 'Aretes',
        jewelry_type: 'Aretes',
        material: 'Oro Blanco',
        metal_purity: '18k (750)',
        weight_grams: 3.1500,
        stone_type: 'Esmeralda Natural Muzo',
        size: 'Medianos',
        current_cost: 2800000,
        average_cost: 2800000,
        sale_price: 5200000,
        stock: 1,
        min_stock_alert: 1,
        location: 'Vitrina 1 - Alta Joyería',
        status: 'ACTIVE',
      },
      {
        id: '018e5f30-0014-7000-8000-000000000014',
        sku: 'YUM-DIJ-CRU-005',
        barcode: '7701234567894',
        qr_code: 'YUMAX-DIJ-005-2026',
        name: 'Dije Cruz Latina Clásica Oro 18k',
        description: 'Dije cruz latina diamantada con engaste de zirconias suizas de alta refracción.',
        category: 'Dijes',
        jewelry_type: 'Dije',
        material: 'Oro Amarillo',
        metal_purity: '18k (750)',
        weight_grams: 2.8000,
        stone_type: 'Zirconias Suizas',
        size: '3.5 cm',
        current_cost: 620000,
        average_cost: 610000,
        sale_price: 1150000,
        stock: 3,
        min_stock_alert: 2,
        location: 'Vitrina 3 - Religiosos',
        status: 'ACTIVE',
      },
    ],
    movements: [
      {
        id: 'MOV-1001',
        product_id: '018e5f30-0010-7000-8000-000000000010',
        product_sku: 'YUM-AN-ORO-001',
        type: 'PURCHASE',
        type_label: 'Compra Inicial',
        quantity: 2,
        unit_cost: 1950000,
        total_cost: 3900000,
        stock_after: 2,
        date: '2026-08-10 10:30',
        user: 'admin@yumaxjoyeria.com',
        notes: 'Entrada por compra inicial a orfebres de taller',
      },
      {
        id: 'MOV-1002',
        product_id: '018e5f30-0011-7000-8000-000000000011',
        product_sku: 'YUM-CAD-ORO-002',
        type: 'PURCHASE',
        type_label: 'Compra Mercancía',
        quantity: 3,
        unit_cost: 4100000,
        total_cost: 12300000,
        stock_after: 3,
        date: '2026-08-12 14:15',
        user: 'admin@yumaxjoyeria.com',
        notes: 'Compra importación orfebres italianos',
      },
    ],
    accounts: [
      { id: 'ACC-1', name: 'Caja General Efectivo', type: 'CASH', balance: 3850000, icon: '💵' },
      { id: 'ACC-2', name: 'Bancolombia Principal', type: 'BANK', balance: 14200000, icon: '🏦' },
      { id: 'ACC-3', name: 'Nequi Yumax Joyería', type: 'NEQUI', balance: 4320000, icon: '📱' },
      { id: 'ACC-4', name: 'Daviplata Negocio', type: 'DAVIPLATA', balance: 1850000, icon: '📱' },
      { id: 'ACC-5', name: 'Datáfono / Tarjetas', type: 'CARD', balance: 670000, icon: '💳' },
    ],
    credits: [
      {
        id: 'CRED-1',
        customer: 'María Fernanda Gómez',
        phone: '310 456 7890',
        invoice: 'POS-892100',
        total: 4500000,
        paid: 2000000,
        balance: 2500000,
        dueDate: '2026-09-15',
        status: 'ACTIVE',
      },
    ],
    sales: [
      {
        id: 'SALE-1',
        invoice: 'POS-892144',
        customer: 'María Fernanda Gómez',
        phone: '310 456 7890',
        date: 'Hoy, 14:32',
        full_date: '2026-08-15 14:32',
        method: 'CASH',
        total: 3450000,
        status: 'PAID',
        items: [
          {
            product_id: '018e5f30-0010-7000-8000-000000000010',
            sku: 'YUM-AN-ORO-001',
            name: 'Anillo Solitario Diamante 0.50ct',
            quantity: 1,
            unit_price: 3450000,
            subtotal: 3450000,
          }
        ],
        notes: 'Venta inicial en mostrador',
      },
    ],
    purchases: [
      {
        id: 'PUR-1001',
        purchase_number: 'COM-7701',
        supplier: 'Orfebres Italianos & Cía',
        date: '12 Ago 2026, 14:15',
        full_date: '2026-08-12 14:15',
        account_id: 'ACC-2',
        account_name: 'Bancolombia Principal',
        total: 12300000,
        user: 'admin@yumaxjoyeria.com',
        notes: 'Lote de importación de cadenas oro italiano 18k',
        items: [
          {
            product_id: '018e5f30-0011-7000-8000-000000000011',
            sku: 'YUM-CAD-ORO-002',
            name: 'Cadena Eslabón Cubano 50cm',
            quantity: 3,
            unit_cost: 4100000,
            subtotal: 12300000,
            projected_cpp: 4050000,
          }
        ]
      }
    ],
    expenses: [
      {
        id: 'EXP-1',
        concept: 'Empaques de terciopelo y bolsas de lujo Yumax',
        amount: 250000,
        account_id: 'ACC-1',
        account_name: 'Caja General Efectivo',
        date: 'Hoy, 09:15',
        full_date: '2026-08-15 09:15',
        user: 'admin@yumaxjoyeria.com',
      }
    ],
    customers: [
      { id: 'CUST-1', name: 'María Fernanda Gómez', phone: '310 456 7890', email: 'mfgomez@gmail.com', total_purchases: 4500000 },
      { id: 'CUST-2', name: 'Carlos Andrés Restrepo', phone: '320 890 1234', email: 'carlos.restrepo@hotmail.com', total_purchases: 1800000 },
      { id: 'CUST-3', name: 'Valentina Morales', phone: '312 789 4561', email: 'valen.morales@outlook.com', total_purchases: 6890000 },
    ],
    suppliers: [
      { id: 'SUP-1', name: 'Orfebres Italianos & Cía', phone: '300 123 4567', contact: 'Gianni Rossi', category: 'Cadenas y Oro 18k' },
      { id: 'SUP-2', name: 'Minería Muzo Esmeraldas', phone: '311 987 6543', contact: 'Hernán Castro', category: 'Piedras y Gemas Naturales' },
      { id: 'SUP-3', name: 'Fundición & Metales Bogotá', phone: '315 456 7890', contact: 'Roberto Peña', category: 'Oro Granalla y Plata 925' },
    ],
    investments: [],
  };

  // CARGAR DATOS PERSISTIDOS O INICIALIZAR
  function loadPersistedData() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        return {
          products: parsed.products || [],
          movements: parsed.movements || [],
          accounts: parsed.accounts || DEFAULT_DEMO_DATA.accounts,
          credits: parsed.credits || [],
          sales: parsed.sales || [],
          purchases: parsed.purchases || DEFAULT_DEMO_DATA.purchases || [],
          expenses: parsed.expenses || [],
          customers: parsed.customers || [],
          suppliers: parsed.suppliers || [],
          investments: parsed.investments || [],
        };
      }
    } catch (e) {
      console.warn('No se pudo leer datos locales, usando configuración predeterminada:', e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_DEMO_DATA));
  }

  const initialData = loadPersistedData();

  // ESTADO GLOBAL REACTIVO DE LA APLICACIÓN
  const state = {
    currentTab: 'inventory',
    activeUser: {
      id: '018e5f30-0001-7000-8000-000000000001',
      name: 'Director General Yumax',
      email: 'admin@yumaxjoyeria.com',
      role: 'ADMINISTRATOR',
    },
    inventorySearch: '',
    inventoryCategory: 'ALL',
    inventoryLocation: 'ALL',
    inventoryStockFilter: 'ALL',
    selectedProductForKardex: null,
    selectedProductForAdjustment: null,
    selectedSaleForReceipt: null,
    selectedPurchaseForDetail: null,
    showNewProductModal: false,
    showAdjustmentModal: false,
    showKardexModal: false,
    showNewSaleModal: false,
    showNewPurchaseModal: false,
    showNewExpenseModal: false,
    showDataManagementModal: false,
    showReceiptModal: false,
    showPurchaseDetailModal: false,
    showMobileSimulator: false,

    // Formulario de Venta Multi-Ítem (en memoria mientras el modal está abierto)
    saleForm: {
      customer: '',
      phone: '',
      method: 'CASH',
      notes: '',
      items: [],
      pickerProductId: '',
      pickerQty: 1,
      pickerPrice: 0,
    },

    // Formulario de Compra Multi-Ítem (en memoria mientras el modal está abierto)
    purchaseForm: {
      supplier: '',
      invoice: '',
      accountId: '',
      notes: '',
      items: [],
      pickerProductId: '',
      pickerQty: 1,
      pickerCost: 0,
    },

    // Datos del Negocio
    products: initialData.products,
    movements: initialData.movements,
    accounts: initialData.accounts,
    credits: initialData.credits,
    sales: initialData.sales,
    purchases: initialData.purchases,
    expenses: initialData.expenses,
    customers: initialData.customers,
    suppliers: initialData.suppliers,
    investments: initialData.investments || [],

    // Filtro de periodo del Dashboard
    dashPeriod: 'MONTH',
    dashFrom: '',
    dashTo: '',
    showNewInvestmentModal: false,
    mobileNavOpen: false,

    // Cola de Sincronización Móvil Offline (Simulador)
    syncQueue: [],
  };

  function persistState() {
    try {
      const dataToSave = {
        products: state.products,
        movements: state.movements,
        accounts: state.accounts,
        credits: state.credits,
        sales: state.sales,
        purchases: state.purchases,
        expenses: state.expenses,
        customers: state.customers,
        suppliers: state.suppliers,
        investments: state.investments,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
    } catch (e) {
      console.error('Error al guardar datos en LocalStorage:', e);
    }
  }

  // HELPERS DE CÁLCULO Y FORMATEO
  function formatCOP(amount) {
    return '$ ' + Number(amount || 0).toLocaleString('es-CO');
  }

  // ==========================================================================
  // HELPERS DE FECHAS Y PERIODOS (Dashboard por periodo)
  // ==========================================================================
  function pad2(n) {
    return String(n).padStart(2, '0');
  }

  // Fecha/hora LOCAL 'YYYY-MM-DD HH:MM' (evita el desfase UTC de toISOString)
  function nowLocalStamp() {
    const d = new Date();
    return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())} ${pad2(d.getHours())}:${pad2(d.getMinutes())}`;
  }

  function dateKey(d) {
    return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
  }

  function todayKey() {
    return dateKey(new Date());
  }

  // Extrae 'YYYY-MM-DD' de un texto de fecha; null si no es reconocible
  function extractDateKey(str) {
    if (!str || typeof str !== 'string') return null;
    const m = str.match(/^(\d{4})-(\d{2})-(\d{2})/);
    return m ? `${m[1]}-${m[2]}-${m[3]}` : null;
  }

  // Fecha de una venta. Si es un registro antiguo sin full_date,
  // se toma del movimiento de Kardex que cita su comprobante.
  function getSaleDateKey(sale) {
    const k = extractDateKey(sale.full_date) || extractDateKey(sale.date);
    if (k) return k;
    if (sale.invoice) {
      const mv = state.movements.find(m => m.type === 'SALE' && m.notes && m.notes.indexOf(sale.invoice) !== -1);
      if (mv) return extractDateKey(mv.date);
    }
    return null;
  }

  function getRecordDateKey(rec) {
    return extractDateKey(rec.full_date) || extractDateKey(rec.date);
  }

  function escapeHtml(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  const MONTHS_ES = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

  function formatDateKeyES(key) {
    if (!key) return '—';
    const [y, m, d] = key.split('-');
    return `${parseInt(d, 10)} ${MONTHS_ES[parseInt(m, 10) - 1]} ${y}`;
  }

  const DASH_PERIODS = [
    { id: 'TODAY', label: 'Hoy' },
    { id: '7D', label: 'Últimos 7 días' },
    { id: '30D', label: 'Últimos 30 días' },
    { id: 'MONTH', label: 'Este mes' },
    { id: 'PREV_MONTH', label: 'Mes anterior' },
    { id: 'YEAR', label: 'Este año' },
    { id: 'ALL', label: 'Todo' },
    { id: 'CUSTOM', label: 'Personalizado' },
  ];

  // Fecha más antigua con actividad registrada (para el periodo "Todo")
  function getEarliestActivityKey() {
    const keys = [];
    state.sales.forEach(s => { const k = getSaleDateKey(s); if (k) keys.push(k); });
    state.movements.forEach(m => { const k = extractDateKey(m.date); if (k) keys.push(k); });
    state.expenses.forEach(e => { const k = getRecordDateKey(e); if (k) keys.push(k); });
    state.investments.forEach(i => { const k = extractDateKey(i.date); if (k) keys.push(k); });
    keys.sort();
    return keys[0] || todayKey();
  }

  // Devuelve { from, to, label } en formato 'YYYY-MM-DD' (ambos inclusive)
  function getDashRange() {
    const now = new Date();
    const y = now.getFullYear();
    const m = now.getMonth();
    const today = todayKey();
    switch (state.dashPeriod) {
      case 'TODAY':
        return { from: today, to: today };
      case '7D': {
        const d = new Date(y, m, now.getDate() - 6);
        return { from: dateKey(d), to: today };
      }
      case '30D': {
        const d = new Date(y, m, now.getDate() - 29);
        return { from: dateKey(d), to: today };
      }
      case 'PREV_MONTH':
        return { from: dateKey(new Date(y, m - 1, 1)), to: dateKey(new Date(y, m, 0)) };
      case 'YEAR':
        return { from: `${y}-01-01`, to: today };
      case 'ALL':
        return { from: getEarliestActivityKey(), to: today };
      case 'CUSTOM': {
        let from = state.dashFrom || dateKey(new Date(y, m, 1));
        let to = state.dashTo || today;
        if (from > to) { const t = from; from = to; to = t; }
        return { from, to };
      }
      case 'MONTH':
      default:
        return { from: dateKey(new Date(y, m, 1)), to: today };
    }
  }

  function inRange(key, range) {
    return !!key && key >= range.from && key <= range.to;
  }

  // ==========================================================================
  // INVERSIÓN INICIAL
  // ==========================================================================
  const INVESTMENT_CATEGORIES = [
    { id: 'OWN_CAPITAL', label: 'Capital propio', icon: '🏠', color: '#34D399', isDebt: false },
    { id: 'CREDIT_CARD', label: 'Tarjetas de crédito', icon: '💳', color: '#F59E0B', isDebt: true },
    { id: 'BANK_LOAN', label: 'Créditos bancarios', icon: '🏦', color: '#60A5FA', isDebt: true },
    { id: 'THIRD_PARTY_LOAN', label: 'Préstamos de terceros / familiares', icon: '🤝', color: '#C084FC', isDebt: true },
    { id: 'OTHER', label: 'Otros aportes', icon: '📦', color: '#94A3B8', isDebt: false },
  ];

  function getInvestmentCategory(id) {
    return INVESTMENT_CATEGORIES.find(c => c.id === id) || INVESTMENT_CATEGORIES[INVESTMENT_CATEGORIES.length - 1];
  }

  function calculateInvestmentSummary() {
    const byCategory = INVESTMENT_CATEGORIES.map(c => ({ ...c, total: 0, count: 0 }));
    let total = 0;
    let debt = 0;
    state.investments.forEach(inv => {
      const amt = Number(inv.amount) || 0;
      const row = byCategory.find(c => c.id === inv.category) || byCategory[byCategory.length - 1];
      row.total += amt;
      row.count += 1;
      total += amt;
      if (row.isDebt) debt += amt;
    });
    return { total, debt, own: total - debt, byCategory };
  }

  // Cuota mensual estimada (sistema francés) si hay tasa y plazo
  function estimateMonthlyPayment(amount, monthlyRatePct, months) {
    const P = Number(amount) || 0;
    const n = parseInt(months, 10) || 0;
    const r = (Number(monthlyRatePct) || 0) / 100;
    if (P <= 0 || n <= 0) return 0;
    if (r === 0) return P / n;
    return P * r / (1 - Math.pow(1 + r, -n));
  }

  function calculateTotalInventoryValuation() {
    let cost = 0;
    let sale = 0;
    let totalStock = 0;
    state.products.forEach(p => {
      if (p.stock > 0) {
        cost += p.stock * p.average_cost;
        sale += p.stock * p.sale_price;
        totalStock += p.stock;
      }
    });
    return {
      costValuation: cost,
      saleValuation: sale,
      potentialProfit: sale - cost,
      totalStock,
    };
  }

  function calculateTotalCash() {
    return state.accounts.reduce((acc, a) => acc + (a.balance || 0), 0);
  }

  function calculateTotalReceivables() {
    return state.credits.reduce((acc, c) => acc + (c.balance || 0), 0);
  }

  function calculateTotalSales() {
    return state.sales.reduce((acc, s) => acc + (s.total || 0), 0);
  }

  function calculateTotalExpenses() {
    return state.expenses.reduce((acc, e) => acc + (e.amount || 0), 0);
  }

  // RENDERIZADO PRINCIPAL
  function render() {
    const appEl = document.getElementById('app');
    if (!appEl) return;

    const isClean = state.products.length === 0 && state.movements.length === 0;

    appEl.innerHTML = `
      <div class="app-container">
        <!-- SIDEBAR DE NAVEGACIÓN YUMAX JOYERÍA -->
        <div class="mobile-backdrop ${state.mobileNavOpen ? 'open' : ''}" onclick="window.yumax.toggleMobileNav(false)"></div>
        <aside class="sidebar ${state.mobileNavOpen ? 'open' : ''}">
          <div class="sidebar-brand">
            <div class="brand-logo-img">
              ${YUMAX_LOGO_SVG}
            </div>
            <div>
              <div class="brand-title">YUMAX JOYERIA</div>
              <div class="brand-subtitle">ELEGANTE Y ASPIRACIONAL</div>
            </div>
          </div>

          <ul class="nav-list">
            <li>
              <button class="nav-item-btn ${state.currentTab === 'dashboard' ? 'active' : ''}" onclick="window.yumax.setTab('dashboard')">
                <span class="nav-item-icon">📊</span> Dashboard Ejecutivo
              </button>
            </li>
            <li>
              <button class="nav-item-btn ${state.currentTab === 'investment' ? 'active' : ''}" onclick="window.yumax.setTab('investment')">
                <span class="nav-item-icon">💰</span> Inversión Inicial
              </button>
            </li>
            <li>
              <button class="nav-item-btn ${state.currentTab === 'inventory' ? 'active' : ''}" onclick="window.yumax.setTab('inventory')">
                <span class="nav-item-icon">💎</span> Inventario & Kardex
              </button>
            </li>
            <li>
              <button class="nav-item-btn ${state.currentTab === 'purchases' ? 'active' : ''}" onclick="window.yumax.setTab('purchases')">
                <span class="nav-item-icon">🛍️</span> Compras & Costeo (CPP)
              </button>
            </li>
            <li>
              <button class="nav-item-btn ${state.currentTab === 'sales' ? 'active' : ''}" onclick="window.yumax.setTab('sales')">
                <span class="nav-item-icon">🛒</span> Ventas POS & Facturación
              </button>
            </li>
            <li>
              <button class="nav-item-btn ${state.currentTab === 'credit' ? 'active' : ''}" onclick="window.yumax.setTab('credit')">
                <span class="nav-item-icon">💳</span> Cartera & Créditos
              </button>
            </li>
            <li>
              <button class="nav-item-btn ${state.currentTab === 'treasury' ? 'active' : ''}" onclick="window.yumax.setTab('treasury')">
                <span class="nav-item-icon">🏛️</span> Tesorería & Cajas
              </button>
            </li>
            <li>
              <button class="nav-item-btn ${state.currentTab === 'simulator' ? 'active' : ''}" onclick="window.yumax.setTab('simulator')">
                <span class="nav-item-icon">📱</span> App Móvil (Offline POS)
              </button>
            </li>
            <li>
              <button class="nav-item-btn ${state.currentTab === 'audit' ? 'active' : ''}" onclick="window.yumax.setTab('audit')">
                <span class="nav-item-icon">🛡️</span> Auditoría Forense
              </button>
            </li>
            <li>
              <button class="nav-item-btn ${state.currentTab === 'datamanagement' ? 'active' : ''}" onclick="window.yumax.setTab('datamanagement')">
                <span class="nav-item-icon">⚙️</span> Gestión de Datos Reales
              </button>
            </li>
          </ul>

          <div style="padding: 1rem; border-top: 1px solid var(--border-subtle); background: var(--bg-primary);">
            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
              <div style="width: 36px; height: 36px; border-radius: 50%; background: var(--bg-surface-elevated); border: 1px solid var(--border-prominent); display: flex; align-items: center; justify-content: center; color: var(--gold-light); font-weight: 700; font-family: var(--font-serif);">
                Y
              </div>
              <div style="flex: 1; min-width: 0;">
                <div style="font-size: 0.85rem; font-weight: 600; color: var(--text-primary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                  ${state.activeUser.name}
                </div>
                <div style="font-size: 0.7rem; color: var(--gold-light); font-weight: 700;">
                  ${state.activeUser.role}
                </div>
              </div>
            </div>
            <select class="form-input" style="font-size: 0.75rem; padding: 0.35rem 0.5rem;" onchange="window.yumax.switchRole(this.value)">
              <option value="ADMINISTRATOR" ${state.activeUser.role === 'ADMINISTRATOR' ? 'selected' : ''}>Rol: Administrador General</option>
              <option value="SELLER" ${state.activeUser.role === 'SELLER' ? 'selected' : ''}>Rol: Asesor / Vendedor</option>
              <option value="INVENTORY" ${state.activeUser.role === 'INVENTORY' ? 'selected' : ''}>Rol: Joyero / Bodega</option>
              <option value="FINANCIAL" ${state.activeUser.role === 'FINANCIAL' ? 'selected' : ''}>Rol: Financiero / Auditor</option>
            </select>
          </div>
        </aside>

        <!-- CONTENIDO PRINCIPAL -->
        <div class="main-content">
          <header class="top-header">
            <div class="header-title-group" style="display: flex; align-items: center; gap: 0.75rem;">
              <button class="mobile-only mobile-menu-btn" aria-label="Abrir menú" onclick="window.yumax.toggleMobileNav(true)">☰</button>
              <div class="header-logo" style="width: 32px; height: 32px;">
                ${YUMAX_LOGO_SVG}
              </div>
              <div>
                <h2 style="font-size: 1.2rem; color: var(--text-primary); margin: 0; font-family: var(--font-serif); letter-spacing: 0.04em;">
                  ${getHeaderTitle().title}
                </h2>
                <div class="header-subtitle" style="font-size: 0.75rem; color: var(--text-secondary); margin: 0;">
                  ${getHeaderTitle().subtitle}
                </div>
              </div>
            </div>

            <div class="header-actions" style="display: flex; align-items: center; gap: 0.75rem;">
              <button class="btn-secondary" style="font-size: 0.75rem; padding: 0.4rem 0.75rem;" onclick="window.yumax.openDataManagementModal()">
                ⚙️ Gestión de Datos & Copias
              </button>
              <div style="display: flex; align-items: center; gap: 0.5rem; background: var(--bg-surface); padding: 0.4rem 0.85rem; border-radius: 20px; border: 1px solid var(--border-subtle); font-size: 0.75rem;">
                <div style="width: 8px; height: 8px; border-radius: 50%; background: ${isClean ? 'var(--info-primary)' : 'var(--emerald-light)'};"></div>
                <span style="color: var(--text-secondary);">${isClean ? 'Base de Datos Limpia' : 'Yumax LocalStorage Activo'}</span>
              </div>
              <div style="background: rgba(216, 177, 104, 0.12); border: 1px solid rgba(216, 177, 104, 0.35); padding: 0.4rem 0.75rem; border-radius: 8px; font-size: 0.75rem; font-weight: 700; color: var(--gold-light);">
                COP ($)
              </div>
            </div>
          </header>

          <main class="page-body fade-in">
            ${renderTabContent()}
          </main>
        </div>
      </div>

      <!-- BARRA DE NAVEGACIÓN INFERIOR (SOLO CELULAR) -->
      <nav class="bottom-nav mobile-only">
        ${[
          ['dashboard', '📊', 'Inicio'],
          ['sales', '🛒', 'Ventas'],
          ['inventory', '💎', 'Inventario'],
          ['investment', '💰', 'Inversión'],
        ].map(t => `
          <button class="bottom-nav-btn ${state.currentTab === t[0] ? 'active' : ''}" onclick="window.yumax.setTab('${t[0]}')">
            <span class="bottom-nav-icon">${t[1]}</span><span>${t[2]}</span>
          </button>
        `).join('')}
        <button class="bottom-nav-btn ${state.mobileNavOpen ? 'active' : ''}" onclick="window.yumax.toggleMobileNav(true)">
          <span class="bottom-nav-icon">☰</span><span>Más</span>
        </button>
      </nav>

      <!-- MODALES -->
      ${renderModals()}
    `;
  }

  function getHeaderTitle() {
    switch (state.currentTab) {
      case 'dashboard':
        return { title: 'Dashboard Ejecutivo Yumax', subtitle: 'Resumen de ventas y stock por periodo, liquidez e inversión' };
      case 'investment':
        return { title: 'Inversión Inicial del Negocio', subtitle: 'Aportes de capital propio, tarjetas de crédito, créditos y otras fuentes de financiación' };
      case 'inventory':
        return { title: 'Gestión de Inventario & Kardex Joyería', subtitle: 'Catálogo de piezas de alta gama, SKU, Barcode, QR, metales, gemas y trazabilidad' };
      case 'purchases':
        return { title: 'Compras & Costeo Ponderado (CPP)', subtitle: 'Entradas de orfebrería e insumos con recálculo de costo promedio' };
      case 'sales':
        return { title: 'Ventas POS & Facturación', subtitle: 'Punto de venta mostrador, clientes y comprobantes de joyería' };
      case 'credit':
        return { title: 'Cartera & Cuentas por Cobrar', subtitle: 'Ventas a crédito, separados, abonos y control de cartera' };
      case 'treasury':
        return { title: 'Tesorería & Cuentas Financieras', subtitle: 'Caja efectivo, Bancolombia, Nequi, Daviplata y egresos' };
      case 'simulator':
        return { title: 'Terminal Móvil POS Yumax (Offline-First)', subtitle: 'App móvil para escaneo de joyas con cámara y sincronización Outbox' };
      case 'audit':
        return { title: 'Auditoría & Trazabilidad Forense', subtitle: 'Registro criptográfico inmutable de todas las mutaciones del sistema' };
      case 'datamanagement':
        return { title: 'Gestión de Datos Reales & Copias de Seguridad', subtitle: 'Limpieza de ejemplos, configuración de saldos iniciales y respaldos JSON' };
      default:
        return { title: 'Yumax Joyería', subtitle: 'Elegante y Aspiracional' };
    }
  }

  function renderTabContent() {
    switch (state.currentTab) {
      case 'dashboard':
        return renderDashboardTab();
      case 'investment':
        return renderInvestmentTab();
      case 'inventory':
        return renderInventoryTab();
      case 'purchases':
        return renderPurchasesTab();
      case 'sales':
        return renderSalesTab();
      case 'credit':
        return renderCreditTab();
      case 'treasury':
        return renderTreasuryTab();
      case 'simulator':
        return renderMobileSimulatorTab();
      case 'audit':
        return renderAuditTab();
      case 'datamanagement':
        return renderDataManagementTab();
      default:
        return renderInventoryTab();
    }
  }

  // TAB: INVENTARIO & KARDEX
  function renderInventoryTab() {
    const valuation = calculateTotalInventoryValuation();

    const filtered = state.products.filter(p => {
      const matchSearch =
        (p.name || '').toLowerCase().includes(state.inventorySearch.toLowerCase()) ||
        (p.sku || '').toLowerCase().includes(state.inventorySearch.toLowerCase()) ||
        (p.material || '').toLowerCase().includes(state.inventorySearch.toLowerCase()) ||
        (p.stone_type || '').toLowerCase().includes(state.inventorySearch.toLowerCase());
      const matchCat = state.inventoryCategory === 'ALL' || p.category === state.inventoryCategory;
      const matchLoc = state.inventoryLocation === 'ALL' || (p.location || '').includes(state.inventoryLocation);
      const matchStock = state.inventoryStockFilter === 'ALL' || (state.inventoryStockFilter === 'LOW_STOCK' && p.stock <= p.min_stock_alert);
      return matchSearch && matchCat && matchLoc && matchStock;
    });

    const isClean = state.products.length === 0;

    return `
      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <!-- Tarjetas de Valorización de Inventario al Costo (CPP) -->
        <div class="metrics-grid">
          <div class="metric-card">
            <div class="metric-label">Valorización Inventario al Costo (CPP)</div>
            <div class="metric-value" style="color: var(--gold-light);">${formatCOP(valuation.costValuation)}</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.4rem;">
              Costo Promedio Ponderado de ${valuation.totalStock} piezas en stock
            </div>
          </div>

          <div class="metric-card">
            <div class="metric-label">Valor Potencial de Venta en Vitrina</div>
            <div class="metric-value" style="color: var(--emerald-light);">${formatCOP(valuation.saleValuation)}</div>
            <div class="metric-trend">
              Margen bruto potencial: ${formatCOP(valuation.potentialProfit)}
            </div>
          </div>

          <div class="metric-card">
            <div class="metric-label">Total Joyas Registradas</div>
            <div class="metric-value">${state.products.length} <span style="font-size: 0.85rem; color: var(--text-secondary); font-weight: normal;">SKUs</span></div>
            <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.4rem;">
              ${state.products.filter(p => p.stock <= p.min_stock_alert).length} piezas con alerta de stock mínimo
            </div>
          </div>

          <div class="metric-card">
            <div class="metric-label">Disponibilidad en Caja & Bancos</div>
            <div class="metric-value" style="color: var(--gold-primary);">${formatCOP(calculateTotalCash())}</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.4rem;">
              En ${state.accounts.length} cuentas financieras activas
            </div>
          </div>
        </div>

        ${isClean ? `
          <div style="background: rgba(216, 177, 104, 0.08); border: 1px dashed var(--gold-primary); padding: 1.75rem; border-radius: 14px; text-align: center;">
            <div style="width: 48px; height: 48px; margin: 0 auto 0.75rem;">
              ${YUMAX_LOGO_SVG}
            </div>
            <h3 style="color: var(--gold-light); margin-bottom: 0.5rem; font-family: var(--font-serif);">Base de Datos Lista para Comenzar tu Inventario Real</h3>
            <p style="color: var(--text-secondary); font-size: 0.9rem; max-width: 600px; margin: 0 auto 1.25rem;">
              Has dejado la base de datos en blanco. Registra tus primeras piezas reales con su gramaje, pureza, costo y precio comercial.
            </p>
            <button class="btn-gold" onclick="window.yumax.openNewProductModal()">
              + Registrar Primera Joya Real
            </button>
          </div>
        ` : ''}

        <!-- Barra de Herramientas y Filtros de Joyería -->
        <div class="card" style="padding: 1.25rem;">
          <div style="display: flex; flex-wrap: wrap; gap: 1rem; align-items: center; justify-content: space-between;">
            <div style="display: flex; flex-wrap: wrap; gap: 0.75rem; flex: 1; min-width: 280px;">
              <input 
                type="text" 
                class="form-input" 
                placeholder="🔍 Buscar por SKU, Joya, Metal, Esmeralda, Diamante..." 
                style="max-width: 340px;"
                value="${state.inventorySearch}"
                oninput="window.yumax.setSearch(this.value)"
              />
              
              <select class="form-input" style="width: auto;" onchange="window.yumax.setCategoryFilter(this.value)">
                <option value="ALL" ${state.inventoryCategory === 'ALL' ? 'selected' : ''}>Todas las Categorías</option>
                <option value="Anillos" ${state.inventoryCategory === 'Anillos' ? 'selected' : ''}>Anillos & Compromiso</option>
                <option value="Cadenas" ${state.inventoryCategory === 'Cadenas' ? 'selected' : ''}>Cadenas & Tejidos</option>
                <option value="Pulseras" ${state.inventoryCategory === 'Pulseras' ? 'selected' : ''}>Pulseras & Manillas</option>
                <option value="Aretes" ${state.inventoryCategory === 'Aretes' ? 'selected' : ''}>Aretes & Topos</option>
                <option value="Dijes" ${state.inventoryCategory === 'Dijes' ? 'selected' : ''}>Dijes & Cruces</option>
                <option value="Relojes" ${state.inventoryCategory === 'Relojes' ? 'selected' : ''}>Relojes</option>
                <option value="Piedras Preciosas" ${state.inventoryCategory === 'Piedras Preciosas' ? 'selected' : ''}>Gemas & Esmeraldas</option>
              </select>

              <select class="form-input" style="width: auto;" onchange="window.yumax.setLocationFilter(this.value)">
                <option value="ALL" ${state.inventoryLocation === 'ALL' ? 'selected' : ''}>Todas las Ubicaciones</option>
                <option value="Vitrina 1" ${state.inventoryLocation === 'Vitrina 1' ? 'selected' : ''}>Vitrina 1 - Alta Joyería</option>
                <option value="Vitrina 2" ${state.inventoryLocation === 'Vitrina 2' ? 'selected' : ''}>Vitrina 2 - Plata / Relojes</option>
                <option value="Vitrina 3" ${state.inventoryLocation === 'Vitrina 3' ? 'selected' : ''}>Vitrina 3 - Dijes / Medallas</option>
                <option value="Caja Fuerte" ${state.inventoryLocation === 'Caja Fuerte' ? 'selected' : ''}>Caja Fuerte / Bóveda</option>
                <option value="Taller" ${state.inventoryLocation === 'Taller' ? 'selected' : ''}>Taller de Orfebrería</option>
              </select>
            </div>

            <div style="display: flex; gap: 0.75rem;">
              <button class="btn-secondary" onclick="window.yumax.openAdjustmentModal()">
                ⚖️ Ajuste de Stock
              </button>
              <button class="btn-gold" onclick="window.yumax.openNewProductModal()">
                + Nueva Joya (SKU / QR)
              </button>
            </div>
          </div>
        </div>

        <!-- Tabla de Inventario de Joyería -->
        <div class="card" style="padding: 0; overflow: hidden;">
          <div style="overflow-x: auto;">
            <table class="data-table">
              <thead>
                <tr>
                  <th>SKU / Código</th>
                  <th>Joya & Descripción Técnica</th>
                  <th>Metal & Pureza</th>
                  <th>Peso (g)</th>
                  <th>Gema / Talla</th>
                  <th>Costo Prom. (CPP)</th>
                  <th>Precio Venta</th>
                  <th>Stock</th>
                  <th>Ubicación</th>
                  <th style="text-align: right;">Acciones</th>
                </tr>
              </thead>
              <tbody>
                ${filtered.length === 0 ? `
                  <tr>
                    <td colspan="10" style="text-align: center; padding: 2.5rem; color: var(--text-muted);">
                      ${isClean ? 'No hay joyas registradas aún. Comienza registrando tu primera joya con el botón superior.' : 'No se encontraron joyas con los filtros seleccionados.'}
                    </td>
                  </tr>
                ` : filtered.map(p => `
                  <tr>
                    <td>
                      <div style="font-weight: 700; color: var(--gold-light); font-family: monospace; font-size: 0.85rem;">
                        ${p.sku}
                      </div>
                      <div style="font-size: 0.7rem; color: var(--text-muted); display: flex; align-items: center; gap: 0.3rem;">
                        <span>📷 ${p.qr_code}</span>
                      </div>
                    </td>
                    <td>
                      <div style="font-weight: 600; color: var(--text-primary);">${p.name}</div>
                      <div style="font-size: 0.75rem; color: var(--text-secondary); max-width: 260px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                        ${p.description}
                      </div>
                    </td>
                    <td>
                      <span class="badge ${p.material.includes('Oro') ? 'badge-gold' : 'badge-emerald'}">
                        ${p.material} ${p.metal_purity}
                      </span>
                    </td>
                    <td style="font-weight: 600; font-family: monospace;">
                      ${Number(p.weight_grams).toFixed(4)} g
                    </td>
                    <td>
                      <div style="font-size: 0.8rem; color: var(--text-primary);">${p.stone_type}</div>
                      <div style="font-size: 0.7rem; color: var(--text-muted);">Talla: ${p.size}</div>
                    </td>
                    <td style="font-family: monospace; color: var(--text-secondary);">
                      ${formatCOP(p.average_cost)}
                    </td>
                    <td style="font-weight: 700; color: var(--emerald-light); font-family: monospace;">
                      ${formatCOP(p.sale_price)}
                    </td>
                    <td>
                      <div style="display: flex; align-items: center; gap: 0.4rem;">
                        <span style="font-weight: 700; font-size: 0.95rem; color: ${p.stock <= p.min_stock_alert ? 'var(--danger-primary)' : 'var(--text-primary)'};">
                          ${p.stock}
                        </span>
                        ${p.stock <= p.min_stock_alert ? '<span style="font-size: 0.7rem; color: var(--warning-primary); font-weight: 700;">(Bajo)</span>' : ''}
                      </div>
                    </td>
                    <td>
                      <span style="font-size: 0.8rem; color: var(--text-secondary); background: var(--bg-surface-elevated); padding: 0.2rem 0.5rem; border-radius: 4px; border: 1px solid var(--border-subtle);">
                        📍 ${p.location}
                      </span>
                    </td>
                    <td style="text-align: right;">
                      <div style="display: flex; gap: 0.4rem; justify-content: flex-end;">
                        <button class="btn-secondary" style="padding: 0.3rem 0.6rem; font-size: 0.75rem;" title="Ver Kardex" onclick="window.yumax.openKardex('${p.id}')">
                          📜 Kardex
                        </button>
                        <button class="btn-secondary" style="padding: 0.3rem 0.6rem; font-size: 0.75rem;" title="Ajustar Stock" onclick="window.yumax.openQuickAdjustment('${p.id}')">
                          ⚖️
                        </button>
                        <button class="btn-secondary" style="padding: 0.3rem 0.6rem; font-size: 0.75rem; color: var(--danger-primary);" title="Eliminar Joya" onclick="window.yumax.deleteProduct('${p.id}')">
                          🗑️
                        </button>
                      </div>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }

  // TAB: GESTIÓN DE DATOS REALES & RESPALDOS
  function renderDataManagementTab() {
    return `
      <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 900px;">
        <div class="card" style="padding: 1.75rem;">
          <h3 style="color: var(--gold-light); margin-bottom: 0.5rem; font-size: 1.25rem; font-family: var(--font-serif);">
            🧹 Limpieza de Datos de Ejemplo & Arranque Real
          </h3>
          <p style="color: var(--text-secondary); font-size: 0.9rem; line-height: 1.6; margin-bottom: 1.25rem;">
            Esta acción te permite eliminar de forma segura todos los registros de demostración para que tu sistema Yumax Joyería quede en <strong>cero absoluto</strong> listo para ingresar el inventario y dinero real de tu negocio.
          </p>

          <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); padding: 1rem 1.25rem; border-radius: 8px; margin-bottom: 1.25rem;">
            <div style="font-weight: 600; color: var(--danger-primary); margin-bottom: 0.25rem;">⚠️ Advertencia de Limpieza</div>
            <div style="font-size: 0.85rem; color: var(--text-secondary);">
              Al limpiar la base de datos, se vaciarán el catálogo y el historial de transacciones. Los cambios se guardarán automáticamente en tu almacenamiento local. Puedes exportar una copia de respaldo antes si deseas guardarla.
            </div>
          </div>

          <div style="display: flex; flex-wrap: wrap; gap: 1rem;">
            <button class="btn-gold" style="background: #dc2626; border-color: #ef4444; color: white;" onclick="window.yumax.clearAllDemoData()">
              🗑️ Limpiar Todo y Dejar en Cero para Datos Reales
            </button>
            <button class="btn-secondary" onclick="window.yumax.restoreDemoData()">
              🔄 Cargar Datos de Demostración
            </button>
          </div>
        </div>

        <div class="card" style="padding: 1.75rem;">
          <h3 style="color: var(--gold-light); margin-bottom: 0.5rem; font-size: 1.25rem; font-family: var(--font-serif);">
            💾 Copias de Seguridad (Backup & Restore JSON)
          </h3>
          <p style="color: var(--text-secondary); font-size: 0.9rem; line-height: 1.6; margin-bottom: 1.25rem;">
            Mantén siempre seguro el historial de tu joyería. Puedes descargar una copia de seguridad en formato JSON con un clic o restaurar un respaldo previo en cualquier momento sin requerir internet.
          </p>

          <div style="display: flex; flex-wrap: wrap; gap: 1rem; align-items: center;">
            <button class="btn-gold" onclick="window.yumax.exportBackup()">
              📥 Exportar Copia de Seguridad JSON
            </button>

            <label class="btn-secondary" style="cursor: pointer; display: inline-flex; align-items: center; gap: 0.5rem; margin: 0;">
              📤 Importar / Restaurar Respaldo JSON
              <input type="file" accept=".json" style="display: none;" onchange="window.yumax.importBackup(event)" />
            </label>
          </div>
        </div>
      </div>
    `;
  }

  // TAB: COMPRAS & COSTEO PONDERADO (CPP)
  function renderPurchasesTab() {
    const totalPurchased = (state.purchases || []).reduce((acc, p) => acc + (p.total || 0), 0);
    const totalLots = (state.purchases || []).length;
    const totalSuppliers = (state.suppliers || []).length;

    return `
      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <div class="metrics-grid">
          <div class="metric-card">
            <div class="metric-label">Inversión Total en Compras</div>
            <div class="metric-value" style="color: var(--gold-light);">${formatCOP(totalPurchased)}</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.4rem;">
              En ${totalLots} lotes de reabastecimiento
            </div>
          </div>
          <div class="metric-card">
            <div class="metric-label">Lotes de Compra Registrados</div>
            <div class="metric-value" style="color: var(--emerald-light);">${totalLots}</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.4rem;">
              Compras consolidadas multi-ítem
            </div>
          </div>
          <div class="metric-card">
            <div class="metric-label">Proveedores & Orfebres</div>
            <div class="metric-value" style="color: var(--gold-primary);">${totalSuppliers}</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.4rem;">
              Talleres y fundiciones en directorio
            </div>
          </div>
        </div>

        <div class="card" style="padding: 1.25rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
            <div>
              <h3 style="color: var(--gold-light); margin: 0 0 0.25rem 0; font-family: var(--font-serif);">Registro de Compras a Proveedores (Multi-Ítem)</h3>
              <p style="color: var(--text-secondary); font-size: 0.85rem; margin: 0;">
                Permite registrar <strong>varias joyas e insumos a la vez</strong> de un mismo proveedor, recalculando el Costo Promedio Ponderado (CPP) y actualizando el Kardex.
              </p>
            </div>
            <button class="btn-gold" onclick="window.yumax.openNewPurchaseModal()">
              + Registrar Nueva Compra (Varios Elementos)
            </button>
          </div>
        </div>

        <!-- TABLA DE LOTES CONSOLIDADOS DE COMPRA -->
        <div class="card" style="padding: 0; overflow: hidden;">
          <div style="padding: 1rem 1.25rem; border-bottom: 1px solid var(--border-subtle); display: flex; justify-content: space-between; align-items: center;">
            <div style="font-weight: 700; color: var(--gold-light); font-size: 0.95rem;">
              🛍️ Historial de Compras por Proveedor (Lotes Consolidados)
            </div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">
              ${(state.purchases || []).length} compras registradas
            </div>
          </div>
          <table class="data-table">
            <thead>
              <tr>
                <th>No. Compra</th>
                <th>Proveedor / Orfebre</th>
                <th>Fecha</th>
                <th>Joyas en Lote</th>
                <th>Cuenta de Pago</th>
                <th>Gran Total COP</th>
                <th>Registrado Por</th>
                <th style="text-align: right;">Acciones</th>
              </tr>
            </thead>
            <tbody>
              ${(!state.purchases || state.purchases.length === 0) ? `
                <tr><td colspan="8" style="text-align: center; padding: 2.5rem; color: var(--text-muted);">No hay compras registradas aún. Haz clic en "+ Registrar Nueva Compra" para ingresar tu primer lote.</td></tr>
              ` : state.purchases.map(p => {
                const totalUnits = (p.items || []).reduce((sum, it) => sum + (it.quantity || 1), 0);
                const itemsCount = (p.items || []).length;
                const itemsPreview = (p.items || []).map(it => `${it.sku || it.name} (x${it.quantity})`).join(', ');

                return `
                  <tr>
                    <td style="font-family: monospace; font-weight: 700; color: var(--gold-light);">
                      ${p.purchase_number || p.id}
                    </td>
                    <td>
                      <div style="font-weight: 600; color: var(--text-primary);">${p.supplier}</div>
                      ${p.notes ? `<div style="font-size: 0.75rem; color: var(--text-muted);">${p.notes}</div>` : ''}
                    </td>
                    <td style="font-size: 0.8rem; color: var(--text-secondary);">${p.date}</td>
                    <td>
                      <div style="font-size: 0.85rem; font-weight: 600; color: var(--emerald-light);">
                        💎 ${totalUnits} piezas (${itemsCount} ${itemsCount === 1 ? 'joya' : 'joyas'})
                      </div>
                      <div style="font-size: 0.72rem; color: var(--text-muted); max-width: 200px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${itemsPreview}">
                        ${itemsPreview || 'Mercancía en lote'}
                      </div>
                    </td>
                    <td style="font-size: 0.85rem; color: var(--text-secondary);">
                      ${p.account_name || 'Caja / Banco'}
                    </td>
                    <td style="font-weight: 700; color: var(--gold-light); font-family: monospace;">
                      ${formatCOP(p.total)}
                    </td>
                    <td style="font-size: 0.8rem; color: var(--text-secondary);">
                      ${p.user}
                    </td>
                    <td style="text-align: right;">
                      <button class="btn-secondary" style="padding: 0.35rem 0.7rem; font-size: 0.75rem;" onclick="window.yumax.openPurchaseDetail('${p.id || p.purchase_number}')">
                        👁️ Ver Lote
                      </button>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>

        <!-- TABLA DE KARDEX DE ENTRADAS DETALLADO -->
        <div class="card" style="padding: 0; overflow: hidden;">
          <div style="padding: 1rem 1.25rem; border-bottom: 1px solid var(--border-subtle); display: flex; justify-content: space-between; align-items: center;">
            <div style="font-weight: 700; color: var(--text-primary); font-size: 0.95rem;">
              📜 Entradas Individuales a Kardex & Trazabilidad de CPP
            </div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">
              Auditoría inmutable de cada joya ingresada
            </div>
          </div>
          <table class="data-table">
            <thead>
              <tr>
                <th>ID / Fecha</th>
                <th>Joya / SKU</th>
                <th>Tipo de Entrada</th>
                <th>Cantidad</th>
                <th>Costo Unitario</th>
                <th>Total Compra</th>
                <th>Stock Resultante</th>
                <th>Registrado Por</th>
                <th>Detalles / Proveedor</th>
              </tr>
            </thead>
            <tbody>
              ${state.movements.filter(m => m.type === 'PURCHASE' || m.type === 'ENTRY').length === 0 ? `
                <tr><td colspan="9" style="text-align: center; padding: 2.5rem; color: var(--text-muted);">No hay compras registradas en Kardex aún.</td></tr>
              ` : state.movements.filter(m => m.type === 'PURCHASE' || m.type === 'ENTRY').map(m => `
                <tr>
                  <td>
                    <div style="font-weight: 600; color: var(--text-primary); font-family: monospace;">${m.id}</div>
                    <div style="font-size: 0.75rem; color: var(--text-muted);">${m.date}</div>
                  </td>
                  <td>
                    <span class="badge badge-gold">${m.product_sku}</span>
                  </td>
                  <td>
                    <span style="font-size: 0.8rem; font-weight: 600; color: var(--emerald-light);">
                      ${m.type_label || 'Compra'}
                    </span>
                  </td>
                  <td style="font-weight: 700; font-family: monospace; color: var(--emerald-light);">
                    +${m.quantity}
                  </td>
                  <td style="font-family: monospace;">
                    ${formatCOP(m.unit_cost)}
                  </td>
                  <td style="font-weight: 700; color: var(--gold-light); font-family: monospace;">
                    ${formatCOP(m.total_cost || (m.unit_cost * m.quantity))}
                  </td>
                  <td style="font-weight: 700; font-family: monospace;">
                    ${m.stock_after} un
                  </td>
                  <td style="font-size: 0.8rem; color: var(--text-secondary);">
                    ${m.user}
                  </td>
                  <td style="font-size: 0.8rem; color: var(--text-secondary);">
                    ${m.notes}
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  // TAB: VENTAS & POS
  function renderSalesTab() {
    return `
      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <div class="metrics-grid">
          <div class="metric-card">
            <div class="metric-label">Total Ventas Registradas</div>
            <div class="metric-value" style="color: var(--emerald-light);">${formatCOP(calculateTotalSales())}</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.4rem;">
              ${state.sales.length} transacciones POS
            </div>
          </div>
          <div class="metric-card">
            <div class="metric-label">Cuentas por Cobrar (Cartera)</div>
            <div class="metric-value" style="color: var(--warning-primary);">${formatCOP(calculateTotalReceivables())}</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.4rem;">
              ${state.credits.filter(c => c.status === 'ACTIVE' || c.status === 'OVERDUE').length} créditos vigentes
            </div>
          </div>
          <div class="metric-card">
            <div class="metric-label">Total Gastos / Egresos</div>
            <div class="metric-value" style="color: var(--danger-primary);">${formatCOP(calculateTotalExpenses())}</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.4rem;">
              ${state.expenses.length} egresos operacionales
            </div>
          </div>
        </div>

        <div class="card" style="padding: 1.25rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
            <div>
              <h3 style="color: var(--gold-light); margin: 0 0 0.25rem 0; font-family: var(--font-serif);">Terminal de Ventas POS Yumax Joyería (Multi-Ítem)</h3>
              <p style="color: var(--text-secondary); font-size: 0.85rem; margin: 0;">
                Permite registrar <strong>varias joyas a la vez para un mismo cliente</strong>, generar comprobante térmico y descontar stock automáticamente.
              </p>
            </div>
            <button class="btn-gold" onclick="window.yumax.openNewSaleModal()">
              + Nueva Venta POS (Varios Elementos)
            </button>
          </div>
        </div>

        <div class="card" style="padding: 0; overflow: hidden;">
          <table class="data-table">
            <thead>
              <tr>
                <th>Comprobante</th>
                <th>Cliente</th>
                <th>Fecha / Hora</th>
                <th>Método de Pago</th>
                <th>Joyas / Piezas</th>
                <th>Total Venta</th>
                <th>Estado</th>
                <th style="text-align: right;">Acciones</th>
              </tr>
            </thead>
            <tbody>
              ${state.sales.length === 0 ? `
                <tr><td colspan="8" style="text-align: center; padding: 2.5rem; color: var(--text-muted);">No hay ventas registradas aún. Registra tu primera venta con el botón superior.</td></tr>
              ` : state.sales.map(s => {
                const totalUnits = (s.items || []).reduce((sum, it) => sum + (it.quantity || 1), 0);
                const itemsCount = (s.items && s.items.length > 0) ? s.items.length : 1;
                const itemsSummary = (s.items && s.items.length > 0)
                  ? s.items.map(it => `${it.sku || it.name} (x${it.quantity})`).join(', ')
                  : 'Venta directa mostrador';

                return `
                  <tr>
                    <td style="font-family: monospace; font-weight: 700; color: var(--gold-light);">
                      ${s.invoice}
                    </td>
                    <td>
                      <div style="font-weight: 600; color: var(--text-primary);">${s.customer}</div>
                      <div style="font-size: 0.75rem; color: var(--text-muted);">${s.phone || 'Sin teléfono'}</div>
                    </td>
                    <td style="font-size: 0.8rem; color: var(--text-secondary);">${s.date}</td>
                    <td>
                      <span class="badge ${s.method === 'CASH' ? 'badge-gold' : s.method === 'CREDIT' ? 'badge-warning' : 'badge-emerald'}">
                        ${s.method === 'CASH' ? '💵 Efectivo' : s.method === 'CREDIT' ? '💳 Crédito / Separado' : s.method === 'NEQUI' ? '📱 Nequi' : s.method === 'DAVIPLATA' ? '📱 Daviplata' : '🏦 Transferencia'}
                      </span>
                    </td>
                    <td>
                      <div style="font-size: 0.85rem; font-weight: 600; color: var(--gold-light);">
                        💎 ${totalUnits || 1} ${totalUnits === 1 ? 'pieza' : 'piezas'} (${itemsCount} ${itemsCount === 1 ? 'joya' : 'joyas'})
                      </div>
                      <div style="font-size: 0.72rem; color: var(--text-muted); max-width: 220px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${itemsSummary}">
                        ${itemsSummary}
                      </div>
                    </td>
                    <td style="font-weight: 700; color: var(--emerald-light); font-family: monospace;">
                      ${formatCOP(s.total)}
                    </td>
                    <td>
                      <span class="badge ${s.status === 'PAID' ? 'badge-emerald' : 'badge-warning'}">
                        ${s.status === 'PAID' ? 'PAGADO' : 'EN CARTERA'}
                      </span>
                    </td>
                    <td style="text-align: right;">
                      <button class="btn-secondary" style="padding: 0.35rem 0.7rem; font-size: 0.75rem;" onclick="window.yumax.openSaleReceipt('${s.id || s.invoice}')">
                        🖨️ Recibo / Detalle
                      </button>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  // TAB: CARTERA & CRÉDITOS
  function renderCreditTab() {
    return `
      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <div class="metrics-grid">
          <div class="metric-card">
            <div class="metric-label">Total Saldo en Cartera</div>
            <div class="metric-value" style="color: var(--warning-primary);">${formatCOP(calculateTotalReceivables())}</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.4rem;">
              Saldo pendiente por recaudar de clientes
            </div>
          </div>
        </div>

        <div class="card" style="padding: 0; overflow: hidden;">
          <table class="data-table">
            <thead>
              <tr>
                <th>Crédito / Factura</th>
                <th>Cliente & Teléfono</th>
                <th>Monto Total</th>
                <th>Abonado</th>
                <th>Saldo Pendiente</th>
                <th>Vencimiento</th>
                <th>Estado</th>
                <th style="text-align: right;">Acciones</th>
              </tr>
            </thead>
            <tbody>
              ${state.credits.length === 0 ? `
                <tr><td colspan="8" style="text-align: center; padding: 2.5rem; color: var(--text-muted);">No hay créditos o cuentas por cobrar pendientes.</td></tr>
              ` : state.credits.map(c => `
                <tr>
                  <td>
                    <div style="font-weight: 700; color: var(--gold-light); font-family: monospace;">${c.id}</div>
                    <div style="font-size: 0.75rem; color: var(--text-muted);">${c.invoice}</div>
                  </td>
                  <td>
                    <div style="font-weight: 600; color: var(--text-primary);">${c.customer}</div>
                    <div style="font-size: 0.75rem; color: var(--text-secondary);">📞 ${c.phone}</div>
                  </td>
                  <td style="font-family: monospace;">${formatCOP(c.total)}</td>
                  <td style="font-family: monospace; color: var(--emerald-light);">${formatCOP(c.paid)}</td>
                  <td style="font-family: monospace; font-weight: 700; color: var(--warning-primary);">${formatCOP(c.balance)}</td>
                  <td style="font-size: 0.8rem; color: var(--text-secondary);">${c.dueDate}</td>
                  <td>
                    <span class="badge ${c.status === 'PAID' ? 'badge-emerald' : c.status === 'OVERDUE' ? 'badge-danger' : 'badge-warning'}">
                      ${c.status === 'PAID' ? 'LIQUIDADO' : c.status === 'OVERDUE' ? 'VENCIDO' : 'ACTIVO'}
                    </span>
                  </td>
                  <td style="text-align: right;">
                    ${c.balance > 0 ? `
                      <button class="btn-gold" style="padding: 0.35rem 0.75rem; font-size: 0.75rem;" onclick="window.yumax.registerAbono('${c.id}')">
                        💰 Registrar Abono
                      </button>
                    ` : '<span style="color: var(--emerald-light); font-size: 0.8rem;">✓ Pagado</span>'}
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  // TAB: TESORERÍA & CAJAS
  function renderTreasuryTab() {
    return `
      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <div class="card" style="padding: 1.25rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
            <div>
              <h3 style="color: var(--gold-light); margin: 0 0 0.25rem 0; font-family: var(--font-serif);">Cuentas Financieras & Cajas Yumax</h3>
              <p style="color: var(--text-secondary); font-size: 0.85rem; margin: 0;">
                Control de disponibilidad de efectivo, cuentas bancarias, Nequi y egresos operacionales.
              </p>
            </div>
            <div style="display: flex; gap: 0.75rem;">
              <button class="btn-secondary" onclick="window.yumax.openNewExpenseModal()">
                💸 Registrar Gasto / Egreso
              </button>
              <button class="btn-gold" onclick="window.yumax.editAccountBalances()">
                ✏️ Ajustar Saldos Iniciales
              </button>
            </div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 1rem;">
          ${state.accounts.map(a => `
            <div class="metric-card" style="position: relative;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <div style="font-size: 1.5rem;">${a.icon || '🏦'}</div>
                <button class="btn-secondary" style="padding: 0.2rem 0.5rem; font-size: 0.7rem;" onclick="window.yumax.editSingleAccount('${a.id}')">Editar</button>
              </div>
              <div class="metric-label">${a.name}</div>
              <div class="metric-value" style="font-size: 1.35rem; color: var(--gold-light);">${formatCOP(a.balance)}</div>
            </div>
          `).join('')}
        </div>

        <!-- Historial de Egresos -->
        <div class="card" style="padding: 0; overflow: hidden;">
          <div style="padding: 1rem 1.25rem; border-bottom: 1px solid var(--border-subtle); font-weight: 600; color: var(--gold-light); font-family: var(--font-serif);">
            Historial de Gastos & Egresos Recientes
          </div>
          <table class="data-table">
            <thead>
              <tr>
                <th>ID / Fecha</th>
                <th>Concepto del Gasto</th>
                <th>Cuenta de Origen</th>
                <th>Monto</th>
                <th>Usuario</th>
              </tr>
            </thead>
            <tbody>
              ${state.expenses.length === 0 ? `
                <tr><td colspan="5" style="text-align: center; padding: 2rem; color: var(--text-muted);">No hay egresos registrados aún.</td></tr>
              ` : state.expenses.map(e => `
                <tr>
                  <td>
                    <div style="font-weight: 600; color: var(--text-primary); font-family: monospace;">${e.id}</div>
                    <div style="font-size: 0.75rem; color: var(--text-muted);">${e.date}</div>
                  </td>
                  <td style="font-weight: 600; color: var(--text-primary);">${e.concept}</td>
                  <td><span class="badge badge-gold">${e.account_name}</span></td>
                  <td style="font-weight: 700; color: var(--danger-primary); font-family: monospace;">-${formatCOP(e.amount)}</td>
                  <td style="font-size: 0.8rem; color: var(--text-secondary);">${e.user}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  // TAB: SIMULADOR APP MÓVIL
  function renderMobileSimulatorTab() {
    return `
      <div style="display: flex; gap: 2rem; align-items: flex-start; justify-content: center; flex-wrap: wrap;">
        <!-- Mockup Celular -->
        <div style="width: 360px; height: 680px; background: #000; border-radius: 40px; border: 4px solid #333; box-shadow: 0 20px 40px rgba(0,0,0,0.8); overflow: hidden; display: flex; flex-direction: column; position: relative;">
          <!-- Barra Superior Celular -->
          <div style="background: #111; padding: 0.75rem 1.25rem; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #222;">
            <div style="font-size: 0.75rem; color: #888; font-weight: 600;">9:41</div>
            <div style="width: 60px; height: 16px; background: #000; border-radius: 10px;"></div>
            <div style="font-size: 0.7rem; color: var(--emerald-light);">🟢 Offline OK</div>
          </div>

          <!-- Cabecera App Móvil -->
          <div style="background: #121824; padding: 1rem; border-bottom: 1px solid #222;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <div style="display: flex; align-items: center; gap: 0.5rem;">
                <div style="width: 28px; height: 28px;">
                  ${YUMAX_LOGO_SVG}
                </div>
                <div>
                  <div style="font-size: 0.75rem; color: var(--gold-light); font-weight: 700; font-family: var(--font-serif);">YUMAX JOYERÍA</div>
                  <div style="font-size: 0.65rem; color: var(--text-slogan); letter-spacing: 0.1em;">ELEGANTE Y ASPIRACIONAL</div>
                </div>
              </div>
              <div style="background: rgba(216, 177, 104, 0.15); padding: 0.3rem 0.6rem; border-radius: 6px; font-size: 0.7rem; color: var(--gold-light); font-weight: 700;">
                SQLite POS
              </div>
            </div>
          </div>

          <!-- Cuerpo App Móvil -->
          <div style="flex: 1; padding: 1rem; overflow-y: auto; display: flex; flex-direction: column; gap: 0.75rem;">
            <div style="background: #182030; padding: 0.85rem; border-radius: 10px; border: 1px dashed var(--gold-primary); text-align: center; cursor: pointer;" onclick="window.yumax.mobileScanPrompt()">
              <div style="font-size: 1.5rem; margin-bottom: 0.25rem;">📷</div>
              <div style="font-size: 0.8rem; font-weight: 600; color: var(--gold-light);">Escanear Joya (QR / Barcode)</div>
              <div style="font-size: 0.7rem; color: #888;">Lectura instantánea de etiqueta</div>
            </div>

            <div style="font-size: 0.75rem; font-weight: 700; color: #aaa; text-transform: uppercase; margin-top: 0.5rem;">
              Joyas en Catálogo (${state.products.length})
            </div>

            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
              ${state.products.length === 0 ? `
                <div style="text-align: center; padding: 2rem; color: #666; font-size: 0.8rem;">
                  No hay joyas en el catálogo. Registra joyas en el panel web para verlas aquí.
                </div>
              ` : state.products.slice(0, 5).map(p => `
                <div style="background: #121824; padding: 0.75rem; border-radius: 8px; border: 1px solid #222; display: flex; justify-content: space-between; align-items: center;">
                  <div>
                    <div style="font-size: 0.8rem; font-weight: 600; color: #fff;">${p.name}</div>
                    <div style="font-size: 0.7rem; color: var(--gold-light);">${p.sku} • ${p.weight_grams}g • Stock: ${p.stock}</div>
                  </div>
                  <div style="text-align: right;">
                    <div style="font-size: 0.85rem; font-weight: 700; color: var(--emerald-light);">${formatCOP(p.sale_price)}</div>
                    <button class="btn-gold" style="padding: 0.2rem 0.5rem; font-size: 0.7rem; margin-top: 0.25rem;" onclick="window.yumax.mobileQuickSale('${p.id}')">Vender</button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Barra Inferior Celular -->
          <div style="background: #111; padding: 0.75rem; border-top: 1px solid #222; text-align: center;">
            <div style="width: 120px; height: 4px; background: #555; border-radius: 2px; margin: 0 auto;"></div>
          </div>
        </div>

        <!-- Panel de Explicación de la Arquitectura Móvil -->
        <div style="flex: 1; min-width: 320px; max-width: 500px;">
          <div class="card" style="padding: 1.5rem;">
            <h3 style="color: var(--gold-light); margin-bottom: 0.5rem; font-family: var(--font-serif);">Terminal Móvil Yumax Joyería</h3>
            <p style="color: var(--text-secondary); font-size: 0.9rem; line-height: 1.6; margin-bottom: 1rem;">
              La aplicación móvil está diseñada con arquitectura <strong>Offline-First</strong> para garantizar que las ventas nunca se detengan, incluso en zonas sin cobertura.
            </p>
            <ul style="color: var(--text-secondary); font-size: 0.85rem; line-height: 1.7; padding-left: 1.25rem; margin-bottom: 1rem;">
              <li><strong>Lectura de Joyas por QR:</strong> Escaneo directo de etiquetas de orfebrería con la cámara.</li>
              <li><strong>Cero Pérdida de Datos:</strong> Almacenamiento local SQLite con sincronización automática.</li>
              <li><strong>Seguridad & Auditoría:</strong> Trazabilidad completa de cada asesor y vendedor.</li>
            </ul>
          </div>
        </div>
      </div>
    `;
  }

  // TAB: AUDITORÍA
  function renderAuditTab() {
    return `
      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <div class="card" style="padding: 1.25rem;">
          <h3 style="color: var(--gold-light); margin: 0 0 0.25rem 0; font-family: var(--font-serif);">Pista de Auditoría Forense & Kardex Inmutable</h3>
          <p style="color: var(--text-secondary); font-size: 0.85rem; margin: 0;">
            Cada mutación de inventario, cambio de stock, venta o compra queda registrada con usuario y marca de tiempo.
          </p>
        </div>

        <div class="card" style="padding: 0; overflow: hidden;">
          <table class="data-table">
            <thead>
              <tr>
                <th>ID Transacción</th>
                <th>Fecha / Hora</th>
                <th>SKU Joya</th>
                <th>Tipo de Evento</th>
                <th>Variación Cantidad</th>
                <th>Stock Resultante</th>
                <th>Usuario Responsable</th>
                <th>Observaciones Técnicas</th>
              </tr>
            </thead>
            <tbody>
              ${state.movements.length === 0 ? `
                <tr><td colspan="8" style="text-align: center; padding: 2.5rem; color: var(--text-muted);">No hay registros de auditoría aún.</td></tr>
              ` : state.movements.map(m => `
                <tr>
                  <td style="font-family: monospace; font-weight: 700; color: var(--gold-light);">${m.id}</td>
                  <td style="font-size: 0.8rem; color: var(--text-secondary);">${m.date}</td>
                  <td><span class="badge badge-gold">${m.product_sku}</span></td>
                  <td>
                    <span class="badge ${m.type === 'SALE' ? 'badge-danger' : m.type === 'PURCHASE' || m.type === 'ENTRY' ? 'badge-emerald' : 'badge-warning'}">
                      ${m.type_label || m.type}
                    </span>
                  </td>
                  <td style="font-family: monospace; font-weight: 700; color: ${m.quantity > 0 ? 'var(--emerald-light)' : 'var(--danger-primary)'};">
                    ${m.quantity > 0 ? '+' : ''}${m.quantity}
                  </td>
                  <td style="font-family: monospace; font-weight: 700;">${m.stock_after}</td>
                  <td style="font-size: 0.8rem; color: var(--text-secondary);">${m.user}</td>
                  <td style="font-size: 0.8rem; color: var(--text-muted);">${m.notes}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  // TAB: DASHBOARD EJECUTIVO (con filtro de periodo)
  const PAYMENT_METHOD_LABELS = {
    CASH: '💵 Efectivo',
    BANK: '🏦 Transferencia',
    NEQUI: '📱 Nequi',
    DAVIPLATA: '📱 Daviplata',
    CARD: '💳 Datáfono / Tarjeta',
    CREDIT: '📝 Crédito / Separado',
  };

  function movementBelongsTo(m, p) {
    return m.product_id === p.id || (!m.product_id && m.product_sku === p.sku);
  }

  function calculatePeriodSummary(range) {
    // ---- VENTAS ----
    const sales = state.sales.filter(s => inRange(getSaleDateKey(s), range));
    const totalSales = sales.reduce((a, s) => a + (Number(s.total) || 0), 0);
    const byMethod = {};
    sales.forEach(s => {
      const k = s.method || 'CASH';
      if (!byMethod[k]) byMethod[k] = { count: 0, total: 0 };
      byMethod[k].count += 1;
      byMethod[k].total += Number(s.total) || 0;
    });

    const saleMovs = state.movements.filter(m => m.type === 'SALE' && inRange(extractDateKey(m.date), range));
    const piecesSold = saleMovs.reduce((a, m) => a + Math.abs(Number(m.quantity) || 0), 0);
    const costOfSales = saleMovs.reduce((a, m) => a + (Number(m.total_cost) || 0), 0);
    const grossProfit = totalSales - costOfSales;
    const grossMargin = totalSales > 0 ? (grossProfit / totalSales) * 100 : 0;
    const avgTicket = sales.length > 0 ? totalSales / sales.length : 0;

    // Top joyas vendidas
    const topMap = {};
    sales.forEach(s => {
      (s.items || []).forEach(it => {
        const key = it.product_id || it.sku;
        if (!topMap[key]) topMap[key] = { sku: it.sku, name: it.name, qty: 0, revenue: 0 };
        topMap[key].qty += Number(it.quantity) || 0;
        topMap[key].revenue += Number(it.subtotal) || 0;
      });
    });
    const topProducts = Object.values(topMap).sort((a, b) => b.revenue - a.revenue).slice(0, 5);

    // ---- GASTOS ----
    const expenses = state.expenses.filter(e => inRange(getRecordDateKey(e), range));
    const totalExpenses = expenses.reduce((a, e) => a + (Number(e.amount) || 0), 0);

    // ---- STOCK POR CATEGORÍA (inicial → movimientos → final) ----
    const catMap = {};
    let lowStockCount = 0;
    state.products.forEach(p => {
      const cat = p.category || 'Sin categoría';
      if (!catMap[cat]) catMap[cat] = { category: cat, start: 0, purchases: 0, otherIn: 0, sold: 0, otherOut: 0, end: 0, endValue: 0, saleValue: 0 };
      const row = catMap[cat];
      let afterFrom = 0;
      let afterTo = 0;
      state.movements.forEach(m => {
        if (!movementBelongsTo(m, p)) return;
        const k = extractDateKey(m.date);
        if (!k) return;
        const q = Number(m.quantity) || 0;
        if (k >= range.from) afterFrom += q;
        if (k > range.to) afterTo += q;
        if (k >= range.from && k <= range.to) {
          if (q > 0) {
            if (m.type === 'PURCHASE') row.purchases += q; else row.otherIn += q;
          } else if (q < 0) {
            if (m.type === 'SALE') row.sold += -q; else row.otherOut += -q;
          }
        }
      });
      const stockNow = Number(p.stock) || 0;
      const endStock = stockNow - afterTo;
      row.start += stockNow - afterFrom;
      row.end += endStock;
      row.endValue += endStock * (Number(p.average_cost) || 0);
      row.saleValue += endStock * (Number(p.sale_price) || 0);
      if (stockNow <= (Number(p.min_stock_alert) || 0)) lowStockCount += 1;
    });
    const stockRows = Object.values(catMap).sort((a, b) => b.endValue - a.endValue);
    const stockTotals = stockRows.reduce((t, r) => {
      ['start', 'purchases', 'otherIn', 'sold', 'otherOut', 'end', 'endValue', 'saleValue'].forEach(k => { t[k] += r[k]; });
      return t;
    }, { start: 0, purchases: 0, otherIn: 0, sold: 0, otherOut: 0, end: 0, endValue: 0, saleValue: 0 });
    const rotation = stockTotals.start + stockTotals.purchases + stockTotals.otherIn > 0
      ? (stockTotals.sold / (stockTotals.start + stockTotals.purchases + stockTotals.otherIn)) * 100
      : 0;

    // ---- SERIE DE VENTAS (por día o por mes) ----
    const start = new Date(range.from + 'T00:00:00');
    const end = new Date(range.to + 'T00:00:00');
    const spanDays = Math.round((end - start) / 86400000) + 1;
    const byMonth = spanDays > 62;
    const buckets = [];
    if (byMonth) {
      const d = new Date(start.getFullYear(), start.getMonth(), 1);
      while (d <= end) {
        buckets.push({ key: `${d.getFullYear()}-${pad2(d.getMonth() + 1)}`, label: `${MONTHS_ES[d.getMonth()]} ${String(d.getFullYear()).slice(2)}`, total: 0 });
        d.setMonth(d.getMonth() + 1);
      }
    } else {
      const d = new Date(start);
      while (d <= end) {
        buckets.push({ key: dateKey(d), label: `${d.getDate()} ${MONTHS_ES[d.getMonth()]}`, total: 0 });
        d.setDate(d.getDate() + 1);
      }
    }
    sales.forEach(s => {
      const k = getSaleDateKey(s);
      const bk = byMonth ? k.slice(0, 7) : k;
      const b = buckets.find(x => x.key === bk);
      if (b) b.total += Number(s.total) || 0;
    });

    return {
      sales, totalSales, byMethod, piecesSold, costOfSales, grossProfit, grossMargin, avgTicket, topProducts,
      totalExpenses, expensesCount: expenses.length,
      operatingProfit: grossProfit - totalExpenses,
      stockRows, stockTotals, lowStockCount, rotation,
      buckets, byMonth,
    };
  }

  // Utilidad operativa acumulada desde el inicio (para recuperación de la inversión)
  function calculateAccumulatedOperatingProfit() {
    const sales = calculateTotalSales();
    const cogs = state.movements.filter(m => m.type === 'SALE').reduce((a, m) => a + (Number(m.total_cost) || 0), 0);
    return sales - cogs - calculateTotalExpenses();
  }

  function renderSalesChart(sum) {
    const max = Math.max(...sum.buckets.map(b => b.total), 0);
    if (max === 0) {
      return `<div style="height: 180px; display: flex; align-items: center; justify-content: center; color: var(--text-muted); font-size: 0.9rem; border: 1px dashed var(--border-subtle); border-radius: 10px;">No hay ventas registradas en este periodo.</div>`;
    }
    const n = sum.buckets.length;
    const labelEvery = n <= 12 ? 1 : Math.ceil(n / 8);
    return `
      <div style="display: flex; align-items: flex-end; gap: ${n > 20 ? 2 : 6}px; height: 180px; padding-top: 1.25rem; border-bottom: 1px solid var(--border-subtle);">
        ${sum.buckets.map(b => {
          const h = b.total > 0 ? Math.max(3, (b.total / max) * 100) : 0;
          return `
            <div title="${b.label}: ${formatCOP(b.total)}" style="flex: 1; min-width: 0; height: 100%; display: flex; flex-direction: column; justify-content: flex-end; align-items: center;">
              <div style="width: 100%; max-width: 38px; height: ${h}%; background: linear-gradient(180deg, #E8C982, #9E7A32); border-radius: 4px 4px 0 0;"></div>
            </div>`;
        }).join('')}
      </div>
      <div style="display: flex; gap: ${n > 20 ? 2 : 6}px; margin-top: 0.35rem;">
        ${sum.buckets.map((b, i) => `
          <div style="flex: 1; min-width: 0; text-align: center; font-size: 0.65rem; color: var(--text-muted); white-space: nowrap; overflow: visible;">${i % labelEvery === 0 ? b.label : ''}</div>
        `).join('')}
      </div>
      <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 0.5rem;">Máximo ${sum.byMonth ? 'mensual' : 'diario'}: <strong style="color: var(--gold-light);">${formatCOP(max)}</strong> · Pasa el cursor sobre cada barra para ver el valor.</div>
    `;
  }

  function renderDashboardTab() {
    const val = calculateTotalInventoryValuation();
    const range = getDashRange();
    const sum = calculatePeriodSummary(range);
    const inv = calculateInvestmentSummary();
    const accProfit = calculateAccumulatedOperatingProfit();
    const recovery = inv.total > 0 ? Math.max(0, (accProfit / inv.total) * 100) : 0;
    const periodLabel = (DASH_PERIODS.find(p => p.id === state.dashPeriod) || DASH_PERIODS[3]).label;
    const methods = Object.keys(sum.byMethod).sort((a, b) => sum.byMethod[b].total - sum.byMethod[a].total);
    const thStyle = 'text-align: right;';

    return `
      <div style="display: flex; flex-direction: column; gap: 1.5rem;">

        <!-- SELECTOR DE PERIODO -->
        <div class="card" style="padding: 1.1rem 1.25rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
            <div>
              <div style="font-size: 0.75rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">Periodo de análisis</div>
              <div style="font-family: var(--font-serif); color: var(--gold-light); font-size: 1.1rem; margin-top: 0.15rem;">
                ${periodLabel}: ${formatDateKeyES(range.from)} — ${formatDateKeyES(range.to)}
              </div>
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 0.4rem;">
              ${DASH_PERIODS.map(p => `
                <button class="${state.dashPeriod === p.id ? 'btn-gold' : 'btn-secondary'}" style="font-size: 0.75rem; padding: 0.35rem 0.7rem;" onclick="window.yumax.setDashPeriod('${p.id}')">${p.label}</button>
              `).join('')}
            </div>
          </div>
          ${state.dashPeriod === 'CUSTOM' ? `
            <div style="display: flex; flex-wrap: wrap; gap: 0.75rem; align-items: flex-end; margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-subtle);">
              <div>
                <label style="display: block; font-size: 0.75rem; color: var(--text-secondary); margin-bottom: 0.3rem;">Desde</label>
                <input type="date" id="dash_from" class="form-input" value="${range.from}" style="padding: 0.4rem 0.6rem;" />
              </div>
              <div>
                <label style="display: block; font-size: 0.75rem; color: var(--text-secondary); margin-bottom: 0.3rem;">Hasta</label>
                <input type="date" id="dash_to" class="form-input" value="${range.to}" style="padding: 0.4rem 0.6rem;" />
              </div>
              <button class="btn-gold" style="font-size: 0.8rem; padding: 0.45rem 0.9rem;" onclick="window.yumax.applyDashRange()">Aplicar</button>
            </div>
          ` : ''}
        </div>

        <!-- KPIs DE VENTAS DEL PERIODO -->
        <div class="metrics-grid">
          <div class="metric-card">
            <div class="metric-label">Ventas del periodo</div>
            <div class="metric-value" style="color: var(--emerald-light);">${formatCOP(sum.totalSales)}</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.4rem;">${sum.sales.length} transacciones · Ticket promedio ${formatCOP(Math.round(sum.avgTicket))}</div>
          </div>
          <div class="metric-card">
            <div class="metric-label">Utilidad bruta</div>
            <div class="metric-value" style="color: ${sum.grossProfit >= 0 ? 'var(--gold-light)' : 'var(--danger-primary)'};">${formatCOP(sum.grossProfit)}</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.4rem;">Margen ${sum.grossMargin.toFixed(1)}% · Costo de ventas ${formatCOP(sum.costOfSales)}</div>
          </div>
          <div class="metric-card">
            <div class="metric-label">Piezas vendidas</div>
            <div class="metric-value">${sum.piecesSold}</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.4rem;">Rotación del periodo ${sum.rotation.toFixed(1)}% del stock disponible</div>
          </div>
          <div class="metric-card">
            <div class="metric-label">Gastos del periodo</div>
            <div class="metric-value" style="color: var(--danger-primary);">${formatCOP(sum.totalExpenses)}</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.4rem;">Utilidad operativa: <strong style="color: ${sum.operatingProfit >= 0 ? 'var(--emerald-light)' : 'var(--danger-primary)'};">${formatCOP(sum.operatingProfit)}</strong></div>
          </div>
        </div>

        <!-- GRÁFICO + MÉTODOS DE PAGO -->
        <div style="display: flex; flex-wrap: wrap; gap: 1.5rem;">
          <div class="card" style="padding: 1.5rem; flex: 2 1 480px; min-width: 0;">
            <h3 style="color: var(--gold-light); margin-bottom: 0.25rem; font-size: 1.1rem; font-family: var(--font-serif);">Ventas ${sum.byMonth ? 'por mes' : 'por día'}</h3>
            <div style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.5rem;">Incluye ventas de contado y a crédito.</div>
            ${renderSalesChart(sum)}
          </div>
          <div class="card" style="padding: 1.5rem; flex: 1 1 280px; min-width: 0;">
            <h3 style="color: var(--gold-light); margin-bottom: 1rem; font-size: 1.1rem; font-family: var(--font-serif);">Ventas por medio de pago</h3>
            ${methods.length === 0 ? `<div style="color: var(--text-muted); font-size: 0.85rem;">Sin ventas en el periodo.</div>` : `
              <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                ${methods.map(k => {
                  const r = sum.byMethod[k];
                  const pct = sum.totalSales > 0 ? (r.total / sum.totalSales) * 100 : 0;
                  return `
                    <div>
                      <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 0.3rem;">
                        <span style="color: var(--text-primary); font-weight: 600;">${PAYMENT_METHOD_LABELS[k] || k} <span style="color: var(--text-muted); font-weight: 400;">(${r.count})</span></span>
                        <span style="font-family: monospace; color: var(--emerald-light); font-weight: 700;">${formatCOP(r.total)}</span>
                      </div>
                      <div style="height: 6px; background: var(--bg-primary); border-radius: 3px; overflow: hidden;">
                        <div style="width: ${pct}%; height: 100%; background: ${k === 'CREDIT' ? 'var(--warning-primary)' : 'var(--gold-primary)'};"></div>
                      </div>
                    </div>`;
                }).join('')}
              </div>
            `}
          </div>
        </div>

        <!-- RESUMEN DE STOCK DEL PERIODO -->
        <div class="card" style="padding: 0; overflow: hidden;">
          <div style="padding: 1rem 1.25rem; border-bottom: 1px solid var(--border-subtle); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
            <div>
              <div style="font-weight: 600; color: var(--gold-light); font-family: var(--font-serif); font-size: 1.05rem;">Resumen de stock del periodo por categoría</div>
              <div style="font-size: 0.78rem; color: var(--text-secondary);">Stock inicial + entradas − salidas = stock final, según los movimientos del Kardex.</div>
            </div>
            ${sum.lowStockCount > 0 ? `<span class="badge badge-warning">⚠️ ${sum.lowStockCount} joya(s) en stock mínimo</span>` : `<span class="badge badge-emerald">Stock sin alertas</span>`}
          </div>
          <div style="overflow-x: auto;">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Categoría</th>
                  <th style="${thStyle}">Stock inicial</th>
                  <th style="${thStyle}">Compras</th>
                  <th style="${thStyle}">Otras entradas</th>
                  <th style="${thStyle}">Vendidas</th>
                  <th style="${thStyle}">Otras salidas</th>
                  <th style="${thStyle}">Stock final</th>
                  <th style="${thStyle}">Valor final (costo CPP)</th>
                  <th style="${thStyle}">Valor final (precio venta)</th>
                </tr>
              </thead>
              <tbody>
                ${sum.stockRows.length === 0 ? `
                  <tr><td colspan="9" style="text-align: center; padding: 2rem; color: var(--text-muted);">Aún no hay joyas registradas.</td></tr>
                ` : sum.stockRows.map(r => `
                  <tr>
                    <td style="font-weight: 600; color: var(--text-primary);">${escapeHtml(r.category)}</td>
                    <td style="text-align: right; font-family: monospace; white-space: nowrap;">${r.start}</td>
                    <td style="text-align: right; font-family: monospace; white-space: nowrap; color: var(--emerald-light);">${r.purchases ? '+' + r.purchases : '0'}</td>
                    <td style="text-align: right; font-family: monospace; white-space: nowrap; color: var(--emerald-light);">${r.otherIn ? '+' + r.otherIn : '0'}</td>
                    <td style="text-align: right; font-family: monospace; white-space: nowrap; color: var(--danger-primary);">${r.sold ? '−' + r.sold : '0'}</td>
                    <td style="text-align: right; font-family: monospace; white-space: nowrap; color: var(--danger-primary);">${r.otherOut ? '−' + r.otherOut : '0'}</td>
                    <td style="text-align: right; font-family: monospace; white-space: nowrap; font-weight: 700; color: var(--text-primary);">${r.end}</td>
                    <td style="text-align: right; font-family: monospace; white-space: nowrap; color: var(--gold-light);">${formatCOP(r.endValue)}</td>
                    <td style="text-align: right; font-family: monospace; white-space: nowrap; color: var(--emerald-light);">${formatCOP(r.saleValue)}</td>
                  </tr>
                `).join('')}
                ${sum.stockRows.length > 0 ? `
                  <tr style="background: var(--bg-primary);">
                    <td style="font-weight: 700; color: var(--gold-light);">TOTAL</td>
                    <td style="text-align: right; font-family: monospace; white-space: nowrap; font-weight: 700;">${sum.stockTotals.start}</td>
                    <td style="text-align: right; font-family: monospace; white-space: nowrap; font-weight: 700;">${sum.stockTotals.purchases}</td>
                    <td style="text-align: right; font-family: monospace; white-space: nowrap; font-weight: 700;">${sum.stockTotals.otherIn}</td>
                    <td style="text-align: right; font-family: monospace; white-space: nowrap; font-weight: 700;">${sum.stockTotals.sold}</td>
                    <td style="text-align: right; font-family: monospace; white-space: nowrap; font-weight: 700;">${sum.stockTotals.otherOut}</td>
                    <td style="text-align: right; font-family: monospace; white-space: nowrap; font-weight: 700;">${sum.stockTotals.end}</td>
                    <td style="text-align: right; font-family: monospace; white-space: nowrap; font-weight: 700; color: var(--gold-light);">${formatCOP(sum.stockTotals.endValue)}</td>
                    <td style="text-align: right; font-family: monospace; white-space: nowrap; font-weight: 700; color: var(--emerald-light);">${formatCOP(sum.stockTotals.saleValue)}</td>
                  </tr>
                ` : ''}
              </tbody>
            </table>
          </div>
          <div style="padding: 0.6rem 1.25rem; font-size: 0.72rem; color: var(--text-muted); border-top: 1px solid var(--border-subtle);">
            Los valores finales usan el costo promedio (CPP) y el precio de venta actuales de cada joya.
          </div>
        </div>

        <!-- TOP JOYAS + SNAPSHOT FINANCIERO -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem;">
          <div class="card" style="padding: 1.5rem; min-width: 0;">
            <h3 style="color: var(--gold-light); margin-bottom: 1rem; font-size: 1.1rem; font-family: var(--font-serif);">Top 5 joyas vendidas del periodo</h3>
            ${sum.topProducts.length === 0 ? `<div style="color: var(--text-muted); font-size: 0.85rem;">Sin ventas en el periodo.</div>` : `
              <div style="display: flex; flex-direction: column; gap: 0.6rem;">
                ${sum.topProducts.map((t, i) => `
                  <div style="display: flex; justify-content: space-between; align-items: center; gap: 0.75rem; padding: 0.45rem 0; border-bottom: 1px solid var(--border-subtle);">
                    <div style="min-width: 0;">
                      <div style="font-weight: 600; color: var(--text-primary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${i + 1}. ${escapeHtml(t.name)}</div>
                      <div style="font-size: 0.72rem; color: var(--text-muted); font-family: monospace;">${escapeHtml(t.sku)} · ${t.qty} un</div>
                    </div>
                    <div style="font-weight: 700; color: var(--emerald-light); font-family: monospace; white-space: nowrap;">${formatCOP(t.revenue)}</div>
                  </div>
                `).join('')}
              </div>
            `}
          </div>

          <div class="card" style="padding: 1.5rem; min-width: 0;">
            <h3 style="color: var(--gold-light); margin-bottom: 0.25rem; font-size: 1.1rem; font-family: var(--font-serif);">Situación actual del negocio</h3>
            <div style="font-size: 0.78rem; color: var(--text-secondary); margin-bottom: 0.75rem;">Saldos a hoy (no dependen del periodo).</div>
            ${[
              ['💵 Dinero disponible (cajas + bancos)', formatCOP(calculateTotalCash()), 'var(--gold-primary)'],
              ['💎 Inventario valorizado (costo CPP)', formatCOP(val.costValuation), 'var(--gold-light)'],
              ['🏷️ Inventario a precio de venta', formatCOP(val.saleValuation), 'var(--emerald-light)'],
              ['📝 Cuentas por cobrar (cartera)', formatCOP(calculateTotalReceivables()), 'var(--warning-primary)'],
              ['📦 Piezas en stock', String(val.totalStock), 'var(--text-primary)'],
            ].map(r => `
              <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.5rem 0; border-bottom: 1px solid var(--border-subtle); gap: 0.75rem;">
                <span style="font-size: 0.88rem; color: var(--text-primary);">${r[0]}</span>
                <span style="font-weight: 700; font-family: monospace; color: ${r[2]}; white-space: nowrap;">${r[1]}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- INVERSIÓN INICIAL -->
        <div class="card" style="padding: 1.5rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 1rem;">
            <div>
              <h3 style="color: var(--gold-light); margin: 0; font-size: 1.1rem; font-family: var(--font-serif);">💰 Inversión inicial y recuperación</h3>
              <div style="font-size: 0.78rem; color: var(--text-secondary);">Cuánto se invirtió, de dónde salió y cuánto se ha recuperado con la utilidad operativa acumulada.</div>
            </div>
            <button class="btn-secondary" style="font-size: 0.78rem; padding: 0.4rem 0.8rem;" onclick="window.yumax.setTab('investment')">Ver detalle →</button>
          </div>
          ${inv.total === 0 ? `
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; padding: 1rem; border: 1px dashed var(--border-subtle); border-radius: 10px;">
              <span style="color: var(--text-secondary); font-size: 0.9rem;">Aún no has registrado la inversión inicial del negocio.</span>
              <button class="btn-gold" style="font-size: 0.8rem;" onclick="window.yumax.openNewInvestmentModal()">+ Registrar inversión</button>
            </div>
          ` : `
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem;">
              <div>
                <div class="metric-label">Inversión total</div>
                <div class="metric-value" style="color: var(--gold-light);">${formatCOP(inv.total)}</div>
                <div style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 0.3rem;">
                  Recursos propios ${formatCOP(inv.own)} (${(inv.own / inv.total * 100).toFixed(0)}%) · Deuda ${formatCOP(inv.debt)} (${(inv.debt / inv.total * 100).toFixed(0)}%)
                </div>
                <div style="margin-top: 1rem;">
                  <div style="display: flex; justify-content: space-between; font-size: 0.82rem; margin-bottom: 0.3rem;">
                    <span style="color: var(--text-secondary);">Recuperado con utilidad operativa acumulada</span>
                    <strong style="color: var(--emerald-light);">${recovery.toFixed(1)}%</strong>
                  </div>
                  <div style="height: 8px; background: var(--bg-primary); border-radius: 4px; overflow: hidden;">
                    <div style="width: ${Math.min(100, recovery)}%; height: 100%; background: var(--emerald-light);"></div>
                  </div>
                  <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 0.3rem;">Utilidad operativa acumulada: ${formatCOP(accProfit)} (ventas − costo de ventas − gastos, desde el inicio)</div>
                </div>
              </div>
              <div style="display: flex; flex-direction: column; gap: 0.6rem;">
                ${inv.byCategory.filter(c => c.total > 0).map(c => `
                  <div>
                    <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 0.25rem;">
                      <span style="color: var(--text-primary);">${c.icon} ${c.label}</span>
                      <span style="font-family: monospace; font-weight: 700; color: var(--text-primary);">${formatCOP(c.total)}</span>
                    </div>
                    <div style="height: 6px; background: var(--bg-primary); border-radius: 3px; overflow: hidden;">
                      <div style="width: ${(c.total / inv.total) * 100}%; height: 100%; background: ${c.color};"></div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          `}
        </div>

        <!-- ACCESOS RÁPIDOS -->
        <div class="card" style="padding: 1.25rem;">
          <div style="display: flex; flex-wrap: wrap; gap: 0.75rem;">
            <button class="btn-gold" onclick="window.yumax.openNewProductModal()">+ Registrar Nueva Joya</button>
            <button class="btn-secondary" onclick="window.yumax.openNewSaleModal()">🛒 Realizar Venta POS</button>
            <button class="btn-secondary" onclick="window.yumax.openNewPurchaseModal()">🛍️ Registrar Compra</button>
            <button class="btn-secondary" onclick="window.yumax.openNewInvestmentModal()">💰 Registrar Inversión</button>
            <button class="btn-secondary" onclick="window.yumax.setTab('datamanagement')">⚙️ Gestión de Datos & Respaldo</button>
          </div>
        </div>
      </div>
    `;
  }

  // TAB: INVERSIÓN INICIAL
  function renderInvestmentTab() {
    const inv = calculateInvestmentSummary();
    const list = state.investments.slice().sort((a, b) => String(b.date).localeCompare(String(a.date)));
    return `
      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <div class="card" style="padding: 1.25rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
            <div>
              <h3 style="color: var(--gold-light); margin: 0 0 0.25rem 0; font-family: var(--font-serif);">Inversión Inicial de Yumax</h3>
              <p style="color: var(--text-secondary); font-size: 0.85rem; margin: 0;">
                Registra cada aporte con el que arrancó el negocio y su fuente: capital propio, tarjetas de crédito, créditos u otras.
              </p>
            </div>
            <button class="btn-gold" onclick="window.yumax.openNewInvestmentModal()">+ Registrar aporte de inversión</button>
          </div>
        </div>

        <div class="metrics-grid">
          <div class="metric-card">
            <div class="metric-label">Inversión total</div>
            <div class="metric-value" style="color: var(--gold-light);">${formatCOP(inv.total)}</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.4rem;">${state.investments.length} aporte(s) registrado(s)</div>
          </div>
          <div class="metric-card">
            <div class="metric-label">Recursos propios</div>
            <div class="metric-value" style="color: var(--emerald-light);">${formatCOP(inv.own)}</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.4rem;">${inv.total > 0 ? (inv.own / inv.total * 100).toFixed(1) : '0.0'}% de la inversión</div>
          </div>
          <div class="metric-card">
            <div class="metric-label">Financiado con deuda</div>
            <div class="metric-value" style="color: var(--warning-primary);">${formatCOP(inv.debt)}</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.4rem;">${inv.total > 0 ? (inv.debt / inv.total * 100).toFixed(1) : '0.0'}% (tarjetas, créditos y préstamos)</div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem;">
          <div class="card" style="padding: 0; overflow: hidden; min-width: 0;">
            <div style="padding: 1rem 1.25rem; border-bottom: 1px solid var(--border-subtle); font-weight: 600; color: var(--gold-light); font-family: var(--font-serif);">Resumen por categoría</div>
            <table class="data-table">
              <thead>
                <tr><th>Categoría</th><th style="text-align: right;">Aportes</th><th style="text-align: right;">Monto</th><th style="text-align: right;">%</th></tr>
              </thead>
              <tbody>
                ${inv.byCategory.map(c => `
                  <tr>
                    <td style="font-weight: 600; color: var(--text-primary);">${c.icon} ${c.label}</td>
                    <td style="text-align: right; font-family: monospace; white-space: nowrap;">${c.count}</td>
                    <td style="text-align: right; font-family: monospace; white-space: nowrap; color: var(--gold-light);">${formatCOP(c.total)}</td>
                    <td style="text-align: right; font-family: monospace; white-space: nowrap;">${inv.total > 0 ? (c.total / inv.total * 100).toFixed(1) : '0.0'}%</td>
                  </tr>
                `).join('')}
                <tr style="background: var(--bg-primary);">
                  <td style="font-weight: 700; color: var(--gold-light);">TOTAL</td>
                  <td style="text-align: right; font-family: monospace; white-space: nowrap; font-weight: 700;">${state.investments.length}</td>
                  <td style="text-align: right; font-family: monospace; white-space: nowrap; font-weight: 700; color: var(--gold-light);">${formatCOP(inv.total)}</td>
                  <td style="text-align: right; font-family: monospace; white-space: nowrap; font-weight: 700;">${inv.total > 0 ? '100.0%' : '0.0%'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="card" style="padding: 1.5rem; min-width: 0;">
            <h3 style="color: var(--gold-light); margin-bottom: 1rem; font-size: 1.05rem; font-family: var(--font-serif);">Composición de la inversión</h3>
            ${inv.total === 0 ? `<div style="color: var(--text-muted); font-size: 0.85rem;">Registra tu primer aporte para ver la composición.</div>` : `
              <div style="display: flex; height: 18px; border-radius: 9px; overflow: hidden; margin-bottom: 1rem;">
                ${inv.byCategory.filter(c => c.total > 0).map(c => `<div title="${c.label}: ${formatCOP(c.total)}" style="width: ${(c.total / inv.total) * 100}%; background: ${c.color};"></div>`).join('')}
              </div>
              <div style="display: flex; flex-direction: column; gap: 0.45rem;">
                ${inv.byCategory.filter(c => c.total > 0).map(c => `
                  <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.85rem;">
                    <span style="width: 10px; height: 10px; border-radius: 2px; background: ${c.color}; display: inline-block;"></span>
                    <span style="color: var(--text-primary); flex: 1;">${c.label}</span>
                    <span style="font-family: monospace; color: var(--text-secondary);">${(c.total / inv.total * 100).toFixed(1)}%</span>
                  </div>
                `).join('')}
              </div>
            `}
          </div>
        </div>

        <div class="card" style="padding: 0; overflow: hidden;">
          <div style="padding: 1rem 1.25rem; border-bottom: 1px solid var(--border-subtle); font-weight: 600; color: var(--gold-light); font-family: var(--font-serif);">Detalle de aportes</div>
          <div style="overflow-x: auto;">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Categoría</th>
                  <th>Fuente / Entidad</th>
                  <th style="text-align: right;">Monto</th>
                  <th style="text-align: right;">Tasa mensual</th>
                  <th style="text-align: right;">Plazo</th>
                  <th style="text-align: right;">Cuota estimada</th>
                  <th>Cuenta destino</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                ${list.length === 0 ? `
                  <tr><td colspan="9" style="text-align: center; padding: 2rem; color: var(--text-muted);">No hay aportes registrados aún.</td></tr>
                ` : list.map(i => {
                  const c = getInvestmentCategory(i.category);
                  const cuota = estimateMonthlyPayment(i.amount, i.rate, i.term);
                  return `
                    <tr>
                      <td style="white-space: nowrap;">${formatDateKeyES(extractDateKey(i.date))}</td>
                      <td><span class="badge" style="background: ${c.color}22; color: ${c.color}; border: 1px solid ${c.color}55;">${c.icon} ${c.label}</span></td>
                      <td>
                        <div style="font-weight: 600; color: var(--text-primary);">${escapeHtml(i.source || '—')}</div>
                        ${i.notes ? `<div style="font-size: 0.72rem; color: var(--text-muted);">${escapeHtml(i.notes)}</div>` : ''}
                      </td>
                      <td style="text-align: right; font-family: monospace; white-space: nowrap; font-weight: 700; color: var(--gold-light);">${formatCOP(i.amount)}</td>
                      <td style="text-align: right; font-family: monospace; white-space: nowrap;">${i.rate ? Number(i.rate).toLocaleString('es-CO') + '%' : '—'}</td>
                      <td style="text-align: right; font-family: monospace; white-space: nowrap;">${i.term ? i.term + ' m' : '—'}</td>
                      <td style="text-align: right; font-family: monospace; white-space: nowrap;">${cuota > 0 ? formatCOP(Math.round(cuota)) : '—'}</td>
                      <td style="font-size: 0.8rem; color: var(--text-secondary);">${i.account_name ? escapeHtml(i.account_name) : 'Sin afectar saldos'}</td>
                      <td><button class="btn-secondary" style="padding: 0.2rem 0.5rem; font-size: 0.7rem;" onclick="window.yumax.deleteInvestment('${i.id}')">Eliminar</button></td>
                    </tr>`;
                }).join('')}
              </tbody>
            </table>
          </div>
          <div style="padding: 0.6rem 1.25rem; font-size: 0.72rem; color: var(--text-muted); border-top: 1px solid var(--border-subtle);">
            La cuota estimada usa el sistema de cuota fija (francés) con la tasa mensual y el plazo que registres; es una referencia, verifica con tu entidad.
          </div>
        </div>
      </div>
    `;
  }

  // MODALES
  function renderModals() {
    let html = '';

    // Modal: Nueva Joya
    if (state.showNewProductModal) {
      html += `
        <div class="modal-overlay" onclick="if(event.target === this) window.yumax.closeModals()">
          <div class="modal-container" style="max-width: 650px;">
            <div class="modal-header">
              <div style="display: flex; align-items: center; gap: 0.75rem;">
                <div style="width: 32px; height: 32px;">${YUMAX_LOGO_SVG}</div>
                <h3 style="color: var(--gold-light); margin: 0; font-size: 1.2rem; font-family: var(--font-serif);">Registrar Joya en Catálogo Yumax</h3>
              </div>
              <button class="btn-secondary" style="padding: 0.25rem 0.5rem;" onclick="window.yumax.closeModals()">✕</button>
            </div>

            <form onsubmit="window.yumax.submitNewProduct(event)">
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
                <div>
                  <label style="display: block; font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.35rem;">SKU Único *</label>
                  <input type="text" id="new_sku" class="form-input" placeholder="ej. YUM-AN-ORO-001" value="YUM-${Date.now().toString().slice(-4)}" required />
                </div>
                <div>
                  <label style="display: block; font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.35rem;">Categoría *</label>
                  <select id="new_category" class="form-input">
                    <option value="Anillos">Anillos & Compromiso</option>
                    <option value="Cadenas">Cadenas</option>
                    <option value="Pulseras">Pulseras</option>
                    <option value="Aretes">Aretes & Topos</option>
                    <option value="Dijes">Dijes & Cruces</option>
                    <option value="Relojes">Relojes</option>
                    <option value="Piedras Preciosas">Gemas / Esmeraldas</option>
                  </select>
                </div>
              </div>

              <div style="margin-bottom: 1rem;">
                <label style="display: block; font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.35rem;">Nombre de la Joya *</label>
                <input type="text" id="new_name" class="form-input" placeholder="ej. Anillo Solitario Oro Amarillo con Diamante 0.50ct" required />
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
                <div>
                  <label style="display: block; font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.35rem;">Material *</label>
                  <select id="new_material" class="form-input">
                    <option value="Oro Amarillo">Oro Amarillo</option>
                    <option value="Oro Blanco">Oro Blanco</option>
                    <option value="Oro Rosa">Oro Rosa</option>
                    <option value="Oro Italiano">Oro Italiano</option>
                    <option value="Plata">Plata</option>
                    <option value="Platino">Platino</option>
                    <option value="Acero">Acero</option>
                  </select>
                </div>
                <div>
                  <label style="display: block; font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.35rem;">Ley / Pureza *</label>
                  <select id="new_purity" class="form-input">
                    <option value="18k (750)">18k (750)</option>
                    <option value="14k (585)">14k (585)</option>
                    <option value="24k (999)">24k (Puro)</option>
                    <option value="Ley 925">Ley 925</option>
                    <option value="Ley 950">Ley 950</option>
                    <option value="316L">316L (Acero)</option>
                  </select>
                </div>
                <div>
                  <label style="display: block; font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.35rem;">Peso Exacto (g) *</label>
                  <input type="number" id="new_weight" class="form-input" step="0.0001" placeholder="ej. 4.2500" required />
                </div>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
                <div>
                  <label style="display: block; font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.35rem;">Piedra / Gema Principal</label>
                  <input type="text" id="new_stone" class="form-input" placeholder="ej. Diamante 0.50ct, Esmeralda Muzo, Ninguna" />
                </div>
                <div>
                  <label style="display: block; font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.35rem;">Talla / Medida</label>
                  <input type="text" id="new_size" class="form-input" placeholder="ej. 6.5, 50cm, 19cm" />
                </div>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
                <div>
                  <label style="display: block; font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.35rem;">Costo Compra COP *</label>
                  <input type="number" id="new_cost" class="form-input" placeholder="ej. 1500000" required />
                </div>
                <div>
                  <label style="display: block; font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.35rem;">Precio Venta COP *</label>
                  <input type="number" id="new_price" class="form-input" placeholder="ej. 2800000" required />
                </div>
                <div>
                  <label style="display: block; font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.35rem;">Stock Inicial *</label>
                  <input type="number" id="new_stock" class="form-input" value="1" min="0" required />
                </div>
              </div>

              <div style="margin-bottom: 1.5rem;">
                <label style="display: block; font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.35rem;">Ubicación Física *</label>
                <select id="new_location" class="form-input">
                  <option value="Vitrina 1 - Alta Joyería">Vitrina 1 - Alta Joyería</option>
                  <option value="Vitrina 2 - Plata">Vitrina 2 - Plata</option>
                  <option value="Vitrina 3 - Dijes">Vitrina 3 - Dijes</option>
                  <option value="Caja Fuerte - Gaveta 1">Caja Fuerte - Gaveta 1</option>
                  <option value="Caja Fuerte - Gaveta 2">Caja Fuerte - Gaveta 2</option>
                  <option value="Taller de Orfebrería">Taller de Orfebrería</option>
                </select>
              </div>

              <div style="display: flex; justify-content: flex-end; gap: 0.75rem;">
                <button type="button" class="btn-secondary" onclick="window.yumax.closeModals()">Cancelar</button>
                <button type="submit" class="btn-gold">Guardar Joya en Catálogo</button>
              </div>
            </form>
          </div>
        </div>
      `;
    }

    // Modal: Nueva Venta POS (Multi-Ítem para un mismo cliente)
    if (state.showNewSaleModal) {
      const saleTotal = (state.saleForm.items || []).reduce((acc, it) => acc + (it.subtotal || 0), 0);
      const salePieces = (state.saleForm.items || []).reduce((acc, it) => acc + (it.quantity || 0), 0);
      const availableProds = state.products.filter(p => p.stock > 0);

      html += `
        <div class="modal-overlay" onclick="if(event.target === this) window.yumax.closeModals()">
          <div class="modal-container modal-container-lg">
            <div class="modal-header">
              <div style="display: flex; align-items: center; gap: 0.75rem;">
                <div style="width: 30px; height: 30px;">${YUMAX_LOGO_SVG}</div>
                <div>
                  <h3 style="color: var(--gold-light); margin: 0; font-size: 1.25rem; font-family: var(--font-serif);">
                    🛒 Registrar Venta POS — Varios Elementos por Cliente
                  </h3>
                  <div style="font-size: 0.75rem; color: var(--text-secondary);">
                    Asocia múltiples joyas en una sola factura para un mismo cliente
                  </div>
                </div>
              </div>
              <button class="btn-secondary" style="padding: 0.25rem 0.5rem;" onclick="window.yumax.closeModals()">✕</button>
            </div>

            <form onsubmit="window.yumax.submitSale(event)">
              <!-- PASO 1: DATOS DEL CLIENTE Y MÉTODO DE PAGO -->
              <datalist id="customer_suggestions">
                ${state.customers.map(c => `<option value="${c.name}">${c.phone ? 'Tel: ' + c.phone : ''}</option>`).join('')}
              </datalist>

              <div style="display: grid; grid-template-columns: 1.5fr 1fr 1fr; gap: 1rem; margin-bottom: 1.25rem;">
                <div>
                  <label style="display: block; font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.35rem;">
                    Cliente (Seleccionar o escribir nuevo) *
                  </label>
                  <input type="text" id="sale_customer" list="customer_suggestions" class="form-input" placeholder="Nombre completo del cliente" value="${state.saleForm.customer || ''}" onchange="window.yumax.onSaleCustomerSelect(this.value)" required />
                </div>
                <div>
                  <label style="display: block; font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.35rem;">
                    Teléfono / WhatsApp
                  </label>
                  <input type="text" id="sale_phone" class="form-input" placeholder="ej. 310 123 4567" value="${state.saleForm.phone || ''}" />
                </div>
                <div>
                  <label style="display: block; font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.35rem;">
                    Forma de Pago *
                  </label>
                  <select id="sale_method" class="form-input">
                    <option value="CASH" ${state.saleForm.method === 'CASH' ? 'selected' : ''}>💵 Efectivo (Caja General)</option>
                    <option value="BANK" ${state.saleForm.method === 'BANK' ? 'selected' : ''}>🏦 Bancolombia / Transf.</option>
                    <option value="NEQUI" ${state.saleForm.method === 'NEQUI' ? 'selected' : ''}>📱 Nequi Yumax</option>
                    <option value="DAVIPLATA" ${state.saleForm.method === 'DAVIPLATA' ? 'selected' : ''}>📱 Daviplata</option>
                    <option value="CARD" ${state.saleForm.method === 'CARD' ? 'selected' : ''}>💳 Datáfono / Tarjeta</option>
                    <option value="CREDIT" ${state.saleForm.method === 'CREDIT' ? 'selected' : ''}>📝 Crédito / Separado</option>
                  </select>
                </div>
              </div>

              <!-- PASO 2: AGREGAR JOYAS AL PEDIDO -->
              <div class="item-picker-box">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
                  <div style="font-size: 0.85rem; font-weight: 700; color: var(--gold-light);">
                    💎 Agregar Joya a la Venta
                  </div>
                  <div id="sale_picker_info" style="font-size: 0.75rem; color: var(--text-secondary);">
                    ${state.saleForm.pickerProductId ? (() => {
                      const selProd = state.products.find(p => p.id === state.saleForm.pickerProductId);
                      return selProd ? `Stock físico: <strong>${selProd.stock} un</strong> | Precio lista: <strong>${formatCOP(selProd.sale_price)}</strong>` : '';
                    })() : 'Selecciona una joya disponible para cargarla al carrito'}
                  </div>
                </div>

                <div style="display: grid; grid-template-columns: 2fr 0.8fr 1.2fr auto; gap: 0.75rem; align-items: end;">
                  <div>
                    <label style="display: block; font-size: 0.75rem; color: var(--text-secondary); margin-bottom: 0.25rem;">Joya en Catálogo *</label>
                    <select id="sale_picker_product_id" class="form-input" onchange="window.yumax.onSaleProductPickerChange(this.value)">
                      <option value="">-- Seleccionar Joya disponible --</option>
                      ${availableProds.map(p => `
                        <option value="${p.id}" ${state.saleForm.pickerProductId === p.id ? 'selected' : ''}>
                          ${p.sku} — ${p.name} (Stock: ${p.stock} un | ${formatCOP(p.sale_price)})
                        </option>
                      `).join('')}
                    </select>
                  </div>
                  <div>
                    <label style="display: block; font-size: 0.75rem; color: var(--text-secondary); margin-bottom: 0.25rem;">Cantidad *</label>
                    <input type="number" id="sale_picker_qty" class="form-input" value="${state.saleForm.pickerQty || 1}" min="1" />
                  </div>
                  <div>
                    <label style="display: block; font-size: 0.75rem; color: var(--text-secondary); margin-bottom: 0.25rem;">Precio Unitario COP *</label>
                    <input type="number" id="sale_picker_price" class="form-input" value="${state.saleForm.pickerPrice || 0}" />
                  </div>
                  <div>
                    <button type="button" class="btn-gold" style="white-space: nowrap; height: 38px; padding: 0 1rem;" onclick="window.yumax.addSaleItem()">
                      + Agregar Joya
                    </button>
                  </div>
                </div>
              </div>

              <!-- PASO 3: TABLA DE JOYAS EN EL CARRITO -->
              <div style="margin-bottom: 1.25rem;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                  <div style="font-size: 0.85rem; font-weight: 700; color: var(--text-primary);">
                    🛒 Joyas Incluidas en esta Venta (${(state.saleForm.items || []).length} ítems)
                  </div>
                  <div style="font-size: 0.75rem; color: var(--text-muted);">
                    Puedes ajustar cantidades con los botones +/- o remover ítems
                  </div>
                </div>

                ${(!state.saleForm.items || state.saleForm.items.length === 0) ? `
                  <div style="text-align: center; padding: 2rem; color: var(--text-muted); background: var(--bg-surface-elevated); border: 1px dashed var(--border-subtle); border-radius: 8px;">
                    El carrito de venta está vacío. Selecciona una joya arriba y presiona <strong>"+ Agregar Joya"</strong> para asociarla a este cliente.
                  </div>
                ` : `
                  <div style="border: 1px solid var(--border-subtle); border-radius: 8px; overflow: hidden;">
                    <table class="data-table" style="margin: 0;">
                      <thead>
                        <tr>
                          <th>Joya / SKU</th>
                          <th style="width: 120px; text-align: center;">Cantidad</th>
                          <th style="text-align: right;">Precio Unit.</th>
                          <th style="text-align: right;">Subtotal</th>
                          <th style="width: 45px; text-align: center;">Acción</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${state.saleForm.items.map((it, idx) => `
                          <tr>
                            <td>
                              <span class="badge badge-gold" style="font-family: monospace; font-size: 0.7rem; margin-right: 0.4rem;">${it.sku}</span>
                              <span style="font-weight: 600; font-size: 0.85rem;">${it.name}</span>
                            </td>
                            <td style="text-align: center;">
                              <div style="display: inline-flex; align-items: center; gap: 0.35rem;">
                                <button type="button" class="qty-btn" onclick="window.yumax.updateSaleItemQty(${idx}, -1)">-</button>
                                <span style="font-weight: 700; font-family: monospace; min-width: 20px; text-align: center;">${it.quantity}</span>
                                <button type="button" class="qty-btn" onclick="window.yumax.updateSaleItemQty(${idx}, 1)">+</button>
                              </div>
                            </td>
                            <td style="text-align: right; font-family: monospace; font-size: 0.85rem;">
                              ${formatCOP(it.unit_price)}
                            </td>
                            <td style="text-align: right; font-weight: 700; color: var(--emerald-light); font-family: monospace; font-size: 0.9rem;">
                              ${formatCOP(it.subtotal)}
                            </td>
                            <td style="text-align: center;">
                              <button type="button" class="btn-secondary" style="padding: 0.2rem 0.45rem; color: var(--danger-primary);" onclick="window.yumax.removeSaleItem(${idx})" title="Eliminar ítem">
                                🗑️
                              </button>
                            </td>
                          </tr>
                        `).join('')}
                      </tbody>
                    </table>
                  </div>
                `}
              </div>

              <!-- PASO 4: TOTAL Y ACCIONES -->
              <div style="display: flex; justify-content: space-between; align-items: center; background: rgba(216, 177, 104, 0.08); border: 1px solid var(--border-gold); padding: 0.85rem 1.25rem; border-radius: 10px; margin-bottom: 1.25rem;">
                <div>
                  <div style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-secondary); font-weight: 600;">Resumen del Pedido</div>
                  <div style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary);">
                    ${salePieces} piezas en total (${(state.saleForm.items || []).length} joyas diferentes)
                  </div>
                </div>
                <div style="text-align: right;">
                  <div style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-secondary); font-weight: 600;">Gran Total POS</div>
                  <div style="font-size: 1.45rem; font-weight: 700; color: var(--emerald-light); font-family: monospace;">
                    ${formatCOP(saleTotal)}
                  </div>
                </div>
              </div>

              <div style="display: flex; justify-content: flex-end; gap: 0.75rem;">
                <button type="button" class="btn-secondary" onclick="window.yumax.closeModals()">Cancelar</button>
                <button type="submit" class="btn-gold" ${(state.saleForm.items || []).length === 0 ? 'disabled style="opacity: 0.5; cursor: not-allowed;"' : ''}>
                  Confirmar Venta (${formatCOP(saleTotal)}) & Emitir Recibo
                </button>
              </div>
            </form>
          </div>
        </div>
      `;
    }

    // Modal: Nueva Compra (Multi-Ítem a un mismo proveedor)
    if (state.showNewPurchaseModal) {
      const purTotal = (state.purchaseForm.items || []).reduce((acc, it) => acc + (it.subtotal || 0), 0);
      const purPieces = (state.purchaseForm.items || []).reduce((acc, it) => acc + (it.quantity || 0), 0);

      html += `
        <div class="modal-overlay" onclick="if(event.target === this) window.yumax.closeModals()">
          <div class="modal-container modal-container-lg">
            <div class="modal-header">
              <div style="display: flex; align-items: center; gap: 0.75rem;">
                <div style="width: 30px; height: 30px;">${YUMAX_LOGO_SVG}</div>
                <div>
                  <h3 style="color: var(--gold-light); margin: 0; font-size: 1.25rem; font-family: var(--font-serif);">
                    🛍️ Registrar Compra a Proveedor — Varios Elementos por Lote
                  </h3>
                  <div style="font-size: 0.75rem; color: var(--text-secondary);">
                    Ingreso de múltiples joyas de un mismo proveedor con recálculo de Costo Promedio Ponderado (CPP)
                  </div>
                </div>
              </div>
              <button class="btn-secondary" style="padding: 0.25rem 0.5rem;" onclick="window.yumax.closeModals()">✕</button>
            </div>

            <form onsubmit="window.yumax.submitPurchase(event)">
              <!-- PASO 1: DATOS DEL PROVEEDOR Y CUENTA DE PAGO -->
              <datalist id="supplier_suggestions">
                ${state.suppliers.map(s => `<option value="${s.name}">${s.category ? 'Categoría: ' + s.category : ''}</option>`).join('')}
              </datalist>

              <div style="display: grid; grid-template-columns: 1.5fr 1fr 1fr; gap: 1rem; margin-bottom: 1.25rem;">
                <div>
                  <label style="display: block; font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.35rem;">
                    Proveedor / Orfebre *
                  </label>
                  <input type="text" id="pur_supplier" list="supplier_suggestions" class="form-input" placeholder="Nombre del proveedor u orfebre" value="${state.purchaseForm.supplier || ''}" required />
                </div>
                <div>
                  <label style="display: block; font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.35rem;">
                    No. Factura / Remisión
                  </label>
                  <input type="text" id="pur_invoice" class="form-input" placeholder="ej. FAC-1002" value="${state.purchaseForm.invoice || ''}" />
                </div>
                <div>
                  <label style="display: block; font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.35rem;">
                    Cuenta de Tesorería de Pago *
                  </label>
                  <select id="pur_account" class="form-input">
                    ${state.accounts.map(a => `<option value="${a.id}" ${state.purchaseForm.accountId === a.id ? 'selected' : ''}>${a.icon} ${a.name} (${formatCOP(a.balance)})</option>`).join('')}
                  </select>
                </div>
              </div>

              <!-- PASO 2: AGREGAR JOYAS AL LOTE DE COMPRA -->
              <div class="item-picker-box">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
                  <div style="font-size: 0.85rem; font-weight: 700; color: var(--gold-light);">
                    💎 Agregar Joya al Lote de Compra
                  </div>
                  <div id="pur_picker_info" style="font-size: 0.75rem; color: var(--text-secondary);">
                    ${state.purchaseForm.pickerProductId ? (() => {
                      const p = state.products.find(x => x.id === state.purchaseForm.pickerProductId);
                      return p ? `Stock actual: <strong>${p.stock} un</strong> • CPP actual: <strong>${formatCOP(p.average_cost)}</strong>` : '';
                    })() : 'Selecciona una joya del catálogo a reabastecer'}
                  </div>
                </div>

                <div style="display: grid; grid-template-columns: 2fr 0.8fr 1.2fr auto; gap: 0.75rem; align-items: end;">
                  <div>
                    <label style="display: block; font-size: 0.75rem; color: var(--text-secondary); margin-bottom: 0.25rem;">Joya en Catálogo *</label>
                    <select id="pur_picker_product_id" class="form-input" onchange="window.yumax.onPurchaseProductPickerChange(this.value)">
                      <option value="">-- Seleccionar Joya del catálogo --</option>
                      ${state.products.map(p => `
                        <option value="${p.id}" ${state.purchaseForm.pickerProductId === p.id ? 'selected' : ''}>
                          ${p.sku} — ${p.name} (Stock: ${p.stock} un | CPP: ${formatCOP(p.average_cost)})
                        </option>
                      `).join('')}
                    </select>
                  </div>
                  <div>
                    <label style="display: block; font-size: 0.75rem; color: var(--text-secondary); margin-bottom: 0.25rem;">Cantidad *</label>
                    <input type="number" id="pur_picker_qty" class="form-input" value="${state.purchaseForm.pickerQty || 1}" min="1" />
                  </div>
                  <div>
                    <label style="display: block; font-size: 0.75rem; color: var(--text-secondary); margin-bottom: 0.25rem;">Costo Unit. Compra COP *</label>
                    <input type="number" id="pur_picker_cost" class="form-input" value="${state.purchaseForm.pickerCost || 0}" />
                  </div>
                  <div>
                    <button type="button" class="btn-gold" style="white-space: nowrap; height: 38px; padding: 0 1rem;" onclick="window.yumax.addPurchaseItem()">
                      + Agregar al Lote
                    </button>
                  </div>
                </div>
              </div>

              <!-- PASO 3: TABLA DEL LOTE DE COMPRA -->
              <div style="margin-bottom: 1.25rem;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                  <div style="font-size: 0.85rem; font-weight: 700; color: var(--text-primary);">
                    🛍️ Joyas en este Lote de Compra (${(state.purchaseForm.items || []).length} ítems)
                  </div>
                  <div style="font-size: 0.75rem; color: var(--text-muted);">
                    El sistema recalcula el CPP de cada referencia al confirmar
                  </div>
                </div>

                ${(!state.purchaseForm.items || state.purchaseForm.items.length === 0) ? `
                  <div style="text-align: center; padding: 2rem; color: var(--text-muted); background: var(--bg-surface-elevated); border: 1px dashed var(--border-subtle); border-radius: 8px;">
                    Aún no has agregado ninguna joya a este lote. Selecciona una joya arriba y presiona <strong>"+ Agregar al Lote"</strong>.
                  </div>
                ` : `
                  <div style="border: 1px solid var(--border-subtle); border-radius: 8px; overflow: hidden;">
                    <table class="data-table" style="margin: 0;">
                      <thead>
                        <tr>
                          <th>Joya / SKU</th>
                          <th style="width: 100px; text-align: center;">Cantidad</th>
                          <th style="text-align: right;">Costo Unit.</th>
                          <th style="text-align: right;">Subtotal</th>
                          <th style="text-align: right;">CPP Resultante</th>
                          <th style="width: 45px; text-align: center;">Acción</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${state.purchaseForm.items.map((it, idx) => `
                          <tr>
                            <td>
                              <span class="badge badge-gold" style="font-family: monospace; font-size: 0.7rem; margin-right: 0.4rem;">${it.sku}</span>
                              <span style="font-weight: 600; font-size: 0.85rem;">${it.name}</span>
                            </td>
                            <td style="text-align: center; font-weight: 700; font-family: monospace; color: var(--emerald-light);">
                              +${it.quantity}
                            </td>
                            <td style="text-align: right; font-family: monospace; font-size: 0.85rem;">
                              ${formatCOP(it.unit_cost)}
                            </td>
                            <td style="text-align: right; font-weight: 700; color: var(--gold-light); font-family: monospace; font-size: 0.9rem;">
                              ${formatCOP(it.subtotal)}
                            </td>
                            <td style="text-align: right; font-size: 0.8rem; font-family: monospace; color: var(--emerald-light);">
                              ${formatCOP(it.projected_cpp)}
                            </td>
                            <td style="text-align: center;">
                              <button type="button" class="btn-secondary" style="padding: 0.2rem 0.45rem; color: var(--danger-primary);" onclick="window.yumax.removePurchaseItem(${idx})" title="Eliminar del lote">
                                🗑️
                              </button>
                            </td>
                          </tr>
                        `).join('')}
                      </tbody>
                    </table>
                  </div>
                `}
              </div>

              <!-- PASO 4: TOTAL Y ACCIONES -->
              <div style="display: flex; justify-content: space-between; align-items: center; background: rgba(216, 177, 104, 0.08); border: 1px solid var(--border-gold); padding: 0.85rem 1.25rem; border-radius: 10px; margin-bottom: 1.25rem;">
                <div>
                  <div style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-secondary); font-weight: 600;">Resumen del Lote</div>
                  <div style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary);">
                    ${purPieces} piezas en total (${(state.purchaseForm.items || []).length} joyas a reabastecer)
                  </div>
                </div>
                <div style="text-align: right;">
                  <div style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-secondary); font-weight: 600;">Total Lote de Compra</div>
                  <div style="font-size: 1.45rem; font-weight: 700; color: var(--gold-light); font-family: monospace;">
                    ${formatCOP(purTotal)}
                  </div>
                </div>
              </div>

              <div style="display: flex; justify-content: flex-end; gap: 0.75rem;">
                <button type="button" class="btn-secondary" onclick="window.yumax.closeModals()">Cancelar</button>
                <button type="submit" class="btn-gold" ${(state.purchaseForm.items || []).length === 0 ? 'disabled style="opacity: 0.5; cursor: not-allowed;"' : ''}>
                  Confirmar Compra (${formatCOP(purTotal)}) & Actualizar Kardex
                </button>
              </div>
            </form>
          </div>
        </div>
      `;
    }

    // Modal: Recibo Térmico de Joyería Yumax
    if (state.showReceiptModal && state.selectedSaleForReceipt) {
      const s = state.selectedSaleForReceipt;
      const items = (s.items && s.items.length > 0) ? s.items : [{
        sku: 'JOY-POS',
        name: 'Joya Venta Directa Mostrador',
        quantity: 1,
        unit_price: s.total,
        subtotal: s.total,
      }];

      html += `
        <div class="modal-overlay" onclick="if(event.target === this) window.yumax.closeReceiptModal()">
          <div class="modal-container" style="max-width: 580px;">
            <div class="modal-header no-print">
              <div style="display: flex; align-items: center; gap: 0.75rem;">
                <div style="width: 28px; height: 28px;">${YUMAX_LOGO_SVG}</div>
                <div>
                  <h3 style="color: var(--gold-light); margin: 0; font-size: 1.15rem; font-family: var(--font-serif);">Comprobante Oficial de Venta POS</h3>
                  <div style="font-size: 0.75rem; color: var(--text-secondary);">${s.invoice} • ${s.date}</div>
                </div>
              </div>
              <button class="btn-secondary" style="padding: 0.25rem 0.5rem;" onclick="window.yumax.closeReceiptModal()">✕</button>
            </div>

            <div class="receipt-box">
              <div style="text-align: center; margin-bottom: 1.25rem; border-bottom: 1px dashed rgba(216, 177, 104, 0.4); padding-bottom: 1rem;">
                <div style="width: 50px; height: 50px; margin: 0 auto 0.5rem auto;">
                  ${YUMAX_LOGO_SVG}
                </div>
                <div style="font-size: 1.2rem; font-weight: 700; color: var(--gold-light); font-family: var(--font-serif); letter-spacing: 0.08em;">
                  YUMAX JOYERÍA
                </div>
                <div style="font-size: 0.7rem; color: var(--text-slogan); letter-spacing: 0.15em; margin-bottom: 0.5rem;">
                  ELEGANTE Y ASPIRACIONAL
                </div>
                <div style="font-size: 0.75rem; color: var(--text-secondary);">
                  Alta Joyería • Oro Italiano 18k • Gemas Naturales
                </div>
                <div style="font-size: 0.7rem; color: var(--text-muted);">
                  NIT: 901.442.890-1 • Régimen Especial Joyería
                </div>
              </div>

              <div style="font-size: 0.8rem; margin-bottom: 1rem; line-height: 1.6; border-bottom: 1px dashed rgba(216, 177, 104, 0.2); padding-bottom: 0.75rem;">
                <div style="display: flex; justify-content: space-between;">
                  <span style="color: var(--text-secondary);">Comprobante No:</span>
                  <strong style="color: var(--gold-light); font-family: monospace;">${s.invoice}</strong>
                </div>
                <div style="display: flex; justify-content: space-between;">
                  <span style="color: var(--text-secondary);">Fecha / Hora:</span>
                  <span>${s.date}</span>
                </div>
                <div style="display: flex; justify-content: space-between;">
                  <span style="color: var(--text-secondary);">Cliente:</span>
                  <strong style="color: var(--text-primary);">${s.customer}</strong>
                </div>
                <div style="display: flex; justify-content: space-between;">
                  <span style="color: var(--text-secondary);">Teléfono:</span>
                  <span>${s.phone || 'No registrado'}</span>
                </div>
                <div style="display: flex; justify-content: space-between;">
                  <span style="color: var(--text-secondary);">Medio de Pago:</span>
                  <strong style="color: var(--emerald-light);">${s.method === 'CASH' ? 'Efectivo' : s.method === 'CREDIT' ? 'Crédito / Separado' : s.method}</strong>
                </div>
              </div>

              <div style="margin-bottom: 1.25rem;">
                <div style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-secondary); font-weight: 700; margin-bottom: 0.5rem; letter-spacing: 0.05em;">
                  Detalle de Artículos Adquiridos
                </div>
                <table style="width: 100%; border-collapse: collapse; font-size: 0.8rem;">
                  <thead>
                    <tr style="border-bottom: 1px solid var(--border-subtle); color: var(--text-secondary); text-align: left;">
                      <th style="padding: 0.35rem 0;">Descripción / SKU</th>
                      <th style="padding: 0.35rem 0; text-align: center;">Cant.</th>
                      <th style="padding: 0.35rem 0; text-align: right;">Unit. COP</th>
                      <th style="padding: 0.35rem 0; text-align: right;">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${items.map(it => `
                      <tr style="border-bottom: 1px dashed rgba(255,255,255,0.06);">
                        <td style="padding: 0.5rem 0;">
                          <div style="font-weight: 600; color: var(--text-primary);">${it.name}</div>
                          <div style="font-size: 0.7rem; color: var(--gold-light); font-family: monospace;">${it.sku}</div>
                        </td>
                        <td style="padding: 0.5rem 0; text-align: center; font-weight: 700; font-family: monospace;">
                          ${it.quantity}
                        </td>
                        <td style="padding: 0.5rem 0; text-align: right; font-family: monospace;">
                          ${formatCOP(it.unit_price)}
                        </td>
                        <td style="padding: 0.5rem 0; text-align: right; font-weight: 700; color: var(--emerald-light); font-family: monospace;">
                          ${formatCOP(it.subtotal)}
                        </td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>

              <div style="border-top: 1px dashed rgba(216, 177, 104, 0.4); padding-top: 0.75rem; margin-bottom: 1rem;">
                <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 0.25rem;">
                  <span style="color: var(--text-secondary);">Total Piezas:</span>
                  <span style="font-weight: 700;">${items.reduce((acc, it) => acc + (it.quantity || 1), 0)} un</span>
                </div>
                <div style="display: flex; justify-content: space-between; font-size: 1.25rem; font-weight: 700; color: var(--gold-light);">
                  <span>Total Pagado:</span>
                  <span style="font-family: monospace; color: var(--emerald-light);">${formatCOP(s.total)}</span>
                </div>
              </div>

              <div style="text-align: center; font-size: 0.72rem; color: var(--text-muted); line-height: 1.5; border-top: 1px dashed rgba(216, 177, 104, 0.2); padding-top: 0.75rem;">
                <p style="margin: 0 0 0.35rem 0; color: var(--text-secondary);">
                  💎 <strong>Certificado de Calidad Yumax:</strong> Garantía de por vida en pureza de metales legítimos (Oro 18k / Plata 925).
                </p>
                <p style="margin: 0;">
                  ¡Gracias por su compra en Yumax Joyería!
                </p>
              </div>
            </div>

            <div style="display: flex; justify-content: flex-end; gap: 0.75rem; margin-top: 1.25rem;" class="no-print">
              <button type="button" class="btn-secondary" onclick="window.yumax.closeReceiptModal()">Cerrar</button>
              <button type="button" class="btn-gold" onclick="window.print()">
                🖨️ Imprimir Recibo Térmico
              </button>
            </div>
          </div>
        </div>
      `;
    }

    // Modal: Detalle de Compra en Lote a Proveedor
    if (state.showPurchaseDetailModal && state.selectedPurchaseForDetail) {
      const pur = state.selectedPurchaseForDetail;
      const items = pur.items || [];

      html += `
        <div class="modal-overlay" onclick="if(event.target === this) window.yumax.closePurchaseDetailModal()">
          <div class="modal-container modal-container-lg">
            <div class="modal-header">
              <div style="display: flex; align-items: center; gap: 0.75rem;">
                <div style="width: 28px; height: 28px;">${YUMAX_LOGO_SVG}</div>
                <div>
                  <h3 style="color: var(--gold-light); margin: 0; font-size: 1.15rem; font-family: var(--font-serif);">
                    🛍️ Detalle del Lote de Compra: ${pur.purchase_number || pur.id}
                  </h3>
                  <div style="font-size: 0.75rem; color: var(--text-secondary);">Proveedor: <strong>${pur.supplier}</strong> • ${pur.date}</div>
                </div>
              </div>
              <button class="btn-secondary" style="padding: 0.25rem 0.5rem;" onclick="window.yumax.closePurchaseDetailModal()">✕</button>
            </div>

            <div style="background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: 10px; padding: 1rem; margin-bottom: 1.25rem; font-size: 0.85rem; line-height: 1.6;">
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
                <div><span style="color: var(--text-secondary);">Proveedor / Orfebre:</span> <strong>${pur.supplier}</strong></div>
                <div><span style="color: var(--text-secondary);">Cuenta de Pago:</span> <strong>${pur.account_name || 'Tesorería General'}</strong></div>
                <div><span style="color: var(--text-secondary);">Fecha de Adquisición:</span> <span>${pur.date}</span></div>
                <div><span style="color: var(--text-secondary);">Registrado Por:</span> <span>${pur.user}</span></div>
              </div>
              ${pur.notes ? `<div style="margin-top: 0.5rem; font-size: 0.8rem; color: var(--text-muted);"><span style="color: var(--text-secondary);">Notas:</span> ${pur.notes}</div>` : ''}
            </div>

            <div style="margin-bottom: 1.25rem;">
              <div style="font-size: 0.85rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.5rem;">
                💎 Joyas Adquiridas en este Lote (${items.length} referencias)
              </div>
              <div style="border: 1px solid var(--border-subtle); border-radius: 8px; overflow: hidden;">
                <table class="data-table" style="margin: 0;">
                  <thead>
                    <tr>
                      <th>Joya / SKU</th>
                      <th style="width: 80px; text-align: center;">Cantidad</th>
                      <th style="text-align: right;">Costo Unit.</th>
                      <th style="text-align: right;">Subtotal COP</th>
                      <th style="text-align: right;">CPP Resultante</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${items.map(it => `
                      <tr>
                        <td>
                          <span class="badge badge-gold" style="font-family: monospace; font-size: 0.7rem; margin-right: 0.35rem;">${it.sku}</span>
                          <span style="font-weight: 600; font-size: 0.85rem;">${it.name}</span>
                        </td>
                        <td style="text-align: center; font-weight: 700; font-family: monospace; color: var(--emerald-light);">
                          +${it.quantity}
                        </td>
                        <td style="text-align: right; font-family: monospace; font-size: 0.85rem;">
                          ${formatCOP(it.unit_cost)}
                        </td>
                        <td style="text-align: right; font-weight: 700; color: var(--gold-light); font-family: monospace; font-size: 0.9rem;">
                          ${formatCOP(it.subtotal)}
                        </td>
                        <td style="text-align: right; font-size: 0.8rem; font-family: monospace; color: var(--emerald-light);">
                          ${formatCOP(it.projected_cpp || it.unit_cost)}
                        </td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; background: rgba(216, 177, 104, 0.08); border: 1px solid var(--border-gold); padding: 0.85rem 1.25rem; border-radius: 10px; margin-bottom: 1.25rem;">
              <div style="font-size: 0.85rem; color: var(--text-secondary);">
                Total del Lote: <strong>${items.reduce((acc, it) => acc + (it.quantity || 1), 0)} piezas</strong>
              </div>
              <div style="font-size: 1.3rem; font-weight: 700; color: var(--gold-light); font-family: monospace;">
                ${formatCOP(pur.total)}
              </div>
            </div>

            <div style="display: flex; justify-content: flex-end;">
              <button type="button" class="btn-secondary" onclick="window.yumax.closePurchaseDetailModal()">Cerrar</button>
            </div>
          </div>
        </div>
      `;
    }

    // Modal: Nuevo Gasto
    if (state.showNewExpenseModal) {
      html += `
        <div class="modal-overlay" onclick="if(event.target === this) window.yumax.closeModals()">
          <div class="modal-container" style="max-width: 480px;">
            <div class="modal-header">
              <h3 style="color: var(--gold-light); margin: 0; font-size: 1.25rem; font-family: var(--font-serif);">💸 Registrar Gasto / Egreso</h3>
              <button class="btn-secondary" style="padding: 0.25rem 0.5rem;" onclick="window.yumax.closeModals()">✕</button>
            </div>

            <form onsubmit="window.yumax.submitExpense(event)">
              <div style="margin-bottom: 1rem;">
                <label style="display: block; font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.35rem;">Concepto del Gasto *</label>
                <input type="text" id="exp_concept" class="form-input" placeholder="ej. Empaques de lujo, Arriendo local, Servicios" required />
              </div>

              <div style="margin-bottom: 1rem;">
                <label style="display: block; font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.35rem;">Monto del Gasto (COP) *</label>
                <input type="number" id="exp_amount" class="form-input" placeholder="ej. 250000" required />
              </div>

              <div style="margin-bottom: 1.5rem;">
                <label style="display: block; font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.35rem;">Cuenta de Origen *</label>
                <select id="exp_account_id" class="form-input">
                  ${state.accounts.map(a => `<option value="${a.id}">${a.icon} ${a.name} (Saldo: ${formatCOP(a.balance)})</option>`).join('')}
                </select>
              </div>

              <div style="display: flex; justify-content: flex-end; gap: 0.75rem;">
                <button type="button" class="btn-secondary" onclick="window.yumax.closeModals()">Cancelar</button>
                <button type="submit" class="btn-gold">Registrar Egreso</button>
              </div>
            </form>
          </div>
        </div>
      `;
    }

    // Modal: Nuevo aporte de Inversión Inicial
    if (state.showNewInvestmentModal) {
      html += `
        <div class="modal-overlay" onclick="if(event.target === this) window.yumax.closeModals()">
          <div class="modal-container" style="max-width: 560px;">
            <div class="modal-header">
              <h3 style="color: var(--gold-light); margin: 0; font-size: 1.25rem; font-family: var(--font-serif);">💰 Registrar Aporte de Inversión</h3>
              <button class="btn-secondary" style="padding: 0.25rem 0.5rem;" onclick="window.yumax.closeModals()">✕</button>
            </div>

            <form onsubmit="window.yumax.submitInvestment(event)">
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 1rem;">
                <div>
                  <label style="display: block; font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.35rem;">Categoría *</label>
                  <select id="inv_category" class="form-input" onchange="window.yumax.onInvestmentCategoryChange(this.value)">
                    ${INVESTMENT_CATEGORIES.map(c => `<option value="${c.id}">${c.icon} ${c.label}</option>`).join('')}
                  </select>
                </div>
                <div>
                  <label style="display: block; font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.35rem;">Fecha del aporte *</label>
                  <input type="date" id="inv_date" class="form-input" value="${todayKey()}" required />
                </div>
              </div>

              <div style="margin-bottom: 1rem;">
                <label style="display: block; font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.35rem;">Fuente / Entidad</label>
                <input type="text" id="inv_source" class="form-input" placeholder="ej. Ahorros personales, Tarjeta Visa Bancolombia, Crédito libre inversión" />
              </div>

              <div style="margin-bottom: 1rem;">
                <label style="display: block; font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.35rem;">Monto (COP) *</label>
                <input type="number" id="inv_amount" class="form-input" min="1" step="1" placeholder="ej. 5000000" required />
              </div>

              <div id="inv_debt_fields" style="display: none; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 1rem;">
                <div>
                  <label style="display: block; font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.35rem;">Tasa de interés mensual (%)</label>
                  <input type="number" id="inv_rate" class="form-input" min="0" step="0.01" placeholder="ej. 2.1" />
                </div>
                <div>
                  <label style="display: block; font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.35rem;">Plazo (meses / cuotas)</label>
                  <input type="number" id="inv_term" class="form-input" min="0" step="1" placeholder="ej. 24" />
                </div>
              </div>

              <div style="margin-bottom: 1rem;">
                <label style="display: block; font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.35rem;">¿A qué cuenta ingresó el dinero?</label>
                <select id="inv_account_id" class="form-input">
                  <option value="">— Solo registrar (no afectar saldos de Tesorería)</option>
                  ${state.accounts.map(a => `<option value="${a.id}">${a.icon} ${a.name} (Saldo: ${formatCOP(a.balance)})</option>`).join('')}
                </select>
                <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 0.3rem;">Si eliges una cuenta, el monto se suma a su saldo. Déjalo en "Solo registrar" si ya ajustaste los saldos iniciales o el dinero se usó directo en compras.</div>
              </div>

              <div style="margin-bottom: 1.5rem;">
                <label style="display: block; font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.35rem;">Notas</label>
                <input type="text" id="inv_notes" class="form-input" placeholder="ej. Compra del primer lote de cadenas" />
              </div>

              <div style="display: flex; justify-content: flex-end; gap: 0.75rem;">
                <button type="button" class="btn-secondary" onclick="window.yumax.closeModals()">Cancelar</button>
                <button type="submit" class="btn-gold">Registrar Aporte</button>
              </div>
            </form>
          </div>
        </div>
      `;
    }

    // Modal: Kardex
    if (state.showKardexModal && state.selectedProductForKardex) {
      const p = state.selectedProductForKardex;
      const prodsMovements = state.movements.filter(m => m.product_id === p.id || m.product_sku === p.sku);

      html += `
        <div class="modal-overlay" onclick="if(event.target === this) window.yumax.closeModals()">
          <div class="modal-container" style="max-width: 750px;">
            <div class="modal-header">
              <div>
                <h3 style="color: var(--gold-light); margin: 0; font-size: 1.25rem; font-family: var(--font-serif);">📜 Historial Kardex: ${p.sku}</h3>
                <div style="font-size: 0.8rem; color: var(--text-secondary);">${p.name} • Stock actual: <strong>${p.stock} un</strong> • CPP: <strong>${formatCOP(p.average_cost)}</strong></div>
              </div>
              <button class="btn-secondary" style="padding: 0.25rem 0.5rem;" onclick="window.yumax.closeModals()">✕</button>
            </div>

            <div style="max-height: 400px; overflow-y: auto;">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Fecha</th>
                    <th>Tipo</th>
                    <th>Variación</th>
                    <th>Costo Unit.</th>
                    <th>Stock Final</th>
                    <th>Usuario</th>
                    <th>Detalle</th>
                  </tr>
                </thead>
                <tbody>
                  ${prodsMovements.length === 0 ? `
                    <tr><td colspan="7" style="text-align: center; padding: 2rem; color: var(--text-muted);">Sin movimientos registrados.</td></tr>
                  ` : prodsMovements.map(m => `
                    <tr>
                      <td style="font-size: 0.8rem; color: var(--text-secondary);">${m.date}</td>
                      <td>
                        <span class="badge ${m.quantity > 0 ? 'badge-emerald' : 'badge-danger'}">
                          ${m.type_label || m.type}
                        </span>
                      </td>
                      <td style="font-family: monospace; font-weight: 700; color: ${m.quantity > 0 ? 'var(--emerald-light)' : 'var(--danger-primary)'};">
                        ${m.quantity > 0 ? '+' : ''}${m.quantity}
                      </td>
                      <td style="font-family: monospace;">${formatCOP(m.unit_cost)}</td>
                      <td style="font-family: monospace; font-weight: 700;">${m.stock_after}</td>
                      <td style="font-size: 0.8rem; color: var(--text-secondary);">${m.user}</td>
                      <td style="font-size: 0.8rem; color: var(--text-muted);">${m.notes}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>

            <div style="display: flex; justify-content: flex-end; margin-top: 1.5rem;">
              <button class="btn-secondary" onclick="window.yumax.closeModals()">Cerrar</button>
            </div>
          </div>
        </div>
      `;
    }

    // Modal: Ajuste de Stock
    if (state.showAdjustmentModal) {
      const selectedId = state.selectedProductForAdjustment ? state.selectedProductForAdjustment.id : (state.products[0] ? state.products[0].id : '');

      html += `
        <div class="modal-overlay" onclick="if(event.target === this) window.yumax.closeModals()">
          <div class="modal-container" style="max-width: 500px;">
            <div class="modal-header">
              <h3 style="color: var(--gold-light); margin: 0; font-size: 1.25rem; font-family: var(--font-serif);">⚖️ Ajuste Manual de Inventario</h3>
              <button class="btn-secondary" style="padding: 0.25rem 0.5rem;" onclick="window.yumax.closeModals()">✕</button>
            </div>

            <form onsubmit="window.yumax.submitAdjustment(event)">
              <div style="margin-bottom: 1rem;">
                <label style="display: block; font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.35rem;">Joya a Ajustar *</label>
                <select id="adj_product_id" class="form-input" required>
                  ${state.products.map(p => `
                    <option value="${p.id}" ${p.id === selectedId ? 'selected' : ''}>
                      ${p.sku} — ${p.name} (Stock: ${p.stock})
                    </option>
                  `).join('')}
                </select>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
                <div>
                  <label style="display: block; font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.35rem;">Tipo de Ajuste *</label>
                  <select id="adj_type" class="form-input">
                    <option value="POSITIVE_ADJUSTMENT">Ajuste Positivo (+)</option>
                    <option value="NEGATIVE_ADJUSTMENT">Ajuste Negativo (-)</option>
                    <option value="ENTRY">Entrada por Taller (+)</option>
                    <option value="EXIT">Salida a Exhibición (-)</option>
                  </select>
                </div>
                <div>
                  <label style="display: block; font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.35rem;">Cantidad *</label>
                  <input type="number" id="adj_qty" class="form-input" value="1" min="1" required />
                </div>
              </div>

              <div style="margin-bottom: 1.5rem;">
                <label style="display: block; font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.35rem;">Motivo / Justificación *</label>
                <input type="text" id="adj_notes" class="form-input" placeholder="ej. Conteo físico de vitrina, merma, calibración" required />
              </div>

              <div style="display: flex; justify-content: flex-end; gap: 0.75rem;">
                <button type="button" class="btn-secondary" onclick="window.yumax.closeModals()">Cancelar</button>
                <button type="submit" class="btn-gold">Aplicar Ajuste a Kardex</button>
              </div>
            </form>
          </div>
        </div>
      `;
    }

    return html;
  }

  // ACCIONES GLOBALES EXPUESTAS EN WINDOW
  window.yumax = {
    // DASHBOARD: FILTRO DE PERIODO
    setDashPeriod(periodId) {
      state.dashPeriod = periodId;
      if (periodId === 'CUSTOM' && !state.dashFrom) {
        const r = getDashRange();
        state.dashFrom = r.from;
        state.dashTo = r.to;
      }
      render();
    },

    applyDashRange() {
      const fromEl = document.getElementById('dash_from');
      const toEl = document.getElementById('dash_to');
      if (fromEl && fromEl.value) state.dashFrom = fromEl.value;
      if (toEl && toEl.value) state.dashTo = toEl.value;
      state.dashPeriod = 'CUSTOM';
      render();
    },

    // INVERSIÓN INICIAL
    openNewInvestmentModal() {
      state.showNewInvestmentModal = true;
      render();
    },

    onInvestmentCategoryChange(catId) {
      const box = document.getElementById('inv_debt_fields');
      if (box) box.style.display = getInvestmentCategory(catId).isDebt ? 'grid' : 'none';
    },

    submitInvestment(e) {
      e.preventDefault();
      const category = document.getElementById('inv_category').value;
      const date = document.getElementById('inv_date').value || todayKey();
      const source = document.getElementById('inv_source').value.trim();
      const amount = parseFloat(document.getElementById('inv_amount').value);
      const rateVal = parseFloat(document.getElementById('inv_rate').value);
      const termVal = parseInt(document.getElementById('inv_term').value, 10);
      const accId = document.getElementById('inv_account_id').value;
      const notes = document.getElementById('inv_notes').value.trim();

      if (isNaN(amount) || amount <= 0) {
        alert('Ingresa un monto válido mayor a cero.');
        return;
      }

      const cat = getInvestmentCategory(category);
      const acc = accId ? state.accounts.find(a => a.id === accId) : null;
      if (acc) acc.balance = (Number(acc.balance) || 0) + amount;

      state.investments.push({
        id: 'INV-' + Date.now().toString(),
        category: cat.id,
        category_label: cat.label,
        source,
        amount,
        rate: cat.isDebt && !isNaN(rateVal) ? rateVal : null,
        term: cat.isDebt && !isNaN(termVal) ? termVal : null,
        date,
        account_id: acc ? acc.id : null,
        account_name: acc ? acc.name : null,
        notes,
        created_at: nowLocalStamp(),
        user: state.activeUser.email,
      });

      persistState();
      state.showNewInvestmentModal = false;
      render();
      alert(`Aporte de ${formatCOP(amount)} (${cat.label}) registrado${acc ? ' y sumado a ' + acc.name : ''}.`);
    },

    deleteInvestment(invId) {
      const inv = state.investments.find(i => i.id === invId);
      if (!inv) return;
      const acc = inv.account_id ? state.accounts.find(a => a.id === inv.account_id) : null;
      const msg = `¿Eliminar el aporte de ${formatCOP(inv.amount)} (${getInvestmentCategory(inv.category).label})?` +
        (acc ? `\n\nTambién se restará ${formatCOP(inv.amount)} del saldo de ${acc.name}.` : '');
      if (!confirm(msg)) return;
      if (acc) acc.balance = (Number(acc.balance) || 0) - (Number(inv.amount) || 0);
      state.investments = state.investments.filter(i => i.id !== invId);
      persistState();
      render();
    },

    setTab(tabId) {
      state.currentTab = tabId;
      state.mobileNavOpen = false;
      render();
      try { window.scrollTo(0, 0); } catch (e) { /* noop */ }
    },

    toggleMobileNav(open) {
      state.mobileNavOpen = typeof open === 'boolean' ? open : !state.mobileNavOpen;
      render();
    },

    setSearch(term) {
      state.inventorySearch = term;
      render();
    },

    setCategoryFilter(cat) {
      state.inventoryCategory = cat;
      render();
    },

    setLocationFilter(loc) {
      state.inventoryLocation = loc;
      render();
    },

    switchRole(role) {
      state.activeUser.role = role;
      render();
    },

    openNewProductModal() {
      state.showNewProductModal = true;
      render();
    },

    openNewSaleModal() {
      const firstAvailable = state.products.find(p => p.stock > 0);
      state.saleForm = {
        customer: '',
        phone: '',
        method: 'CASH',
        notes: '',
        items: [],
        pickerProductId: firstAvailable ? firstAvailable.id : '',
        pickerQty: 1,
        pickerPrice: firstAvailable ? firstAvailable.sale_price : 0,
      };
      state.showNewSaleModal = true;
      render();
    },

    openNewPurchaseModal() {
      const firstProd = state.products[0];
      state.purchaseForm = {
        supplier: '',
        invoice: 'COM-' + Math.floor(1000 + Math.random() * 9000),
        accountId: (state.accounts && state.accounts[0]) ? state.accounts[0].id : 'ACC-1',
        notes: '',
        items: [],
        pickerProductId: firstProd ? firstProd.id : '',
        pickerQty: 1,
        pickerCost: firstProd ? (firstProd.current_cost || firstProd.average_cost) : 0,
      };
      state.showNewPurchaseModal = true;
      render();
    },

    openNewExpenseModal() {
      state.showNewExpenseModal = true;
      render();
    },

    openAdjustmentModal() {
      state.selectedProductForAdjustment = null;
      state.showAdjustmentModal = true;
      render();
    },

    openQuickAdjustment(prodId) {
      const p = state.products.find(x => x.id === prodId);
      state.selectedProductForAdjustment = p || null;
      state.showAdjustmentModal = true;
      render();
    },

    openKardex(prodId) {
      const p = state.products.find(x => x.id === prodId);
      state.selectedProductForKardex = p || null;
      state.showKardexModal = true;
      render();
    },

    openDataManagementModal() {
      state.currentTab = 'datamanagement';
      render();
    },

    closeModals() {
      state.showNewProductModal = false;
      state.showAdjustmentModal = false;
      state.showKardexModal = false;
      state.showNewSaleModal = false;
      state.showNewPurchaseModal = false;
      state.showNewExpenseModal = false;
      state.showNewInvestmentModal = false;
      state.showReceiptModal = false;
      state.showPurchaseDetailModal = false;
      state.selectedProductForKardex = null;
      state.selectedProductForAdjustment = null;
      state.selectedSaleForReceipt = null;
      state.selectedPurchaseForDetail = null;
      render();
    },

    // GESTIÓN DE DATOS: LIMPIEZA DE DEMO
    clearAllDemoData() {
      const ok = confirm('¿Estás seguro de que deseas LIMPIAR TODOS los datos de ejemplo de Yumax Joyería?\n\nEl catálogo de joyas, movimientos de kardex, ventas, compras y créditos quedarán en cero para comenzar a ingresar los datos reales de tu negocio.\n\n(Los aportes registrados en Inversión Inicial se conservan.)');
      if (!ok) return;

      state.products = [];
      state.movements = [];
      state.sales = [];
      state.purchases = [];
      state.credits = [];
      state.expenses = [];
      state.customers = [];

      persistState();
      state.currentTab = 'inventory';
      render();
      alert('¡Base de datos limpiada con éxito! Ahora puedes comenzar a registrar tus joyas reales en Yumax Joyería.');
    },

    // GESTIÓN DE DATOS: RESTAURAR DEMO
    restoreDemoData() {
      const ok = confirm('¿Deseas restaurar los datos de demostración predeterminados de Yumax Joyería?');
      if (!ok) return;

      const demo = JSON.parse(JSON.stringify(DEFAULT_DEMO_DATA));
      state.products = demo.products;
      state.movements = demo.movements;
      state.accounts = demo.accounts;
      state.credits = demo.credits;
      state.sales = demo.sales;
      state.purchases = demo.purchases;
      state.expenses = demo.expenses;
      state.customers = demo.customers;
      state.suppliers = demo.suppliers;

      persistState();
      render();
      alert('Datos de demostración restaurados.');
    },

    // GESTIÓN DE DATOS: EXPORTAR BACKUP
    exportBackup() {
      const backupData = {
        exportDate: new Date().toISOString(),
        system: 'YUMAX Joyería — Elegante y Aspiracional',
        version: '1.0.0',
        data: {
          products: state.products,
          movements: state.movements,
          accounts: state.accounts,
          credits: state.credits,
          sales: state.sales,
          purchases: state.purchases,
          expenses: state.expenses,
          customers: state.customers,
          suppliers: state.suppliers,
          investments: state.investments,
        }
      };

      const json = JSON.stringify(backupData, null, 2);
      const filename = `YUMAX_Backup_Joyeria_${todayKey()}.json`;

      // En celular: compartir el archivo (WhatsApp, Drive, correo...) si el navegador lo permite
      try {
        const file = new File([json], filename, { type: 'application/json' });
        const isMobile = window.matchMedia && window.matchMedia('(max-width: 860px)').matches;
        if (isMobile && navigator.canShare && navigator.canShare({ files: [file] })) {
          navigator.share({ files: [file], title: 'Copia de seguridad Yumax' }).catch(() => {});
          return;
        }
      } catch (err) { /* continúa con la descarga normal */ }

      const blob = new Blob([json], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute('href', url);
      downloadAnchor.setAttribute('download', filename);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      setTimeout(() => URL.revokeObjectURL(url), 2000);
    },

    // GESTIÓN DE DATOS: IMPORTAR BACKUP
    importBackup(event) {
      const file = event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function (e) {
        try {
          const parsed = JSON.parse(e.target.result);
          const data = parsed.data || parsed;

          if (data.products) state.products = data.products;
          if (data.movements) state.movements = data.movements;
          if (data.accounts) state.accounts = data.accounts;
          if (data.credits) state.credits = data.credits;
          if (data.sales) state.sales = data.sales;
          if (data.purchases) state.purchases = data.purchases;
          if (data.expenses) state.expenses = data.expenses;
          if (data.customers) state.customers = data.customers;
          if (data.suppliers) state.suppliers = data.suppliers;
          if (data.investments) state.investments = data.investments;

          persistState();
          render();
          alert('¡Copia de seguridad de Yumax Joyería restaurada con éxito!');
        } catch (err) {
          alert('Error al leer el archivo JSON: ' + err.message);
        }
      };
      reader.readAsText(file);
    },

    // AJUSTAR SALDOS DE CUENTAS
    editAccountBalances() {
      state.accounts.forEach(acc => {
        const valStr = prompt(`Saldo para ${acc.name} (${acc.icon}):`, acc.balance);
        if (valStr !== null) {
          const val = parseFloat(valStr);
          if (!isNaN(val) && val >= 0) {
            acc.balance = val;
          }
        }
      });
      persistState();
      render();
      alert('Saldos de cuentas de Yumax Joyería actualizados correctamente.');
    },

    editSingleAccount(accId) {
      const acc = state.accounts.find(a => a.id === accId);
      if (!acc) return;
      const valStr = prompt(`Nuevo saldo para ${acc.name} en COP:`, acc.balance);
      if (valStr !== null) {
        const val = parseFloat(valStr);
        if (!isNaN(val) && val >= 0) {
          acc.balance = val;
          persistState();
          render();
        }
      }
    },

    deleteProduct(prodId) {
      const p = state.products.find(x => x.id === prodId);
      if (!p) return;
      const ok = confirm(`¿Deseas eliminar la joya ${p.sku} (${p.name}) del catálogo?`);
      if (!ok) return;

      state.products = state.products.filter(x => x.id !== prodId);
      persistState();
      render();
    },

    submitNewProduct(e) {
      e.preventDefault();
      const sku = document.getElementById('new_sku').value.toUpperCase().trim();
      const name = document.getElementById('new_name').value.trim();
      const category = document.getElementById('new_category').value;
      const material = document.getElementById('new_material').value.trim();
      const purity = document.getElementById('new_purity').value.trim();
      const weight = parseFloat(document.getElementById('new_weight').value);
      const stone = document.getElementById('new_stone').value.trim() || 'Sin Piedra';
      const size = document.getElementById('new_size').value.trim() || 'Estándar';
      const cost = parseFloat(document.getElementById('new_cost').value);
      const price = parseFloat(document.getElementById('new_price').value);
      const stock = parseInt(document.getElementById('new_stock').value, 10);
      const location = document.getElementById('new_location').value.trim();

      const newId = '018e5f30-' + Math.random().toString(16).slice(2, 6) + '-7000-8000-0000000000' + (state.products.length + 10);
      const barcode = '770' + Math.floor(1000000000 + Math.random() * 9000000000);
      const qr_code = 'YUMAX-' + sku;

      const product = {
        id: newId,
        sku,
        barcode,
        qr_code,
        name,
        description: `${name} en ${material} (${purity}) con peso de ${weight}g.`,
        category,
        jewelry_type: category,
        material,
        metal_purity: purity,
        weight_grams: weight,
        stone_type: stone,
        size,
        current_cost: cost,
        average_cost: cost,
        sale_price: price,
        stock,
        min_stock_alert: 1,
        location,
        status: 'ACTIVE',
      };

      state.products.unshift(product);

      if (stock > 0) {
        state.movements.unshift({
          id: 'MOV-' + Date.now().toString().slice(-4),
          product_id: newId,
          product_sku: sku,
          type: 'ENTRY',
          type_label: 'Inventario Inicial',
          quantity: stock,
          unit_cost: cost,
          total_cost: cost * stock,
          stock_after: stock,
          date: nowLocalStamp(),
          user: state.activeUser.email,
          notes: 'Registro inicial de joya real en catálogo Yumax',
        });
      }

      persistState();
      state.showNewProductModal = false;
      render();
      alert(`¡Joya ${sku} registrada exitosamente en Yumax Joyería!`);
    },

    onSaleCustomerSelect(custName) {
      state.saleForm.customer = custName;
      const found = state.customers.find(c => c.name.toLowerCase() === custName.toLowerCase().trim());
      if (found && found.phone) {
        state.saleForm.phone = found.phone;
        const phoneInput = document.getElementById('sale_phone');
        if (phoneInput) phoneInput.value = found.phone;
      }
    },

    onSaleProductPickerChange(prodId) {
      state.saleForm.pickerProductId = prodId;
      const p = state.products.find(x => x.id === prodId);
      if (p) {
        state.saleForm.pickerPrice = p.sale_price;
        state.saleForm.pickerQty = 1;
        const priceInput = document.getElementById('sale_picker_price');
        const qtyInput = document.getElementById('sale_picker_qty');
        const infoEl = document.getElementById('sale_picker_info');
        if (priceInput) priceInput.value = p.sale_price;
        if (qtyInput) qtyInput.value = 1;
        if (infoEl) infoEl.innerHTML = `Stock físico: <strong>${p.stock} un</strong> | Precio lista: <strong>${formatCOP(p.sale_price)}</strong>`;
      }
    },

    addSaleItem() {
      // Sincronizar campos de texto para no perder lo escrito
      const custEl = document.getElementById('sale_customer');
      const phoneEl = document.getElementById('sale_phone');
      const methodEl = document.getElementById('sale_method');
      if (custEl) state.saleForm.customer = custEl.value;
      if (phoneEl) state.saleForm.phone = phoneEl.value;
      if (methodEl) state.saleForm.method = methodEl.value;

      const prodId = document.getElementById('sale_picker_product_id')?.value || state.saleForm.pickerProductId;
      const qty = parseInt(document.getElementById('sale_picker_qty')?.value || '1', 10);
      const price = parseFloat(document.getElementById('sale_picker_price')?.value || '0');

      if (!prodId) {
        alert('Por favor selecciona una joya disponible.');
        return;
      }
      const prod = state.products.find(p => p.id === prodId);
      if (!prod) {
        alert('Joya no encontrada en catálogo.');
        return;
      }
      if (isNaN(qty) || qty <= 0) {
        alert('La cantidad a vender debe ser al menos 1.');
        return;
      }
      if (isNaN(price) || price < 0) {
        alert('El precio no puede ser negativo.');
        return;
      }

      // Validar stock disponible considerando lo que ya esté en el carrito
      const existing = state.saleForm.items.find(it => it.product_id === prod.id);
      const currentInCart = existing ? existing.quantity : 0;
      if (currentInCart + qty > prod.stock) {
        alert(`Stock insuficiente para ${prod.sku}. Stock físico disponible: ${prod.stock} piezas. Ya tienes ${currentInCart} en la venta.`);
        return;
      }

      if (existing) {
        existing.quantity += qty;
        existing.unit_price = price;
        existing.subtotal = existing.quantity * price;
      } else {
        state.saleForm.items.push({
          product_id: prod.id,
          sku: prod.sku,
          name: prod.name,
          jewelry_type: prod.jewelry_type,
          material: prod.material,
          quantity: qty,
          unit_price: price,
          subtotal: qty * price,
        });
      }

      state.saleForm.pickerQty = 1;
      render();
    },

    removeSaleItem(index) {
      const custEl = document.getElementById('sale_customer');
      const phoneEl = document.getElementById('sale_phone');
      const methodEl = document.getElementById('sale_method');
      if (custEl) state.saleForm.customer = custEl.value;
      if (phoneEl) state.saleForm.phone = phoneEl.value;
      if (methodEl) state.saleForm.method = methodEl.value;

      state.saleForm.items.splice(index, 1);
      render();
    },

    updateSaleItemQty(index, delta) {
      const it = state.saleForm.items[index];
      if (!it) return;
      const prod = state.products.find(p => p.id === it.product_id);
      const newQty = it.quantity + delta;
      if (newQty <= 0) {
        this.removeSaleItem(index);
        return;
      }
      if (prod && newQty > prod.stock) {
        alert(`Solo hay ${prod.stock} piezas de ${prod.sku} disponibles en inventario.`);
        return;
      }
      it.quantity = newQty;
      it.subtotal = it.quantity * it.unit_price;
      render();
    },

    submitSale(e) {
      if (e) e.preventDefault();
      const custEl = document.getElementById('sale_customer');
      const phoneEl = document.getElementById('sale_phone');
      const methodEl = document.getElementById('sale_method');

      const customer = (custEl ? custEl.value : state.saleForm.customer).trim();
      const phone = (phoneEl ? phoneEl.value : state.saleForm.phone).trim();
      const method = methodEl ? methodEl.value : state.saleForm.method;

      if (!customer) {
        alert('Por favor ingresa o selecciona el nombre del cliente.');
        return;
      }

      if (!state.saleForm.items || state.saleForm.items.length === 0) {
        alert('Debes agregar al menos una joya a la venta.');
        return;
      }

      // Verificación estricta de stock para cada ítem en tiempo de confirmación
      for (const it of state.saleForm.items) {
        const prod = state.products.find(p => p.id === it.product_id);
        if (!prod || prod.stock < it.quantity) {
          alert(`Stock insuficiente para ${it.sku} (${it.name}). Disponible: ${prod ? prod.stock : 0}, requerido: ${it.quantity}.`);
          return;
        }
      }

      const invoiceNumber = 'POS-' + Math.floor(892000 + Math.random() * 9000);
      const total = state.saleForm.items.reduce((acc, it) => acc + it.subtotal, 0);

      // 1. Descontar stock y registrar Kardex por cada joya vendida
      state.saleForm.items.forEach(it => {
        const prod = state.products.find(p => p.id === it.product_id);
        prod.stock -= it.quantity;

        state.movements.unshift({
          id: 'MOV-' + Date.now().toString().slice(-4) + '-' + Math.floor(Math.random() * 90),
          product_id: prod.id,
          product_sku: prod.sku,
          type: 'SALE',
          type_label: 'Venta POS',
          quantity: -it.quantity,
          unit_cost: prod.average_cost,
          total_cost: prod.average_cost * it.quantity,
          stock_after: prod.stock,
          date: nowLocalStamp(),
          user: state.activeUser.email,
          notes: `Venta comprobante ${invoiceNumber} a ${customer} (${it.sku} x${it.quantity})`,
        });
      });

      // 2. Crear Venta consolidada con todos sus elementos
      const newSale = {
        id: 'SALE-' + Date.now().toString().slice(-4),
        invoice: invoiceNumber,
        customer,
        phone: phone || 'No registrado',
        date: 'Hoy, ' + new Date().toLocaleTimeString().slice(0, 5),
        full_date: nowLocalStamp(),
        method,
        total,
        items: JSON.parse(JSON.stringify(state.saleForm.items)),
        status: method === 'CREDIT' ? 'CARTERA' : 'PAID',
        user: state.activeUser.email,
      };
      state.sales.unshift(newSale);

      // 3. Afectar Cartera o Tesorería
      if (method === 'CREDIT') {
        state.credits.unshift({
          id: 'CRED-' + Date.now().toString().slice(-4),
          customer,
          phone: phone || 'No registrado',
          invoice: invoiceNumber,
          total,
          paid: 0,
          balance: total,
          dueDate: new Date(Date.now() + 30 * 86400000).toISOString().slice(0, 10),
          status: 'ACTIVE',
        });
      } else {
        const targetAcc = state.accounts.find(a => a.type === method) || state.accounts[0];
        targetAcc.balance += total;
      }

      // 4. Actualizar o registrar Cliente en la base de datos
      let custObj = state.customers.find(c => c.name.toLowerCase() === customer.toLowerCase());
      if (custObj) {
        custObj.total_purchases = (custObj.total_purchases || 0) + total;
        if (phone && phone !== 'No registrado') custObj.phone = phone;
      } else {
        state.customers.push({
          id: 'CUST-' + Date.now().toString().slice(-4),
          name: customer,
          phone: phone || 'No registrado',
          email: '',
          total_purchases: total,
        });
      }

      persistState();
      state.showNewSaleModal = false;
      state.saleForm.items = [];
      state.selectedSaleForReceipt = newSale;
      state.showReceiptModal = true;
      render();
    },

    openSaleReceipt(saleId) {
      const s = state.sales.find(x => x.id === saleId || x.invoice === saleId);
      if (!s) return;
      state.selectedSaleForReceipt = s;
      state.showReceiptModal = true;
      render();
    },

    closeReceiptModal() {
      state.showReceiptModal = false;
      state.selectedSaleForReceipt = null;
      render();
    },

    // COMPRAS MULTI-ÍTEM
    onPurchaseProductPickerChange(prodId) {
      state.purchaseForm.pickerProductId = prodId;
      const p = state.products.find(x => x.id === prodId);
      if (p) {
        state.purchaseForm.pickerCost = p.current_cost || p.average_cost || 0;
        state.purchaseForm.pickerQty = 1;
        const costInput = document.getElementById('pur_picker_cost');
        const qtyInput = document.getElementById('pur_picker_qty');
        const infoEl = document.getElementById('pur_picker_info');
        if (costInput) costInput.value = state.purchaseForm.pickerCost;
        if (qtyInput) qtyInput.value = 1;
        if (infoEl) infoEl.innerHTML = `Stock actual: <strong>${p.stock} un</strong> • CPP actual: <strong>${formatCOP(p.average_cost)}</strong>`;
      }
    },

    addPurchaseItem() {
      const supEl = document.getElementById('pur_supplier');
      const invEl = document.getElementById('pur_invoice');
      const accEl = document.getElementById('pur_account');
      if (supEl) state.purchaseForm.supplier = supEl.value;
      if (invEl) state.purchaseForm.invoice = invEl.value;
      if (accEl) state.purchaseForm.accountId = accEl.value;

      const prodId = document.getElementById('pur_picker_product_id')?.value || state.purchaseForm.pickerProductId;
      const qty = parseInt(document.getElementById('pur_picker_qty')?.value || '1', 10);
      const cost = parseFloat(document.getElementById('pur_picker_cost')?.value || '0');

      if (!prodId) {
        alert('Por favor selecciona una joya a reabastecer.');
        return;
      }
      const prod = state.products.find(p => p.id === prodId);
      if (!prod) {
        alert('Joya no encontrada en catálogo.');
        return;
      }
      if (isNaN(qty) || qty <= 0) {
        alert('La cantidad a comprar debe ser al menos 1.');
        return;
      }
      if (isNaN(cost) || cost < 0) {
        alert('El costo unitario no puede ser negativo.');
        return;
      }

      // Proyección del nuevo CPP
      const curStock = prod.stock;
      const curAvgCost = prod.average_cost;
      const projectedStock = curStock + qty;
      const projectedAvgCost = Math.round((curStock * curAvgCost + qty * cost) / projectedStock);

      const existing = state.purchaseForm.items.find(it => it.product_id === prod.id);
      if (existing) {
        existing.quantity += qty;
        existing.unit_cost = cost;
        existing.subtotal = existing.quantity * cost;
        const finalStock = curStock + existing.quantity;
        existing.projected_cpp = Math.round((curStock * curAvgCost + existing.quantity * cost) / finalStock);
      } else {
        state.purchaseForm.items.push({
          product_id: prod.id,
          sku: prod.sku,
          name: prod.name,
          category: prod.category,
          quantity: qty,
          unit_cost: cost,
          subtotal: qty * cost,
          projected_cpp: projectedAvgCost,
        });
      }

      state.purchaseForm.pickerQty = 1;
      render();
    },

    removePurchaseItem(index) {
      const supEl = document.getElementById('pur_supplier');
      const invEl = document.getElementById('pur_invoice');
      const accEl = document.getElementById('pur_account');
      if (supEl) state.purchaseForm.supplier = supEl.value;
      if (invEl) state.purchaseForm.invoice = invEl.value;
      if (accEl) state.purchaseForm.accountId = accEl.value;

      state.purchaseForm.items.splice(index, 1);
      render();
    },

    submitPurchase(e) {
      if (e) e.preventDefault();
      const supEl = document.getElementById('pur_supplier');
      const invEl = document.getElementById('pur_invoice');
      const accEl = document.getElementById('pur_account');

      const supplier = (supEl ? supEl.value : state.purchaseForm.supplier).trim();
      const invoice = (invEl ? invEl.value : state.purchaseForm.invoice).trim();
      const accountId = accEl ? accEl.value : state.purchaseForm.accountId;

      if (!supplier) {
        alert('Por favor ingresa o selecciona el proveedor / orfebre.');
        return;
      }

      if (!state.purchaseForm.items || state.purchaseForm.items.length === 0) {
        alert('Debes agregar al menos una joya al lote de compra.');
        return;
      }

      const acc = state.accounts.find(a => a.id === accountId) || state.accounts[0];
      const totalPurchase = state.purchaseForm.items.reduce((acc, it) => acc + it.subtotal, 0);

      // 1. Recalcular CPP, actualizar stock y registrar Kardex por cada producto comprado
      state.purchaseForm.items.forEach(it => {
        const prod = state.products.find(p => p.id === it.product_id);
        if (!prod) return;

        const curStock = prod.stock;
        const curVal = curStock * prod.average_cost;
        const newVal = it.quantity * it.unit_cost;
        const newStock = curStock + it.quantity;
        const newAvgCost = Math.round((curVal + newVal) / newStock);

        prod.stock = newStock;
        prod.average_cost = newAvgCost;
        prod.current_cost = it.unit_cost;

        state.movements.unshift({
          id: 'MOV-' + Date.now().toString().slice(-4) + '-' + Math.floor(Math.random() * 90),
          product_id: prod.id,
          product_sku: prod.sku,
          type: 'PURCHASE',
          type_label: 'Compra Mercancía',
          quantity: it.quantity,
          unit_cost: it.unit_cost,
          total_cost: it.subtotal,
          stock_after: newStock,
          date: nowLocalStamp(),
          user: state.activeUser.email,
          notes: `Compra ${invoice} a ${supplier} - Joya: ${prod.sku} (x${it.quantity}) Nuevo CPP: ${formatCOP(newAvgCost)}`,
        });
      });

      // 2. Descontar total de la cuenta de tesorería
      acc.balance -= totalPurchase;

      // 3. Registrar Compra Consolidada
      const newPurchase = {
        id: 'PUR-' + Date.now().toString().slice(-4),
        purchase_number: invoice,
        supplier,
        date: 'Hoy, ' + new Date().toLocaleTimeString().slice(0, 5),
        full_date: nowLocalStamp(),
        account_id: acc.id,
        account_name: acc.name,
        total: totalPurchase,
        items: JSON.parse(JSON.stringify(state.purchaseForm.items)),
        user: state.activeUser.email,
      };
      state.purchases.unshift(newPurchase);

      // 4. Actualizar o registrar Proveedor en catálogo
      let supObj = state.suppliers.find(s => s.name.toLowerCase() === supplier.toLowerCase());
      if (!supObj) {
        state.suppliers.push({
          id: 'SUP-' + Date.now().toString().slice(-4),
          name: supplier,
          phone: '',
          contact: 'Contacto Directo',
          category: 'Insumos / Joyería',
        });
      }

      persistState();
      state.showNewPurchaseModal = false;
      state.purchaseForm.items = [];
      state.selectedPurchaseForDetail = newPurchase;
      state.showPurchaseDetailModal = true;
      render();
    },

    openPurchaseDetail(purId) {
      const p = state.purchases.find(x => x.id === purId || x.purchase_number === purId);
      if (!p) return;
      state.selectedPurchaseForDetail = p;
      state.showPurchaseDetailModal = true;
      render();
    },

    closePurchaseDetailModal() {
      state.showPurchaseDetailModal = false;
      state.selectedPurchaseForDetail = null;
      render();
    },

    submitExpense(e) {
      e.preventDefault();
      const concept = document.getElementById('exp_concept').value.trim();
      const amount = parseFloat(document.getElementById('exp_amount').value);
      const accId = document.getElementById('exp_account_id').value;

      const acc = state.accounts.find(a => a.id === accId) || state.accounts[0];
      acc.balance -= amount;

      state.expenses.unshift({
        id: 'EXP-' + Date.now().toString().slice(-4),
        concept,
        amount,
        account_id: acc.id,
        account_name: acc.name,
        date: 'Hoy, ' + new Date().toLocaleTimeString().slice(0, 5),
        full_date: nowLocalStamp(),
        user: state.activeUser.email,
      });

      persistState();
      state.showNewExpenseModal = false;
      render();
      alert(`Gasto de ${formatCOP(amount)} registrado y descontado de ${acc.name}.`);
    },

    submitAdjustment(e) {
      e.preventDefault();
      const prodId = document.getElementById('adj_product_id').value;
      const type = document.getElementById('adj_type').value;
      const qty = parseInt(document.getElementById('adj_qty').value, 10);
      const notes = document.getElementById('adj_notes').value.trim();

      const prod = state.products.find(p => p.id === prodId);
      if (!prod) return;

      const isAddition = type === 'POSITIVE_ADJUSTMENT' || type === 'ENTRY';
      const delta = isAddition ? qty : -qty;

      if (!isAddition && prod.stock < qty) {
        alert(`Error: No puede descontar ${qty} piezas de un stock actual de ${prod.stock}.`);
        return;
      }

      prod.stock += delta;

      state.movements.unshift({
        id: 'MOV-' + Date.now().toString().slice(-4),
        product_id: prod.id,
        product_sku: prod.sku,
        type,
        type_label: type === 'POSITIVE_ADJUSTMENT' ? 'Ajuste Positivo' : type === 'NEGATIVE_ADJUSTMENT' ? 'Ajuste Negativo' : type === 'ENTRY' ? 'Entrada Taller' : 'Salida Exhibición',
        quantity: delta,
        unit_cost: prod.average_cost,
        total_cost: prod.average_cost * qty,
        stock_after: prod.stock,
        date: nowLocalStamp(),
        user: state.activeUser.email,
        notes,
      });

      persistState();
      state.showAdjustmentModal = false;
      render();
      alert(`Ajuste aplicado con éxito a ${prod.sku}. Nuevo stock: ${prod.stock}`);
    },

    registerAbono(creditId) {
      const cred = state.credits.find(c => c.id === creditId);
      if (!cred) return;
      const amountStr = prompt(`Monto del abono para ${cred.customer} (Saldo actual: ${formatCOP(cred.balance)}):`, cred.balance);
      if (!amountStr) return;
      const amount = parseFloat(amountStr);
      if (isNaN(amount) || amount <= 0 || amount > cred.balance) {
        alert('Monto inválido o excede el saldo pendiente.');
        return;
      }

      cred.paid += amount;
      cred.balance -= amount;
      if (cred.balance === 0) cred.status = 'PAID';

      state.accounts[0].balance += amount;

      persistState();
      render();
      alert(`Abono de ${formatCOP(amount)} recibido y sumado a Caja General Efectivo.`);
    },

    mobileScanPrompt() {
      const sku = prompt('Simulación de Escaneo de Cámara Yumax:\nIngrese el SKU de la joya a escanear:', state.products[0] ? state.products[0].sku : 'YUM-AN-ORO-001');
      if (!sku) return;
      const p = state.products.find(x => x.sku.toUpperCase() === sku.toUpperCase().trim());
      if (p) {
        alert(`¡Joya Encontrada en Yumax!\n\nSKU: ${p.sku}\nNombre: ${p.name}\nPeso: ${p.weight_grams}g\nStock: ${p.stock}\nPrecio: ${formatCOP(p.sale_price)}`);
      } else {
        alert(`No se encontró ninguna joya con el SKU: ${sku}`);
      }
    },

    mobileQuickSale(prodId) {
      const p = state.products.find(x => x.id === prodId);
      if (!p) return;
      const cust = prompt(`Venta rápida de ${p.name}\nPrecio: ${formatCOP(p.sale_price)}\nNombre del Cliente:`, 'Cliente Mostrador');
      if (!cust) return;

      p.stock -= 1;
      const inv = 'POS-' + Math.floor(892000 + Math.random() * 9000);
      state.sales.unshift({
        id: 'SALE-' + Date.now().toString().slice(-4),
        invoice: inv,
        customer: cust,
        date: 'Hoy, ' + new Date().toLocaleTimeString().slice(0, 5),
        full_date: nowLocalStamp(),
        method: 'CASH',
        total: p.sale_price,
        status: 'PAID',
        items: [{ product_id: p.id, sku: p.sku, name: p.name, quantity: 1, unit_price: p.sale_price, subtotal: p.sale_price }],
        user: 'asesor@yumaxjoyeria.com',
      });
      state.accounts[0].balance += p.sale_price;

      state.movements.unshift({
        id: 'MOV-' + Date.now().toString().slice(-4),
        product_id: p.id,
        product_sku: p.sku,
        type: 'SALE',
        type_label: 'Venta Móvil Offline',
        quantity: -1,
        unit_cost: p.average_cost,
        total_cost: p.average_cost,
        stock_after: p.stock,
        date: nowLocalStamp(),
        user: 'asesor@yumaxjoyeria.com',
        notes: `Venta POS Móvil ${inv}`,
      });

      persistState();
      render();
      alert(`¡Venta ${inv} realizada con éxito! Recibo emitido.`);
    }
  };

  // Mantener compatibilidad con llamadas previas
  window.aurum = window.yumax;

  // INICIALIZAR RENDERIZADO
  render();

  // APP INSTALABLE (PWA): funciona sin internet una vez abierta desde un servidor web
  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').catch(err => console.warn('Service worker no registrado:', err));
    });
  }
})();
