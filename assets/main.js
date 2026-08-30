/* ============================================================
   Project data + rendering
   To add a project: copy an object into PROJECTS. That's it.

   image: put a file in assets/img/ and name it here.
          If the file is missing, the signal glyph shows instead.
   tags:  any of "hardware", "firmware", "software"
   href:  optional — link to a detail page
   ============================================================ */

const GLYPH = {
  // rising, noisy learning curve
  curve: '<svg viewBox="0 0 120 48" aria-hidden="true"><path d="M4 42 C14 41 18 33 26 34 C34 35 37 26 45 28 C53 30 56 20 64 21 C72 22 76 15 84 16 C92 17 98 11 116 9"/></svg>',
  // clock / square wave
  square: '<svg viewBox="0 0 120 48" aria-hidden="true"><path d="M4 38 H20 V12 H40 V38 H60 V12 H80 V38 H100 V12 H116"/></svg>',
  // ECG PQRST complex
  ecg: '<svg viewBox="0 0 120 48" aria-hidden="true"><path d="M4 28 H22 L27 22 L32 28 H44 L48 34 L54 8 L60 42 L65 28 H76 L83 19 L90 28 H116"/></svg>',
  // fork into two pipes, rejoining
  fork: '<svg viewBox="0 0 120 48" aria-hidden="true"><path d="M4 24 H34"/><path d="M34 24 C44 24 44 12 54 12 H80"/><path d="M34 24 C44 24 44 36 54 36 H80"/><path d="M80 12 C90 12 90 24 100 24 H116"/><path d="M80 36 C90 36 90 24 100 24"/></svg>',
  // staggered gait phases, six legs
  gait: '<svg viewBox="0 0 120 48" aria-hidden="true"><path d="M6 10 H30"/><path d="M42 10 H66"/><path d="M78 10 H102"/><path d="M18 24 H42"/><path d="M54 24 H78"/><path d="M90 24 H114"/><path d="M6 38 H30"/><path d="M42 38 H66"/><path d="M78 38 H102"/></svg>',
  // tag read burst, then a latch step
  pulse: '<svg viewBox="0 0 120 48" aria-hidden="true"><path d="M4 34 H30 L34 14 L38 34 L42 14 L46 34 L50 14 L54 34 H74 V16 H116"/></svg>',
  // a curve and its tangent
  tangent: '<svg viewBox="0 0 120 48" aria-hidden="true"><path d="M6 42 C30 42 40 8 62 8 C84 8 92 30 114 30"/><path class="faint" d="M20 44 L104 12"/></svg>',
  // nested objects / composition
  nest: '<svg viewBox="0 0 120 48" aria-hidden="true"><path d="M8 8 H52 V40 H8 Z"/><path d="M68 8 H112 V22 H68 Z"/><path d="M68 30 H112 V40 H68 Z"/><path class="faint" d="M52 18 H68"/><path class="faint" d="M52 34 H68"/></svg>'
};

