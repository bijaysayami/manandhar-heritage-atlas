(function(root){
'use strict';
// Fixed once: 30 days after 13 November 2026 at 14:23 Nepal time.
const start=Date.parse('2026-11-13T08:38:00Z');
const target=start+30*24*60*60*1000;
function remaining(now){const total=Math.max(0,Math.floor((target-now)/1000));return{days:Math.floor(total/86400),hours:Math.floor(total/3600)%24,minutes:Math.floor(total/60)%60,seconds:total%60};}
root.SanghLaunch={start,target,remaining};
if(typeof document==='undefined')return;
function tick(){const values=remaining(Date.now());for(const key of Object.keys(values)){const el=document.getElementById(key);if(el)el.textContent=String(values[key]).padStart(2,'0');}if(Date.now()>=target){document.getElementById('launch-note').textContent='OUR NEW DIGITAL HOME IS ALMOST READY. STAY CONNECTED.';}document.getElementById('year').textContent=String(new Date().getFullYear());}
tick();setInterval(tick,1000);
const canvas=document.getElementById('sparks');const context=canvas.getContext('2d');if(!context)return;
const motion=matchMedia('(prefers-reduced-motion: reduce)');let particles=[],frame=0,lastPointer=0,width=0,height=0;
const styles=getComputedStyle(document.documentElement);const colors=['--primary','--gold','--secondary','--spark'].map(v=>styles.getPropertyValue(v).trim());
function resize(){width=innerWidth;height=innerHeight;const dpr=Math.min(devicePixelRatio||1,2);canvas.width=width*dpr;canvas.height=height*dpr;context.setTransform(dpr,0,0,dpr,0,0);}
function burst(x,y,count){if(motion.matches)return;for(let i=0;i<count;i++){const angle=Math.random()*Math.PI*2,speed=.5+Math.random()*2.3;particles.push({x,y,vx:Math.cos(angle)*speed,vy:Math.sin(angle)*speed-.5,life:1,size:1+Math.random()*1.8,color:colors[i%colors.length]});}if(particles.length>140)particles=particles.slice(-140);if(!frame)frame=requestAnimationFrame(draw);}
function draw(){context.clearRect(0,0,width,height);particles=particles.filter(p=>p.life>0);for(const p of particles){p.x+=p.vx;p.y+=p.vy;p.vy+=.018;p.life-=.015;context.globalAlpha=Math.max(0,p.life)*.7;context.strokeStyle=p.color;context.lineWidth=p.size;context.beginPath();context.moveTo(p.x,p.y);context.lineTo(p.x-p.vx*2.5,p.y-p.vy*2.5);context.stroke();}context.globalAlpha=1;frame=particles.length?requestAnimationFrame(draw):0;}
resize();addEventListener('resize',resize);addEventListener('pointermove',event=>{if(event.pointerType==='touch')return;const now=performance.now();if(now-lastPointer>45){burst(event.clientX,event.clientY,3);lastPointer=now;}},{passive:true});addEventListener('pointerdown',event=>burst(event.clientX,event.clientY,28),{passive:true});motion.addEventListener('change',()=>{if(motion.matches){cancelAnimationFrame(frame);frame=0;particles=[];context.clearRect(0,0,width,height);}});
})(globalThis);
