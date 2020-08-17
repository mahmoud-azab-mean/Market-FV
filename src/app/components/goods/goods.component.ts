import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Good } from 'src/app/interfaces/goods.interface';
import { GoodsService } from 'src/app/services/goods.service';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {

  @ViewChild('image', {static: false}) image: ElementRef

  constructor(private gs: GoodsService) { }

  ngOnInit() {

  }

  addNewGood(form: NgForm) {
    //console.log(form.value)
    //console.log((<HTMLInputElement>this.image.nativeElement).files[0])
    let name = (<Good> form.value).name,
    price = (<Good> form.value).price,
    image = (<HTMLInputElement>this.image.nativeElement).files[0];
        // console.log(image.name)
    this.gs.addNewGood(name, price, image).then(msg => console.log(msg))
  }

}
