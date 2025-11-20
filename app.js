// ------------------------
// Example Bar Chart
// ------------------------

const barCtx = document.getElementById('myBarChart');

new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: ["A", "B", "C", "D", "E"],
        datasets: [{
            label: "Example Data",
            data: [12, 19, 3, 5, 2],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: { beginAtZero: true }
        }
    }
});

// ------------------------
// Example Line Chart
// ------------------------

const lineCtx = document.getElementById('myLineChart');

new Chart(lineCtx, {
    type: 'line',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [{
            label: 'Traffic Counts',
            data: [120, 150, 180, 160, 210],
            fill: false,
            tension: 0.3,
            borderWidth: 2
        }]
    },
    options: {
        responsive: true
    }
});
