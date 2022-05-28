class Hero {
  constructor(hero, map) {
    this.hero = hero;
    this.map = map;
  }

  initHero() {
    this.hero.className = 'hero';
    this.hero.style.left =
      this.map.offsetWidth / 2 - this.hero.clientWidth / 2 + 'px';
  }

  moveLeft(moveCnt = 1) {
    if (this.hero.offsetLeft - 1 < 0) {
      this.hero.style.left = '0px';
      return;
    } else if (moveCnt === 10) return;

    setTimeout(() => {
      this.hero.style.left = this.hero.offsetLeft - 1 + 'px';
      this.moveLeft(moveCnt + 1);
    }, moveCnt * 10);
  }
  moveRight(moveCnt = 1) {
    const mapWidth = this.map.offsetWidth;
    if (this.hero.offsetLeft + this.hero.clientWidth + 1 > mapWidth) {
      this.hero.style.left = mapWidth - this.hero.clientWidth + 'px';
      return;
    } else if (moveCnt === 10) return;

    setTimeout(() => {
      this.hero.style.left = this.hero.offsetLeft + 1 + 'px';
      this.moveRight(moveCnt + 1);
    }, moveCnt * 10);
  }

  moveUp() {}
  moveDown() {}
  set className(className) {
    this.hero.className = className;
  }

  get heroTop() {
    return this.hero.offsetTop;
  }

  get heroLeft() {
    return this.hero.offsetLeft;
  }

  get heroWidth() {
    return this.hero.clientWidth;
  }

  get heroHeight() {
    return this.hero.clientHeight;
  }
}

const hero = new Hero(
  document.querySelector('.hero'),
  document.querySelector('.bg')
);

hero.initHero();

const moveHero = (hero, direction) => {
  switch (direction) {
    case 'ArrowUp':
      hero.className = 'hero hero-up';
      hero.moveUp();
      break;
    case 'ArrowDown':
      hero.className = 'hero';
      hero.moveDown();
      break;
    case 'ArrowRight':
      hero.className = 'hero hero-right';
      hero.moveRight();
      break;
    case 'ArrowLeft':
      hero.className = 'hero hero-left';
      hero.moveLeft();
      break;

    default:
      break;
  }
};

window.addEventListener('keydown', ({ key }) => {
  if (['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'].includes(key)) {
    moveHero(hero, key);
  }
});

export { hero };
