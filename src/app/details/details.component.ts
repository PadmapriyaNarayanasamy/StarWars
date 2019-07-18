import { Component, OnInit } from '@angular/core';
import { StarWarDataService } from '../star-war-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  detailsList :Object;
  filmList:Object;
  selectedType:string;
  constructor( private route: ActivatedRoute,
    private Category:StarWarDataService) { }

  ngOnInit() {
     this.route
      .queryParams
      .subscribe(params => {       
        this.selectedType = params['type'] ;
        console.log(this.selectedType);
      });
if(this.selectedType!='films')
{
    this.Category.getCategories(this.selectedType).subscribe(data=>{
      this.detailsList=data;
      console.log(this.detailsList);
    })

  }

else
{
  this.Category.getCategories(this.selectedType).subscribe(data=>{
    this.filmList=data;
 
  })
}
  }
}
