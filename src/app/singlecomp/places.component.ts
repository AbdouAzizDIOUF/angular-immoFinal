import {AfterViewInit, Component, OnChanges, OnDestroy, OnInit, Output, ViewChild, EventEmitter, Input, SimpleChanges} from '@angular/core';

import * as places from "places.js"


@Component({
  selector: "app-places",
  template: `<input #input type="search" placeholder="adresse du bien" class="form-control" name="adresse"/>`
})
export class PlacesComponent implements AfterViewInit, OnDestroy, OnChanges {
  private instance = null;

  @ViewChild("input") input;
  @Output() onChange? = new EventEmitter();
  @Output() onClear? = new EventEmitter();

  @Input() type: string;

  ngAfterViewInit() {
    this.instance = places({
      appId: "pl6M28ZJIIFM",
      apiKey: "6e4b81520a26ea955c5b3b831ba84955",
      container: this.input.nativeElement,
      type: this.type
    });
    this.instance.on("change", e => {
      this.onChange.emit(e);
    });

    this.instance.on("clear", e => {
      this.onClear.emit(e);
    });
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.type && this.instance) {
      this.instance.configure({
        type: changes.type.currentValue,
      });
    }
  }
  ngOnDestroy() {
    this.instance.removeAllListeners("change");
    this.instance.removeAllListeners("clear");
    this.instance.destroy();
  }
}
