// Weekly Usage Chart

const ctx = document.getElementById("usageChart");

if(ctx){

new Chart(ctx,{

type:"line",

data:{

labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],

datasets:[{

label:"AI Requests",

data:[18,29,22,38,41,56,67],

borderColor:"#43d9ff",

backgroundColor:"rgba(67,217,255,.2)",

fill:true,

tension:.4

}]

},

options:{

responsive:true,

plugins:{

legend:{

labels:{

color:"white"

}

}

},

scales:{

x:{

ticks:{color:"white"}

},

y:{

ticks:{color:"white"}

}

}

}

});

}

// Animated Counters

function counter(id,end){

let current=0;

const element=document.getElementById(id);

const timer=setInterval(()=>{

current++;

element.innerText=current;

if(current>=end){

clearInterval(timer);

}

},20);

}

counter("requests",142);

counter("tasks",87);

// Live AI Feed

const live=document.getElementById("liveStatus");

const logs=[

"Generating professional email...",

"Summarising meeting transcript...",

"Planning today's schedule...",

"Researching market trends...",

"AI Assistant answered a question...",

"Updating productivity metrics..."

];

let index=0;

setInterval(()=>{

live.innerHTML=

`<div class="status-item">

<span class="pulse"></span>

${logs[index]}

</div>`;

index=(index+1)%logs.length;

},2500);