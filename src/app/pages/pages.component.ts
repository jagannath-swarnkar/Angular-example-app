import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MENU_ITEMS } from './pages-menu'
import { NbEvaSvgIcon } from '@nebular/eva-icons';
import { NbSidebarService, NbIconLibraries } from '@nebular/theme';
import svgIcons from 'src/assets/svg-icons';

@Component({
  selector: 'app-pages',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  menu = MENU_ITEMS;
  testicon:NbEvaSvgIcon;
  constructor(
    private sidebarService: NbSidebarService,
    private iconLibraries: NbIconLibraries
    ){
      this.iconLibraries.registerSvgPack('IconsList', svgIcons.Icons)
      this.iconLibraries.setDefaultPack('IconsList')
  }

  ngOnInit(): void {
  }

  toggle() {
    this.sidebarService.toggle(false, 'left');
  }

}
