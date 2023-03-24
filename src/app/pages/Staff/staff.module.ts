import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { NbCardModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { routedComponents, StaffRoutingModule } from './staff-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AcademicService } from '../../@core/data/academic.service';

@NgModule({
  imports: [
    ThemeModule,
    StaffRoutingModule,
    NgxEchartsModule,
    NbCardModule,
    Ng2SmartTableModule
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    AcademicService
  ]
})
export class StaffModule { }
