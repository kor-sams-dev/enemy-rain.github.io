// import { hero } from './hero';

class Enemy {
  enemy;

  constructor(map) {
    this.map = map;
  }

  initEnemy() {
    const mapWidth = this.map.offsetWidth;
    const startLeft = Math.floor(Math.random() * (mapWidth - 45));

    this.enemy = document.createElement('div');
    this.map.appendChild(this.enemy);
    this.enemy.className = 'enemy';
    this.enemy.style.left = startLeft + 'px';
    this.enemy.style.top = '0px';

    this.moveDown();
  }

  moveDown() {
    const hero = document.querySelector('.hero');
    setTimeout(() => {
      // console.log(this.enemy.clientHeight);
      if (this.enemyHeight < 54 && this.enemyTop === 0) {
        this.enemy.style.height = this.enemyHeight + 1 + 'px';
        this.enemy.style.backgroundPositionY = -(54 - this.enemyHeight) + 'px';
      } else if (
        this.enemyTop + this.enemy.offsetHeight >
        this.map.offsetHeight
      ) {
        if (this.enemyHeight === 0) {
          this.disappear();

          return;
        } else {
          this.enemy.style.height = this.enemyHeight - 1 + 'px';
        }
      } else {
        this.enemy.style.top = this.enemyTop + 1 + 'px';
      }

      if (hero.offsetTop <= this.enemyTop + this.enemyHeight) {
        if (
          hero.offsetLeft - this.enemy.clientWidth < this.enemy.offsetLeft &&
          this.enemy.offsetLeft < hero.offsetLeft + hero.clientWidth
        ) {
          this.disappear();
          return;
        }
      }

      this.moveDown();
    }, 10);
  }
  get enemyTop() {
    return this.enemy.offsetTop;
  }

  get enemyLeft() {
    return this.enemy.offsetLeft;
  }

  get enemyWidth() {
    return this.enemy.clientWidth;
  }

  get enemyHeight() {
    return this.enemy.clientHeight;
  }

  disappear() {
    this.enemy.className = 'enemy enemy-die';
    setTimeout(() => {
      this.enemy.remove();
    }, 1000);
  }
}

function createEnemy() {
  const map = document.querySelector('.bg');
  const enemy = new Enemy(map);

  enemy.initEnemy();
}

createEnemy();

setInterval(createEnemy, 1000);
