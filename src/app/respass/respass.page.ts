import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-respass',
  templateUrl: './respass.page.html',
  styleUrls: ['./respass.page.scss'],
})
export class RespassPage implements OnInit {
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
 
  recuperar(){
    this.router.navigate(['/login']);
  } 
}
