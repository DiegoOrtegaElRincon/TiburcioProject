import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BicycleService } from '../services/bicycle.service';

@Component({
  selector: 'app-add-bicycle',
  templateUrl: './add-bicycle.page.html',
  styleUrls: ['./add-bicycle.page.scss'],
})
export class AddBicyclePage {

  bicycleForm: FormGroup;

  constructor(private router: Router, private bicycleService: BicycleService, public formBuilder: FormBuilder) {
    this.bicycleForm = this.formBuilder.group({
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


  ngOninit(){
  }
  
  get errorControl() {
    return this.bicycleForm.controls;
  }

  submitForm() {
    if (this.bicycleForm.valid) {
      const model = this.bicycleForm.value.model;
      const year = this.bicycleForm.value.year;

      console.log(model)

      this.bicycleService.addBicycles({model, year}).subscribe((response) => {
          console.log("por aquí pasó")
          this.router.navigateByUrl("/my-bicycles");
        });
    }
  }

  gotoHome(){
    this.router.navigateByUrl("/")
  }
}
