import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { AuthServiceService } from 'src/app/authentication/service/auth.service.service';
import { MenuController
 } from '@ionic/angular';

 export interface User {
  first_name: string;
  language: string;
  // Add more properties if needed
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent  implements OnInit {

  constructor(
    private router: Router,
    private menuCtrl: MenuController,
    private auth: AuthServiceService,
    // private title : LayoutComponent,
    private route : ActivatedRoute
  ) {}
  userData: User[] = [];
  Atoken: any = '';
  Rtoken: any = '';
  data :string = ' ';
  selectedItems: any = {};
  ngOnInit() {
    this.Atoken = localStorage.getItem('access_token');
    this.Rtoken = localStorage.getItem('refreshToken');
    console.warn('Access token from local storage- > ', this.Atoken);
    console.warn('Refresh token from local storage- > ', this.Rtoken);
    const routeData =this.route.snapshot.data;
    this.data =  routeData['title'] || '';
    // this.title.title =this.data;
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(true, 'main-menu');
  }
  onSubmit() {
    this.router.navigate(['/home']);
  }
  logOut() {
    this.auth.doLogout();
  }

  

}
