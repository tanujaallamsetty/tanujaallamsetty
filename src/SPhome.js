import React, { Component } from 'react';
import SPcard from './SPcard';

class SPhome extends Component {
  render() {
    return (
      //  <div class="container">
      // <div class= "row">
      //   <div class="col-md-4 mb-4">

      //   <h2>Home Page</h2>
      //   <p>This is the home page content.</p>
      //    {/* <h2>Home Page</h2> */}
      // <SPcard
      //     title="Card 1"
      //     description="RED ROSES PLANTS"
      //     imageUrl="https://tse2.mm.bing.net/th?id=OIP.7Y4PDwxUPH1xfZ48_gwTDQHaFi&pid=Api&P=0&h=180"
      //   />
      //   <SPcard
         
         
      //     title="Card 2"
      //     description="YELLOW ROSES PLANTS"
      //     imageUrl="https://tse3.mm.bing.net/th?id=OIP.b8wVTON9621cM7PDfWjJ9QHaHa&pid=Api&P=0&h=180"
      //   />
      //   </div>
      // </div>
      // </div>
      <div className="container">
        {/* <h1 className="text-center" style='color: white'>Non-Veg Menu</h1> */}
        <h1 className="text-center" style={{ color: 'white' }}>rose plants nursery</h1>

        <div class="row">
            <div class="col-md-4 mb-4">
                <div class="card menu-card">
                    <img src="https://tse2.mm.bing.net/th?id=OIP.MCfjWr6UOG51x7Qufv0dXwHaFj&pid=Api&P=0&h=220" class="card-img-top" alt="..."/>
                    <div class="card-body">
                       <div>
                            <h5 class="card-title"><strong>roseplant</strong></h5>
                            <p>180 Rupees</p>
                        </div>
                        {/* <button id="cart" onclick="additem()">Add to cart</button> */}
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card menu-card">
                    <img src="https://tse3.mm.bing.net/th?id=OIP.a6OP8KioMWrMyLebNtCGsQHaF7&pid=Api&P=0&h=220" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <div>
                            <h5 class="card-title"><strong>roseplant</strong></h5>
                            <p>170 Rupees</p>
                        </div>
                        {/* <button  id="cart">Add to cart</button> */}
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card menu-card">
                    <img src="https://tse2.mm.bing.net/th?id=OIP._KVrcEbuxgjfnSGtHe9-oAHaE6&pid=Api&P=0&h=220" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <div>
                            <h5 class="card-title"><strong></strong></h5>
                            <p>330 Rupees</p>
                        </div>
                        {/* <button  id="cart">Add to cart</button> */}
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card menu-card">
                    <img src="https://tse4.mm.bing.net/th?id=OIP.FRbRUmVXu2uyW332H1pA2wHaFS&pid=Api&P=0&h=220" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <div>
                            <h5 class="card-title"><strong></strong></h5>
                            <p>140 Rupees</p>
                        </div>
                        {/* <button  id="cart">Add to cart</button> */}
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card menu-card">
                    <img src="https://tse4.mm.bing.net/th?id=OIP.PkBLQtceW7SML2rGuX4KCQHaHa&pid=Api&P=0&h=220" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <div>
                            <h5 class="card-title"><strong></strong></h5>
                            <p>225 Rupees</p>
                        </div>
                        {/* <button  id="cart" onclick>Add to cart</button> */}
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card menu-card">
                    <img src="https://tse3.mm.bing.net/th?id=OIP.diyMWDzH4_kEL1oseCzP7AHaHa&pid=Api&P=0&h=220" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <div>
                            <h5 class="card-title"><strong></strong></h5>
                            <p>130 Rupees</p>
                        </div>
                        {/* <button  id="cart" onclick="additem">Add to cart</button> */}
                    </div>
                </div>
            </div>
        </div>
        <div class="cart_container">

        </div>
    </div>
      
      
      
     );
  }
}

export default SPhome;
