import { CrudService } from './../../services/crud.service';
import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/models/results.model';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  results: Result[] = []
  err: any;
  list: any[] = [];
  isLoading: boolean = true;
  matMenu: any;

  constructor(private crudService: CrudService) {
  }

  ngOnInit(): void {
    this.listOfRandomUser(10)
  }

  addRandomUser(){
    this.crudService.getRandomUser()
    .subscribe(request => {
      this.list.unshift(request)
      return this.isLoading = false;
    })
      
  }

  listOfRandomUser(range:number){
    this.isLoading = true;
    for(let i =0 ; i < range; i++ ){
      this.addRandomUser()
    }
  }
}
