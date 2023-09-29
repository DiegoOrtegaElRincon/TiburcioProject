import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BicycleService } from '../services/bicycle.service';

@Component({
  selector: 'app-my-bicycles',
  templateUrl: './my-bicycles.page.html',
  styleUrls: ['./my-bicycles.page.scss'],
})
export class MyBicyclesPage implements OnInit {

  bicycles: any = []

  constructor(private router: Router, private bicycleService: BicycleService) {}

  ngOnInit() {
    this.getAllBicycles();
  }

  getAllBicycles(){
    this.bicycleService.getBicycles().subscribe(response => {
      this.bicycles = response;
    });
  }

  postBicycle(model:string, year: string){
    let bicycle = {
      model:model,
      year:year
    }
    this.bicycleService.postBicycles(bicycle).subscribe(response =>{
      this.bicycles=response
      this.getAllBicycles()
    })
  }

  deleteBicycle(id:string){
    this.bicycleService.deleteBicycle(id).subscribe(response =>{
      this.bicycles=response
      this.getAllBicycles()
    })
  }



  gotoHome(){
    this.router.navigateByUrl("/home")
  }

}
