import { OnInit, Component } from '@angular/core';
import { Course } from './Course'
import { CourseService } from './course-service.service'

@Component({
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent  implements OnInit {

  selectedCourse?: Course;

  _courses: Course[] = [];
  coursesFiltered: Course[] = [];

  constructor(private courseService: CourseService){ }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void {
    this.courseService.getCourses()
        .subscribe({ 
            next: courses => {
            this._courses = courses
            this.coursesFiltered = courses
          },error: err => console.log('Error', err)
        });
  }

  deleteById(courseId: number): void{
    this.courseService.deleteById(courseId).subscribe({
      next: ()=> {
        alert("Course deleted with success")
        this.getCourses()
      },
      error: err => console.log(err)
    })
  }

  displayedColumns: string[] = ["Image", "Name", "Price", "Code", "Release Date", "Rating", "Options"]

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.coursesFiltered = this._courses.filter(item => item.name.trim().toLocaleLowerCase().includes(filterValue.trim().toLocaleLowerCase()))
  }
}

