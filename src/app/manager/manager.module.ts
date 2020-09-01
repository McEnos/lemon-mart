import { CommonModule } from '@angular/common';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { ManagerRoutingModule } from './manager-routing.module';
import { NgModule } from '@angular/core';
import { ManagerComponent } from './manager.component';

@NgModule({
  declarations: [ManagerHomeComponent, ManagerComponent],
  imports: [CommonModule, ManagerRoutingModule],
})
export class ManagerModule {}
