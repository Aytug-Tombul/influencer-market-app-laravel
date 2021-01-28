import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users !: User[] ;
  lastPage  !: number;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
   this.refresh()
  }

  refresh(currentPage =1){
    this.userService.all(currentPage).subscribe(
      (res: any)=>{
        this.users = res.data;
        this.lastPage = res.meta.last_page
      }
    )
  }

  delete(id:number){
    if(confirm('Are you sure you want to delete this user ?'))
    this.userService.delete(id).subscribe(
      res=>{
        this.users = this.users.filter(el=> el.id !== id );
      }
    )
  };

}
