import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ConfessionService } from '../confession.service';
import { BehaviorSubject, filter, switchMap, tap } from 'rxjs';


const ELEMENT_DATA= [
  {confession: 'I am depressed about something blah blah blah', status: 'Assigned', action: '', id: 1},
  {confession: 'I am depressed about something blah blah blah', status: 'New', action: '', id: 2},
  {confession: 'I am depressed about something blah blah blah', status: 'New', action: '', id: 3},
  {confession: 'I am depressed about something blah blah blah', status: 'New', action: '', id: 4},
  {confession: 'I am depressed about something blah blah blah', status: 'New', action: '', id: 5},
  {confession: 'I am depressed about something blah blah blah', status: 'New', action: '', id:6},
  {confession: 'I am depressed about something blah blah blah', status: 'New', action: '', id:7},
  {confession: 'I am depressed about something blah blah blah', status: 'New', action: '', id:8},
  {confession: 'I am depressed about something blah blah blah', status: 'New', action: '', id:9},
  {confession: 'I am depressed about something blah blah blah', status: 'New', action: '', id:10},


];

@Component({
  selector: 'app-my-confessions',
  templateUrl: './my-confessions.component.html',
  styleUrls: ['./my-confessions.component.scss']
})
export class MyConfessionsComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['confession', 'category', 'status', 'action'];
  dataSource = new MatTableDataSource<any>;

  loadConfessions$ = new BehaviorSubject(false);

  confession$ = this.loadConfessions$.pipe(
    filter(value=>value),
    switchMap(()=>this.confessionService.confession$),
    tap((confessions)=>{
      this.dataSource.data = confessions;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.loadConfessions$.next(false)
    })
  )

  constructor(private readonly router: Router, private readonly confessionService: ConfessionService){}
  ngAfterViewInit(): void {
    this.confession$.subscribe();
    this.loadConfessions$.next(true);
  }

  deleteConfession(confession){
    this.confessionService.removeConfession(confession);
  }

  gotoGuardian(element){
    this.confessionService.updateConfession({...element,status:'Assigned'})
    console.log('element', element);
    this.router.navigateByUrl(`/confession/guardian?id=${element.id}`);
  }
}
