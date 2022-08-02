
console.log('hello');

// Chart content

const trafficWeekly = document.getElementById('traffic-chart-weekly').getContext('2d');
const trafficMonthly = document.getElementById('traffic-chart-monthly').getContext('2d');
const trafficDaily = document.getElementById('traffic-chart-daily').getContext('2d');
const trafficHourly = document.getElementById('traffic-chart-hourly').getContext('2d');

const trafficMonthlyChart = document.getElementById('traffic-chart-monthly');
const trafficDailyChart = document.getElementById('traffic-chart-daily');
const trafficHourlyChart = document.getElementById('traffic-chart-hourly');
const trafficWeeklyChart = document.getElementById('traffic-chart-weekly');

const navMonthly = document.getElementById('nav-monthly');
const navDaily = document.getElementById('nav-daily');
const navHourly = document.getElementById('nav-hourly');
const navWeekly = document.getElementById('nav-weekly');

let trafficOptions = { 
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
};

//Chart Data

let trafficWeeklyData = {
  labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
  "4-10", "11-17", "18-24", "25-31"],
  datasets: [{
      data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
        2500],
      backgroundColor: 'rgba(14, 88, 134, .3)',
      borderWidth: 1,
  }]
};

let trafficMonthlyData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug",
        "Sep", "Oct", "Nov"],
        datasets: [{
           data: [4200, 4700, 3600, 5050, 6000, 5200, 4700, 5500, 7120, 5900,
               6550],
      backgroundColor: 'rgba(14, 88, 134, .3)',
      borderWidth: 1,
  }]
};

let trafficDailyData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug",
        "Sep", "Oct", "Nov"],
        datasets: ["Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue",
               "Wed", "Thu", "Fri", "Sat"],
               datasets: [{
                   data: [340, 410, 290, 140, 210, 480, 390, 375, 220, 400,
                     270],
      backgroundColor: 'rgba(14, 88, 134, .3)',
      borderWidth: 1,
  }]
};

let trafficHourlyData = {
  labels: ["10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM",
         "5PM", "6PM", "7PM", "8PM"],
         datasets: [{
             data: [44, 30, 20, 27, 18, 22, 30, 35, 52, 48,
               55],
      backgroundColor: 'rgba(14, 88, 134, .3)',
      borderWidth: 1,
  }]
};

//Putting Together a Chart Display

let trafficChartWeekly = new Chart(trafficWeekly, {
  type: 'line',
  data: trafficWeeklyData,
  options: trafficOptions
});

let trafficChartMonthly = new Chart(trafficMonthly, {
  type: 'line',
  data: trafficMonthlyData,
  options: trafficOptions
});

let trafficChartDaily = new Chart(trafficDaily, {
  type: 'line',
  data: trafficDailyData,
  options: trafficOptions
});

let trafficChartHourly = new Chart(trafficHourly, {
  type: 'line',
  data: trafficHourlyData,
  options: trafficOptions
});

document.addEventListener('click', (e) => {
  if (e.target.className === 'traffic-nav-link') {
    const activeChart = document.getElementsByClassName('chart-active');
    for (let i = activeChart.length - 1; i >= 0; i--) {
      activeChart[i].className = 'traffic-nav-link';
    }
    e.target.className = 'chart-active';
  }
})

navMonthly.addEventListener('click', () => {
  trafficMonthlyChart.style = 'display: block;';
  trafficDailyChart.style = 'display: none;';
  trafficWeeklyChart.style = 'display: none;';
  trafficHourlyChart.style = 'display: none;';
})

navDaily.addEventListener('click', () => {
  trafficMonthlyChart.style = 'display: none;';
  trafficDailyChart.style = 'display: block;';
  trafficWeeklyChart.style = 'display: none;';
  trafficHourlyChart.style = 'display: none;';
})

navWeekly.addEventListener('click', () => {
  trafficMonthlyChart.style = 'display: none;';
  trafficDailyChart.style = 'display: none;';
  trafficWeeklyChart.style = 'display: block;';
  trafficHourlyChart.style = 'display: none;';
})

navHourly.addEventListener('click', () => {
  trafficMonthlyChart.style = 'display: none;';
  trafficDailyChart.style = 'display: none;';
  trafficWeeklyChart.style = 'display: none;';
  trafficHourlyChart.style = 'display: block;';
})

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


// Closing Alert Banner /////////////////////////////////////////

const alertContainer = document.getElementById("alert");

alertContainer.addEventListener('click', e => {
  const bannerClose = e.target;
  console.log('clicking close btn');
  if (bannerClose.classList.contains("alert-btn-close")) {
    alertContainer.style.display = 'none';
  }
});


// Send User message and Create an Alert ///////////////////////////////////

const sendMessage = document.getElementById('send-btn');
const userSelect = document.getElementById('search-input');
const message = document.getElementById('message-input');

sendMessage.addEventListener('click', () => {
  
  console.log('clicking send btn');
  
  if (userSelect.value === "" && message.value === "") {
    userSelect.className = 'form-error';
    message.className = 'form-error';
    userSelect.setAttribute('placeholder', `Please Fill Out User Before Sending`);
    message.setAttribute('placeholder', `Please Fill Out Message Before Sending`);
    } else if (userSelect.value === "" ) {
      userSelect.className = 'form-error';
      userSelect.setAttribute('placeholder', `Please Fill Out User Before Sending`);
    } else if (message.value === "" ) {
      message.className = 'form-error';
      message.setAttribute( 'placeholder', `Please Fill Out Message Before Sending`);
    } else {
      userSelect.className = 'form-sent';
      message.className = 'form-sent';
      userSelect.value = "";
      message.value = "";
      message.setAttribute('placeholder', `Message Sent Successfully`);
    }
});

userSelect.addEventListener('keyup', () => {
  if (userSelect.value !== "") {
    userSelect.className = 'form-search'
    userSelect.setAttribute('placeholder', `Search for User`);
  }
})

message.addEventListener('keyup', () => {
  if (message.value !== "") {
    message.className = 'form-search'
    message.setAttribute('placeholder', `Message for User`);
  }
})


//Bell Icon Interactions /////////////////////////////////////////////////////

// Event Listener to Hide/Show notification messages by clicking on the Bell SVG

const bellContainer = document.getElementById("bell-svg");
const notifyIcon = document.getElementById('alert-badge');


bellContainer.addEventListener('click', () => {
  const bellClose = document.getElementById('dropdown-box');
  console.log('clicking notes');
  if (bellClose.className === 'dropdown-box-hide') {
    bellClose.className = 'dropdown-box';
  } else {
    bellClose.className = 'dropdown-box-hide';
  }
})

// Closing Bell Notification messages

document.addEventListener('click', (e) => {
  
  if (e.target.className === "dropdown-btn") {
    console.log('click click');
    e.target.parentNode.remove();
    notifyAlert();
  }
});

//Function to display notification dot, when notifications are present

function notifyAlert() {
  let notify = document.querySelectorAll('.dropdown-item');
  let notifyCount = notify.length;
  if (notifyCount === 0) {
    notifyIcon.className = 'alert-badge-hide';
  }
}





