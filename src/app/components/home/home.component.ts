import { Component, OnInit, OnDestroy } from '@angular/core';
import { Good } from 'src/app/Interfaces/goods.interface';
import { GoodsService } from 'src/app/services/goods.service';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  goods: Good[] = []
  goodsObservalble: Subscription;
  add: number = -1;
  //   {name: 'apple' , price: 1 , photoUrl: 'assets/apple.jpg' },
  //   {name: 'banana' , price: 2, photoUrl: 'assets/banana.jpg' },
  //   {name: 'mango' , price: 3 , photoUrl: 'assets/mango.jpg' },
  //   {name: 'strwberry' , price: 4 , photoUrl: 'assets/strawberry.jpg' }

  constructor(private gs: GoodsService, private cs: CartService , private as: AuthService , private router: Router) { }

  ngOnInit() {
   this.goodsObservalble = this.gs.getAllGoods().subscribe( data => {
      this.goods = data.map(element => {
        return{
          id: element.payload.doc.id,
          ... element.payload.doc.data()
        } 
      })
    });
  }
  ngOnDestroy() {
    this.goodsObservalble.unsubscribe()
    console.log('out Component');
  }


  addToCart(index : number) {
    if(this.as.userId)   this.add = index
    else this.router.navigate(['/login'])

  }
  buy(amount: number){
    let selectedGood = this.goods[this.add];
    let data = {
      name : selectedGood.name,
      amount: + amount,
      price: selectedGood.price
    }
    this.cs.addToCart(data).then(() => this.add = -1);
  }

}
