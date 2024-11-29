import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username: string = 'guest';
  selectedOption: string = '';
  constructor(
    private router: Router
  ) 
    {
    const state = this.router.getCurrentNavigation()?.extras.state;
    if(state){
      console.log(`Username: ${state['user']}`)
      this.username = state['user']
    }
  }
  navigateToPage(){
    if(this.selectedOption === 'conductor') {
      this.router.navigate(['/conductor']);
    } else if (this.selectedOption === 'pasajero') {
      this.router.navigate(['/pasajero'])
    }
  }

  

}
