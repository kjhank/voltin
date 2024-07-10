export class PositiveNegativeIcon extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="57.738" height="40.836" viewbox="0 0 57.738 40.836">
      <defs>
        <linearGradient id="posneg-a" x1=".069" x2="1.553" y1="1" y2="-.593" gradientUnits="objectBoundingBox">
          <stop offset="0" stop-color="#002581"/>
          <stop offset="1" stop-color="#001341"/>
        </linearGradient>
        <linearGradient id="posneg-b" x1=".245" x2="1.093" y1=".574" y2=".145" gradientUnits="objectBoundingBox">
          <stop offset="0" stop-color="#214099"/>
          <stop offset="1" stop-color="#11204d"/>
        </linearGradient>
      </defs>
      <g data-name="Group 14924">
        <path fill="url(#posneg-a)" d="M1.7 0 0 10.722h32.372L34.071 0Z" data-name="Path 28675" transform="translate(23.667 30.114)"/>
        <path fill="url(#posneg-b)" d="m14.456 0-1.741 10.992H1.724L0 21.873h10.992L9.251 32.864h10.881l1.741-10.992h10.992l1.723-10.881H23.6L25.337 0Z" data-name="Path 28674"/>
      </g>
    </svg>`;
  }
}
