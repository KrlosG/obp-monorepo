import { NgModule } from '@angular/core';
import { TopbarComponent } from './topbar/topbar.component';
import { ObpMaterialModule } from '@obp/material';
// import { ObpCommonComponent } from './obp-common.component';



@NgModule({
  declarations: [TopbarComponent],
  imports: [
    ObpMaterialModule
  ],
  exports: [TopbarComponent]
})
export class ObpCommonModule { }
