import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Router } from '@angular/router';
import { LayoutComponent } from 'src/app/layout/layout.component';
@Component({
  selector: 'app-pendinglist',
  templateUrl: './pendinglist.component.html',
  styleUrls: ['./pendinglist.component.scss'],
})
export class PendinglistComponent  implements OnInit {
  recentlyVisitedInstitutes: any[] = [{ message: 'No recent institutes' }];
  isDialogOpen: boolean = false;
  selectedInstitute: any = null;
  loaded = false;
  data: string = ' ';
  selectedPendingInstitute: any; 
  constructor(
   
 
    private route: ActivatedRoute,
    private router: Router
    // private dialog: MatDialog
  ) {}

  ngOnInit() {
    const routeData = this.route.snapshot.data;
    this.data = routeData['title'] || '';
  
  }
  navigateToAccept() {
    // Navigate to the "/accept-institute" route when the "Accept" button is clicked.
    this.router.navigate(['/home/pending-dashboard']);
  }

  // Function to update the recently visited institutes
  updateRecentlyVisitedInstitutes() {
    // Simulate fetching data without an actual API call
    const mockData = [
      { name: 'Institute 1', type: 'Public' },
      { name: 'Institute 2', type: 'Private' },
      // Add more mock data as needed
    ];
  }
  onAcceptButtonClick() {
    // Navigate to a specific route when the "Accept" button is clicked
    this.router.navigate(['/pendingDashboard']); // Replace 'accepted-route' with the actual route you want to navigate to.
  }
}
