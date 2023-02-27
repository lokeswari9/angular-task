import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bottle-view',
  templateUrl: './bottle-view.component.html',
  styleUrls: ['./bottle-view.component.css']
})
export class BottleViewComponent {
  @Input() item: any[] = [];
}
