import { useState } from 'react';

const users = [
    { name: 'Sarah', age: 20 },
    { name: 'Alex', age: 20 },
    { name: 'John', age: 20 },
    { name: 'Steve', age: 20 },
]

const UserSearch: React.FC = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState<{name: string, age: number | undefined}>()

    const onClick = () => {
        const foundUser = users.find(user => {
            return user.name === name;
        })

        setUser(foundUser)
    }

    return (
        <div>
            User Search
            <input value={name} onChange={e => setName(e.target.value)} />
            <br />
            <br />
            <button onClick={onClick}>Find a User !</button>
            <br />
            <div>
                { user && user.name}
                { user && user.age}
                {/* // 1-> user && user.name || 2-> user?.name */}
            </div>
        </div>
    )
}

export default UserSearch;