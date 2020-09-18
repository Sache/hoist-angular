import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
  // pure: false
})
export class DurationPipe implements PipeTransform {

  transform(value: number): string {
    const d = new Date(value)
    return `${('0'+d.getUTCMinutes()).slice(-2)}:${('0'+d.getUTCSeconds()).slice(-2)}`;
  }

}
