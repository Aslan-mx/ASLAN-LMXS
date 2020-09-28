import React,{Fragment} from 'react';
import {connect} from 'react-redux';
import {actionCreators }from './store';
import {HeaderWrapper,Flower} from '../style/third.js';
import Zmage from 'react-zmage'



class Third extends React.Component{
  render(){
    const {First}=this.props;
    return(
      <Fragment>
        <HeaderWrapper>
          <div className="loader font2">
            <span>李</span>
            <span className="span2">明</span>
            <span className="span3">轩</span>
            <span className="span4">个</span>
            <span className="span5">人</span>
            <span className="span6">作</span>
            <span className="span7">品</span>
            <span className="span8">展</span>
            <span className="span9">示</span>
          </div>
          <h2>iconfont作品</h2>
          <ul className={'clearfix'}>
            <li>
              <a href="https://www.iconfont.cn/search/index?searchType=user&q=%E6%99%93%E8%BD%A9%E7%88%B1%E5%90%83%E8%82%89" className="btn btn5">
                <div className="line_tl"></div>
                <div className="line_tr"></div>
                <span className="btn-inner">点击预览</span>
                <div className="line_bl"></div>
                <div className="line_br"></div>
                <div className="line_all"></div>
              </a>
            </li>
          </ul>
          <h2>平面设计作品</h2>
          <Flower>
            {
              First.map((item,index)=>{
                return(
                  <li key={item.get('id')}>
                    <Zmage className={'photos'} src={item.get('photo')}/>
                  </li>
                )
              })
            }
          </Flower>
        </HeaderWrapper>
      </Fragment>
    )
  }
componentDidMount(){
  this.props.changeThirdData()
}
}
const mapState=(state)=>({
  First:state.getIn(['third','PicItem'])
})

const mapDispatch =(dispatch)=>({
  changeThirdData(){
    const action=actionCreators.getThird()
    dispatch(action)
  }
})
export default  connect(mapState,mapDispatch)(Third);