import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Tabs } from 'antd';
import Poll from '../components/poll';
class Home extends Component {

    render() {
        const { TabPane } = Tabs;
        const { answered, unanswered } = this.props
        return (
            <div className='container'>
                <div className='col-md-7 mx-auto mt-5'>
                    <Tabs defaultActiveKey="1" centered>
                        <TabPane tab="Unanswered" key="1">
                            {unanswered && unanswered.length !== 0 ? (unanswered.map((id) => <Poll key={id} id={id} />)) : (<h3>Nothing to show</h3>)}
                        </TabPane>
                        <TabPane tab="Answered" key="2">
                            { answered && answered.map((id)=><Poll key={id} id={id}/>)}
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        )
    }
}

function mapStateToProps ({ questions, users, authedUser }) {
    const user = users[authedUser];
    return {
        answered: user ? Object.keys(questions)
            .filter((question) => Object.keys(user.answers).includes(question))
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp) : null,
        unanswered: user ? Object.keys(questions)
            .filter((question) => !Object.keys(user.answers).includes(question))
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp) : null
    }
}
export default connect(mapStateToProps)(Home)