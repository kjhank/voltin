export class PageHeader extends HTMLElement {
  nav: HTMLElement | null = null;

  navTrigger: HTMLButtonElement | null = null;

  connectedCallback() {
    this.role = 'banner';
    this.render();
    this.navTrigger = this.querySelector('.navigation-trigger');
    this.navTrigger?.addEventListener('click', this.toggleNav.bind(this));
    this.nav = this.querySelector('.main-navigation');
    this.setupIntersectionObserver();
  }

  toggleNav() {
    this.nav?.classList.toggle('active');
  }

  get currentPath() {
    return this.getAttribute('currentpath');
  }

  setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.classList.remove('active');
        } else {
          this.classList.add('active');
        }
      });
    }, { threshold: 0.95, rootMargin: '-100px 0px 0px 0px' });
    observer.observe(document.querySelector('.hero-image') as Element);
  }

  render() {
    this.innerHTML = `
    <a href="/" title="Strona główna">
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
      </ul>
    `;
  }
}
