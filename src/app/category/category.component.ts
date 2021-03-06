import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  animations:[
    trigger('categories',[
      transition('* => *',[
        query(':enter', style({opacity: 0}), {optional:true}),
        query(':enter',stagger('300ms',[
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))]),{optional:true}),
          query(':leave',stagger('300ms',[
          animate('.6s ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 0, transform: 'translateY(-75%)', offset: 1}),
          ]))]),{optional:true})
      ])
    ])
  ]
})
export class CategoryComponent implements OnInit {
  categoryCount: number;
  categoryText:string;
  categories = ['Rent', 'Petrol', 'CNG'];
  constructor() { }

  ngOnInit() {
    this.categoryCount = this.categories.length;
  }

  addCategory(){
    this.categories.push(this.categoryText);
    this.categoryText = '';
    this.categoryCount = this.categories.length;
  }
  removeCategory(i){
    this.categories.splice(i, 1);
    this.categoryCount = this.categories.length;
  }

}
