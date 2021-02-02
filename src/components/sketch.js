
export default function sketch(p) {


  class Star {
    constructor(i) {
      this.color = { h: 213, s: 63, l: 98, a: 1 };
      this.i = i;
      // this.x = p.random(-p.width / 2, p.width / 2);
      let canvasHeight = document.documentElement.scrollHeight;
      this.x = p.random(p.windowWidth);
      this.y = p.random(canvasHeight);
      // this.y = p.random(-p.height / 2, p.height / 2);
      this.size = p.random(2.5, 5);
      this.grow = true;
      this.lifeSpan = p.random(1900);
    }


    update() {
      const MAX_SIZE = 5;
      const MIN_SIZE = 2.5;
      const MAX_LIFE = 2000;

      this.lifeSpan += 1;
      if (this.lifeSpan > MAX_LIFE) {
        this.lifeSpan = 0;
        let canvasHeight = document.documentElement.scrollHeight;
        this.x = p.random(p.windowWidth);
        this.y = p.random(canvasHeight);
      }


      if (this.grow) {
        this.size += 0.05;
        // if (this.color.l < 100) {
        //   this.color.l += 1;
        // }
      } else {
        this.size -= 0.05;
        // this.color.l -= 1;
      }

      if (this.size > MAX_SIZE) {
        this.grow = false;
      }

      if (this.size < MIN_SIZE) {
        this.grow = true;
      }




    }

    show() {
      // p.fill(255, 100, 67, 1);
      p.fill(this.color.h, this.color.s, this.color.l, this.color.a);

      p.ellipse(this.x, this.y, this.size, this.size);

      this.pz = this.z;

      // p.stroke(255);
      // p.strokeWeight(1);
      // p.line(this.px, this.py, sx, sy);
    }
  }

  let stars = [];

  let pause = false;
  window.addEventListener('click', () => {
    pause = !pause;
    console.log('clicked', pause);
  });

  function resetCanvas() {
    let canvasHeight = document.documentElement.scrollHeight;
    p.createCanvas(p.windowWidth, canvasHeight);
    stars = [];
    for (let i = 0; i < 300; i++) {
      stars[i] = new Star(i);
    }
  }

  window.addEventListener('resize', () => {
    let resetWindow;
    clearTimeout(resetWindow);
    resetWindow = setTimeout(() => {
      resetCanvas();
    }, 400);
  })

  window.addEventListener('popstate', () => {
    resetCanvas();
  })

  p.setup = function () {

    p.colorMode(p.HSB);

    let canvasHeight = document.documentElement.scrollHeight;

    for (let i = 0; i < 500; i++) {
      stars[i] = new Star(i);
    }

    p.createCanvas(p.windowWidth, canvasHeight);
    // p.createCanvas(1000, canvasHeight);
    p.frameRate(60);
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    // if (props.rotation !== null) {
    //   rotation = props.rotation * Math.PI / 180;
    // }

    // if (props.paused) {

  };

  p.draw = function () {

    // 214°, 29%, 15%

    const bg = { h: 214, s: 29, l: 15, a: 1 }
    // p.translate(p.width / 2, p.height / 2);
    p.background(bg.h, bg.s, bg.l, bg.a);

    stars.forEach(star => {
      star.update();
      star.show();
    })



  };
};  