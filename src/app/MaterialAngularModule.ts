// tslint:disable-next-line:max-line-length
import {MatIconModule, MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule, MatToolbarModule, MatFormFieldModule, MatRippleModule} from '@angular/material';

import { NgModule } from '@angular/core';

@NgModule({
  imports: [
     MatIconModule, 
     MatButtonModule,
      MatCheckboxModule,
       MatCardModule,
       MatInputModule,
        MatToolbarModule,
        MatFormFieldModule,
         MatRippleModule],
  exports: [
    MatIconModule,
     MatButtonModule,
     MatCheckboxModule,
     MatCardModule,
     MatInputModule,
     MatToolbarModule,
     MatFormFieldModule,
     MatRippleModule],
})
export class MaterialModule { }
