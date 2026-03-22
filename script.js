
'use strict';


const PALETTE = {

  black:       '#0b0a09',
  white:       '#fdfaf6',
  'gray-50':   '#f9f7f4',
  'gray-100':  '#f0ece6',
  'gray-200':  '#e2dbd2',
  'gray-300':  '#c9bfb3',
  'gray-400':  '#a99b8e',
  'gray-500':  '#857567',
  'gray-600':  '#635649',
  'gray-700':  '#46372c',
  'gray-800':  '#2d2119',
  'gray-900':  '#1a1108',

  coffee:      '#6b3f1f',
  'coffee-50': '#fdf6ee',
  'coffee-100':'#f8e8d0',
  'coffee-200':'#eed0a8',
  'coffee-300':'#dfaf74',
  'coffee-400':'#cc8841',
  'coffee-500':'#b86d28',
  'coffee-600':'#9a531c',
  'coffee-700':'#7c3f14',
  'coffee-800':'#5e2d0d',
  'coffee-900':'#3d1c08',


  cream:       '#fdf3e4',
  beige:       '#f5e6c8',
  'beige-dark':'#e8d4a8',
  latte:       '#d4b896',
  caramel:     '#c8956c',
  mocha:       '#8b5e3c',

  'green-50':  '#f0f7f0',
  'green-100': '#d4ead4',
  'green-200': '#a8d4a8',
  'green-300': '#73b873',
  'green-400': '#4a9e4a',
  'green-500': '#2d7d2d',
  'green-600': '#1e5e1e',
  'green-700': '#164916',
  'green-800': '#0f340f',
  'green-900': '#082108',
  olive:       '#4a5240',
  sage:        '#7d8c6e',
  forest:      '#1e3a1e',
  matcha:      '#6b7c45',

  
  amber:       '#f59e0b',
  'amber-light':'#fbbf24',
  gold:        '#d4a017',
  honey:       '#e8a020',
  terracotta:  '#c1693a',
  rust:        '#a8432e',
  sienna:      '#8b4513',
  sand:        '#e8d5b0',

  
  'blue-50':   '#eff6ff',
  'blue-100':  '#dbeafe',
  'blue-200':  '#bfdbfe',
  'blue-300':  '#93c5fd',
  'blue-400':  '#60a5fa',
  'blue-500':  '#3b82f6',
  'blue-600':  '#2563eb',
  'blue-700':  '#1d4ed8',
  'blue-800':  '#1e40af',
  'blue-900':  '#1e3a8a',
  slate:       '#334155',
  navy:        '#1a2744',

 
  'red-400':   '#f87171',
  'red-500':   '#ef4444',
  'red-600':   '#dc2626',
  'red-700':   '#b91c1c',
  rose:        '#f43f5e',
  'pink-300':  '#f9a8d4',
  'pink-500':  '#ec4899',
  crimson:     '#dc143c',

  
  'purple-400':'#c084fc',
  'purple-500':'#a855f7',
  'purple-600':'#9333ea',
  lavender:    '#e8e0f0',
  violet:      '#7c3aed',

  
  yellow:      '#fbbf24',
  'yellow-100':'#fef9c3',
  'yellow-300':'#fde047',
  'yellow-500':'#eab308',
  lemon:       '#fef08a',

 
  transparent: 'transparent',
  current:     'currentColor',
};

const SPACING = (() => {
  const map = {};

  for (let i = 0; i <= 20; i++) map[String(i)] = `${i * 4}px`;
  
  map['0.5'] = '2px';
  map['1.5'] = '6px';
  map['2.5'] = '10px';
  map['3.5'] = '14px';

  map['24'] = '96px';
  map['28'] = '112px';
  map['32'] = '128px';
  map['36'] = '144px';
  map['40'] = '160px';
  map['48'] = '192px';
  map['56'] = '224px';
  map['64'] = '256px';
  return map;
})();

