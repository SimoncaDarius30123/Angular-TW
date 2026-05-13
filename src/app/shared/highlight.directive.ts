import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @HostBinding('class.highlighted')
  protected isHighlighted = false;

  @Input()
  set appHighlight(value: boolean) {
    this.isHighlighted = value;
  }
}
