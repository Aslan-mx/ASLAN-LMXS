// ajax数据传送

import axios from "axios";
import * as constants from './constants';

const changeFirstData =(result)=>({
  type:constants.CHANGE_FIRST_DATA,
  LastName: result.LastName,
  NavList: result.NavList,
  SpaList: result.SpaList,
  TaBle:result.TaBle
})

export const getFirst=() =>{
  return(dispatch)=>{
    axios.get('/api/first.json').then((res)=>{
      const result = res.data.data;
      const action = changeFirstData(result);
      dispatch(action);
    }).catch(()=>{
    });
  }
}
