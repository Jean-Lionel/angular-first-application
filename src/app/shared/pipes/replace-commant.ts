import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
  name : "replaceComma"
})

export class ReplaceComma implements PipeTransform{
  transform(value: any, ...args: any[]) : string{
    if (!!value) {
        return value.replaceAll('.', ',');
    }
    return "";
  }

}
