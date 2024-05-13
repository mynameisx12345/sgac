import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';


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
  displayedColumns: string[] = ['confession', 'status', 'action'];
  dataSource = new MatTableDataSource<any>;

  constructor(private readonly router: Router){}
  ngAfterViewInit(): void {
    this.dataSource.data = ELEMENT_DATA;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort
  }

  gotoGuardian(element){
    console.log('element', element);
    this.router.navigateByUrl(`/confession/guardian?id=${element.id}`);
  }
}
