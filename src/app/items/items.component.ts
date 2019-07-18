import { Component, OnInit } from '@angular/core';
import { StarWarDataService } from '../star-war-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.sass']
})
export class ItemsComponent implements OnInit {
  itemDetails :Object;
  filmDetails:Object;
  spciesssDetails:Object;
  starShipsssDetails:Object;
  vehiclesssDetails:Object;
  planetsssDetails:Object;
  species:any[]=[];
  speciesDetails: any[]=[];
  homeCountryObj:Object;
  characters:any[]=[];
  characterDetails:any[]=[];
  planets:any[]=[];
  planetsDetails:any[]=[];
  starShips:any[]=[];
  starShipsDetails:any[]=[];
  vehicles:any[]=[];
  vehiclesDetails:any[]=[];
films:any[]=[];
filmsDetails:any[]=[];
  itemID:string;

  homeCountry:string;
  constructor(private route: ActivatedRoute,
    private Category:StarWarDataService,private location: Location) { }

  ngOnInit() {
    this.route
    .queryParams
    .subscribe(params => {       
      this.itemID = params['id'] ;
      
    });
if(this.Category.selectedCategory=='people')
{
  this.Category.getItemDetails(this.itemID).subscribe(data=>{
    this.itemDetails=data;
    this.species=data["species"];  
    this.homeCountry=data["homeworld"];

    for(var i=0;i<this.species.length;i++)
    {
    this.Category.getDependencyDetails(this.species[i]).subscribe(data1=>{
      this.speciesDetails.push(data1);
    })
  }
      this.Category.getDependencyDetails(this.homeCountry).subscribe(data2=>{
        this.homeCountryObj=data2;


})
})
}
else if(this.Category.selectedCategory=='films')
{
  this.Category.getItemDetails(this.itemID).subscribe(data=>{
    this.filmDetails=data;
    this.characters=data["characters"];
    this.planets=data["planets"];
    this.starShips=data["starships"];
    this.vehicles=data["vehicles"];
    this.species=data["species"];

    for(var i=0;i<this.characters.length;i++)
    {
this.Category.getDependencyDetails(this.characters[i]).subscribe(characterData=>{
  this.characterDetails.push(characterData);
}
  )}

  for(var i=0;i<this.planets.length;i++)
  {
    this.Category.getDependencyDetails(this.planets[i]).subscribe(planetData=>{
      this.planetsDetails.push(planetData);
    })
  }
for(var i=0;i<this.starShips.length;i++){
  this.Category.getDependencyDetails(this.starShips[i]).subscribe(starShipData=>{
    this.starShipsDetails.push(starShipData);
  })
}
for(var i=0;i<this.vehicles.length;i++)
{
  this.Category.getDependencyDetails(this.vehicles[i]).subscribe(vehicleData=>{
    this.vehiclesDetails.push(vehicleData);
  })
}
for(var i=0;i<this.species.length;i++)
{
  this.Category.getDependencyDetails(this.species[i]).subscribe(speciesData=>{
    this.speciesDetails.push(speciesData);
  })
}
  

  })
}
else if(this.Category.selectedCategory=='species')
{
  this.Category.getItemDetails(this.itemID).subscribe(data=>{
    this.spciesssDetails=data;
    this.characters=data["people"];
    this.films=data["films"];
    console.log(this.characters);


for(var i=0;i<this.characters.length;i++)
{

this.Category.getDependencyDetails(this.characters[i]).subscribe(characterData=>{
this.characterDetails.push(characterData);

}
)}
for(var i=0;i<this.films.length;i++)
{
this.Category.getDependencyDetails(this.films[i]).subscribe(filmData=>{
this.filmsDetails.push(filmData);
}
)}
})
}
else if(this.Category.selectedCategory=='starships'){
  this.Category.getItemDetails(this.itemID).subscribe(data=>{
    this.starShipsssDetails=data;
    this.characters=data["pilots"];  
    this.films=data["films"];

    for(var i=0;i<this.characters.length;i++){
      this.Category.getDependencyDetails(this.characters[i]).subscribe(data1=>{
        this.characterDetails.push(data1);
      })
    }
    for(var i=0;i<this.films.length;i++){
      this.Category.getDependencyDetails(this.films[i]).subscribe(data=>{
        this.filmsDetails.push(data);
      })
    }
  })
}
else if(this.Category.selectedCategory=='vehicles'){
  this.Category.getItemDetails(this.itemID).subscribe(data=>{
    this.vehiclesssDetails=data;
    this.characters=data["pilots"];  
    this.films=data["films"];
    for(var i=0;i<this.characters.length;i++){
      this.Category.getDependencyDetails(this.characters[i]).subscribe(data1=>{
        this.characterDetails.push(data1);
      })
    }
    for(var i=0;i<this.films.length;i++){
      this.Category.getDependencyDetails(this.films[i]).subscribe(data=>{
        this.filmsDetails.push(data);
      })
    }

  })
}
else if(this.Category.selectedCategory=='planets'){
  this.Category.getItemDetails(this.itemID).subscribe(data=>{
    this.planetsssDetails=data;
    this.characters=data["residents"];  
    this.films=data["films"];
    for(var i=0;i<this.characters.length;i++){
      this.Category.getDependencyDetails(this.characters[i]).subscribe(data1=>{
        this.characterDetails.push(data1);
      })
    }
    for(var i=0;i<this.films.length;i++){
      this.Category.getDependencyDetails(this.films[i]).subscribe(data=>{
        this.filmsDetails.push(data);
      })
    }
  })
}
}
  goBack() {
    // window.history.back();
    this.location.back();
  }


}
