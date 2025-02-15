import { useState } from "react";
import {
  Form,
  Input,
  Select,
  Radio,
  Checkbox,
  Button,
  Modal,
  message,
  Row,
  Col,
  Layout,
} from "antd";
import "antd/dist/reset.css";

const { Header, Footer, Content } = Layout;

const App = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [record, setRecord] = useState({});
  const [editingIdx, setEditingIdx] = useState(null);

  const onFinish = async (values) => {
    message.loading("Processing...", 1).then(() => {
      if (editingIdx !== null) {
        // Editing an existing record
        const newData = [...data];
        newData[editingIdx] = values;
        setData(newData);
        setEditingIdx(null); // Reset editing mode
      } else {
        // Adding a new record
        setData([...data, values]);
      }
      form.resetFields();
    });
  };

  const onClear = () => {
    form.resetFields();
    setEditingIdx(null); // Reset editing mode
  };

  const onViewRecord = (record) => {
    setVisible(true);
    setRecord(record);
  };

  const onDeleteRecord = (index) => {
    setData(data.filter((item, i) => i !== index));
  };

  const onEditRecord = (index) => {
    form.setFieldsValue(data[index]); // Prefill form with existing data
    setEditingIdx(index); // Store index of record being edited
  };

  return (
    //
    // <div>
    <Layout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "100vh",
          padding: "20px",
          overflowY: "auto",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "800px",
            background: "#fff",
            padding: "20px",
            borderRadius: "8px",
            // boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            backgroundColor: "azure",
            maxHeight: "80vh", // Prevents overflowing content
            overflowY: "auto",
          }}
        >
          <Header
            style={{
              display: "block",
              textAlign: "center",
              paddingBottom: "10px",
              fontSize: "18px",
              fontWeight: "bold",
              color: "black",
              backgroundColor:"mediumpurple",
              height:"10%"
            }}
          >
            Employee Details
            <br />
            <img
              src="/manager.png"
              alt="employee"
              style={{
                height: "30px",
                width: "40px",
                display: "block",
                margin: "0 auto",
              }}
            />
          </Header>
          <Form form={form} onFinish={onFinish} layout="vertical">
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12} md={8} style={{ minWidth: "200px" }}>
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[
                    { required: true, message: "Please input your name!" },
                  ]}
                >
                  <Input style={{ width: "100%" }} />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={8} style={{ minWidth: "200px" }}>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                  ]}
                >
                  <Input type="email" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={8} style={{ minWidth: "200px" }}>
                <Form.Item
                  label="Age"
                  name="age"
                  rules={[
                    {
                      required: true,
                      message: "Please input your age number!",
                    },
                  ]}
                >
                  <Input type="number" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12} md={8} style={{ minWidth: "200px" }}>
                <Form.Item
                  label="Country"
                  name="country"
                  rules={[
                    { required: true, message: "Please select your country!" },
                  ]}
                >
                  <Select>
                    <Select.Option value="India">India</Select.Option>
                    <Select.Option value="Nepal">Nepal</Select.Option>
                    <Select.Option value="Hong-Kong">Hong Kong</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={8} style={{ minWidth: "200px" }}>
                <Form.Item
                  label="Language"
                  name="language"
                  rules={[
                    { required: true, message: "Please select your language!" },
                  ]}
                >
                  <Radio.Group>
                    <Radio value="English">English</Radio>
                    <Radio value="Nepali">Nepali</Radio>
                    <Radio value="Mandarin">Mandarin</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={8} style={{ minWidth: "200px" }}>
                <Form.Item
                  label="Skills"
                  name="skills"
                  rules={[
                    { required: true, message: "Please select the following" },
                  ]}
                >
                  <Checkbox.Group>
                    <Checkbox value="HTML">HTML</Checkbox>
                    <Checkbox value="CSS">
                      CSS(Including ANTD and React Bootstrap)
                    </Checkbox>
                    <Checkbox value="JavaScript">JavaScript</Checkbox>
                    <Checkbox value="ReactJS">React JS</Checkbox>
                  </Checkbox.Group>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12} md={8} style={{ minWidth: "200px" }}>
                <Form.Item
                  label="Father's Name"
                  name="fathername"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Father's name!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={8} style={{ minWidth: "200px" }}>
                <Form.Item
                  label="Spouse's Name"
                  name="spousename"
                  rules={[
                    {
                      required: false,
                      message: "Please input your Spouse's  name!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={8} style={{ minWidth: "200px" }}>
                <Form.Item
                  label="Years of Experience"
                  name="experience"
                  rules={[
                    {
                      required: true,
                      message: "Years of experience needed!",
                    },
                  ]}
                >
                  <Input type="number" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12} md={8} style={{ minWidth: "200px" }}>
                <Form.Item
                  label="Hobbies"
                  name="hobbies"
                  // rules={[
                  //   { required: true, message: "Select the following" },
                  // ]}
                >
                  <Checkbox.Group>
                    <Checkbox value="reading">Reading</Checkbox>
                    <Checkbox value="coding">Coding</Checkbox>
                    <Checkbox value="vlogging">Vlogging</Checkbox>
                    <Checkbox value="travelling">Travelling</Checkbox>
                  </Checkbox.Group>
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={8} style={{ minWidth: "200px" }}>
                <Form.Item
                  label="Ready for Reallocation?"
                  name="realloc"
                  rules={[
                    { required: true, message: "Please select Yes or No!" },
                  ]}
                >
                  <Radio.Group>
                    <Radio value="Yes">Yes</Radio>
                    <Radio value="No">No</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={8} style={{ minWidth: "200px" }}>
                <Form.Item></Form.Item>
              </Col>
            </Row>

            <Row justify="center" gutter={16}>
              <Col>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Col>
              <Col>
                <Button type="default" onClick={onClear}>
                  Clear
                </Button>
              </Col>
            </Row>
          </Form>
          {/* </div> */}
          <ol>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {data.map((record, index) => (
                <div
                  key={index}
                  onClick={() => onViewRecord(record)}
                  style={{
                    display: "flex",
                    alignItems: "center", // Align items in a single line
                    justifyContent: "space-between", // Space between text and icons
                    gap: "10px", // Add spacing between elements
                    padding: "10px",
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  <div /*style={{ flex: 1, display: "flex" }}*/>
                    <span style={{ color: "black" }}>{record.name}</span>
                    {/* <span style={{ marginLeft: 10, color: "black" }}>
                    {record.email}
                  </span> */}
                  </div>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <Button
                      type="link"
                      onClick={(event) => {
                        event.stopPropagation(); // Prevents triggering the onViewRecord function
                        onDeleteRecord(index);
                      }}
                    >
                      {" "}
                      <img
                        src="/delete.png"
                        alt="delete"
                        style={{
                          height: "10px",
                          width: "20px",
                          display: "block",
                          margin: "0 auto",
                        }}
                      />
                    </Button>
                    <Button
                      type="link"
                      onClick={() => onEditRecord(index, record)}
                    >
                      <img
                        src="/pencil.png"
                        alt="pencil"
                        style={{
                          height: "10px",
                          width: "20px",
                          display: "block",
                          margin: "0 auto",
                        }}
                      />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </ol>
          <Modal
            title="Record Details"
            open={visible}
            footer={null}
            onCancel={() => setVisible(false)}
          >
            <p>Name: {record.name}</p>
            <p>Email: {record.email}</p>
            <p>Age: {record.age}</p>
            <p>Country: {record.country}</p>
            <p>Language: {record.language}</p>
            <p>Skills: {record.skills ? record.skills.join(", ") : "None"}</p>
            <p>Father`s Name: {record.fathername}</p>
            <p>Spouse`s Name: {record.spousename}</p>
            <p>YoExp: {record.experience}</p>
            <p>Reallocation: {record.realloc}</p>
            <p>Hobbies: {record.hobbies}</p>
          </Modal>
          <Footer
            style={{
              textAlign: "center",
              background: "#f0f2f5",
              padding: "10px",
            }}
          >
            © 2025 Employee Details. All rights reserved.
          </Footer>
        </div>
      </div>
    </Layout>
  );
};

export default App;
