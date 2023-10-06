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

  constructor(private router: Router, private bicycleService: BicycleService) { }

  ngOnInit() {
    this.getAllBicycles();
  }

  getAllBicycles() {
    this.bicycleService.getBicycles().subscribe(response => {
      this.bicycles = response;
    });
  }

  insertBicycle() {
    this.router.navigateByUrl("/add-bicycle");
  }

  deleteBicycle(id: number) {
    this.bicycleService.deleteBicycle(id).subscribe(() => {
      this.getAllBicycles();
    })
  }

  updateBicycle(id: number) {
    this.bicycleService.setCurrentBicycleId(id);
    this.router.navigateByUrl("/update-bicycle");
  }

  gotoHome() {
    this.router.navigateByUrl("/home")
  }

}
