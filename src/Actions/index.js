
import axios from 'axios';

export const getAllOrders = () => async dispatch =>{
    console.log('hello')
   
  
  
    let allOrders;
    
        allOrders = await axios({
            method:"GET",
            url:'http://localhost:9000/api/v1/user/checkOut',
           
           
            withCredentials:true
        })
        
        
   
    dispatch({
        type: "ORDERS",
        payload: allOrders.data
    })

}