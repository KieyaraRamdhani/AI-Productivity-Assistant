/* ==========================================
   DASHBOARD STAT COUNTERS
========================================== */

function animateCounter(id, target, duration = 1800) {

    const element = document.getElementById(id);

    if (!element) return;

    let current = 0;

    const increment = target / (duration / 16);

    const timer = setInterval(() => {

        current += increment;

        if (current >= target) {

            current = target;

            clearInterval(timer);

        }

        element.textContent = Math.floor(current);

    }, 16);

}

animateCounter("requests", 2847);
animateCounter("tasks", 946);


/* ==========================================
   CHART.JS GRAPH
========================================== */

const chartCanvas = document.getElementById("usageChart");

if (chartCanvas) {

    new Chart(chartCanvas, {

        type: "line",

        data: {

            labels: [

                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun"

            ],

            datasets: [{

                label: "AI Requests",

                data: [22, 35, 41, 58, 64, 82, 96],

                borderColor: "#4fdfff",

                backgroundColor: "rgba(79,223,255,.15)",

                fill: true,

                tension: 0.4,

                pointRadius: 5,

                pointBackgroundColor: "#4fdfff"

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {

                    labels: {

                        color: "#ffffff"

                    }

                }

            },

            scales: {

                x: {

                    ticks: {

                        color: "#ffffff"

                    },

                    grid: {

                        color: "rgba(255,255,255,.05)"

                    }

                },

                y: {

                    ticks: {

                        color: "#ffffff"

                    },

                    grid: {

                        color: "rgba(255,255,255,.05)"

                    }

                }

            }

        }

    });

}


/* ==========================================
   LIVE AI ACTIVITY
========================================== */

const liveFeed = document.getElementById("liveStatus");

const activities = [

    "Generating professional email...",
    "Summarising meeting notes...",
    "Planning weekly schedule...",
    "Researching company data...",
    "Creating project report...",
    "Analysing productivity trends...",
    "Checking grammar...",
    "Building presentation outline...",
    "Optimising workflow...",
    "Waiting for new requests..."

];

function addActivity() {

    if (!liveFeed) return;

    const status = document.createElement("div");

    status.className = "status-item";

    status.innerHTML = `

        <span class="pulse"></span>

        ${activities[Math.floor(Math.random() * activities.length)]}

    `;

    liveFeed.prepend(status);

    while (liveFeed.children.length > 6) {

        liveFeed.removeChild(liveFeed.lastChild);

    }

}

setInterval(addActivity, 3000);


/* ==========================================
   LIVE PRODUCTIVITY SCORE
========================================== */

const scoreCard = document.querySelector(".stat-card:nth-child(3) h2");

if (scoreCard) {

    setInterval(() => {

        const score = 95 + Math.floor(Math.random() * 5);

        scoreCard.textContent = score + "%";

    }, 4000);

}


/* ==========================================
   LIVE RESPONSE TIME
========================================== */

const responseCard = document.querySelector(".stat-card:nth-child(4) h2");

if (responseCard) {

    setInterval(() => {

        const time = (0.8 + Math.random()).toFixed(1);

        responseCard.textContent = time + "s";

    }, 2500);

}


/* ==========================================
   RANDOMLY INCREASE COUNTERS
========================================== */

setInterval(() => {

    const requests = document.getElementById("requests");
    const tasks = document.getElementById("tasks");

    if (requests) {

        requests.textContent = Number(requests.textContent) + Math.floor(Math.random() * 5);

    }

    if (tasks) {

        tasks.textContent = Number(tasks.textContent) + Math.floor(Math.random() * 2);

    }

}, 5000);