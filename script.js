

let imgs = [];
let img;

function preload() {
    for(let i = 1; i<=15;i++){
        let image_path = `images/${i}.jpg`;
        img = loadImage(image_path); 
        
        imgs.push(img)
      }
}

function setup() {
  createCanvas(1000, 1000);

  textSize(32)
  textAlign(CENTER,CENTER)
  noLoop()
}

async function draw() {

  for(let i = 1;i<imgs.length;i++){
    const im = imgs[i]
    im.resize(1000,1000)
    image(imgs[i],0,0)
    fill('white')
    const txt = `hello world${i}`;
    text(txt,600,40)
    await sleep(1)
    saveCanvas(`${i}`,'jpg');
    
  }

  
}

async function sleep(seconds){
    return new Promise((resolve) => setTimeout(resolve,seconds*1000));
}