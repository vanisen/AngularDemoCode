import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../services/propertyService.service';
import { IProperty } from '../models/propertyData.model';


@Component({
    selector: 'app-property',
    templateUrl: './property.component.html',
    styleUrls: ['./property.component.css']
})

export class PropertyComponent implements OnInit {
    title: String = '*****Product List';
    showTable: Boolean = true;
    showImage: Boolean = false;
    serachPhone: string;
    imageWidth: Number = 50;
    properties: IProperty[];

    constructor(private _propertySerivce: PropertyService) {}

    ngOnInit(): void {
        this._propertySerivce.getProperty()
            .subscribe((data) => this.properties = data);
    }

}
