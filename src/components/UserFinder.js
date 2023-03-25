import React, { Component } from 'react'
import Users from './Users'
import classes from './UserFinder.module.css'
import UsersContext from '../store/users-context'
import ErrorBoundaries from '../components/ErrorBoundaries'


class UserFinder extends Component {

    static contextType = UsersContext;

    constructor() {
        super()
        this.state = {
            filteredUsers: [],
            searchTerm: '',
        }
    }

    componentDidMount() {
        // Send http request...
        this.setState({ filteredUsers: this.context.users });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchTerm !== this.state.searchTerm) {
            this.setState(
                { filteredUsers: this.context.users.filter((user) => user.name.includes(this.state.searchTerm)) }
            )
        }
    }

    searchChangeHandler(event) {
        this.setState({ searchTerm: event.target.value })
    }

    render() {
        return (
            <div className={classes.finder}>
                <input type="search" onChange={this.searchChangeHandler.bind(this)} />
                <ErrorBoundaries>
                    <Users users={this.state.filteredUsers} />
                </ErrorBoundaries>
            </div>
        )
    }
}


// const UserFinder = () => {

//     const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS)
//     const [searchTerm, setSearchTerm] = useState('')

//     useEffect(() => {
//         setFilteredUsers(
//             DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//         )
//     }, [searchTerm])

//     const searchChangeHandler = (event) => {
//         setSearchTerm(event.target.value)
//     }

//     return (
//         <div className={classes.finder}>
//             <input type="search" onChange={searchChangeHandler} />
//             <Users users={filteredUsers} />
//         </div>
//     )
// }

export default UserFinder
