import { Component } from '@angular/core';
import { User } from './model/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'The good Angular programmer';

  userList: User[] = this.userService.list;
  currentUser: User = new User;

  constructor(
    private userService: UserService
  ) {

  }

  selectUser(): void {
    //this.currentUser =
  }

  updateUser(): void {
    this.userService.updateUser(this.currentUser)
  }

  deleteUser(): void {
    this.userService.removeUser(this.currentUser)
  }

}
