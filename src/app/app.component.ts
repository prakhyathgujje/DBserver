import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestService } from './test.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 storage:any;
  storage1:any;
  storage2:any;
  srg:any;
  postedIf:any;
  
 constructor(private testservice: TestService){
    testservice.getMethods().subscribe((value_bus)=>{this.storage=value_bus;});
    testservice.getMethods1().subscribe((value)=>{this.storage1=value;});
    testservice.getMethods2().subscribe((value1)=>{this.storage2=value1;});
    // 
    // testservice.getUsers(data).subscribe((validValue)=>{this.postedIf=validValue})
    
  }
 
  // updateUser(data:any){
  //   this.testservice.getUsers(data).subscribe((validValue)=>{this.postedIf=validValue})
  //   console.warn(data);
  // }
  // getUser(data:any){
  //   console.warn(data);
  // }
    insUser(data:any){
      this.testservice.postUser(data).subscribe((srcr)=>{this.srg=srcr});
    
      console.warn(data)
    }
  
}
