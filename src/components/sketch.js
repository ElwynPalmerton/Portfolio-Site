export default function sketch(p) {

  class Star {
    constructor(i) {
      this.i = i;
      this.x = p.random(-p.width / 2, p.width / 2);
      this.y = p.random(-p.height / 2, p.height / 2);
      this.z = p.random(p.width / 2);
      // this.pz = this.z;
      this.speed = 8;
    }

    update() {
      this.z = this.z - this.speed;
      // console.log("i: ", this.i, "x: ", this.x, "y: ", this.y)
      // console.log("z: ", this.z)
      if (this.z < 100) {
        // console.log('out');
        this.z = p.random(p.width);
        // this.z = p.width / 2;
        this.x = p.random(-p.width / 2, p.width / 2);
        this.y = p.random(-p.height / 2, p.height / 2);
      }
    }

    show() {
      p.fill(255, 255, 255);
      var sx = p.map(this.x / this.z, 0, 1, 0, p.width)
      var sy = p.map(this.y / this.z, 0, 1, 0, p.height)
      var r = p.map(this.z, p.width, 0, 1, 12);
      p.ellipse(sx, sy, r, r);

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


  p.setup = function () {

    let canvasHeight = document.documentElement.scrollHeight;

    for (let i = 0; i < 300; i++) {
      stars[i] = new Star(i);
    }
    p.createCanvas(p.windowWidth, canvasHeight);
    p.frameRate(30);
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    // if (props.rotation !== null) {
    //   rotation = props.rotation * Math.PI / 180;
    // }

    // if (props.paused) {

  };

  p.draw = function () {
    p.translate(p.width / 2, p.height / 2);
    p.background(15, 15, 15);

    stars.forEach(star => {
      star.update();
      star.show();
    })



  };
};  