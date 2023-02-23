import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { EditOutlined, EllipsisOutlined, DeleteOutlined } from '@ant-design/icons';
import { Avatar, Form, Card, Button, Cascader, Input, Select, Space, InputNumber, DatePicker } from 'antd';
const { Meta } = Card;
const { Option } = Select;
function Editcontent() {
    const [form] = Form.useForm();
    const onPaidChange = (value) => {
        switch (value) {
            case 'true':
                form.setFieldsValue();
                break;
            case 'false':
                form.setFieldsValue();
                break;

            default:
        }
    };
    const userId = localStorage.getItem("userId")
    const token = localStorage.getItem("Token")
    const email = localStorage.getItem("email")

    const { id } = useParams();
    const navigate = useNavigate()
    const [state, setState] = useState("")
    const [update, setupdate] = useState("12")
    useEffect(() => {
        axios
            .get(`http://167.235.158.238:3001/invoices/${id}`)
            .then(response => {
                setState(response.data)
            })
    }, [update])

    const [formValues, setFormValues] = useState({});

    const onFinish = (values) => {
        setFormValues(values);
        Rest(values)
    };
    function Rest(values) {
        console.log(values)
        const src = `http://167.235.158.238:3001/invoices/${id}`
        axios.put(src, {
            "userId": userId,
            "paid": true,
            "email": email,
            "to": values.to,
            "dueDate": values.CreateDate,
            "term": values.term,
            "createdDate": values.CreateDate,
            "description": values.description,
            "price": values.price
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response => {
            if (response.status === 200) { navigate(-1) }
            console.log(response);
        }))
    }

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center'

        }}>
            <div style={{
                width: 800,
                padding: 40
            }}>
                <Card
                    style={{
                        width: 800,
                        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                    }}


                >
                    <div>
                        <div><strong>to: {state.to}</strong></div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p><strong>description: </strong>{state.description} </p>
                            <p><strong>price: </strong>{state.price}</p>
                            <p><strong>term: </strong>{state.term}</p>
                            <p><strong>CreateDate: </strong>{state.createdDate}</p>
                            <p><strong>Email: </strong>{email}</p>
                        </div>
                        <button onClick={() => { navigate(-1) }}>back</button>

                    </div>
                </Card>
                <Form onFinish={onFinish} style={{
                    width: 800,
                    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                    marginTop: "40px",
                    padding: 40
                }}>
                    <Form.Item label="to" name="to">
                        <Input />
                    </Form.Item>
                    <Form.Item label="description" name="description">
                        <Input />
                    </Form.Item>
                    <Form.Item label="price" name="price">
                        <InputNumber />
                    </Form.Item>
                    <Form.Item label="term" name="term">
                        <InputNumber />
                    </Form.Item>
                    <Form.Item label="CreateDate" name="CreateDate">
                        <DatePicker />
                    </Form.Item>
                    <Form.Item name="paid" label="Gender" rules={[{ required: true }]}>
                        <Select
                            placeholder="Select a option and change input text above"
                            onChange={onPaidChange}
                            allowClear
                        >
                            <Option value="true">true</Option>
                            <Option value="false">false</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>

            </div>
        </div>

    )
}
export default Editcontent