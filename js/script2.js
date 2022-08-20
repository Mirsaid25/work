var trace1 = {
  x: ["1 Aug","2 Aug","3 Aug","4 Aug","5 Aug","6 Aug"],
  y: [17, 5,20,27,29,20,15],
  name: 'Rest of world',
  marker: {color: '#1665D8'},
  type: 'bar'
};

var trace2 = {
  x: ["1 Aug","2 Aug","3 Aug","4 Aug","5 Aug","6 Aug"],
  y: [11, 20, 13,35, 37, 20],
  name: 'China',
  marker: {color: '#EDF0F2'},
  type: 'bar'
};

var data = [trace1, trace2];

var layout = {
  xaxis: {tickfont: {
      size: 14,
      color: ' #A6B1BB'
    }},
  yaxis: {
    titlefont: {
      size: 16,
      color: 'rgb(107, 107, 107)'
    },
    tickfont: {
      size: 14,
      color: 'rgb(107, 107, 107)'
    }
  },
  legend: {
    x: 0,
    y: 1.0,
    bgcolor: 'rgba(255, 255, 255, 0)',
    bordercolor: 'rgba(255, 255, 255, 0)'
  },
  barmode: 'group',
  bargap: 0.15,
  bargroupgap: 0.1
};

Plotly.newPlot('myDiv', data, layout);

// ===================================================================



const data_2 = {
  labels: [
    'Mobile',
    'Desktop',
    'Tablet'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};

const config = {
  type: 'doughnut',
  data: data_2,
  options: {}
};

let customers = document.querySelector(".customers")

customers.onclick=()=>{
  window.location.href = "../index.html"

}

let eror = document.querySelectorAll(".eror")

 eror.forEach(item=>{
    item.onclick=()=>{
        window.location.href = "../eror.html"
    } 
})