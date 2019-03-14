import { Component, OnInit } from '@angular/core';
import { SampleService } from './sample.service';
import { MasterService } from './master.service';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'testingapp';
  value: string;
  observableValue: string;
   user: User;

  constructor(private masterService: MasterService) { }

  ngOnInit(): void {
    this.value = this.masterService.getValue();
    this.masterService.getObservableValue().subscribe(result => {
      this.observableValue = result;
    });
    this.masterService.getFromApi().subscribe(result => {
      this.user = result;
    });
  }
}
