import { Row } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
export const WrapperHeader = styled(Row)`
    background-color: rgb(51 51 51);
    align-items: center;
    gap: 16px;
    flex-wrap: nowrap;
    width: 1270px;
    padding: 10px 0;
`

export const WrapperTextHeader = styled(Link)`
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    text-align: left;
    &:hover {
        font-size: 18px;
        color: #fff;
    }
`

export const WrapperHeaderAccout = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    gap: 10px;
    max-width: 200px;
`

export const WrapperTextHeaderSmall = styled.span`
    font-size: 12px;
    color: #fff;
    white-space: nowrap;
`

export const WrapperContentPopup = styled.p`
    cursor: pointer;
    &:hover {
        color: rgb(26, 148, 255);
    }
`

// export const WrapperContentPopup1 = styled.p`
//     cursor: pointer;
//     &:hover{
//         background: red;
//         color: #fff;
//     }
// `