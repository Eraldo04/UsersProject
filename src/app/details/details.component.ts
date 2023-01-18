import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyDataService } from '../my-data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  id: any;
  singleItem: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private apicallservice: MyDataService
  ) {}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: any) => {
      this.id = params.get('id');
    });
    this.getSingleItem(this.id);
  }

  getSingleItem(id: any) {
    this.apicallservice.getSingleItem(id).subscribe((data) => {
      this.singleItem = data;
      console.log('data', this.singleItem);
    });
  }
}
