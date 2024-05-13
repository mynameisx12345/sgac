import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit{
  quoteCategory = this.route.queryParams.pipe(
    map((param)=>{
      return param['category']
    })
  )
  quotes = [
    {id: 1, message:'Quote 1 Quote 1 Quote 1 Quote 1 Quote 1 Quote 1 Quote 1 Quote 1 Quote 1  Quote 1  '},
    {id: 2, message:'Quote 1 Quote 1 Quote 1 Quote 1 Quote 1 Quote 1 Quote 1 Quote 1 Quote 1  Quote 1  '},
    {id: 3, message:'Quote 1 Quote 1 Quote 1 Quote 1 Quote 1 Quote 1 Quote 1 Quote 1 Quote 1  Quote 1  '},
    {id: 4, message:'Quote 1 Quote 1 Quote 1 Quote 1 Quote 1 Quote 1 Quote 1 Quote 1 Quote 1  Quote 1  '},
    {id: 5, message:'Quote 1 Quote 1 Quote 1 Quote 1 Quote 1 Quote 1 Quote 1 Quote 1 Quote 1  Quote 1  '}

  ]
  constructor(private readonly route: ActivatedRoute){}

  ngOnInit(): void {
    
  }
}
