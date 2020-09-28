import React,{Fragment} from 'react';
import {HeaderWrapper,Frames,Column,Apse} from '../style/first.js'
import { CrownTwoTone } from '@ant-design/icons';
import { Carousel,Collapse } from 'antd';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import {actionCreators }from './store';


const { Panel } = Collapse;
function callback(key) {
}

class First extends React.Component{
  render(){
    const {List,Second,Third} =this.props;
    return (
      <Fragment>
        <HeaderWrapper>
          <div className="loader font1">
            <span>李</span>
            <span className="span2">明</span>
            <span className="span3">轩</span>
            <span className="span4">个</span>
            <span className="span5">人</span>
            <span className="span6">简</span>
            <span className="span7">历</span>
          </div>
          <h2>李明轩</h2>
          <Frames>
            <div className={'Frames-Item'}>
              {
                List.map((item,index)=>{
                  return(
                    <li key={item.get('id')}>
                      <i>
                        {/*{item.get('ico')}*/}
                        <CrownTwoTone twoToneColor="#eb2f96" />
                      </i>
                      <label  htmlFor=""> {item.get('name')}</label>
                      <a href={item.get('Href')}>
                        <b> {item.get('nickname')}</b>
                      </a>
                    </li>
                  )
                })
              }
            </div>
            <div className={'Frames-Pic'}>
              <Carousel autoplay>
                {
                  Third.map((item,index)=>{
                    return(
                      <li key={item.get('id')}>
                        <img src={item.get('imgUrl')}  align="middle" alt=""/>
                      </li>
                    )
                  })
                }
              </Carousel>
            </div>
            <br/>
            <br/>
            <br/>
          </Frames>
          <br/>
          <div className="loader font2">
            <span>李</span>
            <span className="span2">明</span>
            <span className="span3">轩</span>
            <span className="span4">个</span>
            <span className="span5">人</span>
            <span className="span6">经</span>
            <span className="span7">历</span>
          </div>
          <Column>
            <div className="case-content">

              <div className="case-item" >
                <div className="ih-item circle effect1">
                  <a href="http://aslan-mx.top/first">
                    <div className="spinner"></div>
                    <div className="img">
                      <img src="//inews.gtimg.com/newsapp_match/0/4997803215/0" alt="正在加载中"/>
                    </div>
                    <div className="info">
                      <div className="info-back">
                        <h3>简历</h3>
                        <p>温饱·理想·能力</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="case-item" >
                <div className="ih-item circle effect1">
                  <a href="http://aslan-mx.top/second">
                    <div className="spinner"></div>
                    <div className="img">
                      <img src="//inews.gtimg.com/newsapp_match/0/9343634784/0" alt="正在加载中"/>
                    </div>
                    <div className="info">
                      <div className="info-back">
                        <h3>知识点</h3>
                        <p>知识·智慧·阅读</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="case-item" >
                <div className="ih-item circle effect1">
                  <a href="http://aslan-mx.top/third">
                    <div className="spinner"></div>
                    <div className="img">
                      <img src="//inews.gtimg.com/newsapp_match/0/11315116727/0" alt="正在加载中"/>
                    </div>
                    <div className="info">
                      <div className="info-back">
                        <h3>旅行</h3>
                        <p>美食·旅游·分享</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

            </div>
          </Column>
          <Apse>
            <Collapse defaultActiveKey={['1']} onChange={callback}>
              {
                Second.map((item,index)=>{
                  return(
                    <Panel header={item.get('sub')} key={item.get('id')}>
                      <p> {item.get('first')}</p>
                      <br/>
                      <p> {item.get('second')}</p>
                      <br/>
                      <p> {item.get('third')}</p>
                      <br/>
                      <p> {item.get('fourth')}</p>
                      <br/>
                      <p> {item.get('fifth')}</p>
                      <br/>
                      <p> {item.get('sixth')}</p>
                    </Panel>
                  )
              })
              }
            </Collapse>
          </Apse>
        </HeaderWrapper>
      </Fragment>
    )
  }
  componentDidMount(){
    this.props.changeFirstData();
  }
}

const mapState =(state)=>({
  List:state.getIn(['first','LastName']),
  Second:state.getIn(['first','NavList']),
  Third:state.getIn(['first','SpaList']),
  Blue: state.getIn(['first','TaBle'])
})

const mapDispatch =(dispatch)=>({
  changeFirstData(){
    const action=actionCreators.getFirst();
    dispatch(action)
  }
})
export default connect(mapState,mapDispatch)(First);