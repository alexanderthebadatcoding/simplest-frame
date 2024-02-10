let rNum, fillColor, otherColor, moreColor, fourthColor, shapify;

function randomNum() {
  rNum = int(random(4.5));
  // console.log(rNum);
  shapify = int(random(3.5));
}

class Sector {
  constructor(row, col, x, y, w, h) {
    this.row = row * 2;
    this.col = col;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.pos = createVector(x, y);
    this.center = createVector(this.x + this.w * 0.5, this.y + this.h * 0.5);
  }

  display() {
    if (debug) {
      stroke(0);
      strokeWeight(1);
      // Translating to the corner pos of the Sector
      push();
      translate(this.x, this.y);
      rect(0, 0, this.w / 2, this.h / 2);
      pop();

      // Just using the actual coordinates
      fill(0);
      noStroke();
      textSize(10);
      textAlign(CENTER, CENTER);
      text(
        "(" + this.col + ", " + this.row + ")",
        this.center.x,
        this.center.y
      );
    } else {
      randomNum();
      fillColor = colors[1];
      otherColor = colors[2];
      moreColor = colors[3];
      fourthColor = colors[4];
      fill(fillColor);
      stroke(fillColor);
      // console.log(r)
      if (rNum == 0) {
        stroke(moreColor);
        fill(moreColor);
        rect(this.center.x, this.center.y, this.w, this.h);
      } else if (rNum == 1) {
        if (shapify == 0) {
          push();
          translate(this.x, this.y);
          triangle(0, 0, this.h, 0, this.h, this.w);
          pop();
        } else if (shapify == 1) {
          fill(colors[8]);
          stroke(colors[8]);
          rect(this.center.x, this.center.y, this.w, this.h);
          fill(bgColor);
          rect(this.center.x, this.center.y, this.w / 2, this.h / 2);
        } else if (shapify == 2) {
          fill(colors[11]);
          stroke(colors[11]);
          circle(this.center.x, this.center.y, this.w * 0.39);
        } else {
          noStroke();
          fill(colors[7]);
          rect(this.center.x, this.center.y, this.w, this.h);
        }
      } else if (rNum == 2) {
        // triangle(x1, y1, x2, y2, x3, y3)
        push();
        fill(otherColor);
        stroke(otherColor);
        circle(this.center.x, this.center.y, this.w * 0.9);
        pop();
      } else if (rNum == 3) {
        // triangle(x1, y1, x2, y2, x3, y3)
        push();
        fill(fourthColor);
        stroke(fourthColor);
        translate(this.x, this.y);
        triangle(0, 0, this.w, 0, this.w, this.h);
        pop();
      }
    }
  }
}
