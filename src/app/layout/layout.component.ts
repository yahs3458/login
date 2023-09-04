import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent  {

  constructor(private route : ActivatedRoute,private location: Location, private router: Router) {}
  selectedItems: any = {};
  title :string='';
  data: string='';
  shouldShowBackButton(): boolean {
    const currentRoute = this.router.url;
    return currentRoute !== '/home/dashboard';
  }
  goBack() {
    this.location.back();
  }
  home() {
    this.route;
  }
  isDashboardPage(): boolean {
    return this.router.url.startsWith('/dashboard');
  }
  logout() {
    this.router.navigate(['/login']);
  }
  
}
