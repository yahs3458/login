import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneralInfoService } from 'src/app/services/general-info.service';
@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss'],
})
export class GeneralInfoComponent  implements OnInit {

  constructor(private service: GeneralInfoService,private route : ActivatedRoute) {}
  public clgData: any;
  loaded = false;
  data :string = ' ';
  ngOnInit() {
    this.populateApiData();
    const routeData =this.route.snapshot.data;
    this.data =  routeData['title'] || '';
   
  }
  populateApiData() {
    let url = '7a1626eb97354df6beae047300e4bb31';
    this.service.getInstituteInfo(url).subscribe({
      next: (res) => {
        this.clgData = res;
        this.loaded=true;
      },
    });
  }
}
    
