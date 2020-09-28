import React,{Fragment } from 'react';
import {HeaderWrapper,Acid,Lisa,Bait,Acute} from '../style/fifth.js';
import {Carousel } from 'antd';
import { SmileTwoTone } from '@ant-design/icons';
import {connect} from 'react-redux';
import {actionCreators }from './store';

import { Form, Input, Button, Select } from 'antd';

const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
class Fifth extends React.Component{

  formRef = React.createRef();

  onGenderChange = value => {
    this.formRef.current.setFieldsValue({
      note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
    });
  };

  onFinish = values => {
    console.log(values);
  };

  onReset = () => {
    this.formRef.current.resetFields();
  };

  onFill = () => {
    this.formRef.current.setFieldsValue({
      note: 'Hello world!',
      gender: '男',
    });
  };
  render(){
    const {Fifth,Ninth} =this.props;
      return(
      <Fragment>
        <HeaderWrapper>
          <div className="loader font2">
            <span>邮</span>
            <span className="span2">件</span>
            <span className="span3">联</span>
            <span className="span4">系</span>
            <span className="span5">我</span>
            <span className="span6">吧</span>
          </div>
          <h2>李明轩</h2>
          <Acid>
            <Carousel autoplay>
              {
                Fifth.map((item,index)=>{
                return(
                  <li key={item.get('id')}>
                    <img src={item.get('pict')} alt=""/>
                  </li>
                )
              })
              }
            </Carousel>
          </Acid>
          <Lisa>
            <Bait>
              {
                Ninth.map((item,index)=>{
                  return(
                    <li key={item.get('id')}>
                      <i><SmileTwoTone twoToneColor="#00ffa3"/></i>
                      <label  htmlFor=""> {item.get('size')}</label>
                      <b> {item.get('text')}</b>
                    </li>
                  )
                })
              }
            </Bait>
            <Acute>
              <Form {...layout} ref={this.formRef} name="control-ref" onFinish={this.onFinish}>
                <Form.Item
                  name="note"
                  label="注意"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="gender"
                  label="性别"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Select
                    placeholder="选择一个选项并在上方更改输入文本..."
                    onChange={this.onGenderChange}
                    allowClear
                  >
                    <Option value="male">男</Option>
                    <Option value="female">女</Option>
                    <Option value="other">其他</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  noStyle
                  shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
                >
                  {({ getFieldValue }) =>
                    getFieldValue('gender') === 'other' ? (
                      <Form.Item
                        name="customizeGender"
                        label="Customize Gender"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    ) : null
                  }
                </Form.Item>
                <Form.Item {...tailLayout}>
                  <Button type="primary" htmlType="submit">
                    提交
                  </Button>
                  <Button htmlType="button" onClick={this.onReset}>
                    重启
                  </Button>
                  <Button type="link" htmlType="button" onClick={this.onFill}>
                    填写表格
                  </Button>
                </Form.Item>
              </Form>
            </Acute>
          </Lisa>
        </HeaderWrapper>
      </Fragment>
    )
  }
  componentDidMount(){
    this.props.changeFifthData();
  }
}
const MapState=(state)=>({
  Fifth:state.getIn(['fifth','NavTest']),
  Ninth:state.getIn(['fifth','ListItem'])
})
const MapDispatch=(dispatch)=>({
  changeFifthData (){
    const action=actionCreators.getFifth();
    dispatch(action)
  }
})
export default connect(MapState,MapDispatch)(Fifth);