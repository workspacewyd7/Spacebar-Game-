function SfxrParams(){this.setSettings=function(r){for(var a=0;a<24;a++)this[String.fromCharCode(97+a)]=r[a]||0;this.c<.01&&(this.c=.01);var t=this.b+this.c+this.e;if(t<.18){var e=.18/t;this.b*=e,this.c*=e,this.e*=e}}}function SfxrSynth(){var r,a,t,e,s,n,i,h,f,c,o,v;this._params=new SfxrParams,this.reset=function(){var r=this._params;e=100/(r.f*r.f+.001),s=100/(r.g*r.g+.001),n=1-r.h*r.h*r.h*.01,i=-r.i*r.i*r.i*1e-6,r.a||(o=.5-r.n/2,v=5e-5*-r.o),h=1+r.l*r.l*(r.l>0?-.9:10),f=0,c=1==r.m?0:(1-r.m)*(1-r.m)*2e4+32},this.totalReset=function(){this.reset();var e=this._params;return r=e.b*e.b*1e5,a=e.c*e.c*1e5,t=e.e*e.e*1e5+12,3*((r+a+t)/3|0)},this.synthWave=function(u,b){var w=this._params,m=1!=w.s||w.v,y=w.v*w.v*.1,g=1+3e-4*w.w,k=w.s*w.s*w.s*.1,S=1+1e-4*w.t,l=1!=w.s,p=w.x*w.x,d=w.g,x=w.q||w.r,A=w.r*w.r*w.r*.2,q=w.q*w.q*(w.q<0?-1020:1020),M=w.p?32+((1-w.p)*(1-w.p)*2e4|0):0,_=w.d,U=w.j/2,j=w.k*w.k*.01,C=w.a,P=r,R=1/r,W=1/a,z=1/t,B=5/(1+w.u*w.u*20)*(.01+k);B>.8&&(B=.8),B=1-B;for(var D,E,F,G,H,I,J=!1,K=0,L=0,N=0,O=0,Q=0,T=0,V=0,X=0,Y=0,Z=0,$=new Array(1024),rr=new Array(32),ar=$.length;ar--;)$[ar]=0;for(ar=rr.length;ar--;)rr[ar]=2*Math.random()-1;for(ar=0;ar<b;ar++){if(J)return ar;if(M&&++Y>=M&&(Y=0,this.reset()),c&&++f>=c&&(c=0,e*=h),(e*=n+=i)>s&&(e=s,d>0&&(J=!0)),E=e,U>0&&(Z+=j,E*=1+Math.sin(Z)*U),(E|=0)<8&&(E=8),C||((o+=v)<0?o=0:o>.5&&(o=.5)),++L>P)switch(L=0,++K){case 1:P=a;break;case 2:P=t}switch(K){case 0:N=L*R;break;case 1:N=1+2*(1-L*W)*_;break;case 2:N=1-L*z;break;case 3:N=0,J=!0}x&&((F=0|(q+=A))<0?F=-F:F>1023&&(F=1023)),m&&g&&((y*=g)<1e-5?y=1e-5:y>.1&&(y=.1)),I=0;for(var tr=8;tr--;){if(++V>=E&&(V%=E,3==C))for(var er=rr.length;er--;)rr[er]=2*Math.random()-1;switch(C){case 0:H=V/E<o?.5:-.5;break;case 1:H=1-V/E*2;break;case 2:H=.225*(((H=1.27323954*(G=6.28318531*((G=V/E)>.5?G-1:G))+.405284735*G*G*(G<0?1:-1))<0?-1:1)*H*H-H)+H;break;case 3:H=rr[Math.abs(32*V/E|0)]}m&&(D=T,(k*=S)<0?k=0:k>.1&&(k=.1),l?(Q+=(H-T)*k,Q*=B):(T=H,Q=0),O+=(T+=Q)-D,H=O*=1-y),x&&($[X%1024]=H,H+=$[(X-F+1024)%1024],X++),I+=H}I*=.125*N*p,u[ar]=I>=1?32767:I<=-1?-32768:32767*I|0}return b}}var synth=new SfxrSynth;window.jsfxr=function(r){synth._params.setSettings(r);var a=synth.totalReset(),t=new Uint8Array(4*((a+1)/2|0)+44),e=2*synth.synthWave(new Uint16Array(t.buffer,44),a),s=new Uint32Array(t.buffer,0,44);s[0]=1179011410,s[1]=e+36,s[2]=1163280727,s[3]=544501094,s[4]=16,s[5]=65537,s[6]=44100,s[7]=88200,s[8]=1048578,s[9]=1635017060,s[10]=e,e+=44;for(var n=0,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h="data:audio/wav;base64,";n<e;n+=3){var f=t[n]<<16|t[n+1]<<8|t[n+2];h+=i[f>>18]+i[f>>12&63]+i[f>>6&63]+i[63&f]}return h};const gId=e=>document.getElementById(e),qSel=e=>document.querySelector(e),qSelA=e=>document.querySelectorAll(e),cEl=e=>{let t=document.createElement("template");return t.innerHTML=e,t.content.firstChild},repltxt=(e,t)=>(t.forEach((t,n)=>e=e.replace("%"+(n+1),t)),e),clamp=(e,t,n)=>Math.min(Math.max(e,t),n),clamp01=e=>clamp(e,0,1),lerp=(e,t,n)=>e+(t-e)*clamp01(n),NUBMER_FORMATS=["M","B","T","Q","Qui","S","Sp"],fmt=(e,t)=>(t+e).slice(-t.length),nfmt=e=>Math.floor(e).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),nfmt1=e=>e.toFixed(3).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),nfmt2=e=>{if(e<1e6)return nfmt(e);let t=1e6;for(let n in NUBMER_FORMATS)if(e<(t*=1e3))return nfmt1(e/(t/1e3))+NUBMER_FORMATS[n]},randnum=(e=1)=>Math.random()*e,randint=e=>Math.round(randnum(e)),randsig=()=>randint(10)%2==0?1:-1,randweight=(e,t)=>{let n=e.map(t).reduce((e,t)=>e+t),a=randint(n);return e.filter(e=>(a-=t(e))<=0)[0]},randweightsqrd=(e,t)=>randweight(e,e=>t(e)*t(e)),co=e=>{let t=e();const n=()=>{let e=t.next();e.done||setTimeout(n,1e3*e.value)};n()},mobile=()=>navigator.userAgent.match("Mobile"),audio_player=[new Audio,new Audio];let audio_index=0,AUDIO=!0;const playaudio=e=>{AUDIO&&(audio_index=(audio_index+1)%audio_player.length,audio_player[audio_index].pause(),audio_player[audio_index].src=e[Math.floor(Math.random()*e.length)],audio_player[audio_index].play())};let ITEMS=[
    {name:"Vibe Intern",description:"This chill intern is just vibing while occasionally hitting the spacebar. No cap, they're just doing the bare minimum. They hit it every <b>%v seconds</b>.",cost:30,initial_value:1,lvl:0,cost_func:e=>1.1*e,value_func:e=>e,getDescription:e=>e.description.replace("%v",1/e.initial_value)},
    {name:"TikTok Scroller",description:"They're scrolling and tapping so fast they accidentally hit your spacebar <b>%vx a second</b>! Living rent-free in your keyboard.",cost:120,initial_value:5,lvl:0,cost_func:e=>1.3*e,value_func:e=>1*e,getDescription:e=>e.description.replace("%v",nfmt(e.value))},
    {name:"Chronically Online",description:"This person hasn't touched grass in weeks but their keyboard skills are low-key fire. They're online 24/7 hitting that spacebar <b>%vx a second</b>!",cost:500,initial_value:25,lvl:0,cost_func:e=>1.4*e,value_func:e=>1*e,getDescription:e=>e.description.replace("%v",nfmt(e.value))},
    {name:"RGB Gaming Setup",description:"Every upgrade will <b>DOUBLE</b> your own hits. It's giving main character energy.",cost:6e3,multiplier:2,lvl:0,cost_func:e=>3.5*e,getDescription:e=>e.description},
    {name:"Stan Army",description:"A whole Twitter stan army is fighting in your comments and rage-typing on your keyboard. No cap, they're fast. The next one adds <b>%vx per second</b>.",cost:1e4,initial_value:200,lvl:0,cost_func:e=>1.5*e,value_func:e=>1.2*e,getDescription:e=>e.description.replace("%v",nfmt(e.value))},
    {name:"Speedrun Streamer",description:"They're literally cracked at hitting keys and always chasing that world record. Each new streamer adds <b>%vx per second</b>. Sheesh!",cost:2e5,initial_value:1000,lvl:0,cost_func:e=>1.4*e,value_func:e=>1.25*e,getDescription:e=>e.description.replace("%v",nfmt(e.value))},
    {name:"AI Keyboard Bot",description:"It's giving automation vibes. This AI doesn't even need to sleep and hits your spacebar <b>%vx per second</b>! Based.",cost:8e5,initial_value:5000,lvl:0,cost_func:e=>1.4*e,value_func:e=>1.25*e,getDescription:e=>e.description.replace("%v",nfmt(e.value))},
    {name:"Quantum Clicker",description:"No cap, this thing exists in multiple dimensions at once and clicks at <b>%vx per second</b>! It's literally unhinged.",cost:2e6,initial_value:30000,lvl:0,cost_func:e=>1.4*e,value_func:e=>1.3*e,getDescription:e=>e.description.replace("%v",nfmt(e.value))},
    {name:"Multiverse Finger Army",description:"Pulling fingers from every parallel universe to tap your spacebar. Straight bussin at <b>%vx per second</b>!",cost:1e7,initial_value:150000,lvl:0,cost_func:e=>1.4*e,value_func:e=>1.3*e,getDescription:e=>e.description.replace("%v",nfmt(e.value))},
    {name:"Reality Glitch",description:"Breaking the simulation to spam your spacebar. The devs are literally crying rn with <b>%vx per second</b>! No one can stop it.",cost:8e7,initial_value:1500000,lvl:0,cost_func:e=>1.4*e,value_func:e=>1.3*e,getDescription:e=>e.description.replace("%v",nfmt(e.value))}
];!function(){for(let e in ITEMS)ITEMS[e].value=ITEMS[e].initial_value}();let total_item_value=e=>{let t=0,i=e.initial_value;for(let a=0;a<e.lvl;a++)t+=i,i=e.value_func(i);return t},LEVELS=[{psvalue:0,rain:0},{psvalue:10,rain:5},{psvalue:100,rain:10},{psvalue:500,rain:12},{psvalue:1e3,rain:15},{psvalue:5e3,rain:17},{psvalue:1e4,rain:18},{psvalue:5e4,rain:19},{psvalue:1e5,rain:20},{psvalue:3e5,rain:21},{psvalue:8e5,rain:22},{psvalue:1e6,rain:23}];const SOUNDS={
    click:[
        jsfxr([0,,0.1763,,0.1349,0.4524,,0.2365,,,,,,0.0819,,,,,1,,,,,0.5]),
        jsfxr([0,,0.1763,,0.1349,0.5524,,0.2765,,,,,,0.0819,,,,,1,,,,,0.5]),
        jsfxr([0,,0.1763,,0.1349,0.6524,,0.2965,,,,,,0.0819,,,,,1,,,,,0.5])
    ],
    buy:[
        jsfxr([0,,0.2422,0.2267,0.2995,0.7316,,0.1211,,,,,,0.6607,,,,,1,,,,,0.5]),
        jsfxr([0,,0.2422,0.2267,0.2995,0.6316,,0.1511,,,,,,0.6607,,,,,1,,,,,0.5]),
        jsfxr([0,,0.2422,0.2267,0.2995,0.5316,,0.1811,,,,,,0.6607,,,,,1,,,,,0.5])
    ],
    levelUp:[
        jsfxr([0,0,0.2309,0.6925,0.485,0.2681,,0.1046,,,0.5665,0.5476,,,,,,1,,,,,0.5]),
        jsfxr([0,0,0.2309,0.6925,0.485,0.3681,,0.1246,,,0.5665,0.5476,,,,,,1,,,,,0.5])
    ]
};class ParticleSystem{constructor(t,e){this.lifetime=t,this.func=e,this.particles=[],setInterval(this.update.bind(this),16)}pushParticle(t,e){this.particles.push({life:this.lifetime,element:t,x:e.x,y:e.y,ix:e.x,iy:e.y,alpha:0,rot:0}),t.style.opacity="0"}update(){let t=[];for(let e in this.particles){let i=this.particles[e];i.life-=.016,i.normalized_time=1-i.life/this.lifetime,this.func(i),i.element.style.transform="translateX("+i.x+"px) translateY("+i.y+"px) rotateZ("+i.rot+"deg)",i.element.style.opacity=""+(1-i.alpha),i.life<=0&&t.push(e)}for(let e in t)this.particles[t[e]].element.remove(),this.particles.splice(t[e],1)}}class Counter{constructor(){this.v=0,this.va=0,this.multiplier=1,setInterval(this.update.bind(this),10)}evaluateItems(){this.va=0,this.multiplier=1;for(let t in ITEMS){let i=ITEMS[t];void 0!=i.multiplier?this.multiplier*=i.lvl>0?Math.pow(i.multiplier,i.lvl):1:this.va+=total_item_value(i)}}update(){this.v+=this.va/100}setValue(t){this.v=t}spend(t){this.v-=t}add(t){let i=t*this.multiplier;return this.v+=i,i}addOne(){return this.v+=this.multiplier,this.multiplier}}class Game{constructor(){}init(){this.currentLevel=0,this.cc=gId("counter"),this.cs=gId("per_second"),this.counter=new Counter,this.sb=gId("sb"),this.sb.addEventListener("mousedown",this.click.bind(this)),document.addEventListener("keydown",this.keydown.bind(this)),document.addEventListener("keyup",this.keyup.bind(this)),document.setValue=this.setValue.bind(this),this.click_particle=new ParticleSystem(1,e=>{e.y=lerp(e.y,e.iy-110,.05),e.x=e.ix+10*Math.sin(10*(5*e.ix+e.normalized_time)),e.alpha=e.normalized_time}),this.rain_particle=new ParticleSystem(3,e=>{e.y+=3,e.x=e.ix+10*Math.sin(10*(5*e.ix+e.normalized_time)),e.rot=10*Math.sin(30*e.normalized_time),e.alpha=e.normalized_time}),this.items=[],this.item_container=gId("items");let e=gId("it");for(let t in ITEMS){let i=ITEMS[t],s=e.innerHTML.replace("%1",i.name).replace("%2",i.getDescription(i)).replace("%3",i.cost).replace("%4",i.lvl),a=document.createElement("li");a.classList.add("item"),a.innerHTML=s,this.item_container.appendChild(a),i.dyn_element=a,a.addEventListener("click",this.buy.bind(this,i))}this.item_container.removeChild(e),this.adjustSize(),window.addEventListener("resize",this.adjustSize.bind(this)),this.loadGame(),this.updateItemDescriptions(),this.counter.evaluateItems(),this.checkCurrentLevel(),this.update(),setInterval(this.update.bind(this),100),this.frameCounter=0}adjustSize(){mobile()?this.cc.style["font-size"]=8-this.cc.innerText.length/2+"rem":this.cc.style["font-size"]=10-this.cc.innerText.length/3+"rem";let e=(this.cc.clientHeight-this.cc.firstChild.clientHeight)/2;this.cc.firstChild.style.transform="translateY("+e+"px)",this.item_container.style.height=window.innerHeight-gId("header").offsetHeight+"px"}update(){this.updateCounter(),this.updateItems(),this.updateParticles(),this.adjustSize(),this.saveGame()}updateItems(){
    // Show all upgrades regardless of level
    for(let t in ITEMS){
        let i = ITEMS[t];
        
        // Remove hide class to show all upgrades
        i.dyn_element.classList.remove("hide");
        
        // Set translucent styling for unavailable upgrades
        i.dyn_element.classList.remove("item_buyable");
        i.dyn_element.classList.remove("item_unavailable");
        
        // Update cost and level display
        i.dyn_element.getElementsByClassName("icost")[0].innerHTML = nfmt2(i.cost);
        i.dyn_element.getElementsByClassName("ilvl")[0].innerHTML = '<span class="_ilvl">x</span>' + i.lvl;
        
        // Add appropriate class based on availability
        if(i.cost <= this.counter.v) {
            i.dyn_element.classList.add("item_buyable");
        } else {
            i.dyn_element.classList.add("item_unavailable");
        }
        
        // Add value increase info to the description
        let valueInfo = "";
        if(i.initial_value) {
            if(i.lvl === 0) {
                valueInfo = `<div class="value-info">Will add <b>${nfmt(i.initial_value)}</b> clicks per second</div>`;
            } else {
                valueInfo = `<div class="value-info">Next level adds <b>${nfmt(i.value)}</b> clicks per second</div>`;
            }
        } else if(i.multiplier) {
            valueInfo = `<div class="value-info">Multiplies your clicks by <b>${i.multiplier}x</b></div>`;
        }
        
        // Add the value info to the item
        let valueInfoEl = i.dyn_element.querySelector(".value-info");
        if(valueInfoEl) {
            valueInfoEl.innerHTML = valueInfo;
        } else {
            i.dyn_element.querySelector(".idesc").insertAdjacentHTML('afterend', valueInfo);
        }
    }
    
    // Add margin to last item for scrolling
    let lastItem = ITEMS[ITEMS.length-1].dyn_element;
    if(lastItem) {
        for(let t in ITEMS) {
            ITEMS[t].dyn_element.classList.remove("item_last_child");
        }
        lastItem.classList.add("item_last_child");
    }
}updateItemDescriptions(){for(let e in ITEMS){let t=ITEMS[e];t.dyn_element.querySelector(".idesc").innerHTML=t.getDescription(t)}}updateCounter(){this.cc.firstChild.innerText=nfmt2(this.counter.v),this.cs.innerHTML="per second: "+(this.counter.va<1e3?nfmt1(this.counter.va):nfmt2(this.counter.va))}updateParticles(){let e=LEVELS[this.currentLevel];if(e.rain>0&&this.frameCounter%(21-clamp(e.rain,0,20))==0)for(let t=0;t<Math.floor(e.rain/21)+1;t++){let e=Math.random()*window.innerWidth,t=0,i=document.createElement("div");i.classList.add("spacebar"),i.classList.add("spacebar_particle"),this.rain_particle.pushParticle(i,{x:e,y:t}),document.body.insertBefore(i,document.body.firstChild)}this.frameCounter++}buy(e){
    if(this.counter.v<e.cost) return;
    
    this.counter.spend(Math.floor(e.cost));
    e.lvl++;
    
    // Add visual effect for upgrade purchase
    const itemEl = e.dyn_element;
    itemEl.classList.add('item_purchased');
    setTimeout(() => itemEl.classList.remove('item_purchased'), 700);
    
    // Play level up sound for significant upgrades
    if(e.lvl % 5 === 0 || e.lvl === 1) {
        playaudio(SOUNDS.levelUp);
    } else {
        playaudio(SOUNDS.buy);
    }
    
    e.cost=e.cost_func(e.cost);
    void 0!=e.initial_value&&(e.value=void 0==e.value?e.value_func(e.initial_value):e.value_func(e.value));
    this.counter.evaluateItems();
    this.updateItemDescriptions();
    this.checkCurrentLevel();
    this.update();
    this.shake()}checkCurrentLevel(){for(let e in LEVELS){let t=LEVELS[e];this.counter.va>t.psvalue&&(this.currentLevel=e)}}setValue(e){this.counter.setValue(e),this.update()}click(e){let t=this.counter.addOne();if(this.updateCounter(),playaudio(SOUNDS.click),void 0==e){let e=this.sb.getBoundingClientRect(),i=50*Math.random()-25;this.addPointParticle(e.right-e.width/2+i,e.top,t)}else this.addPointParticle(e.clientX,e.clientY,t)}keydown(e){"Space"==e.code&&this.canclick&&(this.click(),sb.classList.add("sb_active"),this.canclick=!1)}keyup(e){"Space"==e.code&&(this.sb.classList.remove("sb_active"),this.canclick=!0)}resetGameSure(){window.confirm("Are you sure you want to reset all the game data?")&&this.resetGame()}resetGame(){this.reloading=!0,window.localStorage.removeItem("spacebar_clicker_game"),window.location.reload(!0)}loadGame(){let e=window.localStorage.getItem("spacebar_clicker_game");if(void 0==e||null==e)return;let t=JSON.parse(e);if(!t.empty){console.dir(t),this.counter.v=t.v;for(let e in ITEMS){if(e>=t.items.length)break;ITEMS[e].cost=t.items[e].cost,ITEMS[e].lvl=t.items[e].lvl,ITEMS[e].value=t.items[e].value}this.reloading=!1}}saveGame(){let e=[];for(let t in ITEMS)e[t]={cost:ITEMS[t].cost,lvl:ITEMS[t].lvl,value:ITEMS[t].value};let t={empty:!1,v:this.counter.v,items:e};this.reloading||window.localStorage.setItem("spacebar_clicker_game",JSON.stringify(t))}addPointParticle(e,t,i){let s=document.createElement("div");s.textContent="+"+i,s.classList.add("particle"),s.classList.add("score");let a=30*Math.random()-30,n=30*Math.random()-20;this.click_particle.pushParticle(s,{x:e+a,y:t+n}),document.body.insertBefore(s,document.body.firstChild)}shake(e=20,t){void 0==t&&(t=gId("game")),co(function*(){for(let i=0;i<e;i++){let e=30*Math.random()-15,i=30*Math.random()-15,s=6*Math.random()-3;t.style.transform="translateX("+e+"px) translateY("+i+"px) rotateZ("+s+"deg)",yield.01}t.style.transform="translateX(0px) translateY(0px) rotateZ(0deg)"})}}let game=new Game;game.init();