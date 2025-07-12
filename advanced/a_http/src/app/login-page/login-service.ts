import { HttpClient } from '@angular/common/http';
import { inject ,Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class UserService {
  private http = inject(HttpClient);

  login(payload: { username: string; password: string }) {
    return this.http.post<any>('http://localhost:3004/login', payload);
  }
  
}
