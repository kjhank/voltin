export class ResponsiveImage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  get path() {
    return this.getAttribute('path');
  }

  get alt() {
    return this.getAttribute('alt');
  }

  render() {
    this.innerHTML = `<picture>
        <source
          srcset="/images/${this.path}.avif"
          type="image/avif"
          media="(max-width: 800px)"
        />
        <source
          srcset="/images/${this.path}.webp"
          media="(max-width: 800px)"
          type="image/webp"
        />
        <source
          srcset="/images/${this.path}.png"
          media="(max-width: 800px)"
          type="image/png"
        />
        <img
          src="/images/${this.path}o-desktop.png"
          alt="${this.alt}"
        />
      </picture>`;
  }
}
