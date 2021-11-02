import React from 'react'
import { connect } from 'react-redux';
import { Card, Avatar, Image, Row, Col } from 'antd'
import { formatPoll } from '../utils/helpers'
import { Link } from 'react-router-dom';


function Poll(props) {
    
    const { question } = props;
    return (
        <Card title={question.name + `  asks:`} className='mb-4'>
            <Row>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <Avatar src={<Image src={question.avatarURL} style={{ width: 150 }} />} style={{ width: 150, height: 150 }} />
                </Col>
                <hr style={{ height: `150px`, background: `#ededed`, width: `1px` }} />
                <Col xs={{ span: 6, offset: 1 }} lg={{ span: 12, offset: 2 }}>
                    <h4 className='font-weight-bolder text-center'>Would you rather?</h4>
                    <p className='font-weight-normal text-center'>
                        1. {question.optionOne.text}
                    </p>
                    <p className='font-weight-bolder text-center'>OR</p>
                    <p className='font-weight-normal text-center'>
                        2. {question.optionTwo.text}
                    </p>
                    <Link to={`/questions/${question.id}`} className='d-flex justify-content-center ant-btn ant-btn-primary' style={{ width: `100%` }}>View poll details</Link>
                </Col>
            </Row>

        </Card>
    )
}

function mapStateToProps ({ questions, users }, { id }) {
    const question = questions[id];
    return {
        question: formatPoll(question, users[question.author])
    }
}

export default connect(mapStateToProps)(Poll)