import React from "react";
import { Result } from "antd";
import { Link } from "react-router-dom";
function Notfound() {
    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            className='d-flex justify-content-center flex-column align-items-center'
            extra={<Link to={`/`} className='d-flex justify-content-center ant-btn ant-btn-primary' style={{ width: `100px` }}>Back Home</Link>}
        />
    )

}
export default Notfound;