import { AfterViewInit, Component } from '@angular/core';
import { Course } from './Course'
import { CourseService } from './courses.service'


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent{

  constructor(private courseService: CourseService){

  }

  courses: Course[] = this.courseService.retrieveAll();

  displayedColumns: string[] = ["Image", "Name", "Price", "Code", "Release Date", "Rating", "Options"]

}