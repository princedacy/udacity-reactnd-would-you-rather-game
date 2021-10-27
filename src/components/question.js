import React, { Component } from 'react'
import { Card, Row, Col, Avatar, Image, Progress, Radio, Space, Badge, Button } from 'antd'
import { formatPoll } from '../utils/helpers'
import { connect } from 'react-redux'
import { handleVote } from '../actions/questions'
class Question extends Component {
    state = {
        answer: ''
    }
    onChange = (e) => {
        return this.setState({ answer: e.target.value });
    }
    onVote = (e) => {
        e.preventDefault();
        const { authedUser, question: { id: qid }, dispatch } = this.props
        const { answer } = this.state
        this.setState({ answer: '' })
        dispatch(handleVote({ authedUser, qid, answer }))
    }
    render() {
        const { isOptionOne, question, pollAnswered } = this.props
        const optionOneVotes = question && question.optionOne.votes.length
        const optionTwoVotes = question && question.optionTwo.votes.length
        const totalVotes = question && optionOneVotes + optionTwoVotes
        const optionOnePercent = question && Math.round((optionOneVotes * 100) / totalVotes);
        const optionTwoPercent = question && Math.round((optionTwoVotes * 100) / totalVotes)

        return pollAnswered ? (
            <div className='container'>
                <div className='col-md-7 mx-auto mt-5'>
                    <Card title={question.name + `  asks:`} className='mb-4'>
                        <Row>
                            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} className='d-flex align-items-center'>
                                <Avatar src={<Image src={question.avatarURL} style={{ width: 150 }} />} style={{ width: 150, height: 150 }} />
                            </Col>
                            <hr style={{ height: `350px`, background: `#ededed`, width: `1px` }} />
                            <Col xs={{ span: 6, offset: 1 }} lg={{ span: 12, offset: 2 }}>
                                <h4 className='font-weight-bolder text-center'>Results</h4>
                                <Card title={`Would you rather ` + question.optionOne.text} className='mb-4' extra={isOptionOne && <Badge.Ribbon text="You voted" style={{ right: '-32px' }}></Badge.Ribbon>}>
                                    <Progress percent={optionOnePercent} status="active" />
                                    <p className='font-weight-bolder text-center'>{optionOneVotes} out of {totalVotes} votes</p>
                                </Card>
                                <Card title={`Would you rather ` + question.optionTwo.text} extra={!isOptionOne && <Badge.Ribbon text="You voted" style={{ right: '-32px' }}></Badge.Ribbon>}>
                                    <Progress percent={optionTwoPercent} status="active" />
                                    <p className='font-weight-bolder text-center'>{optionTwoVotes} out of {totalVotes} votes</p>
                                </Card>
                            </Col>
                        </Row>
                    </Card>
                </div>
            </div>
        ) : (
            <div className='container'>
                <div className='col-md-7 mx-auto mt-5'>
                    <Card title={question.name + `  asks:`} className='mb-4'>
                        <Row>
                            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} className='d-flex align-items-center'>
                                <Avatar src={<Image src={question.avatarURL} style={{ width: 150 }} />} style={{ width: 150, height: 150 }} />
                            </Col>
                            <hr style={{ height: `150px`, background: `#ededed`, width: `1px` }} />
                            <Col xs={{ span: 6, offset: 1 }} lg={{ span: 12, offset: 2 }}>
                                <h4 className='font-weight-bolder text-center'>Would you rather?</h4>
                                <Radio.Group onChange={this.onChange}>
                                    <Space direction="vertical">
                                        <Radio value='optionOne'>{question.optionOne.text}</Radio>
                                        <Radio value='optionTwo'>{question.optionTwo.text}</Radio>
                                    </Space>
                                </Radio.Group>
                                <Button type='primary'  style={{ width: `100%` }} onClick={this.onVote} className='mt-5'>Vote</Button>
                            </Col>
                        </Row>
                    </Card>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ questions, users, authedUser }, props) {
    const { question_id: id } = props.match.params;
    const question = questions[id];
    const user = users[authedUser]
    return {
        pollAnswered: user && question && Object.keys(user.answers).includes(question.id),
        question: user && question && formatPoll(question, users[question.author]),
        isOptionOne: user && user.answers[id] === 'optionOne',
        authedUser
    }
}

export default connect(mapStateToProps)(Question)