const FONT_SIZE = {
  xs:   ['0.75rem',   '1rem'],
  sm:   ['0.875rem',  '1.25rem'],
  base: ['1rem',      '1.5rem'],
  lg:   ['1.125rem',  '1.75rem'],
  xl:   ['1.25rem',   '1.75rem'],
  '2xl':['1.5rem',    '2rem'],
  '3xl':['1.875rem',  '2.25rem'],
  '4xl':['2.25rem',   '2.5rem'],
  '5xl':['3rem',      '1.15'],
  '6xl':['3.75rem',   '1.1'],
  '7xl':['4.5rem',    '1.05'],
  '8xl':['6rem',      '1'],
  '9xl':['8rem',      '1'],
};

const FONT_WEIGHT = {
  thin:       '100',
  extralight: '200',
  light:      '300',
  normal:     '400',
  medium:     '500',
  semibold:   '600',
  bold:       '700',
  extrabold:  '800',
  black:      '900',
};

const RADIUS = {
  none:  '0',
  sm:    '4px',
  md:    '8px',
  lg:    '12px',
  xl:    '16px',
  '2xl': '20px',
  '3xl': '28px',
  full:  '9999px',
  '':    '6px',
};

const SHADOW = {
  none: 'none',
  sm:   '0 1px 2px rgba(0,0,0,.08)',
  md:   '0 4px 12px rgba(0,0,0,.12)',
  lg:   '0 8px 24px rgba(0,0,0,.16)',
  xl:   '0 16px 48px rgba(0,0,0,.2)',
  '2xl':'0 24px 64px rgba(0,0,0,.25)',
  inner:'inset 0 2px 4px rgba(0,0,0,.08)',
  coffee:'0 8px 32px rgba(107,63,31,.25)',
  warm: '0 8px 32px rgba(200,149,108,.2)',
  glow: '0 0 32px rgba(200,149,108,.35)',
};

const GAP = (() => {
  const g = {};
  for (let i = 0; i <= 20; i++) g[String(i)] = `${i * 4}px`;
  g['px'] = '1px';
  return g;
})();

const WIDTH_MAP = {
  full: '100%',
  screen: '100vw',
  auto: 'auto',
  fit: 'fit-content',
  min: 'min-content',
  max: 'max-content',
  '1/2': '50%',
  '1/3': '33.333%',
  '2/3': '66.667%',
  '1/4': '25%',
  '3/4': '75%',
};

const HEIGHT_MAP = {
  full: '100%',
  screen: '100vh',
  auto: 'auto',
  fit: 'fit-content',
};

const Z_INDEX = {
  auto: 'auto',
  '0': '0', '10': '10', '20': '20', '30': '30', '40': '40',
  '50': '50', '100': '100',
};

const TRANSITION = {
  none:    'none',
  all:     'all 0.2s ease',
  colors:  'color 0.2s ease, background-color 0.2s ease, border-color 0.2s ease',
  opacity: 'opacity 0.2s ease',
  shadow:  'box-shadow 0.2s ease',
  transform:'transform 0.2s ease',
  fast:    'all 0.1s ease',
  slow:    'all 0.4s ease',
};

const CURSOR = {
  auto:    'auto',
  default: 'default',
  pointer: 'pointer',
  wait:    'wait',
  text:    'text',
  move:    'move',
  'not-allowed': 'not-allowed',
};



