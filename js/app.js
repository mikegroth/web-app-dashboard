
console.log('hello');

// Chart content

const ctx = document.getElementById('traffic-chart').getContext('2d');



const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
        "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
              2500],
            backgroundColor: 'rgba(14, 88, 134, .3)',
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
            'rgba(14, 88, 134, 1)'
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
              'rgba(14, 88, 134, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(14, 88, 134, 1)'
          ],
          borderColor: [
            'rgba(14, 88, 134, 0.2)',
              'rgba(54, 162, 235, 1)',
              'rgba(14, 88, 134, 1)'
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


// Web Interactive

const alertContainer = document.getElementById("alert");

alertContainer.addEventListener('click', e => {
  const bannerClose = e.target;
  console.log('clicking close btn');
  if (bannerClose.classList.contains("alert-btn-close")) {
    alertContainer.style.display = 'none';
  }
});

const notifications = document.getElementById("bell-icon");

const bellBox = document.getElementById("bell-notes");


notifications.addEventListener('click', e => {
  const bellNotes = e.target;
  console.log('clicking on bell');
  if (bellNotes.classList.contains("bell-notes")) {
    bellBox.innerHTML = `<ul class="dropdown">
    <li class="dropdown-item">You have 2 unread messages <p>X</p> </li>
    <li class="dropdown-item">You have 3 new followers <p>X</p> </li>
    <li class="dropdown-item">Your password expires in 4 days<p>X</p> </li>
    </ul>`;
  }
});


