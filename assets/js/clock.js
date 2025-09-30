// Countdown + Fireworks
const endDate = '08 Oct 2025, 11:00 AM';

// DOM elements
const endTimeEl = document.querySelector('.end-time');
const wrapper = document.querySelector('.wrapper');
const celebration = document.querySelector('.celebration');
const inputs = document.querySelectorAll('.time-value');

endTimeEl.innerText = `Event starts in: ${endDate}`;

let hasStarted = false; // flag to prevent multiple starts
let countdownInterval = null;

function countDown() {
    const now = new Date();
    const diff = (new Date(endDate) - now) / 1000;

    if (diff <= 0 && !hasStarted) {
        hasStarted = true;
        clearInterval(countdownInterval);       // stop countdown
        wrapper.style.display = 'none';         // hide countdown
        celebration.style.display = 'block';    // show celebration
        celebration.innerText = "LET'S CELEBRATE !🎉"; // add message
        startFireworks();                        // start fireworks
        return;
    }

    if (!hasStarted) {
        inputs[0].value = Math.floor(diff / 3600 / 24);       // Days
        inputs[1].value = Math.floor((diff / 3600) % 24);     // Hours
        inputs[2].value = Math.floor((diff / 60) % 60);       // Minutes
        inputs[3].value = Math.floor(diff % 60);              // Seconds
    }
}

countDown();
countdownInterval = setInterval(countDown, 1000);

