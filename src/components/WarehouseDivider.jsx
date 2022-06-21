import {Tooltip, Card, Divider, List, Typography, Space, Button, Select } from "antd";
import { useState, useEffect } from "react";
import moment from "moment";
import { getDetailImExport, getImportList } from "../Service";
import { LoadingOutlined, ReloadOutlined, CloseOutlined } from "@ant-design/icons";
import Multiselect from 'multiselect-react-dropdown';
const { Text } = Typography;
const { Option } = Select;

const orders = [
    {
        "key": "4fbe3948-d943-45b9-a95b-580c52e54d00",
        "id": "4fbe3948-d943-45b9-a95b-580c52e54d00",
        "ticketID": "4fbe3948-d943-45b9-a95b-580c52e54d00",
        "shipno": "IUTTGVET1",
        "dropofftype": "1",
        "servicetype": "1",
        "ordercode": "IUTTGVET",
        "shippingchargespayment": "Sender",
        "deliverystatus": "PICKUP_WAITING",
        "timeregister": "5/19/2022 3:45:51 PM",
        "sendername": "Thành vip pro",
        "senderphone": "0123456789",
        "senderaddress": "thu duc, vn",
        "sendercountrycode": "VN",
        "sendercitycode": "VN-SG",
        "senderdistrictcode": "71010",
        "senderwardcode": "71020",
        "senderpostalcode": "71000",
        "receivername": "test3",
        "receiverphone": "0987654321",
        "receiveraddress": "hanoi, vn",
        "receivercountrycode": "VN",
        "receivercitycode": "VN-HN",
        "receiverdistrictcode": "Cầu Giấy",
        "receiverwardcode": "1",
        "receiverpostalcode": "100000",
        "totalpackages": 2,
        "servicepostage": 1,
        "addedpostage": 1,
        "codpostage": 1,
        "surcharge": 1,
        "totalpostage": 1,
        "vat": 1,
        "weight": 12,
        "cod": 300,
        "currency": "VND",
        "content": null,
        "note": null,
        "warehouse": "WH01"
    },
    {
        "key": "47fb9e2a-840f-4444-b730-24ddb31cddca",
        "id": "47fb9e2a-840f-4444-b730-24ddb31cddca",
        "ticketID": "4fbe3948-d943-45b9-a95b-580c52e54d00",
        "shipno": "EGDUIEEH1",
        "dropofftype": "1",
        "servicetype": "1",
        "ordercode": "EGDUIEEH",
        "shippingchargespayment": "Sender",
        "deliverystatus": "PICKUP_WAITING",
        "timeregister": "5/19/2022 4:15:14 PM",
        "sendername": "Thắng ",
        "senderphone": "0747852369",
        "senderaddress": "01/01",
        "sendercountrycode": "VN",
        "sendercitycode": "VN-SG",
        "senderdistrictcode": "71010",
        "senderwardcode": "P3",
        "senderpostalcode": "700000",
        "receivername": "Thành ",
        "receiverphone": "0926985147",
        "receiveraddress": "02/01",
        "receivercountrycode": "VN",
        "receivercitycode": "VN-HN",
        "receiverdistrictcode": "Cầu Giấy",
        "receiverwardcode": "P3",
        "receiverpostalcode": "100000",
        "totalpackages": 1,
        "servicepostage": 1,
        "addedpostage": 1,
        "codpostage": 1,
        "surcharge": 1,
        "totalpostage": 1,
        "vat": 1,
        "weight": 65,
        "cod": 10,
        "currency": "VND",
        "content": null,
        "note": null,
        "warehouse": "WH01"
    },
    {
      "key": "47fb9e2a-840f-4444-b730-24ddb31cddcx",
      "id": "47fb9e2a-840f-4444-b730-24ddb31cddcx",
      "ticketID": "4fbe3948-d943-45b9-a95b-580c52e54d01",
      "shipno": "EGDUIEEH2",
      "dropofftype": "1",
      "servicetype": "1",
      "ordercode": "EGDUBGEH",
      "shippingchargespayment": "Sender",
      "deliverystatus": "PICKUP_WAITING",
      "timeregister": "5/19/2022 4:15:14 PM",
      "sendername": "Công đẹp trai ",
      "senderphone": "0747852369",
      "senderaddress": "Heaven",
      "sendercountrycode": "VN",
      "sendercitycode": "VN-SG",
      "senderdistrictcode": "71010",
      "senderwardcode": "P3",
      "senderpostalcode": "700000",
      "receivername": "Phúc Boiz ",
      "receiverphone": "0926985147",
      "receiveraddress": "Hell",
      "receivercountrycode": "VN",
      "receivercitycode": "VN-HN",
      "receiverdistrictcode": "Cầu Giấy",
      "receiverwardcode": "P3",
      "receiverpostalcode": "100000",
      "totalpackages": 1,
      "servicepostage": 1,
      "addedpostage": 1,
      "codpostage": 1,
      "surcharge": 1,
      "totalpostage": 1,
      "vat": 1,
      "weight": 65,
      "cod": 10,
      "currency": "VND",
      "content": null,
      "note": null,
      "warehouse": "WH01"
    }
];
const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
const WarehouseDivider = () => {
  

  return (
    <>
        <Space
        direction="horizontal"
        size="middle"
        style={{
            display: 'grid',
            gridTemplateColumns : '1fr 2fr 1fr',
            alignItems: 'initial'
        }}
        >   
            <Card style={{ height: "100%" }}>
                <Divider orientation="left">Danh sách đơn</Divider>
                <List
                    style={{ height: "300px", overflow: "auto" }}
                    itemLayout="horizontal"
                    dataSource={orders}
                    renderItem={(order) => (
                    <List.Item>
                        <List.Item.Meta
                            title={<a>{order.ordercode}</a>}
                            description={order.sendername + " - " + order.senderphone}
                        />
                        <Button onClick={() => deleteData(order)} type="primary">Không lưu kho</Button>
                    </List.Item>
                    )}
                />
            </Card>

            <Card style={{ height: "100%",border:"true" }}>
                <Divider orientation="left">Kho: 1</Divider>
                <Space direction="vertical" style={{
                        display: 'grid',
                        gridTemplateColumns : '1fr 1fr 1fr',
                        alignItems: 'initial'
                    }}>
                        <Space style={{display: 'block'}}>
                            <Multiselect
                                displayValue="ordercode"
                                onKeyPressFn={function noRefCheck(){}}
                                onRemove={function noRefCheck(){}}
                                onSearch={function noRefCheck(){}}
                                onSelect={function noRefCheck(){}}
                                options={orders}
                                placeholder="Khu 1"
                            />
                            <Button type="primary" style={{marginTop: "10px"}}>Chọn hàng</Button>
                        </Space>
                        <Space style={{display: 'block'}}>
                            <Multiselect
                                displayValue="ordercode"
                                onKeyPressFn={function noRefCheck(){}}
                                onRemove={function noRefCheck(){}}
                                onSearch={function noRefCheck(){}}
                                onSelect={function noRefCheck(){}}
                                options={orders}
                                placeholder="Khu 2"
                            />
                            <Button type="primary" style={{marginTop: "10px"}}>Chọn hàng</Button>
                        </Space>
                        <Space style={{display: 'block'}}>
                            <Multiselect
                                displayValue="ordercode"
                                onKeyPressFn={function noRefCheck(){}}
                                onRemove={function noRefCheck(){}}
                                onSearch={function noRefCheck(){}}
                                onSelect={function noRefCheck(){}}
                                options={orders}
                                placeholder="Khu 3"
                            />
                            <Button type="primary" style={{marginTop: "10px"}}>Chọn hàng</Button>
                        </Space>
                </Space>
                <Space direction="vertical" style={{
                        display: 'grid',
                        gridTemplateColumns : '1fr 1fr',
                        alignItems: 'initial'
                    }}>
                    <Card style={{height: "100%",border:"true" }}>
                        <p style={{fontWeight: 'bold'}}>Khu: 1</p>
                        <Space style={{display:"block"}}>
                                <Space style={{display:"flex",justifyContent: 'space-between'}}>
                                    <Multiselect
                                    displayValue="ordercode"
                                    onKeyPressFn={function noRefCheck(){}}
                                    onRemove={function noRefCheck(){}}
                                    onSearch={function noRefCheck(){}}
                                    onSelect={function noRefCheck(){}}
                                    options={orders}
                                    placeholder="Hàng 1"
                                    />
                                    <Button type="primary"> Chọn kệ</Button>
                                </Space>
                                <Space style={{display:"flex",justifyContent: 'space-between',marginTop:'10px'}}>
                                    <Multiselect
                                    displayValue="ordercode"
                                    onKeyPressFn={function noRefCheck(){}}
                                    onRemove={function noRefCheck(){}}
                                    onSearch={function noRefCheck(){}}
                                    onSelect={function noRefCheck(){}}
                                    options={orders}
                                    placeholder="Hàng 2"
                                    />
                                    <Button type="primary"> Chọn kệ</Button>
                                </Space>
                                <Space style={{display:"flex",justifyContent: 'space-between',marginTop:'10px'}}>
                                    <Multiselect
                                    displayValue="ordercode"
                                    onKeyPressFn={function noRefCheck(){}}
                                    onRemove={function noRefCheck(){}}
                                    onSearch={function noRefCheck(){}}
                                    onSelect={function noRefCheck(){}}
                                    options={orders}
                                    placeholder="Hàng 3"
                                    />
                                    <Button type="primary"> Chọn kệ</Button>
                                </Space>
                                <Space style={{display:"flex",justifyContent: 'space-between',marginTop:'10px'}}>
                                    <Multiselect
                                    displayValue="ordercode"
                                    onKeyPressFn={function noRefCheck(){}}
                                    onRemove={function noRefCheck(){}}
                                    onSearch={function noRefCheck(){}}
                                    onSelect={function noRefCheck(){}}
                                    options={orders}
                                    placeholder="Hàng 4"
                                    />
                                    <Button type="primary"> Chọn kệ</Button>
                                </Space>
                        </Space>
                    </Card>
                    <Card style={{ height: "100%",border:"true" }}>
                        <p style={{fontWeight: 'bold'}}>Hàng: 1</p>
                        <Space style={{display:"block"}}>
                                <Space>
                                    <Multiselect
                                    displayValue="ordercode"
                                    onKeyPressFn={function noRefCheck(){}}
                                    onRemove={function noRefCheck(){}}
                                    onSearch={function noRefCheck(){}}
                                    onSelect={function noRefCheck(){}}
                                    options={orders}
                                    placeholder="Kệ 1"
                                    />
                                </Space>
                                <Space style={{marginTop:'10px'}}>
                                    <Multiselect
                                    displayValue="ordercode"
                                    onKeyPressFn={function noRefCheck(){}}
                                    onRemove={function noRefCheck(){}}
                                    onSearch={function noRefCheck(){}}
                                    onSelect={function noRefCheck(){}}
                                    options={orders}
                                    placeholder="Kệ 2"
                                    />
                                </Space>
                                <Space style={{marginTop:'10px'}}>
                                    <Multiselect
                                    displayValue="ordercode"
                                    onKeyPressFn={function noRefCheck(){}}
                                    onRemove={function noRefCheck(){}}
                                    onSearch={function noRefCheck(){}}
                                    onSelect={function noRefCheck(){}}
                                    options={orders}
                                    placeholder="Kệ 3"
                                    />
                                </Space>
                                <Space style={{marginTop:'10px'}}>
                                    <Multiselect
                                    displayValue="ordercode"
                                    onKeyPressFn={function noRefCheck(){}}
                                    onRemove={function noRefCheck(){}}
                                    onSearch={function noRefCheck(){}}
                                    onSelect={function noRefCheck(){}}
                                    options={orders}
                                    placeholder="Kệ 4"
                                    />
                                </Space>
                        </Space>
                    </Card>
                </Space>
                <Space style={{display:'flex',justifyContent: 'flex-end',marginTop:"20px"}}>
                    <Button type="primary">Xác nhận</Button>
                </Space>
            </Card>

            <Card style={{ height: "100%" }}>
                <Divider orientation="left">Đơn không lưu kho</Divider>
                <List
                    style={{ height: "300px", overflow: "auto" }}
                    itemLayout="horizontal"
                    dataSource={orders}
                    renderItem={(order) => (
                    <List.Item>
                        <List.Item.Meta
                            title={<a>{order.ordercode}</a>}
                            description={order.sendername + " - " + order.senderphone}
                        />
                    </List.Item>
                    )}
                />
            </Card>
        </Space>
    </>
  );
};
export default WarehouseDivider;
