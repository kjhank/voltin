export class PageHeader extends HTMLElement {
  nav: HTMLElement | null = null;

  navTrigger: HTMLButtonElement | null = null;

  connectedCallback() {
    this.role = 'banner';
    this.render();
    this.navTrigger = this.querySelector('.navigation-trigger');
    this.navTrigger?.addEventListener('click', this.toggleNav.bind(this));
    this.nav = this.querySelector('.main-navigation');
  }

  toggleNav() {
    this.nav?.classList.toggle('active');
  }

  get currentPath() {
    return this.getAttribute('currentpath');
  }

  render() {
    this.innerHTML = `
    <a href="/">
      <brand-logo></brand-logo>
    </a>
    <button class="navigation-trigger">
      <span class="visually-hidden">Otwórz nawigację</span>
      <lines-icon></lines-icon>
    </button>
    <nav class="main-navigation">
      <ul role="list">
        <li><a class="${this.currentPath === '/' ? 'current' : ''}" href="/">Strona główna</a></li>
        <li><a class="${this.currentPath === '/about' ? 'current' : ''}" href="/about">O nas</a></li>
        <li><a class="${this.currentPath === '/offer' ? 'current' : ''}" href="/offer">Oferta</a></li>
        <li><a class="${this.currentPath === '/quality' ? 'current' : ''}" href="/quality">Jakość</a></li>
        <li><a class="${this.currentPath === '/contact' ? 'current' : ''}" href="/contact">Kontakt</a></li>
        <li><frying-pan-icon></frying-pan-icon></li>
      </ul>
    `;
  }
}
