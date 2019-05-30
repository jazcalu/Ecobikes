import { Component,OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
//   title = 'front';
//   chart;
//   chart2 = [];
//   pie: any;
//   doughnut: any;
//   data1 = [];

  

  ngOnInit() {}

//     socket.on('data1', (res) => {
//       this.updateChartData(this.chart, res, 0);
//       this.updateChartData(this.doughnut,res.slice(0,5), 0);
//     })

//     socket.on('data2', (res) => {
//       this.updateChartData(this.chart, res, 1);
//     })

//     this.chart = new Chart('bar', {
//       type: 'bar',
//       options: {
//         responsive: true,
//         title: {
//           display: true,
//           text: 'Ventas por Personal'
//         },
//       },
//       data: {
//         labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
//         datasets: [
//           {
//             type: 'bar',
//             label: 'Tienda A',
//             data: [8, 7, 2, 30, 20, 1, 10, 3],
//             backgroundColor: 'rgba(255,0,255,0.4)',
//             borderColor: 'rgba(255,0,255,0.4)',
//             fill: false,
//           },
//           // {
//           //   type: 'line',
//           //   label: 'Dataset 2',
//           //   backgroundColor: 'rgba(0,0,255,0.4)',
//           //   borderColor: 'rgba(0,0,255,0.4)',
//           //   data: [
//           //     443, 256, 165, 100, 56, 65, 35, 543
//           //   ],
//           //   fill: false,
//           // },
//           {
//             type: 'bar',
//             label: 'Tienda B',
//             data: [10, 6, 4, 3, 5, 9, 4, 3].reverse(),
//             backgroundColor: 'rgba(0,0,255,0.4)',
//             borderColor: 'rgba(0,0,255,0.4)',
//             fill: false,
//           }
//         ]
//       }
//     });

//     let options = {
//       // aspectRatio: 1,
//       // legend: false,
//       tooltips: false,

//       elements: {
//         point: {
//           borderWidth: function (context) {
//             return Math.min(Math.max(1, context.datasetIndex + 1), 8);
//           },
//           hoverBackgroundColor: 'transparent',
//           hoverBorderColor: function (context) {
//             return "red";
//           },
//           hoverBorderWidth: function (context) {
//             var value = context.dataset.data[context.dataIndex];
//             return Math.round(8 * value.v / 1000);
//           },
//           radius: function (context) {
//             var value = context.dataset.data[context.dataIndex];
//             var size = context.chart.width;
//             var base = Math.abs(value.v) / 1000;
//             return (size / 24) * base;
//           }
//         }
//       }
//     };


//     this.doughnut =  new Chart('doughnut',{
//       type: 'doughnut',
//       options: {
//         responsive: true,
//         title: {
//           display: true,
//           text: 'Doughnut Chart'
//         },legend: {
// 					position: 'top',
// 				},animation: {
// 					animateScale: true,
// 					animateRotate: true
// 				}
//       },
//       data: {
// 				datasets: [{
// 					data: [45,10,5,25,15],
// 					backgroundColor: ["red","orange","yellow","green","blue"],
// 					label: 'Dataset 1'
// 				}],
// 				labels: ['Red','Orange','Yellow','Green','Blue']
// 			}
//     })

//     this.pie = new Chart('pie',{
//       type: 'pie',
//       options: {
//         responsive: true,
//         title: {
//           display: true,
//           text: 'Pie Chart'
//         },legend: {
// 					position: 'top',
// 				},animation: {
// 					animateScale: true,
// 					animateRotate: true
// 				}
//       },
//       data: {
// 				datasets: [{
// 					data: [45,10,5,25,15].reverse(),
// 					backgroundColor: ["red","orange","yellow","green","blue"],
// 					label: 'Dataset 1'
// 				}],
// 				labels: ['Red','Orange','Yellow','Green','Blue']
// 			}
//     })

//   }

//   addData(chart, label, data) {
//     chart.data.labels.push(label);
//     chart.data.datasets.forEach((dataset) => {
//         dataset.data.push(data);
//     });
//     chart.update();
// }

// removeData(chart) {
//     chart.data.labels.pop();
//     chart.data.datasets.forEach((dataset) => {
//         dataset.data.pop();
//     });
//     chart.update();
// }

// updateChartData(chart, data, dataSetIndex){
//   chart.data.datasets[dataSetIndex].data = data;
//   chart.update();
// }

}
