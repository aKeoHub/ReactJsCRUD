import React, {useState} from 'react';
import './App.css';
import Axios from 'axios';


function App() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userList, setUserList] = useState([]);


    const getUsers = () => {
        Axios.get('http://localhost:3001/users', {}).then((response) => {
            setUserList(response.data)
        });
    };

    const register = () => {
        Axios.post('http://localhost:3001/register', {
            username: username,
            password: password,
        }).then(() => {
            console.log("Success");
        });
    };

    return <div className="App">

        <div className="registration">
            <h1>Registration</h1>
            <label>Username:</label>
            <input type="text" onChange={(e) => {
                setUsername(e.target.value);
            }}
            />
            <label>Password:</label>
            <input type="text" onChange={(e) => {
                setPassword(e.target.value);
            }}
            />
            <button onClick={register}>Register</button>
        </div>
        ---------------------------------------------------------------------------------------------------------

        <div className="users">
            <button onClick={getUsers}>Show Users</button>

            {userList.map((val, key) => {
                return <div key={key} className="user">
                    <h3>Username: {val.userName + ' Password: ' + val.password}</h3>
                </div>
            })}
        </div>
    </div>

}

export default App;
