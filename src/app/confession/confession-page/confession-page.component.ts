import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ConfessionService } from '../confession.service';

@Component({
  selector: 'app-confession-page',
  templateUrl: './confession-page.component.html',
  styleUrls: ['./confession-page.component.scss'],
})
export class ConfessionPageComponent implements OnInit {
  fgConfession: any;
  selectedCategory = '';
  constructor(
    private readonly fb: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly confessionService: ConfessionService
  ) {}
  step = '1';
  categories = [
    { label: 'Family', value: 'family' },
    { label: 'School', value: 'school' },
    { label: 'Relationship', value: 'relationship' },
    { label: 'Personal', value: 'personal' },
  ];

  ngOnInit(): void {
    this.fgConfession = this.fb.group({
      confession: ['', Validators.required],
      category: ['', Validators.required],
    });

    this.route.queryParams.subscribe((param)=>{
      if(param.hasOwnProperty('step')){
        this.step =param['step'];
      }
    })
  }

  next() {
    //this.step = '2';
    this.router.navigateByUrl('/confession/confess?step=2')
  }

  back() {
    //this.step = '1';
    this.router.navigateByUrl('/confession/confess?step=1')
  }

  selectCategory(category) {
    this.fgConfession.patchValue({ category: category.value });
    this.selectedCategory = category.value;
  }

  addConfession(){
    this.confessionService.addConfession({confession: this.fgConfession.get('confession').value, category:this.fgConfession.get('category').value, status:'New', action: '', id: Math.random().toString()})
  }

  done() {
    //this.step = '3';
    this.addConfession();
    this.router.navigateByUrl('/confession/confess?step=3')
    this.fgConfession.reset();
  }

  showQuotes(){
    this.router.navigateByUrl(`/confession/quotes?category=${this.selectedCategory}`);
  }
}
