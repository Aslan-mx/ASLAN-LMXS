import { fromJS } from 'immutable';
import * as constants from './constants';

const  defaultState = fromJS ({
  LastName: [],
  NavList:[],
  SpaList:[],
  TaBle:[]

});
export default (state = defaultState, action)=>{
  switch(action.type) {
    case constants.CHANGE_FIRST_DATA:
      return state.merge({
        LastName:fromJS(action.LastName),
        NavList:fromJS(action.NavList),
        SpaList:fromJS(action.SpaList),
        TaBle:fromJS(action.TaBle)
      })

    default:
      return state;
  }
}

