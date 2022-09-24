import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  constructor(private route:Router){}
  msg:String ="";
  m:String="visible";
 
  loginPage:String="";
  title = 'EventManagement';
  buttonTitle:string = "submit";
  visible:boolean = false;
  submit(form:any){
    var firstName = form.Email;
   
    this.buttonTitle = this.visible?"submit":"submit";
    if(form.Email=="raam@gmail.com" && form.Password==123)
    {
      this.visible = this.visible?false:true;
      this.msg="Login Successfull";
      this.route.navigate(['/check']);
      
       

    }
    else
    {
      this.visible=false;
      this.msg="Invalid User or Password";
    }
  
   this.m="hidden";
   this.loginPage="go to login Page";

  
  }
}
 