import React from 'react'
import { connect } from 'react-redux';
import { Card, Avatar, Image, Row, Col, Button } from 'antd'
import { formatPoll } from '../utils/helpers'

function Poll(props) {
    const { question } = props;
    return (
        <Card title={question.name + `  asks:`} className='mb-4'>
            <Row>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <Avatar src={<Image src={question.avatarURL} style={{ width: 150 }} />} style={{ width: 150, height: 150 }} />
                </Col>
                <hr style={{ height: `150px`, background: `gray`, width: `1px` }} />
                <Col xs={{ span: 6, offset: 1 }} lg={{ span: 12, offset: 2 }}>
                    <h4 className='font-weight-bolder text-center'>Would you rather?</h4>
                    <p className='font-weight-normal text-center'>
                        {question.optionOne.text}
                    </p>
                    <p className='font-weight-bolder text-center'>OR</p>
                    <p className='font-weight-normal text-center'>
                        {question.optionTwo.text}
                    </p>
                    <Button type="primary" className='d-flex justify-content-center' style={{ width: `100%` }}>View poll</Button>
                </Col>
            </Row>

        </Card>
    )
}

const mapStateToProps = ({ questions, users }, { id }) => {
    const question = questions[id];
    return {
        question: formatPoll(question, users[question.author])
    }
}

export default connect(mapStateToProps)(Poll)