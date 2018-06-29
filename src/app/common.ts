import { Pipe, PipeTransform } from '@angular/core';


export const host: string = 'http://localhost:3000/';

export interface Article {
    title: string,
    description: string,
    category_id: number
}

@Pipe({
    name: 'addEllipsis'
})

export class addEllipsis implements PipeTransform {
    transform(value: string): string {
        value = value + ' . . .';
        return value;
    }
}
