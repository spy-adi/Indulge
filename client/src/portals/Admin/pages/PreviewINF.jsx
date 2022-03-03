import React from "react";
import { Layout } from "antd";
import { Form, Input, Select, Button, Divider, Upload, message } from 'antd';
import "../introPage.css";
import { Link } from "react-router-dom";
import { UploadOutlined } from '@ant-design/icons';

const { Content } = Layout;
const { Option } = Select;

const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

function PreviewINF() {
      
  const [form] = Form.useForm();
  
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

      const onFinish = (e) => {
       console.log(e);
      };

  return (
    <Content style={{ margin: "25px 25px" }} >
    <div id="printForm">
    {/* step1 */}
    <div className='c2 border border-2 rounded'>
    <div style={{textAlign:'center'}}>
    <h2>Company & Job details</h2></div>

    <Form
      form={form}
      layout="vertical"
      name="nest-messages"
      onFinish={onFinish}  
      validateMessages={validateMessages}
      initialValues={{
        cname:"TATA",
        cemail:"t@iitism.ac.in"
      }}
    >
    <Form.Item
        name="cname"
        label="Company Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input disabled={ch=='n'} />
      </Form.Item>
      <Form.Item
        name="cemail"
        label="Company Email"
        rules={[
          {
            required: true,
          },
        ]}
        
      >
        <Input disabled={ch=='n'}  />
      </Form.Item>

      <Form.Item 
        name="category"
        label="Industry Sector"
      >
      <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={[]}
      onChange={handleChangeSector}
      disabled={ch=='y'}
    >
      {sector}
    </Select>
      </Form.Item>

      <Form.Item
        name="other"
        label="If selected other, Industry Sector:"
      >
        <Input disabled={chSector&&(ch=='n')} />
      </Form.Item>

      <Form.Item
        name="intern_designation"
        label="Job Designation"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input disabled={ch=='y'}/>
      </Form.Item>

      <Form.Item
        name='graduation_year'
        label="Required Graduation year"
      >
        <Input disabled={ch=='y'} />
      </Form.Item>

      <Form.Item
        name="eligibility_criteria"
        label="Eligibility criteria:"
        rules={[
          {
            required: true,
          }
        ]}
      >
        <Input disabled={(ch=='y')} />
      </Form.Item>

      <Form.Item 
      label="Mode of Internship?"
      name="mode"
      >
        <Select defaultValue="Select" style={{ width: 120 }} onChange={handleChange}>
        <Option value="Virtual">Virtual</Option>
        <Option value="Physical">Physical</Option>
        </Select>
      </Form.Item>

      <Form.Item 
      label="Internship Duration"
        name="duration"
        >
      <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={[]}
      onChange={handleChange}
    >
      {duration}
    </Select>
      </Form.Item>

      <Form.Item name="intern_description" label="Job Description">
        <Input.TextArea disabled={ch=='y'}/>
      </Form.Item>
      <Form.Item
        name="place_of_posting"
        label="Place of Posting"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input disabled={ch=='y'}/>
      </Form.Item>
      
    </Form>
    </div>

    {/* step2 */}
    <div className="border border-2 rounded c2">
    <div style={{textAlign:'center'}}>
    <h2>HR details</h2></div>

    <Form
      form={form}
      layout="vertical"
      name="nest-messages"
      onFinish={onFinish} 
      validateMessages={validateMessages}
    >
      <Form.Item
        name="name"
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input disabled={ch=='y'}/>
      </Form.Item>
      <Form.Item
        name="designation"
        label="Designation"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input disabled={ch=='y'}/>
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input disabled={ch=='y'}/>
      </Form.Item>
      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input disabled={ch=='y'}/>
      </Form.Item>
      <Divider />
      <h5>Alternate HR details</h5>
      <Form.Item
        name="aname"
        label="Name"
      >
        <Input disabled={ch=='y'}/>
      </Form.Item>
      <Form.Item
        name="adesignation"
        label="Designation"
      >
        <Input disabled={ch=='y'}/>
      </Form.Item>
      <Form.Item
        name="aemail"
        label="Email"
      >
        <Input disabled={ch=='y'}/>
      </Form.Item>
      <Form.Item
        name="aphone"
        label="Phone Number"
      >
        <Input disabled={ch=='y'}/>
      </Form.Item>
      <Form.Item>
      <div style={{textAlign:'right'}}>
      </div>
        
      </Form.Item>
    </Form>
    </div>
    
    {/* step3 */}

    <div className="border border-2 round c2">
    <div style={{textAlign:'center'}}>
    <h2 style={{margin:'0'}}>ELIGIBLE BRANCHES</h2>
    <p>(Admitted through JEE Advanced)</p>
    </div>
    <Form
      form={form}
      layout="vertical"
      name="nest-messages"
      onFinish={onFinish} 
      validateMessages={validateMessages}
    >
    
   

    <Form.Item label="Requirement of B.Tech Students?">
        <Select defaultValue="Select" style={{ width: 120 }} onChange={handleChange} disabled={ch=='y'}>
        <Option value="y">Yes</Option>
        <Option value="n">No</Option>
        </Select>
      </Form.Item>

      <Form.Item label="If the response of previous question is YES, please select the eligible branches"
      name = "btech">
      <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={[]}
      onChange={handleChangeBtech}
      disabled = {chBtech&&(ch=='n')}
    >
      {btech4yr}
    </Select>
      </Form.Item>
    
      <Form.Item label="Requirement of Double Major?">
        <Select defaultValue="Select" style={{ width: 120 }} onChange={handleChange} disabled={ch=='y'}>
        <Option value="y">Yes</Option>
        <Option value="n">No</Option>
        </Select>
      </Form.Item>

      <Form.Item label="If the response of previous question is YES, please select the eligible branches">
      <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={[]}
      onChange={handleChange}
      disabled = {chDM&&(ch=='n')}
    >
      {dm}
    </Select>
      </Form.Item>

      <Form.Item label="Requirement of Dual Degree Students?">
        <Select defaultValue="Select" style={{ width: 120 }} onChange={handleChange} disabled={ch=='y'}>
        <Option value="y">Yes</Option>
        <Option value="n">No</Option>
        </Select>
      </Form.Item>

      <Form.Item label="If the response of previous question is YES, please select the eligible branches">
      <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={[]}
      onChange={handleChange}
      disabled = {chDD&&(ch=='n')}
    >
      {dd}
    </Select>
      </Form.Item>

      <Form.Item label="Requirement of Integrated M.Tech Students?">
        <Select defaultValue="Select" style={{ width: 120 }} onChange={handleChange} disabled={ch=='y'}>
        <Option value="y">Yes</Option>
        <Option value="n">No</Option>
        </Select>
      </Form.Item>

      <Form.Item label="If the response of previous question is YES, please select the eligible branches">
      <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={[]}
      onChange={handleChangeIM}
      disabled = {chIM&&(ch=='n')}
    >
      {im}
    </Select>
      </Form.Item>
    
    </Form>
    </div>
    
    {/* step1 */}
    <div className='c2 border border-2 rounded'>
    <div style={{textAlign:'center'}}>
    <h2>Skill Based Hiring</h2></div>

    <Form
      form={form}
      layout="vertical"
      name="nest-messages"
      onFinish={onFinish}  
      validateMessages={validateMessages}
    >
     <Form.Item label="Do you want to hire students depending on skills?">
        <Select defaultValue="Select" style={{ width: 120 }} onChange={handleChange} disabled={ch=='y'}>
        <Option value="y">Yes</Option>
        <Option value="n">No</Option>
        </Select>
      </Form.Item>

      <Form.Item disabled label="If the response of previous question is YES, please select the eligible skills">
      <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={[]}
      onChange={handleChangeSkill}
      disabled = {chSS&&(ch=='n')}
    >
      {ss}
    </Select>
      </Form.Item>

      <Form.Item
        name={['skills']}
        label="If selected other, Skills required :"
      >
        <Input disabled={skill&&(ch=='n')} />
      </Form.Item>
      
    </Form>
    </div>

    {/* step4 */}

    <div className="border border-2 round c2">
    <div style={{textAlign:'center'}}>
    <h2 style={{margin:'0'}}>ELIGIBLE BRANCHES</h2>
    <p>(Admitted through JAM/GATE/CAT/NET)</p>
    </div>
    <Form
      form={form}
      layout="vertical"
      name="nest-messages"
      onFinish={onFinish} 
      validateMessages={validateMessages}
    >
    
    <Form.Item label="Requirement of M.Tech Students?">
        <Select defaultValue="Select" style={{ width: 120 }} onChange={handleChange} disabled={ch=='y'}>
        <Option value="y">Yes</Option>
        <Option value="n">No</Option>
        </Select>
      </Form.Item>

      <Form.Item label="If the response of previous question is YES, please select the eligible branches">
      <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={[]}
      onChange={handleChange}
      disabled = {chMtech&&(ch=='n')}
    >
      {mtech}
    </Select>
      </Form.Item>
    
      <Form.Item label="Requirement of PhD Students?">
        <Select defaultValue="Select" style={{ width: 120 }} onChange={handleChange} disabled={ch=='y'}>
        <Option value="y">Yes</Option>
        <Option value="n">No</Option>
        </Select>
      </Form.Item>

      <Form.Item label="If the response of previous question is YES, please select the eligible branches">
      <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={[]}
      onChange={handleChange}
      disabled = {chPhD&&(ch=='n')}
    >
      {phd}
    </Select>
      </Form.Item>

      <Form.Item label="Requirement of MBA?">
        <Select defaultValue="Select" style={{ width: 120 }} onChange={handleChange} disabled={ch=='y'}>
        <Option value="y">Yes</Option>
        <Option value="n">No</Option>
        </Select>
      </Form.Item>

      <Form.Item label="If the response of previous question is YES, please select the eligible branches">
      <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={[]}
      onChange={handleChange}
      disabled = {chMBA&&(ch=='n')}
    >
      {mba}
    </Select>
      </Form.Item>

      <Form.Item label="Requirement of MSc Students?">
        <Select defaultValue="Select" style={{ width: 120 }} onChange={handleChange} disabled={ch=='y'}>
        <Option value="y">Yes</Option>
        <Option value="n">No</Option>
        </Select>
      </Form.Item>

      <Form.Item label="If the response of previous question is YES, please select the eligible branches">
      <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={[]}
      onChange={handleChange}
      disabled = {chMSC&&(ch=='n')}
    >
      {msc2yr}
    </Select>
      </Form.Item>

      <Form.Item label="Requirement of MSc Tech Students?">
        <Select defaultValue="Select" style={{ width: 120 }} onChange={handleChange} disabled={ch=='y'}>
        <Option value="y">Yes</Option>
        <Option value="n">No</Option>
        </Select>
      </Form.Item>

      <Form.Item label="If the response of previous question is YES, please select the eligible branches">
      <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={[]}
      onChange={handleChange}
      disabled = {chMSCT&&(ch=='n')}
    >
      {msc3yr}
    </Select>
      </Form.Item>
    </Form>

    </div>

        {/* step5 */}
    <div className="border border-2 round c2">
    <div style={{textAlign:'center'}}>
    <h2 style={{margin:'0'}}>SELECTION PROCESS AND STIPEND DETAILS</h2>
    </div>

    <Form
      form={form}
      layout="vertical"
      name="nest-messages"
      onFinish={onFinish} 
      validateMessages={validateMessages}
    >
    
    <Form.Item 
      name= "resume_shortlisting"
      label="Resume Shortlisting?"
      rules={[
          {
            required: true,
          },
        ]}
        >
        <Select defaultValue="Select" style={{ width: 120 }} onChange={handleChange} disabled={ch=='y'}>
        <Option value="true">Yes</Option>
        <Option value="false">No</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="total_rounds"
        label="Total Number of Rounds"
        // rules={[
        //   {
        //     required: false,
        //   },
        // ]}
      >
        <Input disabled={ch=='y'}/>
      </Form.Item>

      <Form.Item 
      name="type_of_test"
       label="Type of test">
      <Select defaultValue="Select" style={{ width: 120 }} onChange={handleChange} disabled={ch=='y'}
    >
      {test}
    </Select>
      </Form.Item>

      <Form.Item 
      name="other_qualify_rounds"
      label="Other Qualification Rounds">
      <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={[]}
      onChange={handleChange}
      disabled={ch=='y'}
    >
      {qround}
    </Select>
      </Form.Item>
      
      <Form.Item
        name="no_of_offers"
        label="Number of offers available for IIT(ISM) students"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input disabled={ch=='y'}/>
      </Form.Item>
      
      <Divider />

      <Form.Item
        name="stipend"
        label="Stipend (per month)"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input disabled={ch=='y'}/>
      </Form.Item>

      <Form.Item 
      name="ppo" label="Provision for Pre Placement Offer (PPO)">
        <Select defaultValue="Select" style={{ width: 120 }} onChange={handleChange} disabled={ch=='y'}>
        <Option value="y">Yes</Option>
        <Option value="n">No</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="ctc"
        label="CTC Details, if PPO provided"
        // rules={[
        //   {
        //     required: true,
        //   },
        // ]}
      >
        <Input.TextArea disabled={ch=='y'}/>
      </Form.Item>

      <Form.Item
        name="doc"
        label="Upload Document (optional)"
      >
      <p>Company may upload documents like JD, Eligibility criteria, etc</p>
      <Upload {...props}>
            <Button disabled={ch=='y'} icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </Form.Item>

    </Form>
    </div>
    </div>

    {/* buttons */}
    <Form
      form={form}
      layout="vertical"
      name="nest-messages"
      onFinish={onFinish} 
      validateMessages={validateMessages}
    >
        <Form.Item>
      <div style={{textAlign:'center'}}>
      <Button type="primary" htmlType="submit">
          Save
        </Button>
      </div>
        
      </Form.Item>
    </Form>
    </Content>
  );
}

export default PreviewINF;