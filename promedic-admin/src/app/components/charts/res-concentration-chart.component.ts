import { Component } from '@angular/core';
import {DashboardService} from '../../services/dashboard.srv';

@Component({
  selector: 'responder-concentration-component',
  styles: [`
      chart {
        display: block;
      }
    `],
  template: `
           <chart [options]="options"></chart>     
  `,
    providers: [DashboardService]
})


export class ResponderConcentrationChartComponent {

    
    error: any;
    options: Object;
     
    constructor(private _dashboardService : DashboardService){
             
        
    }

   ngOnInit(){
       this._dashboardService.getDashboardData()
           .then(response => {
             let g =  response[2]['responders_concentration'];
             let iArray : any = [];
             g.forEach(function(item:any){
               let inner = [item['areas_of_concentration__name'], item['total']];
                iArray.push(inner);  
                
              });
            
             this.displayChart(iArray);

             
           })
            .catch(error => this.error = error);
   }
    
   
    displayChart(_data:any[]){
        
         this.options = {
            chart: {
            type: 'column'
        },
        title: {
            text: 'Responders vs Concentrations'
        },
        // subtitle: {
        //     text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
        // },
        xAxis: {
            type: 'category',
            title: {
                text: 'Concentrations'
            },
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Responders'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat:  '{point.y}' +' responder(s)' //_data[0][1] +' responder(s) in ' +_data[0][0]//'Population in 2008: <b>{point.y} millions</b>'
        },
        series: [{
            name: 'Population',
            data: _data,
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y:.1f}', // one decimal
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
        };
      
           
    } ;


    
     
  
}


