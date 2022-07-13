let canvas;
let a;


let CD1;
let CD3;
let CD5;
let CD7;
let CD9;
let CD11;
let CD13;
let CD15;
let CD17;
let CD19;
let CD21;
let CD23;
let CD25;
let CD27;
let CD29;
let CD31;
let CD33;
let CD35;
let CD37;
let CD39;
let CD41;
let CD43;
let CD45;
let CD47;
let CD49;


  
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  }

function setup(){
canvas = createCanvas(windowWidth, windowHeight);
canvas.position(0, 0);

CD1 = loadImage("imag/CD1.jpg");
CD3 = loadImage("imag/CD3.jpg");
CD5 = loadImage("imag/CD5.jpg");
CD7 = loadImage("imag/CD7.jpg");
CD9 = loadImage("imag/CD9.jpg");
CD11 = loadImage("imag/CD11.jpg");
CD13 = loadImage("imag/CD13.jpg");
CD15 = loadImage("imag/CD15.jpg");
CD17 = loadImage("imag/CD17.jpg");
CD19 = loadImage("imag/CD19.png");
CD21 = loadImage("imag/CD21.png");
CD23 = loadImage("imag/CD23.png");
CD25 = loadImage("imag/CD25.png");
CD27 = loadImage("imag/CD27.png");
CD29 = loadImage("imag/CD29.png");
CD31 = loadImage("imag/CD31.png");
CD33 = loadImage("imag/CD33.png");
CD35 = loadImage("imag/CD35.png");
CD37 = loadImage("imag/CD37.png");
CD39 = loadImage("imag/CD39.png");
CD41 = loadImage("imag/CD41.png");
CD43 = loadImage("imag/CD43.png");
CD45 = loadImage("imag/CD45.png");
CD47 = loadImage("imag/CD47.png");
CD49 = loadImage("imag/CD49.png");



a = createA('https://www.instagram.com/ciudadesimaginarias14/', 'MGS');
a.position(20, 160);
a.style('font-size', '30px');
a.style('color', '100');

a = createA('drive.google.com/file/d/1xoecO0T1RpD6Lk_S10XrF-bw7FNfXF6t/view?usp=sharing', 'DOSSIER');
a.position(20, 200);
a.style('font-size', '30px');
a.style('color', '50');

textFont('Roboto');

}



function draw(){
  background(0);

  textSize(random(15, 210)); 
  fill (random(45, 255));
  text("CIUDADES IMAGINARIAS", random(width), random(height)); 

  noFill();

    image (CD1, 150, 50, 600, 300);
  if(mouseX < 750 && mouseY < 350){
    if (mouseX > 150 && mouseY > 50){
        image (CD49, 150, 100, 500, 200);
      }
  }

  image (CD3, 250, 50, 600, 300);
  if(mouseX < 850 && mouseY < 350){
    if (mouseX > 250 && mouseY > 50){
        image (CD47, 250, 100, 500, 200);
      }
  }


  image (CD5, 350, 50, 600, 300);
  if(mouseX < 950 && mouseY < 350){
    if (mouseX > 350 && mouseY > 50){
        image (CD45, 350, 100, 500, 200);
      }
  }

  image (CD7, 450, 50, 600, 300);
  if(mouseX < 1050 && mouseY < 350){
    if (mouseX > 450 && mouseY > 50){
        image (CD43, 450, 100, 500, 200);
      }
  }

  image (CD9, 550, 50, 600, 300);
  if(mouseX < 1150 && mouseY < 350){
    if (mouseX > 550 && mouseY > 50){
        image (CD41, 550, 100, 500, 200);
      }
  }

  image (CD11, 650, 50, 600, 300);
  if(mouseX < 1250 && mouseY < 350){
    if (mouseX > 550 && mouseY > 50){
        image (CD39, 650, 100, 500, 200);
      }
  }

  image (CD13, 750, 50, 600, 300);
  if(mouseX < 1350 && mouseY < 350){
    if (mouseX > 550 && mouseY > 50){
        image (CD37, 750, 100, 500, 200);
      }
  }

  image (CD15, 850, 50, 600, 300);
  if(mouseX < 1450 && mouseY < 350){
    if (mouseX > 550 && mouseY > 50){
        image (CD35, 850, 100, 500, 200);
      }
  }

  image (CD17, 950, 50, 600, 300);
  if(mouseX < 1550 && mouseY < 350){
    if (mouseX > 550 && mouseY > 50){
        image (CD33, 950, 100, 500, 200);
      }
  }



  image (CD19, 0, 350, 600, 300);
  if(mouseX < 600 && mouseY < 650){
    if (mouseX > 0 && mouseY > 350){
        image (CD31, 50, 400, 500, 200);
      }
  }

  image (CD21, 100, 350, 600, 300);
  if(mouseX < 700 && mouseY < 650){
    if (mouseX > 100 && mouseY > 350){
        image (CD29, 150, 400, 500, 200);
      }
  }

  image (CD23, 200, 350, 600, 300);
  if(mouseX < 800 && mouseY < 650){
    if (mouseX > 200 && mouseY > 350){
        image (CD27, 250, 400, 500, 200);
      }
  }

  image (CD25, 300, 350, 600, 300);
  if(mouseX < 900 && mouseY < 650){
    if (mouseX > 300 && mouseY > 350){
        image (CD25, 350, 400, 500, 200);
      }
  }

  image (CD27, 400, 350, 600, 300);
  if(mouseX < 1000 && mouseY < 650){
    if (mouseX > 400 && mouseY > 350){
        image (CD23, 450, 400, 500, 200);
      }
  }

  image (CD29, 500, 350, 600, 300);
  if(mouseX < 1100 && mouseY < 650){
    if (mouseX > 500 && mouseY > 350){
        image (CD21, 550, 400, 500, 200);
      }
  }

  image (CD31, 600, 350, 600, 300);
  if(mouseX < 1200 && mouseY < 650){
    if (mouseX > 600 && mouseY > 350){
        image (CD19, 650, 400, 500, 200);
      }
  }

  image (CD33, 700, 350, 600, 300);
  if(mouseX < 1300 && mouseY < 650){
    if (mouseX > 700 && mouseY > 350){
        image (CD17, 750, 400, 500, 200);
      }
  }

  image (CD35, 800, 350, 600, 300);
  if(mouseX < 1400 && mouseY < 650){
    if (mouseX > 800 && mouseY > 350){
        image (CD15, 850, 400, 500, 200);
      }
  }

  image (CD37, 900, 350, 600, 300);
  if(mouseX < 1500 && mouseY < 650){
    if (mouseX > 900 && mouseY > 350){
        image (CD15, 950, 400, 500, 200);
      }
  }

  image (CD39, 1000, 350, 600, 300);
  if(mouseX < 1600 && mouseY < 650){
    if (mouseX > 1000 && mouseY > 350){
        image (CD13, 1050, 400, 500, 200);
      }
  }

  textSize(random(15, 210)); 
  fill (random(45, 255));
  text("CIUDADES IMAGINARIAS", random(width), random(height)); 



}
