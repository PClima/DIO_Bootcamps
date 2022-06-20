import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from './Course'
import { CourseService } from "./course-service.service";
import { MatDialog } from '@angular/material/dialog';
import { Router } from "@angular/router";


@Component({
    templateUrl: './course-info.component.html',
    styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit{

    course!: Course;

    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService, public dialog: MatDialog, private router: Router){

    }

    ngOnInit(): void {
        if(this.activatedRoute.snapshot.paramMap.get('id')){
            this.courseService.getCourseById(Number(this.activatedRoute.snapshot.paramMap.get('id')!)).subscribe({
                next: course => { 
                    this.course = course
                }, error: err => console.log('Error', err)
            });
        }
    }

    save() :void{
        this.courseService.save(this.course).subscribe({
            next: course =>{ 
                alert("Coursed informations saved with success")
                this.router.navigate(['/courses'])
            }, error: err => console.log(err)
        })
    }

    
}