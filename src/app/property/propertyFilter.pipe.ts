import { Pipe, PipeTransform } from '@angular/core';
import { IProperty } from '../models/propertyData.model';

@Pipe ({
    name: 'filterProperty'
})

export class FilterPipe implements PipeTransform {
    transform(value: IProperty[], filterBy: string): IProperty[] {
        filterBy = filterBy ? filterBy.toLowerCase() : null ;
        return filterBy ? value.filter((product: IProperty) =>
            product.city.toLowerCase().indexOf(filterBy) !== -1) : value;
    }
}
