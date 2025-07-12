
# HttpClient
Angular's HttpClient is the core service to make HTTP requests.

Import once in your app config (standalone):

import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient()]
};

Behind the scenes, this function returns something like:

[
  { provide: HttpClient, useClass: HttpClient },
  { provide: HttpHandler, useClass: SomeHttpHandler },
  ...
]



# Create a user service(or any custome service)

import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
  private http = inject(HttpClient);

  getUsers() {
    return this.http.get<any[]>('https://api.example.com/users');
  }
}


# Use it in your component

export class UserListComponent {
  private userService = inject(UserService);
  users: any[] = [];

  load() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }
}


inject() is a function that retrieves a dependency (service or token) from Angular’s dependency injection system without needing a constructor.

It’s like saying:

“Hey Angular, give me an instance of this service.”