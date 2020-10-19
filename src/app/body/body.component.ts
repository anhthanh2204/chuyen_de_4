import { BaseComponent } from './../lib/base-component';
import { Component, OnInit, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent extends BaseComponent implements OnInit {
  [x: string]: any;
  list_item: any;
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    Observable.combineLatest(this._api.get('api/item/get-all'))
      .takeUntil(this.unsubscribe)
      .subscribe(
        (res) => {
          this.list_item = res[0];
          setTimeout(() => {
            this.loadScripts();
          });
        },
        (err) => {}
      );
  }
  addToCart(it) {
    this._cart.addToCart(it);
    alert('Thêm thành công!');
  }
}