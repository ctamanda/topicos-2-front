import { Component, input } from '@angular/core';

// Marca do FinControl: moeda amarela + nome em minúsculas.
@Component({
  selector: 'app-logo',
  template: `
    <span class="logo" [class.pequeno]="pequeno()">
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="15" fill="#f5c518" />
        <circle cx="16" cy="16" r="10.5" fill="none" stroke="#0d5646" stroke-width="2" opacity=".35" />
        <path d="M13 9.5h8M13 9.5v13M13 15.5h6" stroke="#0d5646" stroke-width="3" stroke-linecap="round" fill="none" />
      </svg>
      <span class="nome">fin<strong>control</strong></span>
    </span>
  `,
  styles: `
    .logo {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      color: #fff;
      font-size: 30px;
      letter-spacing: -0.02em;
      line-height: 1;
    }
    svg {
      width: 1.15em;
      height: 1.15em;
    }
    .nome {
      font-weight: 400;
    }
    .nome strong {
      font-weight: 500;
    }
    .pequeno {
      font-size: 17px;
      gap: 7px;
    }
  `,
})
export class Logo {
  readonly pequeno = input(false);
}
