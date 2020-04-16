import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public data = [{
    title: 'Employees total',
    count: '3.100',
    img: '../assets/img/Employees.svg',
    gradient: 'linear-gradient(222.47deg, #6CEFFF 0%, #5E77FF 100%)'
  }, {
    title: 'Contracts total',
    count: '2.558',
    img: '../assets/img/Contracts.svg',
    gradient: 'linear-gradient(222.47deg, #A094FF 0%, #BC5DE6 100%)'
  }, {
    title: 'Documentations',
    count: '+455',
    img: '../assets/img/Documentations.svg',
    gradient: 'linear-gradient(222.47deg, #09D0BD 0%, #5E77FF 100%)'
  }, {
    title: 'Consultations',
    count: '1.200',
    img: '../assets/img/Consultations.svg',
    gradient: 'linear-gradient(222.47deg, #FFA300 0%, #F44336 100%)'
  }];
}
