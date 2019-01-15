import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostBooking} from '../models/postBooking.model';
import { PropertyService } from '../services/propertyService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html'
})

export class FormsComponent {

  model = new PostBooking('', '', '');
  hasCodeLangError: Boolean = false;
  disbableSubmit: Boolean = false;

  constructor( private propertyService: PropertyService,
                private _route: Router) { }


  submitForm(form: NgForm): void {
    // console.log(form.value);
    this.propertyService.postBooking(form.value)
        .subscribe(data => console.log('success', data));

    this._route.navigate(['/property']);
  }

}
