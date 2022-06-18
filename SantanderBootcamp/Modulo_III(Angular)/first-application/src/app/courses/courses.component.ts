import { OnInit, Component } from '@angular/core';
import { Course } from './Course'
import { CourseService } from './course-service.service'


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent  implements OnInit {

  selectedCourse?: Course;

  courses: Course[] = [];
  coursesFiltered: Course[] = [];

  constructor(private courseService: CourseService){ }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void {
    this.courseService.getCourses()
        .subscribe(courses => this.courses = courses);
    this.courseService.getCourses()
        .subscribe(courses => this.coursesFiltered = courses);
  }

  displayedColumns: string[] = ["Image", "Name", "Price", "Code", "Release Date", "Rating", "Options"]

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.coursesFiltered = this.courses.filter(item => item.name.trim().toLocaleLowerCase().includes(filterValue.trim().toLocaleLowerCase()))
  }
}

