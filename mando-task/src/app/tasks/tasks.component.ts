import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent],
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Train Grogu',
      summary:
        "Grogu needs to improve he's blaster accuracy and lightsaber combat",
      dueDate: '2025-12-31',
    },

    {
      id: 't2',
      userId: 'u2',
      title: 'Practice the force',
      summary: 'Meditate to get stronger in utilizing the force',
      dueDate: '2025-10-13',
    },

    {
      id: 't3',
      userId: 'u3',
      title: 'Retake Mandalore',
      summary:
        'After years of having a toxic atmosphere, mandalore atmosphere is clean enough for reconstruction and repopulation',
      dueDate: '2030-12-31',
    },

    {
      id: 't4',
      userId: 'u4',
      title: 'Train the foundlings',
      summary:
        'The new foundlings need to be train in the ways of the mandalore',
      dueDate: '2025-12-31',
    },

    {
      id: 't5',
      userId: 'u5',
      title: 'Conquer Tatooine',
      summary:
        'After years of infight between the tatooine gangs, that have left them weak, the planet is ready to be conquered',
      dueDate: '2035-12-31',
    },

    {
      id: 't6',
      userId: 'u6',
      title: 'Repair Din Djarin Armor',
      summary: 'Din Djarin armor needs repair after the last battle.',
      dueDate: '2024-7-15',
    },
  ];

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
