import { NgModule } from '@angular/core';
import { NbCardBodyComponent, NbCardComponent, NbCardModule, NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { ChemicalsComponent } from './chemicals/chemicals.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { EquipmentComponent } from './equipment/equipment.component';
import { ImageThumbnailColumnComponent } from './equipment/image-thumbnail-column/image-thumbnail-column.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    Ng2SmartTableModule,
    NbCardModule,
  ],
  declarations: [
    PagesComponent,
    ChemicalsComponent,
    EquipmentComponent,
    ImageThumbnailColumnComponent,
    
  ],
})
export class PagesModule {
}
