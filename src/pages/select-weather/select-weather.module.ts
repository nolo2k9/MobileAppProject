import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectWeatherPage } from './select-weather';

@NgModule({
  declarations: [
    SelectWeatherPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectWeatherPage),
  ],
})
export class StatusPageModule {}
