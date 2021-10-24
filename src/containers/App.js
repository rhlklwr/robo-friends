import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';


class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: [],
            searchField: '',
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                this.setState({ robots: users })
            })
    }
    onSearchChange = (event) =>{
        this.setState({ searchField: event.target.value });
    }
    render(){
        const filterRobots = this.state.robots.filter(
            robot =>{
                return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        });
        return(
            <div className='tc'>
                <h1 className='f2'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    < CardList robots={filterRobots}/>
                </Scroll>
            </div>
        );
    }
    
}

export default App;