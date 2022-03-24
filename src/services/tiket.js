import axios from 'axios'
import { HOST } from '../constants';

export const fetchTx = async (BranchID,OperationID) => {
    console.log({BranchID,OperationID});
    try{
        const response = await axios.post(`${HOST}/api/Tx/GetLastTx`,{OwnerID : "4e5c7819-bb74-4f20-9810-ec387d206d2e",OperationID : "048669a4-2c83-405a-924f-556048f89f3f"});
        console.log(response.data.data);
        return response.data.data;    
    } catch (err) {
    console.log(err.response);
  }
}