import { Component, OnInit } from '@angular/core';
import { StarWarDataService } from '../star-war-data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

categories = ['people','films','species','starships', 'vehicles','planets']
constructor(private Category:StarWarDataService) { }

  ngOnInit() {
   
    

  }

}
