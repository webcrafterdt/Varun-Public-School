import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, Subject } from 'rxjs';
//import { Preferences } from '@capacitor/preferences';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
	isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
	token = '';
  constructor() { 
    this.loadToken();

  }

  /*async loadToken() {
		const token = await Storage.get({ key: TOKEN_KEY });
		if (token && token.value) {
			console.log('set token: ', token.value);
			this.token = token.value;
			this.isAuthenticated.next(true);
		} else {
			this.isAuthenticated.next(false);
		}
	}*/

  async loadToken() {
    //    const ret = await Preferences.get({ key: 'sid' });
    
    const ret = await localStorage.getItem('loggedin');
        //localStorage.getItem('name')
        
        if(ret != null)
        {console.log("ret==>>",ret);
          this.isAuthenticated.next(true);
        }
        else
        {console.log("ret==>>1111",ret);
          this.isAuthenticated.next(false);
        }
       // const user = JSON.parse(ret.value);
      }
}
