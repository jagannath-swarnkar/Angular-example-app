import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';

import { 
    NbThemeModule, 
    NbLayoutModule, 
    NbSidebarModule, 
    NbMenuModule, 
    NbSidebarService, 
    NbActionsModule, 
    NbIconModule, 
    NbCardModule 
} from '@nebular/theme';

import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
    declarations:[
        PagesComponent
    ],
    imports:[
        CommonModule,
        PagesRoutingModule,
        NbLayoutModule,
        NbEvaIconsModule,
        NbSidebarModule,
        NbActionsModule,
        NbIconModule,
        NbMenuModule,
        NbThemeModule,
    ],
    providers:[NbSidebarService],
    entryComponents:[]
})
export class PagesModule {}