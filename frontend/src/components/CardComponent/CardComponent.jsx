import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import React from 'react';
import { StarFilled } from '@ant-design/icons'
import iphone15 from '../../assets/image/iphone15.jpg'
import { StyleNameProduct, WrapperDiscountText, WrapperPriceText, WrapperReportText, WrapperStyleTextSell } from './style';

const CardComponent = (props) => {
    const { countInStock, description, image, name, price, rating, type, discount, selled } = props
    return (
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={iphone15} />}>
            <StyleNameProduct>{name}</StyleNameProduct>

            <WrapperReportText>
                <span style={{ marginRight: '4px' }}>
                    <span>{rating} </span> <StarFilled style={{ fontSize: '12px', color: 'rgb(253, 216, 54)' }} />
                </span>
                <WrapperStyleTextSell> | Da ban {selled || 1000}+</WrapperStyleTextSell>
            </WrapperReportText>
            <WrapperPriceText>
                <span style={{ marginRight: '8px' }}>{price} VND</span>
                <WrapperDiscountText>
                    {discount || 5} %
                </WrapperDiscountText>
            </WrapperPriceText>
        </Card>
    );
};

export default CardComponent;