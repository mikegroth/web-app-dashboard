
console.log('hello');


const ctx = document.getElementById('traffic-chart').getContext('2d');



const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
        "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
              2500],
            backgroundColor: 'rgba(116, 119, 191, .3)',
            borderWidth: 1,
        }]
    },
    options: {
      scales: {
          y: {
              beginAtZero: true
          }
      },
      fill: true,
      aspectRatio: 2.5,
      animation: {
      duration: 0
      },
      plugins: {
        legend: {
        display: false
        }
      }

  }
});

const ctx2 = document.getElementById('daily-traffic-chart').getContext('2d');

const dailyChart = new Chart(ctx2, {
  type: 'bar',
  data: {
      labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      datasets: [{
          label: '# of Hits',
          data: [75, 110, 175, 120, 225, 200, 100],
          backgroundColor: [
            'rgba(54, 162, 235, 1)'
          ],
  }]
  },
  options: {
      scales: {
          y: {
              beginAtZero: true
          }
      },
      plugins: {
        legend: {
        display: false
        }
        }
  }
});

const ctx3 = document.getElementById('mobile-chart').getContext('2d');

const mobileChart = new Chart(ctx3, {
  type: 'doughnut',
  data: {
      labels: ['Desktop', 'Tablet', 'Phones'],
      datasets: [{
          label: 'hello',
          data: [12, 19, 21],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
      }]
  },
  options: {
          aspectRatio: 1.9,
          plugins: {
          legend: {
          position: 'right',
          labels: {
          boxWidth: 20,
          fontStyle: 'bold'
        }
      }
    }
  }
});