import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CourseInfoComponent } from "./course-info.component";
import { CoursesComponent } from "./courses.component";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { StarModule } from "../shared/component/star/star.module";
import { AppPipeModule } from "../shared/pipe/app-pipe.module";

@NgModule({
    declarations: [
        CoursesComponent,
        CourseInfoComponent
    ], 
    imports: [    
        BrowserModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        FormsModule,
        MatDialogModule,
        HttpClientModule,
        StarModule,
        AppPipeModule,
        RouterModule.forChild([
            {
                path: 'courses', component: CoursesComponent
              },
              {
                path: 'courses/info/:id', component: CourseInfoComponent
              }              
        ])
    ]
})
export class CourseModule{

}