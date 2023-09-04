import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LayoutComponent } from 'src/app/layout/layout.component';

@Component({
  selector: 'app-pendingdashboard',
  templateUrl: './pendingdashboard.component.html',
  styleUrls: ['./pendingdashboard.component.scss'],
})
export class PendingdashboardComponent  implements OnInit {

  constructor(private router: Router,private route : ActivatedRoute ) {}
  data :string = ' ';

  ngOnInit() {const routeData =this.route.snapshot.data;
    this.data =  routeData['title'] || '';
   }

}
