import CardList from "./components/card-list/card-list.component";
import './App.css';
import SearchBox from "./components/search-box/searchbox.component";

import React, {useEffect, useState} from 'react';

const App = () => {

    const [searchField, setSearchField] = useState('');
    const [monsters, setMonsters] = useState([]);
    const [filteredMonsters, setFilteredMonsters] = useState(monsters);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) =>
                setMonsters(users)
            );
    }, []);

    useEffect(() => {
        const newFilteredMonsters = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchField);
        });
        setFilteredMonsters(newFilteredMonsters)
    }, [monsters, searchField])


    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
    }

    return (
        <div className="App">
            <h1 className='app-title'>Monsters Rolodex</h1>

            <SearchBox className='monsters-search-box'
                       value={searchField}
                       onChangeHandler={onSearchChange}
                       placeholder='search monster'/>
            <CardList monsters={filteredMonsters}/>
        </div>
    );
};


// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             monsters: [],
//             searchField: ''
//         }
//     }
//
//     componentDidMount() {
//
//     }
//
//     onSearchChange = (event) => {
//         const searchField = event.target.value.toLocaleLowerCase();
//
//         this.setState(() => {
//             return { searchField };
//         })
//     }
//
//     render() {
//
//         const { monsters, searchField } = this.state;
//         const { onSearchChange } = this;
//
//         const filteredMonsters = monsters.filter((monster) => {
//             return monster.name.toLocaleLowerCase().includes(searchField);
//         });
//
//         return (
//             <div className="App">
//                 <h1 className='app-title'>Monsters Rolodex</h1>
//
//                 <SearchBox className='monsters-search-box' onChangeHandler={onSearchChange} placeholder='search monster' />
//                 <CardList monsters={filteredMonsters} />
//             </div>
//         );
//     }
// }

export default App;
