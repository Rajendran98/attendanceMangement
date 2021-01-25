import { Component, OnInit ,ViewChild} from '@angular/core';
import { Location, formatDate, DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import * as c3 from 'c3';
import * as d3 from 'd3';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  public fromdate: Date;
  public max: Date;
  public table;
  public ELEMENT_DATA = [];
  public entries: object = [];
  
  displayedColumns: string[] = ['date','time','empid', 'name','temperature','designation','department','location','shift','type','status'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor( private router: Router,
    private http: HttpClient,
    private location: Location,) { 
      this.max = new Date();
    }

  ngOnInit(): void {
    this.getAttednaceSummary();
    this.table = true;
    console.log(this.table)
    this.onChange(this.table);

  }

  onChange(val){

   
      console.log(val)

      
        var x= document.getElementById("sample")
        var y = document.getElementById("sample1")

        if(val == true)
        {
          x.style.display = "block";
          y.style.display = "none";
        }
        else if(val == false)
        {
          x.style.display = "none";
          y.style.display = "block";
        }
       

     /* var chart = c3.generate({
      
        bindto: '#chart',
        
        size: {
        
          height: 200
        },
        x: 'x',
        data: {
          columns: [
            ['ontime', 30, 20, 10, 40, 15 ],
            ['absent', 40, 20, 10, 40, 15],
            ['late',10,11,12,13,14]
          ],
  
        type : 'bar',
        legend: { show: false },
          types: {
  
            late: 'spline'
          },
          axes: {
            absent: 'y2' 
            
          },
          groups: [
            ['ontime','absent']
        ]
        },
        
        axis: {
          y2: {
            show: true 
            
          },
          x: {
            type: 'category',
            
            categories: ['DeptA','DeptB','DeptC','DeptD','DeptE']
        }
        }
    
    });
      

    var dateArray = [];
  for (var i = 0; i < 7; i++) {
    var d = new Date(this.max);
    d.setDate(d.getDate() - i);
    dateArray.unshift(d);

  }

  var chart1  = c3.generate(
    {
      bindto: '#chart1',
      size: {
      
        height: 200
      },
      data: {
    
        columns: [
               
          ['Present', 30, 20, 10, 40, 15],
          ['Absent',5,6,7,8,9]
        
        ],
      type : 'bar',
      types: {

        Absent: 'spline'
      },
      },
        axis: {
      
        
        y2: {
          show: true 
        }
      }
      

    });


    var chart2  = c3.generate(
      {
        bindto: '#chart2',
        size: {
      
          height: 200
        },
        data: {
          columns: [
            ['DeptA', 30, 20, 10, 40, 15,20],
            ['DeptB', 12, 13, 15, 18, 19,21],
            ['DeptC', 30, 20, 10, 40, 15,22],
            ['DeptD', 30, 20, 10, 40, 15,23],
            ['DeptE', 30, 20, 10, 40, 15,25],
         
          
          ],
          groups: [
            ['DeptA','DeptB','DeptC','DeptD','DeptE']
        ],
        type : 'bar',
        },
        axis: {
        x: {
          type: 'category',
          categories: ['Cutter','Floater','Mover','Stitcher','Supervisor','Tailor']
      }
    }
  
      });*/


   

   
  }


  getAttednaceSummary() {
    this.ELEMENT_DATA = [];
   
    this.http.get<object>(`${environment.BASE_URL}/attendance`)
    .pipe(
      retry(3)
    )
    .subscribe((data) => {
      console.log('attendance data ', typeof(data));
      console.log(data);
      const date = new Date(data[0].createdAt);
      console.log(date);
      console.log(formatDate(date, 'yyyy-MM-dd', 'en-US'));
      console.log(formatDate(date, 'HH:mm:SS', 'en-US')); 
      
     
     
     // console.log(this.ELEMENT_DATA.sort)
     //this.dataSource = this.entries
    
      this.dataSource = new MatTableDataSource(<any>data);
      console.log(this.dataSource)
      this.dataSource.sort = this.sort
    });

  }
 

  open()
  {
    this.router.navigate(['report/download']);
  
  }
 ngAfterViewInit() {
 
  // chart.defaults.global.defaultFontColor = 'red';
//  var chat = document.getElementById('chart');
   var chart = c3.generate({
      
      bindto: '#chart',
      
      size: {
      
        height: 200
      },
      x: 'x',
      data: {
        columns: [
          ['ontime', 30, 20, 10, 40, 15 ],
          ['absent', 40, 20, 10, 40, 15],
          ['late',10,11,12,13,14]
        ],

      type : 'bar',
      
        types: {

          late: 'spline'
        },
        axes: {
          absent: 'y2' 
          
        },
        groups: [
          ['ontime','absent']
      ]
      },
      legend: { show: true },
      axis: {
        y2: {
          show: true 
          
        },
        x: {
          type: 'category',
          
          categories: ['DeptA','DeptB','DeptC','DeptD','DeptE']
      }
      }
  
  });

  var dateArray = [];
  for (var i = 0; i < 7; i++) {
    var d = new Date(this.max);
    d.setDate(d.getDate() - i);
    
   dateArray.push(new DatePipe('en-US').transform(d, 'yyyy-dd-MM'));
   

  }
  console.log(dateArray);

  var chart1  = c3.generate(
    {
      bindto: '#chart1',
      size: {
      
        height: 200
      },
      x: 'x',
      data: {
       
        columns: [
        //   ['x',dateArray],    
          ['Present', 30, 20, 10, 40, 15],
          ['Absent',5,6,7,8,9]
        
        ],
      type : 'bar',
      types: {

        Absent: 'spline'
      },
      
      },
    /*  tooltip: {
        grouped: true,
        format: {
          title: function (x) {
            var obj = counts[x.toISOString()];
            var sum = 0;
            for (var i in obj) {
              if (obj.hasOwnProperty(i)) {
                if (i !== "Date") {
                  sum += obj[i]['total']
                }
              }
            }
            return (self.formateDate(x) + "&nbsp;&nbsp; Total: " + sum);
          },
          value: function (value, ratio, id, index) {
            if (value !== 0)
              return value;
          }
        },
      },*/
      
     axis: {

        X: {
          type: 'timeseries',
          categories: ['DeptA','DeptB','DeptC','DeptD','DeptE']
        },
        y2: {
          show: true 
        }
      }
   /*   axis: {
        x: {
          type: 'timeseries',
          tick: {
            format: function (d) {
              return d.toString().split(' ')[2] + d.toString().split(' ')[1]
            }
          }
        },
      }*/
      

    });


    var chart2  = c3.generate(
      {
        bindto: '#chart2',
        size: {
      
          height: 200
        },
        data: {
          columns: [
            ['DeptA', 30, 20, 10, 40, 15,20],
            ['DeptB', 12, 13, 15, 18, 19,21],
            ['DeptC', 30, 20, 10, 40, 15,22],
            ['DeptD', 30, 20, 10, 40, 15,23],
            ['DeptE', 30, 20, 10, 40, 15,25],
         
          
          ],
          groups: [
            ['DeptA','DeptB','DeptC','DeptD','DeptE']
        ],
        type : 'bar',
        },
        axis: {
        x: {
          type: 'category',
          categories: ['Cutter','Floater','Mover','Stitcher','Supervisor','Tailor']
      }
    }
  
      });
}

public formateDate(date: any): string {
  const pad = (number) => {
    if (number < 10) {
      return '0' + number;
    }
    return number;
  };

  return date.getFullYear() +
    '-' + pad(date.getMonth() + 1) +
    '-' + pad(date.getDate());
}

}
