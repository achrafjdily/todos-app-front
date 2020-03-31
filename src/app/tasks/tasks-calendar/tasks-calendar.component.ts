import { TasksService } from './../services/tasks.service';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import { FullCalendarComponent } from '@fullcalendar/angular';

@Component({
  selector: 'app-tasks-calendar',
  templateUrl: './tasks-calendar.component.html',
  styleUrls: ['./tasks-calendar.component.scss']
})
export class TasksCalendarComponent implements OnInit, AfterViewInit {
  @ViewChild("taskContainer") taskContainer: ElementRef;
  @ViewChild("calendar") calendar: FullCalendarComponent;

  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  taskForm: FormGroup;
  constructor(private fb: FormBuilder,private renderer:Renderer2,private tasksService:TasksService) {
    this.taskForm = fb.group({
      taskName: [""]
    });
  }

  get taskName() {
    return this.taskForm.get("taskName") as FormControl;
  }

  ngOnInit(): void {

    this.tasksService.my().subscribe(
      data => {
        data.forEach(element => {
          
          let event = {
            id : element.id,
            title : element.name,
            date : element.date
          }
          this.calendar.getApi().addEvent(event);

        });
      }
    )
  }

  ngAfterViewInit() {
    new Draggable(this.taskContainer.nativeElement, {
      itemSelector: '.fc-event',
      eventData: function (eventEl) {
        return {
          title: eventEl.innerText
        };
      },
    })
  }

  createTask(event){
    console.log(event.event)
    // console.dir(this.calendar.element.nativeElement.querySelector(".fc-event"))
    let date = event.event.start;
   date = date.getFullYear()+"-"+ (date.getMonth()+1)+"-"+date.getDate();
    let string = event.event.title;

    this.tasksService.create(string,date).subscribe(
      data => {
        if(data.success){
          event.event.setProp("id",data.task.id);
        }
      }
    )

  }
  updateTask(event){
    
    console.log(event)
    let id = (event.event.id)? event.event.id : event.event._def.id;
    let date = event.event.start;
    date = date.getFullYear()+"-"+ (date.getMonth()+1)+"-"+date.getDate();
    
    this.tasksService.update(id,date).subscribe(
      data => {}
    )
  }

  eventDo(event){
    const icon = this.renderer.createElement("mat-icon");
    const close = this.renderer.createText("close");
    this.renderer.addClass(icon,"delete-icon");
    this.renderer.appendChild(icon,close);
    this.renderer.appendChild(event.el,icon)
    this.renderer.addClass(event.el,"text-light")
  }
  deleteEvent(event){
    if(event.jsEvent.srcElement.className == "delete-icon"){
      console.log(event.event)
      let id = (event.event.id)? event.event.id : event.event._def.id;
      this.tasksService.delete(id).subscribe(
        data => {
          if(data){
            event.event.remove();
          }
        }
      )
    }
  }

}
