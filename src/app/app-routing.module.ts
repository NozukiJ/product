import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './shared/components/calendar/calendar.component';
import { TaskListComponent } from './shared/components/task-list/task-list.component';
import { ProjectTaskListComponent } from './shared/components/project-list/project-list.component';

export const routes: Routes = [
  { path: 'calendar', component: CalendarComponent },
  { path: 'tasks', component: TaskListComponent },
  { path: 'projects', component: ProjectTaskListComponent },
  { path: '', redirectTo: '/calendar', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
