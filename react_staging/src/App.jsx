import React, { Component } from 'react'
import { Button, DatePicker } from 'antd';
import { WechatOutlined, SearchOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

export default class App extends Component {

	render() {

		const onChange: DatePickerProps['onChange'] = (date, dateString) => {
			console.log(date, dateString);
		};

		return (
			<div>App
				<Button type="primary">Primary Button</Button>
				<Button type="link">link Button</Button>
				<WechatOutlined />

				<Button type="primary" icon={<SearchOutlined />}>
					Search
				</Button>
				<br />

				<DatePicker onChange={onChange} />
				<RangePicker />
			</div >
		)
	}
}
