export class LinesIcon extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30.084" height="23" viewbox="0 0 30.084 23">
      <g fill="none" stroke="currentColor" stroke-width="4">
        <path d="M.084 11.5h30" data-name="middle"/>
        <path d="M0 2h30.084" data-name="top"/>
        <path d="M0 21h30.084" data-name="bottom"/>
      </g>
    </svg>`;
  }
}
