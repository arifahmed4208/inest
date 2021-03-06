import { Component, OnInit } from '@angular/core';
import { ParticlesConfig } from '../particles-config'
// declare let require:any;
// var $ = require( "jquery" );
import * as $ from "jquery";
declare let particlesJS: any; // Required to be properly interpreted by TypeScript.

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.invokeParticles();
    //this.invokeTextMorph();
  }

  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function() {});
  }
}
