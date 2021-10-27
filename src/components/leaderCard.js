import React from "react";
import { connect } from "react-redux";
import { Card, Row, Col, Avatar, Image } from "antd";
function LeaderCard(props) {
    const { user, answersCounter, questionsCounter } = props

    return (
        <Card className='mb-4'>
            <Row>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <span className='font-weight-bolder'>{user.name}</span>
                    <Avatar src={<Image src={user.avatarURL} style={{ width: 100 }} />} style={{ width: 100, height: 100 }} />
                </Col>

                <hr style={{ height: `80px`, background: `#ededed`, width: `1px` }} />
                <Col xs={{ span: 6, offset: 1 }} lg={{ span: 12, offset: 2 }} className='d-flex flex-column justify-content-center'>
                    <p className='font-weight-normal text-center'>
                        Answered {answersCounter} questions
                    </p>
                    <p className='font-weight-normal text-center'>
                        Created {questionsCounter} questions
                    </p>

                </Col>
            </Row>
        </Card>
    )
}

function mapStateToProps({ users }, { id, index }) {
    const user = users[id]

    return {
        user,
        index,
        questionsCounter: user && user.questions.length,
        answersCounter: user && Object.keys(user.answers).length
    }
}

export default connect(mapStateToProps)(LeaderCard)