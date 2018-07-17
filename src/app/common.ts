import { Pipe, PipeTransform } from '@angular/core';
import { markdown } from 'markdown';

export const host = 'http://localhost:3000/';

@Pipe({
    name: 'addEllipsis'
})

export class addEllipsis implements PipeTransform {
    transform(value: string): string {
        value = value + ' . . .';
        return value;
    }
}

@Pipe({
    name: 'ToHtml'
})

export class ToHtml implements PipeTransform {
    transform(value: string) {
        const html = markdown.toHTML( value );
        return html;
    }
}