/* ---------- Fireworks ---------- */
function startFireworks() {
    'use strict';

    const AUTO_LAUNCH_INTERVAL = 500;
    const MIN_SIMULTANEOUS_CRACKERS = 1;
    const MAX_SIMULTANEOUS_CRACKERS = 2;
    const FIREWORK_DURATION = 20000; // 20 seconds

    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '9999';
    canvas.style.pointerEvents = 'none';
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const rand = (mi, ma) => ~~((Math.random() * (ma - mi + 1)) + mi);
    const hitTest = (x1,y1,w1,h1,x2,y2,w2,h2)=>!(x1+w1<x2||x2+w2<x1||y1+h1<y2||y2+h2<y1);

    const engine = {
        cw: window.innerWidth,
        ch: window.innerHeight,
        particles: [],
        fireworks: [],
        partCount: 100,
        partSpeed: 5,
        partSpeedVariance: 15,
        partWind: 30,
        partFriction: 5,
        partGravity: 0.8,
        hueMin: 0,
        hueMax: 360,
        fworkSpeed: 5,
        fworkAccel: 10,
        hueVariance: 20,
        clearAlpha: 10,
        running: true
    };

    function createParticles(x,y,hue, localCount = null) {
        const count = localCount != null ? localCount : engine.partCount;
        for (let i=0; i<count; i++){
            engine.particles.push({
                x, y,
                coordLast: [{x,y},{x,y},{x,y}],
                angle: rand(0,360),
                speed: rand(engine.partSpeed - engine.partSpeedVariance, engine.partSpeed + engine.partSpeedVariance),
                friction: 1 - engine.partFriction/100,
                gravity: engine.partGravity * (0.8 + Math.random()*0.8),
                hue: rand(hue - engine.hueVariance, hue + engine.hueVariance),
                brightness: rand(50,80),
                alpha: rand(40,100)/100,
                decay: rand(6,25)/1000,
                wind: (rand(0,engine.partWind) - (engine.partWind/2))/25,
                lineWidth: 1 + Math.random()*1.5
            });
        }
    }

    function createFirework(sx,sy,tx,ty){
        engine.fireworks.push({
            x: sx,
            y: sy,
            coordLast: [{x:sx,y:sy},{x:sx,y:sy},{x:sx,y:sy}],
            targetX: tx,
            targetY: ty,
            speed: engine.fworkSpeed * (0.9 + Math.random()*0.4),
            angle: Math.atan2(ty - sy, tx - sx),
            acceleration: engine.fworkAccel/100 * (0.8 + Math.random()*0.6),
            hue: rand(engine.hueMin, engine.hueMax),
            brightness: rand(50,80),
            alpha: 1,
            lineWidth: 1
        });
    }

    function updateParticles() {
        for(let i=engine.particles.length-1;i>=0;i--){
            let p=engine.particles[i];
            const rad = p.angle*Math.PI/180;
            const vx=Math.cos(rad)*p.speed;
            const vy=Math.sin(rad)*p.speed;
            p.speed*=p.friction;
            p.coordLast[2]=p.coordLast[1];
            p.coordLast[1]=p.coordLast[0];
            p.coordLast[0]={x:p.x,y:p.y};
            p.x+=vx;p.y+=vy;p.y+=p.gravity;p.angle+=p.wind;p.alpha-=p.decay;
            if(!hitTest(0,0,engine.cw,engine.ch,p.x-1,p.y-1,2,2) || p.alpha<0.05) engine.particles.splice(i,1);
        }
    }

    function updateFireworks() {
        for(let i=engine.fireworks.length-1;i>=0;i--){
            let f=engine.fireworks[i];
            const vx=Math.cos(f.angle)*f.speed;
            const vy=Math.sin(f.angle)*f.speed;
            f.speed*=(1+f.acceleration);
            f.coordLast[2]=f.coordLast[1];
            f.coordLast[1]=f.coordLast[0];
            f.coordLast[0]={x:f.x,y:f.y};
            if(Math.abs(f.x-f.targetX)<Math.abs(vx) && Math.abs(f.y-f.targetY)<Math.abs(vy)){
                const simult = rand(MIN_SIMULTANEOUS_CRACKERS,MAX_SIMULTANEOUS_CRACKERS);
                for(let s=0;s<simult;s++){
                    const offsetX=(Math.random()-0.5)*80;
                    const offsetY=(Math.random()-0.5)*60;
                    createParticles(f.targetX+offsetX,f.targetY+offsetY,f.hue,Math.max(40,~~(engine.partCount/(1+simult/2))));
                }
                engine.fireworks.splice(i,1);
            } else { f.x+=vx; f.y+=vy; }
        }
    }

    function drawParticles(){
        ctx.globalCompositeOperation='source-over';
        engine.particles.forEach(p=>{
            const cr=rand(0,2);
            ctx.beginPath();
            ctx.moveTo(p.coordLast[cr].x,p.coordLast[cr].y);
            ctx.lineTo(p.x,p.y);
            ctx.strokeStyle=`hsla(${p.hue},100%,${p.brightness}%,${p.alpha})`;
            ctx.lineWidth=p.lineWidth;
            ctx.stroke();
        });
    }

    function drawFireworks(){
        ctx.globalCompositeOperation='lighter';
        engine.fireworks.forEach(f=>{
            const cr=rand(0,2);
            ctx.beginPath();
            ctx.moveTo(f.coordLast[cr].x,f.coordLast[cr].y);
            ctx.lineTo(f.x,f.y);
            ctx.strokeStyle=`hsla(${f.hue},100%,${f.brightness}%,${f.alpha})`;
            ctx.lineWidth=f.lineWidth;
            ctx.stroke();
        });
    }

    let autoLaunchTimer=null;

    function startAutoLaunch(){
        if(autoLaunchTimer) return;
        autoLaunchTimer=setInterval(()=>{
            const x=rand(100,engine.cw-100);
            const y=rand(60,engine.ch/2);
            createFirework(engine.cw/2+(Math.random()*200-100),engine.ch,x,y);
        },AUTO_LAUNCH_INTERVAL);
    }

    function loop(){
        if(!engine.running) return;
        requestAnimationFrame(loop);
        ctx.globalCompositeOperation='destination-out';
        ctx.fillStyle='rgba(255,255,255,'+(engine.clearAlpha/100)+')';
        ctx.fillRect(0,0,engine.cw,engine.ch);
        updateFireworks();
        updateParticles();
        drawFireworks();
        drawParticles();
    }

    engine.running = true;
    loop();
    startAutoLaunch();

    // Stop fireworks after 20 seconds
    setTimeout(() => {
        clearInterval(autoLaunchTimer);
        engine.running = false;
        canvas.remove();
    }, FIREWORK_DURATION);
}
