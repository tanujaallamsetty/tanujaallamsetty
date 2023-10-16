import React, { Component } from 'react'

export default class StateEx extends React.Component {
    constructor() {
        super()
          this.state = {
            employees: [
                {empid:101,empname:'tanuja', salary:20000,doj:'2014-05-07',gender:'F'},
                {empid:101,empname:'tanu', salary:25000,doj:'2015-06-06',gender:'F'},
                {empid:101,empname:'jahnavi', salary:30000,doj:'2013-07-05',gender:'F'},
                {empid:101,empname:'likitha', salary:350000,doj:'2016-08-04',gender:'F'},
                {empid:101,empname:'sai', salary:40000,doj:'2017-09-03',gender:'M'}
            ]
          }
        }
  render() {
    return (
      <div class="container">
        <table class="table table-bordered table-striped table-hover table-sm">
                <thead>
                    <tr class="text-black bg-info">
                        <th>empid</th>
                        <th>empname</th>
                        <th>salary</th>
                        <th>date of joining</th>
                        <th>gender</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.employees.map((employees,index)=>{
                        <tr>
                            <td> employees.empid </td>
                            <td> employees.empname </td>
                            <td> employees.salary </td>
                            <td> employees.doj </td>
                            <td> employees.gender </td>
                        </tr>
                    })}
                    
                

                    
                </tbody>
            </table>
        
      </div>
    )
  }
}

