// import { Component, OnInit, ViewChild, ViewChildren, ElementRef, QueryList, AfterViewInit } from '@angular/core';
// import { ProjectService } from '../../../core/services/project.service';
// import { TaskService } from '../../../core/services/task.service';
// import { CommonModule } from '@angular/common';
// import { Chart, registerables } from 'chart.js'; // Chart.jsのregisterablesをインポート

// Chart.register(...registerables); // 全てのチャートタイプを登録

// @Component({
//   selector: 'app-progress-chart',
//   templateUrl: './progress-chart.component.html',
//   styleUrls: ['./progress-chart.component.css'],
//   standalone: true,
//   imports: [CommonModule]
// })
// export class ProgressChartComponent implements OnInit, AfterViewInit {
//   overallData: number[] = [];
//   projectData: { projectName: string; data: number[] }[] = [];

//   @ViewChild('overallChartContainer') overallChartContainer!: ElementRef;
//   @ViewChildren('projectChartContainer') projectChartContainers!: QueryList<ElementRef>;

//   constructor(private projectService: ProjectService, private taskService: TaskService) {}

//   ngOnInit(): void {
//     this.generateOverallData();
//     this.generateProjectData();
//   }

//   ngAfterViewInit(): void {
//     this.createOverallChart();
//     this.createProjectCharts();
//   }

//   generateOverallData(): void {
//     const tasks = this.taskService.getTasks();
//     const completed = tasks.filter(task => task.status === '完了').length;
//     const inProgress = tasks.filter(task => task.status === '進行中').length;
//     const notStarted = tasks.filter(task => task.status === '未開始').length;

//     this.overallData = [completed, inProgress, notStarted];
//     console.log('Overall Data:', this.overallData);
//   }

//   generateProjectData(): void {
//     const projects = this.projectService.getProjects();
//     console.log('Projects:', projects);

//     projects.forEach(project => {
//       const tasks = this.taskService.getTasks().filter(task => task.projectId === project.id);
//       const completed = tasks.filter(task => task.status === '完了').length;
//       const inProgress = tasks.filter(task => task.status === '進行中').length;
//       const notStarted = tasks.filter(task => task.status === '未開始').length;

//       const data = [completed, inProgress, notStarted];

//       this.projectData.push({ projectName: project.name, data });
//       console.log(`Data for project ${project.name}:`, data);
//     });
//   }

//   createOverallChart(): void {
//     if (this.overallChartContainer) {
//       const data = {
//         labels: ['完了', '進行中', '未着手'],
//         datasets: [{
//           data: this.overallData,
//           backgroundColor: ['#4CAF50', '#FFC107', '#F44336'],
//         }]
//       };
//       const ctx = this.overallChartContainer.nativeElement.getContext('2d');
//       new Chart(ctx, {
//         type: 'pie',
//         data,
//         options: {
//           responsive: true,
//         },
//       });
//     }
//   }

//   createProjectCharts(): void {
//     this.projectChartContainers.forEach((container, index) => {
//       const project = this.projectData[index];
//       const data = {
//         labels: ['完了', '進行中', '未着手'],
//         datasets: [{
//           data: project.data,
//           backgroundColor: ['#4CAF50', '#FFC107', '#F44336'],
//         }]
//       };
//       const ctx = container.nativeElement.getContext('2d');
//       new Chart(ctx, {
//         type: 'pie',
//         data,
//         options: {
//           responsive: true,
//         },
//       });
//     })
//   }
// }
