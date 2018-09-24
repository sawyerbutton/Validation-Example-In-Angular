import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  model: any = {};
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    alert('template driven form submitted!\n\n' + JSON.stringify(this.model));
  }
}
