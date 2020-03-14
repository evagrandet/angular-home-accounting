import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
})
export class FilterPipe implements PipeTransform {
    transform(items: any, value: string, field: string): any {
        if (items.length === 0 || !value) {
            return items;
        }
        return items.filter((item: any) => {
            const type = Object.assign({}, item);
            if (field === 'type') {
                type[field] = type[field] === 'outcome' ? 'Расход' : 'Доход';
            }
            if (field === 'category') {
                type[field] = item['categoryName'];
            }
            return (
                String(type[field])
                    .toLowerCase()
                    .indexOf(value.toLowerCase()) !== -1
            );
        });
    }
}
