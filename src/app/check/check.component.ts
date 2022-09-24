import { Component, Input, OnInit } from '@angular/core';
import { CrudHttpService } from '../crud-http.service';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {
  todoList:any = [];
 x:String="hidden";
y:String="hidden";
  Title:String="";
  values = [];
  constructor(private crudHttpService: CrudHttpService) { }

  ngOnInit(): void {
    this.listTodos();
  }
  //to display all records
  listTodos(){
    this.crudHttpService.list().subscribe((response)=>{
      this.todoList = response;
    },(error=>{

    }));
  }

  //create new record
  createTodo(){
    this.x="hidden";
    this.y="hidden";
    let todo = {
      id: new Date().getTime(),
      title:this.Title 
    }
    this.crudHttpService.create(todo).subscribe((response)=>{
      this.listTodos();
    },(error=>{

    }));
  }

  //modify record
  editTodo(){
   
    this.y="hidden";
    this.x="visible";

    
   
  }

  //delete a record
  deleteTodo(id: any){
    this.crudHttpService.delete(id).subscribe((response)=>{
      this.listTodos();
    },(error=>{
    }));
  }
 enable(todo: any)
 {
  this.x="hidden";
  let data = {
    id:new Date().getTime(),
    title:this.Title 
    
  }
  this.Title="";

  
  this.crudHttpService.update(todo.id,data).subscribe((response)=>{
 
    this.listTodos();
  },(error=>{

  }));
 
 }
 hidden()
 {
  this.y="visible";
  this.x="visible";
 }
  
}
