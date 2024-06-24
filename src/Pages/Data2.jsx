
import React from "react";
import nestedobjectdata2 from '../Assets/Data/data2.json';



function Fetchnestedobjectdata2() {
  return(
    <React.Fragment>
    <div className="row fthight">
    <div className="col-md-11 mb-3 mt-3">
    <h3 className='mt-3 mb-4'>Fetch Nested Object data from json file in React js</h3>
    
    <table class="table">
    <thead>
    <tr>
    <th scope="col">Sr.No</th>
    <th scope="col">Username</th>
    <th scope="col">Email</th>
    <th scope="col">City</th>
    <th scope="col">Zip Code</th>
    </tr>
    </thead>
    <tbody>
    
    { nestedobjectdata2.length >= 1 ? nestedobjectdata2.map( (udata, index)=>(
      <tr key={index}>
      <th scope="row">{ index+1 }</th>
      <td>{udata.title } </td>
      <td>{udata.price } </td>
      {/* <td>{udata.small_description } </td> */}
      {/* <td>{udata.content.city } </td> */}
      <td>
      {/* <td>{udata.contentModule} <br /></td> */}
      <td>{udata.contentModule.map(home => <div>{home.tileModule}</div>)} <br /></td>
      <td>{udata.contentModule.map(home => 
        // <div>{home.tileModule}</div>
        <div>{home.moduleItems.map(homes => 
          <div> <li>{homes}</li> </div>)}</div>
        
        )} <br />
        
        </td>
       
      </td>
      </tr>
    )):(
      <tr>
      <td colSpan={5}>Records Not Found</td>
      </tr>
    )
    
    
  }
  
  </tbody>
  </table>
  </div>
  </div>
  </React.Fragment>
);


}


export default Fetchnestedobjectdata2;