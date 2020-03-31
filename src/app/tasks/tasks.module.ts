import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksCalendarComponent } from './tasks-calendar/tasks-calendar.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [TasksCalendarComponent],
  imports: [
    CommonModule,
    TasksRoutingModule,
    MatCardModule,
    MatButtonModule,
    FullCalendarModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class TasksModule { }
