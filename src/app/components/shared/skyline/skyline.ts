import { Component } from '@angular/core';

// Ilustração decorativa da faixa verde do login/cadastro (cidade, árvore, sol e poste).
@Component({
  selector: 'app-skyline',
  template: `
    <svg viewBox="0 0 1600 420" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <!-- nuvens -->
      <g fill="#14614f">
        <path d="M330 40c0-14 12-24 26-24 10 0 18 5 22 13 3-1 6-2 9-2 12 0 21 8 21 19z" />
        <path d="M1090 30c0-18 16-30 34-30 13 0 24 7 29 17 4-2 8-3 12-3 15 0 27 10 27 24z" />
      </g>
      <!-- sol -->
      <circle cx="790" cy="90" r="24" fill="#7a7f2e" opacity=".85" />
      <!-- prédios ao fundo -->
      <g fill="#11604e">
        <rect x="430" y="210" width="80" height="210" />
        <rect x="530" y="160" width="46" height="260" />
        <rect x="582" y="160" width="46" height="260" />
        <rect x="670" y="230" width="40" height="190" />
        <rect x="715" y="190" width="24" height="230" />
        <rect x="760" y="250" width="160" height="170" />
        <rect x="940" y="120" width="56" height="300" />
        <rect x="1010" y="200" width="70" height="220" />
        <path d="M1090 420V260l70-40v200z" />
        <rect x="1180" y="190" width="90" height="230" />
        <rect x="1290" y="160" width="46" height="260" />
        <rect x="1340" y="160" width="46" height="260" />
        <rect x="1400" y="230" width="70" height="190" />
        <path d="M330 420V250l80 40v130z" />
        <rect x="250" y="270" width="60" height="150" />
      </g>
      <!-- árvore -->
      <g>
        <circle cx="290" cy="300" r="58" fill="#16705a" />
        <path d="M290 420V320M290 340l-22-24M290 330l20-22" stroke="#0f5847" stroke-width="6" fill="none" stroke-linecap="round" />
      </g>
      <!-- poste com luz -->
      <g>
        <circle cx="1320" cy="250" r="20" fill="#d8c94a" opacity=".25" />
        <circle cx="1320" cy="250" r="7" fill="#d8c94a" />
        <rect x="1317" y="262" width="6" height="158" fill="#178a6d" />
      </g>
      <!-- arbustos -->
      <g fill="#16705a">
        <path d="M200 420a40 30 0 0 1 80 0z" />
        <path d="M360 420a32 22 0 0 1 64 0z" />
        <path d="M1240 420a36 24 0 0 1 72 0z" />
        <path d="M1420 420a44 30 0 0 1 88 0z" />
      </g>
    </svg>
  `,
  styles: `
    :host {
      position: absolute;
      inset: 0;
      overflow: hidden;
      pointer-events: none;
    }
    svg {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `,
})
export class Skyline {}
