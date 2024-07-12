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

  get loading() {
    return this.getAttribute('loading') ?? 'lazy';
  }

  render() {
    this.innerHTML = `<picture>
        <source
          srcset="/images/${this.path}.avif"
          media="(max-width: 800px)"
          type="image/avif"
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
        <source
          srcset="/images/${this.path}-desktop.avif"
          type="image/avif"
        />
        <source
          srcset="/images/${this.path}-desktop.webp"
          type="image/webp"
        />
        <img
          src="/images/${this.path}-desktop.png"
          alt="${this.alt}"
        />
      </picture>`;
  }
}