const HANDLERS = {

 
  bg(segs) {
    const key = segs.slice(1).join('-');
    const col = PALETTE[key];
    if (!col) return null;
    return { backgroundColor: col };
  },


  text(segs) {
    const token = segs.slice(1).join('-');
    if (['left','center','right','justify','start','end'].includes(token))
      return { textAlign: token };
    if (FONT_SIZE[token]) {
      const [size, lh] = FONT_SIZE[token];
      return { fontSize: size, lineHeight: lh };
    }
    const col = PALETTE[token];
    if (col) return { color: col };
    return null;
  },


  font(segs) {
    const token = segs[1];
    if (FONT_WEIGHT[token]) return { fontWeight: FONT_WEIGHT[token] };
    const families = {
      sans:  "'DM Sans', system-ui, sans-serif",
      serif: "'Lora', Georgia, serif",
      mono:  "'JetBrains Mono', 'Courier New', monospace",
      display: "'Cormorant Garamond', Georgia, serif",
    };
    if (families[token]) return { fontFamily: families[token] };
    return null;
  },

 
  p(segs) { return spacing('padding', segs); },
  m(segs) { return spacing('margin',  segs); },

  
  border(segs) {
    const rest = segs.slice(1).join('-');
    if (!rest)          return { border: '1px solid rgba(0,0,0,0.15)', boxSizing: 'border-box' };
    if (rest === '0')   return { border: 'none' };
    if (/^\d+$/.test(rest)) return { borderWidth: `${rest}px`, borderStyle: 'solid', borderColor: 'rgba(0,0,0,0.15)', boxSizing:'border-box' };
    if (rest === 'none')return { borderStyle: 'none' };
    if (rest === 'dashed') return { borderStyle: 'dashed' };
    if (rest === 'dotted') return { borderStyle: 'dotted' };
    
    const col = PALETTE[rest];
    if (col) return { borderColor: col };
    
    const sides = { t:'borderTop', b:'borderBottom', l:'borderLeft', r:'borderRight' };
    if (sides[rest]) return { [sides[rest]]: '1px solid rgba(0,0,0,0.15)' };
    return null;
  },

  
  rounded(segs) {
    const key = segs.slice(1).join('-');
    const val = RADIUS[key] !== undefined ? RADIUS[key] : RADIUS[''];
    return { borderRadius: val };
  },

  flex(segs) {
    const token = segs.slice(1).join('-');
    if (!token) return { display: 'flex' };
    if (token === 'row')    return { flexDirection: 'row' };
    if (token === 'col')    return { flexDirection: 'column' };
    if (token === 'wrap')   return { flexWrap: 'wrap' };
    if (token === 'nowrap') return { flexWrap: 'nowrap' };
    if (token === '1')      return { flex: '1 1 0%' };
    if (token === 'auto')   return { flex: '1 1 auto' };
    if (token === 'none')   return { flex: 'none' };
    if (token === 'grow')   return { flexGrow: '1' };
    if (token === 'shrink') return { flexShrink: '1' };
  
    if (/^\d+$/.test(token)) return { flex: token };
    return null;
  },


  grid(segs) {
    const token = segs.slice(1).join('-');
    if (!token) return { display: 'grid' };
    if (token.startsWith('cols-')) {
      const n = token.split('-')[1];
      return { gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))` };
    }
    if (token.startsWith('rows-')) {
      const n = token.split('-')[1];
      return { gridTemplateRows: `repeat(${n}, minmax(0, 1fr))` };
    }
    return null;
  },


  justify(segs) {
    const map = {
      start:   'flex-start',
      end:     'flex-end',
      center:  'center',
      between: 'space-between',
      around:  'space-around',
      evenly:  'space-evenly',
    };
    const key = segs.slice(1).join('-');
    return map[key] ? { justifyContent: map[key] } : null;
  },

 
  items(segs) {
    const map = {
      start:    'flex-start',
      end:      'flex-end',
      center:   'center',
      baseline: 'baseline',
      stretch:  'stretch',
    };
    const key = segs.slice(1).join('-');
    return map[key] ? { alignItems: map[key] } : null;
  },


  self(segs) {
    const map = { start:'flex-start', end:'flex-end', center:'center', stretch:'stretch', auto:'auto' };
    const key = segs[1];
    return map[key] ? { alignSelf: map[key] } : null;
  },

  gap(segs) {
    const rest = segs.slice(1).join('-');
    if (rest.startsWith('x-')) {
      const n = rest.slice(2);
      return GAP[n] ? { columnGap: GAP[n] } : null;
    }
    if (rest.startsWith('y-')) {
      const n = rest.slice(2);
      return GAP[n] ? { rowGap: GAP[n] } : null;
    }
    return GAP[rest] ? { gap: GAP[rest] } : null;
  },

  
  shadow(segs) {
    const key = segs.slice(1).join('-');
    return SHADOW[key !== undefined ? key : 'md'] ? { boxShadow: SHADOW[key] || SHADOW['md'] } : null;
  },

  opacity(segs) {
    const val = segs[1];
    if (!val) return null;
    return { opacity: String(parseInt(val) / 100) };
  },

  block(segs)        { return { display: 'block' }; },
  inline(segs) {
    const next = segs[1];
    if (next === 'flex')  return { display: 'inline-flex' };
    if (next === 'block') return { display: 'inline-block' };
    if (next === 'grid')  return { display: 'inline-grid' };
    return { display: 'inline' };
  },
  hidden(segs)       { return { display: 'none' }; },

  // ── Overflow ─────────────────────────────────────────────
  overflow(segs) {
    const map = { hidden:'hidden', auto:'auto', scroll:'scroll', visible:'visible' };
    const key = segs[1];
    if (!key) return null;
    if (segs[2]) {
    
      const axis = key === 'x' ? 'overflowX' : 'overflowY';
      return map[segs[2]] ? { [axis]: map[segs[2]] } : null;
    }
    return map[key] ? { overflow: map[key] } : null;
  },

  relative(segs) { return { position: 'relative' }; },
  absolute(segs) { return { position: 'absolute' }; },
  fixed(segs)    { return { position: 'fixed' }; },
  sticky(segs)   { return { position: 'sticky' }; },

  w(segs) {
    const key = segs.slice(1).join('/');
    return WIDTH_MAP[key] ? { width: WIDTH_MAP[key] } : null;
  },
  h(segs) {
    const key = segs.slice(1).join('/');
    return HEIGHT_MAP[key] ? { height: HEIGHT_MAP[key] } : null;
  },


  'max-w'(segs) {
    const map = {
      xs:'320px', sm:'384px', md:'448px', lg:'512px',
      xl:'576px', '2xl':'672px', '3xl':'768px', '4xl':'896px',
      '5xl':'1024px', '6xl':'1152px', '7xl':'1280px',
      full:'100%', none:'none',
    };
    const key = segs.slice(2).join('-');
    return map[key] ? { maxWidth: map[key] } : null;
  },
  'min-w'(segs) {
    const map = { '0':'0', full:'100%', min:'min-content', max:'max-content' };
    const key = segs[2];
    return map[key] ? { minWidth: map[key] } : null;
  },

 
  z(segs) {
    const key = segs[1];
    return Z_INDEX[key] ? { zIndex: Z_INDEX[key] } : null;
  },

 
  cursor(segs) {
    const key = segs.slice(1).join('-');
    return CURSOR[key] ? { cursor: CURSOR[key] } : null;
  },


  transition(segs) {
    const key = segs.slice(1).join('-');
    const val = TRANSITION[key] || TRANSITION['all'];
    return { transition: val };
  },


  scale(segs) {
    const val = segs[1];
    if (!val) return null;
    const n = parseInt(val) / 100;
    return { transform: `scale(${n})` };
  },
  rotate(segs) {
    const val = segs[1];
    return val ? { transform: `rotate(${val}deg)` } : null;
  },
  translate(segs) {
    if (segs[1] === 'x') return { transform: `translateX(${SPACING[segs[2]] || segs[2]})` };
    if (segs[1] === 'y') return { transform: `translateY(${SPACING[segs[2]] || segs[2]})` };
    return null;
  },


  select(segs)   { const m={none:'none',text:'text',all:'all',auto:'auto'}; return m[segs[1]]?{userSelect:m[segs[1]]}:null; },
  whitespace(segs){ const m={'no-wrap':'nowrap',wrap:'normal',nowrap:'nowrap',pre:'pre'}; return m[segs[1]]?{whiteSpace:m[segs[1]]}:null; },
  truncate(segs) { return { overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }; },
  italic(segs)   { return { fontStyle: 'italic' }; },
  uppercase(segs){ return { textTransform: 'uppercase' }; },
  lowercase(segs){ return { textTransform: 'lowercase' }; },
  capitalize(segs){ return { textTransform: 'capitalize' }; },
  underline(segs){ return { textDecoration: 'underline' }; },
  'line-through'(segs){ return { textDecoration: 'line-through' }; },
  'no-underline'(segs){ return { textDecoration: 'none' }; },
  leading(segs) {
    const map = { none:'1', tight:'1.25', snug:'1.375', normal:'1.5', relaxed:'1.625', loose:'2' };
    return map[segs[1]] ? { lineHeight: map[segs[1]] } : null;
  },
  tracking(segs) {
    const map = { tighter:'-0.05em', tight:'-0.025em', normal:'0em', wide:'0.025em', wider:'0.05em', widest:'0.1em' };
    return map[segs[1]] ? { letterSpacing: map[segs[1]] } : null;
  },
  list(segs) {
    if (segs[1]==='none') return { listStyle: 'none' };
    return null;
  },
  'pointer-events'(segs){ return { pointerEvents: segs[1] === 'none' ? 'none' : 'auto' }; },
  'object-fit'(segs){ return { objectFit: segs[1] }; },
  'object-cover'(segs){ return { objectFit: 'cover' }; },
  aspect(segs){ const m={'square':'1/1','video':'16/9'}; return m[segs[1]] ? { aspectRatio: m[segs[1]] } : null; },
};


function spacing(type, segs) {
  const dir   = segs[0]; 
  const n     = segs.slice(1).join('-');
  const val   = SPACING[n];
  if (!val) return null;

  const prop  = type === 'padding' ? 'padding' : 'margin';
  const dirMap = {
    [`${prop[0]}`]:     { [prop]: val },
    [`${prop[0]}x`]:    { [`${prop}Left`]: val, [`${prop}Right`]: val },
    [`${prop[0]}y`]:    { [`${prop}Top`]: val, [`${prop}Bottom`]: val },
    [`${prop[0]}t`]:    { [`${prop}Top`]: val },
    [`${prop[0]}r`]:    { [`${prop}Right`]: val },
    [`${prop[0]}b`]:    { [`${prop}Bottom`]: val },
    [`${prop[0]}l`]:    { [`${prop}Left`]: val },
  };
  return dirMap[dir] || null;
}

function resolveHandlerKey(segs) {

  if (segs.length >= 2) {
    const twoKey = `${segs[0]}-${segs[1]}`;
    if (HANDLERS[twoKey]) return [HANDLERS[twoKey], segs.slice(0)];
  }
  const key = segs[0];
  if (HANDLERS[key]) return [HANDLERS[key], segs];
  return [null, segs];
}

function parseClass(cls) {
  if (!cls.startsWith('chai-')) return null;
  const raw  = cls.slice(5);    
  const segs = raw.split('-');     

  if (segs.length === 0 || !segs[0]) return null;

  const paddingSet = new Set(['p','px','py','pt','pr','pb','pl']);
  const marginSet  = new Set(['m','mx','my','mt','mr','mb','ml']);

  if (paddingSet.has(segs[0])) return spacing('padding', segs);
  if (marginSet.has(segs[0]))  return spacing('margin',  segs);

  const [handler, resolvedSegs] = resolveHandlerKey(segs);
  if (typeof handler === 'function') return handler(resolvedSegs);

  return null;
}



function parseHoverClass(cls) {
  if (!cls.startsWith('chai-hover-')) return null;
  const inner = cls.slice(11); // strip "chai-hover-"
  return parseClass(`chai-${inner}`);
}

const hoverClasses = new Set();

function applyHoverListeners(el) {
  const classes = Array.from(el.classList);
  const hoverCls = classes.filter(c => c.startsWith('chai-hover-'));
  if (hoverCls.length === 0) return;

  const hoverStyles = {};
  hoverCls.forEach(cls => {
    const s = parseHoverClass(cls);
    if (s) Object.assign(hoverStyles, s);
    hoverClasses.add(cls);
  });

  const savedStyles = {};
  el.addEventListener('mouseenter', () => {
    Object.keys(hoverStyles).forEach(prop => {
      savedStyles[prop] = el.style[prop];
      el.style[prop] = hoverStyles[prop];
    });
  });
  el.addEventListener('mouseleave', () => {
    Object.keys(savedStyles).forEach(prop => {
      el.style[prop] = savedStyles[prop];
    });
  });
}




const stats = {
  elements: 0,
  classes:  0,
  rules:    0,
  unknown:  new Set(),
  freq:     {},
};

function applyChaiStyles(root = document) {
  const elements = root.querySelectorAll('[class]');

  elements.forEach(el => {
    const classes = Array.from(el.classList);
    const chaiCls = classes.filter(c => c.startsWith('chai-') && !c.startsWith('chai-hover-'));
    if (chaiCls.length === 0 && !classes.some(c => c.startsWith('chai-hover-'))) return;

    stats.elements++;
    const merged = {};

    chaiCls.forEach(cls => {
      stats.classes++;
      stats.freq[cls] = (stats.freq[cls] || 0) + 1;
      const s = parseClass(cls);
      if (!s) { stats.unknown.add(cls); return; }
      Object.assign(merged, s);
    });

    if (Object.keys(merged).length > 0) {
      Object.assign(el.style, merged);
      stats.rules += Object.keys(merged).length;
    }

    applyHoverListeners(el);
  });
}



const THEMES = {
  'warm-dark': {
    '--bg-page':    '#0f0b08',
    '--bg-card':    '#1a1108',
    '--bg-surface': '#251810',
    '--text-primary':  '#fdf3e4',
    '--text-secondary':'#d4b896',
    '--text-muted':    '#a99b8e',
    '--accent':        '#c8956c',
    '--accent-hover':  '#dfb080',
    '--border':        'rgba(200,149,108,0.15)',
    '--shadow':        'rgba(0,0,0,0.5)',
    '--nav-bg':        'rgba(15,11,8,0.92)',
  },
  'warm-light': {
    '--bg-page':    '#fdf6ee',
    '--bg-card':    '#fff9f2',
    '--bg-surface': '#f5e6c8',
    '--text-primary':  '#2d2119',
    '--text-secondary':'#635649',
    '--text-muted':    '#857567',
    '--accent':        '#9a531c',
    '--accent-hover':  '#7c3f14',
    '--border':        'rgba(107,63,31,0.15)',
    '--shadow':        'rgba(107,63,31,0.12)',
    '--nav-bg':        'rgba(253,246,238,0.95)',
  },
  'forest-dark': {
    '--bg-page':    '#080f08',
    '--bg-card':    '#0f1a0f',
    '--bg-surface': '#152415',
    '--text-primary':  '#f0f7f0',
    '--text-secondary':'#a8c8a8',
    '--text-muted':    '#73a073',
    '--accent':        '#4a9e4a',
    '--accent-hover':  '#5ab85a',
    '--border':        'rgba(74,158,74,0.2)',
    '--shadow':        'rgba(0,0,0,0.5)',
    '--nav-bg':        'rgba(8,15,8,0.95)',
  },
  'slate-modern': {
    '--bg-page':    '#0f1117',
    '--bg-card':    '#1a1f2e',
    '--bg-surface': '#252b3d',
    '--text-primary':  '#e8edf5',
    '--text-secondary':'#94a3b8',
    '--text-muted':    '#64748b',
    '--accent':        '#f59e0b',
    '--accent-hover':  '#fbbf24',
    '--border':        'rgba(148,163,184,0.15)',
    '--shadow':        'rgba(0,0,0,0.5)',
    '--nav-bg':        'rgba(15,17,23,0.95)',
  },
};

let currentTheme = 'warm-dark';

function applyTheme(name) {
  const theme = THEMES[name];
  if (!theme) return;
  currentTheme = name;
  const root = document.documentElement;
  Object.entries(theme).forEach(([k, v]) => root.style.setProperty(k, v));

  document.querySelectorAll('.theme-btn').forEach(btn => {
    const active = btn.dataset.theme === name;
    btn.style.borderColor   = active ? 'var(--accent)' : 'transparent';
    btn.style.transform     = active ? 'scale(1.15)' : 'scale(1)';
  });
}



function setupColorGenerator() {
  const picker = document.getElementById('color-picker');
  const apply  = document.getElementById('apply-color');
  const preview= document.getElementById('color-preview');
  const label  = document.getElementById('color-class');
  const sample = document.getElementById('color-sample');

  if (!picker || !apply) return;

  function updatePreview(hex) {
    if (preview) {
      preview.style.backgroundColor = hex;
      preview.style.width  = '100%';
      preview.style.height = '100%';
    }
    if (label) {
      label.textContent = `chai-bg-[${hex}]`;
    }
    if (sample) {
      sample.style.backgroundColor = hex;
    }
  }

  picker.addEventListener('input', e => updatePreview(e.target.value));

  apply.addEventListener('click', () => {
    const hex = picker.value;
    const key = `custom-${Date.now()}`;
    PALETTE[key] = hex;


    const overlay = document.getElementById('hero-overlay');
    if (overlay) {
      overlay.style.background = `linear-gradient(135deg, ${hex}44, ${hex}22)`;
    }


    apply.textContent = '✓ Applied!';
    apply.style.backgroundColor = hex;
    apply.style.color = isLight(hex) ? '#0b0a09' : '#fdfaf6';
    setTimeout(() => {
      apply.textContent = 'Apply Color';
      apply.style.backgroundColor = 'var(--accent)';
      apply.style.color = '#fff';
    }, 2000);
  });

  updatePreview(picker.value);
}

function isLight(hex) {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return (r*299 + g*587 + b*114) / 1000 > 128;
}




function setupScrollAnimations() {
  const items = document.querySelectorAll('[data-animate]');
  if (!items.length) return;

  items.forEach(el => {
    el.style.opacity   = '0';
    el.style.transform = el.dataset.animate === 'up'   ? 'translateY(28px)' :
                         el.dataset.animate === 'left'  ? 'translateX(-28px)' :
                         el.dataset.animate === 'right' ? 'translateX(28px)'  :
                         'scale(0.95)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = parseFloat(el.dataset.delay || 0);
        setTimeout(() => {
          el.style.opacity   = '1';
          el.style.transform = 'none';
        }, delay);
        io.unobserve(el);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  items.forEach(el => io.observe(el));
}



function setupNavbar() {
  const nav = document.getElementById('navbar');
  if (!nav) return;

  let lastY = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    nav.style.backdropFilter = y > 40 ? 'blur(20px) saturate(1.5)' : 'none';
    nav.style.boxShadow      = y > 40 ? '0 2px 24px var(--shadow)' : 'none';
    nav.style.borderBottom   = y > 40 ? '1px solid var(--border)' : '1px solid transparent';
    lastY = y;
  });


  const toggle = document.getElementById('nav-toggle');
  const menu   = document.getElementById('nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.style.display !== 'none' && menu.style.display !== '';
      menu.style.display = open ? 'none' : 'flex';
    });
  }
}





function setupMenuFilter() {
  const tabs  = document.querySelectorAll('.menu-tab');
  const cards = document.querySelectorAll('.menu-item-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const cat = tab.dataset.cat;

      tabs.forEach(t => {
        t.style.backgroundColor = 'transparent';
        t.style.color = 'var(--text-secondary)';
        t.style.borderColor = 'transparent';
      });
      tab.style.backgroundColor = 'var(--accent)';
      tab.style.color = '#fff';
      tab.style.borderColor = 'var(--accent)';

      cards.forEach(card => {
        const match = cat === 'all' || card.dataset.cat === cat;
        card.style.display = match ? 'flex' : 'none';
        if (match) {
          card.style.animation = 'fadeIn 0.35s ease forwards';
        }
      });
    });
  });
}



function renderStats() {
  const panel = document.getElementById('engine-stats');
  if (!panel) return;

  const topClasses = Object.entries(stats.freq)
    .sort((a,b) => b[1]-a[1])
    .slice(0, 10);

  panel.innerHTML = '';

  const nums = [
    { v: stats.elements,       l: 'Elements' },
    { v: stats.classes,        l: 'Classes Parsed' },
    { v: stats.rules,          l: 'Rules Applied' },
    { v: Object.keys(stats.freq).length, l: 'Unique Classes' },
  ];

  const grid = document.createElement('div');
  Object.assign(grid.style, {
    display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(130px,1fr))',
    gap:'12px', marginBottom:'20px',
  });

  nums.forEach(({ v, l }) => {
    const box = document.createElement('div');
    Object.assign(box.style, {
      textAlign:'center', padding:'16px 12px',
      background:'var(--bg-surface)', borderRadius:'12px',
      border:'1px solid var(--border)',
    });
    const n = document.createElement('div');
    n.textContent = v.toLocaleString();
    Object.assign(n.style, { fontSize:'1.75rem', fontWeight:'700', color:'var(--accent)', lineHeight:'1' });
    const lbl = document.createElement('div');
    lbl.textContent = l;
    Object.assign(lbl.style, { fontSize:'0.7rem', color:'var(--text-muted)', marginTop:'4px', letterSpacing:'0.08em', textTransform:'uppercase' });
    box.append(n, lbl);
    grid.appendChild(box);
  });
  panel.appendChild(grid);

  const heading = document.createElement('p');
  heading.textContent = 'Top 10 Most-Used Utilities';
  Object.assign(heading.style, { fontSize:'0.75rem', color:'var(--text-secondary)', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:'10px' });
  panel.appendChild(heading);

  const pills = document.createElement('div');
  Object.assign(pills.style, { display:'flex', flexWrap:'wrap', gap:'8px' });
  topClasses.forEach(([cls, cnt]) => {
    const p = document.createElement('span');
    p.textContent = `${cls} ×${cnt}`;
    Object.assign(p.style, {
      padding:'4px 12px', borderRadius:'9999px', fontSize:'0.72rem',
      background:'var(--bg-surface)', color:'var(--accent)',
      border:'1px solid var(--border)', fontFamily:'monospace',
    });
    pills.appendChild(p);
  });
  panel.appendChild(pills);
}




function injectKeyframes() {
  const s = document.createElement('style');
  s.textContent = `
    @keyframes fadeIn { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:none} }
    @keyframes shimmer { 0%{background-position:200% center} 100%{background-position:-200% center} }
    @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
    @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.6} }
    * { box-sizing: border-box; }
    :root {
      --bg-page:#0f0b08; --bg-card:#1a1108; --bg-surface:#251810;
      --text-primary:#fdf3e4; --text-secondary:#d4b896; --text-muted:#a99b8e;
      --accent:#c8956c; --accent-hover:#dfb080;
      --border:rgba(200,149,108,0.15); --shadow:rgba(0,0,0,0.5);
      --nav-bg:rgba(15,11,8,0.92);
    }
    html { scroll-behavior: smooth; }
    body { margin:0; padding:0; }
    ::-webkit-scrollbar { width:6px; }
    ::-webkit-scrollbar-track { background:var(--bg-page); }
    ::-webkit-scrollbar-thumb { background:var(--accent); border-radius:3px; }
    .menu-item-card { flex-direction:column; }
  `;
  document.head.appendChild(s);
}



document.addEventListener('DOMContentLoaded', () => {
  console.log('%c☕ ChaiCSS v2.0 — Initialising…', 'color:#c8956c;font-size:1.1rem;font-weight:700;');

  injectKeyframes();
  applyChaiStyles();
  applyTheme('warm-dark');
  setupColorGenerator();
  setupScrollAnimations();
  setupNavbar();
  setupMenuFilter();


  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.addEventListener('click', () => applyTheme(btn.dataset.theme));
  });

  renderStats();

  console.log(`%c✔ ${stats.rules} style rules applied across ${stats.elements} elements`, 'color:#d4b896;');
  console.log('%c🔧 window.ChaiCSS available for inspection', 'color:#a99b8e;');
});


window.ChaiCSS = {
  version: '2.0.0',
  parse:   parseClass,
  apply:   applyChaiStyles,
  theme:   applyTheme,
  themes:  Object.keys(THEMES),
  stats:   () => ({ ...stats, unknown: [...stats.unknown] }),
  palette: () => ({ ...PALETTE }),
  spacing: () => ({ ...SPACING }),
  addColor(name, hex) { PALETTE[name] = hex; return `chai-bg-${name} / chai-text-${name} registered`; },
  inspect(cls) { return parseClass(cls); },
};