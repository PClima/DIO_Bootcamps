import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { CourseModule } from './courses/course.module';
import { CoreModule } from './core/component/core.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CourseModule,
    CoreModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
