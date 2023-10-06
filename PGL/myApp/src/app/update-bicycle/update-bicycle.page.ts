import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BicycleService } from '../services/bicycle.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-bicycle',
  templateUrl: './update-bicycle.page.html',
  styleUrls: ['./update-bicycle.page.scss'],
})


export class UpdateBicyclePage {

  bicycleUpdateForm: FormGroup;

  constructor(private router: Router, private bicycleService: BicycleService, public formBuilder: FormBuilder) {
    this.bicycleUpdateForm = this.formBuilder.group({
      model: ['', [Validators.required, Validators.minLength(3)]],
      year: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9]{4}$/), // Requires a 4-digit year
          Validators.min(1900), // Minimum year allowed
          Validators.max(new Date().getFullYear()), // Maximum year allowed
        ],
      ],
    })
  }

  get errorControl() {
    return this.bicycleUpdateForm.controls;
  }
  
  updateForm() {
    if (this.bicycleUpdateForm.valid) {
      const model = this.bicycleUpdateForm.value.model;
      const year = this.bicycleUpdateForm.value.year;
      const id = this.bicycleService.getCurrentBicycleId()
      this.bicycleService.updateBicycles(id, { model, year }).subscribe((response) => {
        this.router.navigateByUrl("/my-bicycles");
      });
    }
  }

  gotoHome() {
    this.router.navigateByUrl("/")
  }

}
