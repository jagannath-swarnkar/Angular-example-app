import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { CommonModule } from '@angular/common';
import {DashboardRoutingModule} from './dashboard-routing.module';
import { NbCardModule, NbStepperModule, NbButtonModule } from '@nebular/theme';
import { CardsComponent } from './cards/cards.component';
import { ChartsComponent } from './charts/charts.component';
import { FormBuilder } from '@angular/forms';

 
@NgModule({
    declarations:[
        DashboardComponent,
        CardsComponent, 
        ChartsComponent
    ],
    imports:[
        CommonModule,
        DashboardRoutingModule,
        NbCardModule,
        NbStepperModule,
        NbButtonModule
    ],
    providers:[FormBuilder]
})
export class DashboardModule {}