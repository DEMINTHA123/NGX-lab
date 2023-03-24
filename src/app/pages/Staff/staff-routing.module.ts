import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcademicComponent } from './Academic/academic.component';
import { NonAcademicComponent } from './non-academic/non-academic.component';
import { StaffComponent } from './staff.component';

const routes: Routes = [{
  path: '',
  component: StaffComponent,
  children: [{
    path: 'academic',
    component: AcademicComponent,
    
  },
  {
    path:'non-academic',
    component: NonAcademicComponent
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffRoutingModule { }

export const routedComponents = [
  StaffComponent,
  AcademicComponent,
  NonAcademicComponent
];
