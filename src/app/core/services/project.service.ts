import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    if (isPlatformBrowser(this.platformId)) {
      const savedProjects = localStorage.getItem('projects');
      if (savedProjects) {
        try {
          this.projects = JSON.parse(savedProjects);
        } catch (error) {
          console.error("Invalid JSON data in localStorage:", error);
          this.projects = [];
        }
      } else {
        this.projects = this.getSampleProjects(); // サンプルデータを追加
      }
    }
  }

  getProjects(): Project[] {
    return this.projects;
  }

  addProject(project: Project) {
    this.projects.push(project);
    this.saveProjects();
  }

  updateProject(updatedProject: Project) {
    const index = this.projects.findIndex(project => project.id === updatedProject.id);
    if (index !== -1) {
      this.projects[index] = updatedProject;
      this.saveProjects();
    } else {
      console.error('Project not found:', updatedProject);
    }
  }

  saveProjects() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('projects', JSON.stringify(this.projects));
    }
  }

  deleteProject(project: Project) {
    this.projects = this.projects.filter(p => p.id !== project.id);
    this.saveProjects();
  }

  private getSampleProjects(): Project[] {
    return [
      {
        id: '007o8rqdo',
        name: 'エレクトリック',
        description: '魔法',
        startDate: '2024-06-20',
        endDate: '2024-06-21',
        color: 'blue',
        tasks: ['1']
      },
      {
        id: 'cvfw7dj3b',
        name: '600',
        description: '',
        startDate: '',
        endDate: '',
        color: 'green',
        tasks: ['2']
      },
      {
        id: 'n9tncsrc2',
        name: 'ぴ',
        description: '',
        startDate: '',
        endDate: '',
        color: 'red',
        tasks: ['3']
      }
    ];
  }
}
