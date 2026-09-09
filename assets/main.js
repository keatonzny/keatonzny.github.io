/* ============================================================
   Project data + rendering
   To add a project: copy an object into PROJECTS. That's it.

   image: put a file in assets/img/ and name it here.
          If the file is missing, a neutral placeholder shows instead.
   tags:  any of "hardware", "firmware", "software"
   href:  optional — link to a detail page
   ============================================================ */

const PROJECTS = [
  {
    title: 'Project Jaeger',
    sub: 'Reinforcement learning for bipedal locomotion',
    date: 'Fall 2025 — present',
    tags: ['software'],
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
    image: 'assets/img/riscv.jpg',
    stack: 'SystemVerilog · Vivado · TUL PYNQ FPGA',
    blurb: 'A RISC-V-style datapath and control unit written from scratch in SystemVerilog, synthesized and run on a PYNQ development board. Covers arithmetic, memory, and branch instructions.'
  },
  {
    title: 'Custom Unix Shell',
    sub: '',
    date: 'Spring 2026',
    tags: ['software', 'firmware'],
    image: 'assets/img/shell.jpg',
    stack: 'C · POSIX',
    blurb: 'A working command-line shell built directly on fork, exec, and pipe — process creation, I/O redirection, and multi-stage pipelines, with the parsing and cleanup that has to go around them.'
  },
  {
    title: 'Recipe Book',
    sub: '',
    date: 'Summer 2026',
    tags: ['software'],
    image: 'assets/img/recipebook.jpg',
    stack: 'Java',
    blurb: 'A Java application for storing and searching recipes, built as an exercise in keeping data, logic, and interface genuinely separate rather than nominally separate.'
  },
  {
    title: 'ECG Analog Front End',
    sub: '',
    date: 'Spring 2025',
    tags: ['hardware'],
    image: 'assets/img/ecg.jpg',
    stack: 'Op-amp filter design · PSpice',
    blurb: 'An analog signal chain that pulls a readable cardiac waveform out of noisy electrode input using cascaded amplification and filtering. Modeled in PSpice first, then built and measured against the model.'
  },
  {
    title: 'Six-Legged Walking Robot',
    sub: '',
    date: 'Fall 2024',
    tags: ['firmware'],
    image: 'assets/img/spider.jpg',
    stack: 'Embedded C++',
    blurb: 'Gait and steering firmware for a hexapod, coordinating servo timing across all six legs. Tuned against the hardware itself, which behaved rather differently than the plan on paper.'
  },
  {
    title: 'RFID Phone Lockbox',
    sub: '"Lock In" — a screen-time intervention',
    date: 'Spring 2024',
    tags: ['firmware', 'hardware'],
    image: 'assets/img/lockbox.jpg',
    stack: 'Microcontroller · RFID · servo actuation',
    blurb: 'An enclosure that only opens for a recognized RFID tag. Reader input, authentication, and a servo-driven latch — built to make putting your phone away a deliberate act.'
  },
  {
    title: 'Derivative Calculator',
    sub: '',
    date: 'Winter 2024',
    tags: ['software'],
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
      <div class="card-visual" title="${p.image}">
        <span class="ph" aria-hidden="true">
          <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9.5" r="1.6"/><path d="M21 16l-5-5-5 5-2-2-5 5"/></svg>
        </span>
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
