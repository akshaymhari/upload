import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

 

    Fakedata = [
            {orderid:'ODBTC 12',name: 'Abdu',ordertime:'2020-10-02T00:00:00',distributer:'Athul',status:'pending',amt:10000 }, 
            {orderid:'ODBTC 12',name: 'Adarsh',ordertime:'2020-10-04T00:00:00',distributer:'Abdu',status:'Confirm',amt:2000 },  
            {orderid:'ODBTC 12',name: 'Adarsh',ordertime:'2020-10-04T00:00:00',distributer:'Abdu',status:'Confirm',amt:2000 },  
            {orderid:'ODBTC 12',name: 'Adarsh',ordertime:'2020-10-04T00:00:00',distributer:'Abdu',status:'Confirm',amt:2000 },  
            {orderid:'ODBTC 12',name: 'Adarsh',ordertime:'2020-10-04T00:00:00',distributer:'Abdu',status:'Confirm',amt:2000 },  
            {orderid:'ODBTC 12',name: 'Adarsh',ordertime:'2020-10-04T00:00:00',distributer:'Abdu',status:'Confirm',amt:2000 }, 
            ];

  constructor() { }

  ngOnInit(): void {
  }

}
