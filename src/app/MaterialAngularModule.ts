// tslint:disable-next-line:max-line-length
import {MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule, MatToolbarModule, MatFormFieldModule, MatRippleModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule, MatToolbarModule, MatFormFieldModule, MatRippleModule],
  exports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule, MatToolbarModule, MatFormFieldModule, MatRippleModule],
})
export class MaterialModule { }
