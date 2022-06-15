import { Component, NgModule, OnInit } from '@angular/core';

export interface Course{
  id: number
  name: string
  imgUrl: string
  price: number
  code: string
  duration: number
  rating: number
  releaseDate: string
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent{
  courses: Course[] = [
    {
      id: 1,
      name: 'Angular: Forms',
      imgUrl: '',
      price: 99.99,
      code: 'XPS-8796',
      duration: 120,
      rating: 5.4,
      releaseDate: 'November, 02, 2019'
    },
    {
      id: 2,
      name: 'Angular: HTTP',
      imgUrl: '',
      price: 45.99,
      code: 'LKL-1094',
      duration: 80,
      rating: 4,
      releaseDate: 'December, 04, 2019'
    }
  ]

  displayedColumns: string[] = ["Image", "Name", "Price", "Code", "Release Date", "Rating", "Options"]
}