import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { Card, Row, Input, Button } from 'antd'
import { handleQuestion } from '../actions/questions'
class NewQuestion extends Component {
    state = {
        optionOneText: '',
        optionTwoText: ''
    }
    handleOptionOneInput = (e) => this.setState({ optionOneText: e.target.value })
    handleOptionTwoInput = (e) => this.setState({ optionTwoText: e.target.value })
    submitQuestion = (e) => {
        e.preventDefault()
        const { optionOneText, optionTwoText } = this.state
        this.props.dispatch(handleQuestion({ optionOneText, optionTwoText }))
        return this.props.history.push('/')
    }
    render() {
        const { optionOneText, optionTwoText } = this.state
        return (
            <div className='container'>
                <div className='col-md-7 mx-auto mt-5'>
                    <Card title="Create New Question" className='font-weight-bolder'>
                        <h6>Complete the question:</h6>
                        <Row>
                            <h5 className='font-weight-bolder'>Would you rather...</h5>
                            <Input type='text' placeholder='Enter option one text here' value={optionOneText} onChange={this.handleOptionOneInput} />
                            <p className='text-center mt-2 mb-2' style={{ width: `100%` }}>OR</p>
                            <Input type='text' placeholder='Enter option two text here' value={optionTwoText} onChange={this.handleOptionTwoInput} />
                            <Button type='primary' className='mt-4' style={{ width: `100%` }} onClick={this.submitQuestion}>Submit</Button>
                        </Row>
                    </Card>
                </div>
            </div>
        )
    }
}

export default withRouter(connect()(NewQuestion))