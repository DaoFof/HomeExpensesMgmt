import { Component, OnInit } from '@angular/core';

import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data: any;

  constructor(private messageService: MessageService) {
    this.data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Income',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: true,
                borderColor: '#1ab394'
            },
            {
                label: 'Expense',
                data: [28, 48, 40, 19, 86, 27, 90],
                fill: true,
                borderColor: '#ed5565'
            }
        ]
    }
}

selectData(event) {
    this.clear()
    this.messageService.add({severity: 'success', summary: 'Data Selected', 'detail': this.data.datasets[event.element._datasetIndex].data[event.element._index]});
}
clear() {
  this.messageService.clear();
}

  ngOnInit() {
  }

}
