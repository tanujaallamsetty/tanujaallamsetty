

import React, { Component } from 'react';

class TableComponent extends Component {
  render() {
    const data = [
      { id: 1, name: 'tanuja', age: 23 ,doj:'15-05-2013',gender:'F'},
      { id: 2, name: 'Jahnavi', age: 21 ,doj:'16-03-2016',gender:'F'},
      { id: 3, name: 'likitha', age: 22 ,doj:'17-04-2011',gender:'F' },
      { id: 4, name: 'tanuja', age: 23 ,doj:'11-06-2012',gender:'F' },
      { id: 5, name: 'Jahnavi', age: 21,doj:'12-02-2014',gender:'F' },
      { id: 6, name: 'likitha', age: 22 ,doj:'10-08-2015',gender:'F'}
    ];

    return (
      <div>
        <center>
          <marque direction = "right" scrollamount="15" behaviour="slide"></marque>
        <h3><u>EMPLOYEES DETAILS</u></h3>
        </center>
        
        <table align = "center" border = "2"> 
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>doj</th>
              <th>gender</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.doj}</td>
                <td>{item.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
    );
  }
}

export default TableComponent;
