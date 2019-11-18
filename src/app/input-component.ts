import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'input-component',
  template: `
  <div class="input">
    <input class="new-hero" type="text" [(ngModel)]="hero" placeholder="new hero" />
    <button class="new-hero-add" (click)="save()">Save</button>
  </div>
  `,
  styles: [`
    .input {
      padding: 20px;
    }
  `]
})

export class InputComponent implements OnInit {
  hero: string
  @Output() add = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  save() {
    this.add.emit(this.hero);
    this.hero = '';
  }
}