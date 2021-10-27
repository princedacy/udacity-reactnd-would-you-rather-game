import React from "react";
import { connect } from "react-redux";
import LeaderCard from '../components/leaderCard'
function LeaderBoard(props) {
    const { usersCounter } = props
    return (
        <div className='container'>
            <div className='col-md-7 mx-auto mt-5'>
                {usersCounter.map((user) => (
                    <LeaderCard key={user} id={user} />
                ))}
            </div>
        </div>
    )

}
function mapStateToProps({ users }) {
    return {
        usersCounter: users && Object.keys(users).sort((a, b) => users[b].questions.length + Object.keys(users[b].answers).length - (users[a].questions.length + Object.keys(users[a].answers).length)),
    }
}
export default connect(mapStateToProps)(LeaderBoard)