const PROJECTS = [
  {
    title: 'Project Jaeger',
    sub: 'Reinforcement learning for bipedal locomotion',
    date: 'Fall 2025 — present',
    tags: ['software'],
    glyph: 'curve',
    image: 'assets/img/jaeger.jpg',
    stack: 'Python · Gymnasium · PyBullet · Stable-Baselines3',
    blurb: 'A custom simulation environment for a 6-DOF biped, and a PPO policy that learns to walk in it by correcting a physics-based controller rather than replacing it.',
    href: 'projects/jaeger.html'
  },
  {
    title: 'Single-Cycle RISC-V Processor',
    sub: '',
    date: 'Spring 2026',
    tags: ['hardware', 'firmware'],
    glyph: 'square',
    image: 'assets/img/riscv.jpg',
    stack: 'SystemVerilog · Vivado · TUL PYNQ FPGA',
    blurb: 'A RISC-V-style datapath and control unit written from scratch in SystemVerilog, synthesized and run on a PYNQ development board. Covers arithmetic, memory, and branch instructions.'
  },
  {
    title: 'Custom Unix Shell',
    sub: '',
    date: 'Spring 2026',
    tags: ['software', 'firmware'],
    glyph: 'fork',
    image: 'assets/img/shell.jpg',
    stack: 'C · POSIX',
    blurb: 'A working command-line shell built directly on fork, exec, and pipe — process creation, I/O redirection, and multi-stage pipelines, with the parsing and cleanup that has to go around them.'
  },
  {
    title: 'Recipe Book',
    sub: '',
    date: 'Summer 2026',
    tags: ['software'],
    glyph: 'nest',
    image: 'assets/img/recipebook.jpg',
    stack: 'Java',
    blurb: 'A Java application for storing and searching recipes, built as an exercise in keeping data, logic, and interface genuinely separate rather than nominally separate.'
  },
  {
    title: 'ECG Analog Front End',
    sub: '',
    date: 'Spring 2025',
    tags: ['hardware'],
    glyph: 'ecg',
    image: 'assets/img/ecg.jpg',
    stack: 'Op-amp filter design · PSpice',
    blurb: 'An analog signal chain that pulls a readable cardiac waveform out of noisy electrode input using cascaded amplification and filtering. Modeled in PSpice first, then built and measured against the model.'
  },
  {
    title: 'Six-Legged Walking Robot',
    sub: '',
    date: 'Fall 2024',
    tags: ['firmware'],
    glyph: 'gait',
    image: 'assets/img/spider.jpg',
    stack: 'Embedded C++',
    blurb: 'Gait and steering firmware for a hexapod, coordinating servo timing across all six legs. Tuned against the hardware itself, which behaved rather differently than the plan on paper.'
  },
  {
    title: 'RFID Phone Lockbox',
    sub: '"Lock In" — a screen-time intervention',
    date: 'Spring 2024',
    tags: ['firmware', 'hardware'],
    glyph: 'pulse',
    image: 'assets/img/lockbox.jpg',
    stack: 'Microcontroller · RFID · servo actuation',
    blurb: 'An enclosure that only opens for a recognized RFID tag. Reader input, authentication, and a servo-driven latch — built to make putting your phone away a deliberate act.'
  },
  {
    title: 'Derivative Calculator',
    sub: '',
    date: 'Winter 2024',
    tags: ['software'],
    glyph: 'tangent',
    image: 'assets/img/derivative.jpg',
    stack: 'Python',
    blurb: 'Parses explicit mathematical expressions and differentiates them by applying the rules recursively down the parse tree.'
  }
];

/* ---------- render ---------- */

function cardHTML(p, i) {
  const tag = p.href ? 'a' : 'div';
  const attrs = p.href ? ` href="${p.href}"` : '';
  const sub = p.sub ? `<div class="card-meta"><span>${p.sub}</span></div>` : '';
  const more = p.href ? '<span class="more">Read the writeup &rarr;</span>' : '';

  return `
    <${tag} class="card" data-tags="${p.tags.join(' ')}"${attrs}>
      <div class="card-visual" data-glyph="${p.glyph}">
        <img src="${p.image}" alt="" loading="lazy" onerror="this.remove()">
      </div>
      <div class="card-body">
        <div class="card-meta">
          <span>${p.tags.join(' / ')}</span>
          <span>${p.date}</span>
        </div>
        <h3>${p.title}</h3>
        ${p.sub ? `<p style="margin-top:-4px;color:var(--muted);font-size:13.5px">${p.sub}</p>` : ''}
        <p>${p.blurb}</p>
        <div class="stack">${p.stack}</div>
        ${more}
      </div>
    </${tag}>`;
}

function render() {
  const grid = document.getElementById('grid');
  if (!grid) return;

  grid.innerHTML = PROJECTS.map(cardHTML).join('');

  // Drop the glyph in behind each image. If the image 404s it removes
  // itself (onerror above) and the glyph is what's left.
  grid.querySelectorAll('.card-visual').forEach(v => {
    v.insertAdjacentHTML('afterbegin', GLYPH[v.dataset.glyph] || '');
    const img = v.querySelector('img');
    const svg = v.querySelector('svg');
    if (img) {
      img.addEventListener('load', () => { if (svg) svg.style.display = 'none'; });
    }
  });

  const count = document.getElementById('count');
  if (count) count.textContent = PROJECTS.length + ' projects';
}

/* ---------- filtering ---------- */

function initFilters() {
  const chips = document.querySelectorAll('.chip');
  const count = document.getElementById('count');

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.setAttribute('aria-pressed', 'false'));
      chip.setAttribute('aria-pressed', 'true');

      const filter = chip.dataset.filter;
      let shown = 0;

      document.querySelectorAll('.card').forEach(card => {
        const match = filter === 'all' || card.dataset.tags.split(' ').includes(filter);
        card.classList.toggle('hidden', !match);
        if (match) shown++;
      });

      if (count) count.textContent = shown + (shown === 1 ? ' project' : ' projects');
    });
  });
}

/* ---------- year ---------- */

function initYear() {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', () => {
  render();
  initFilters();
  initYear();
});
