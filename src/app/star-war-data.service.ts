import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StarWarDataService {
selectedCategory:String;
  constructor(private http:HttpClient) { }

  getCategories(getSelectedType)
  {
    this.selectedCategory=getSelectedType;

    return this.http.get('https://swapi.co/api/'+getSelectedType+'/');
  }
  getItemDetails(ItemID)
  {
    console.log(this.selectedCategory);
    console.log(ItemID);
    return this.http.get('https://swapi.co/api/'+this.selectedCategory+'/'+ItemID+'/');
  }
  getDependencyDetails(data)
  { 
  return this.http.get(data);
  }


}
