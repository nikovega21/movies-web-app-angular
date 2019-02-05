import { Component, OnInit } from '@angular/core';
import { MatFormFieldControl } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  menuValues: String[] = ["Home", "Discover", "People"]

  constructor() { }

  ngOnInit() {
  }

}
