import { useState } from 'react'

import LeftAside from './components/LeftAside.jsx'
import Main from './components/Main.jsx'
import RightAside from './components/RightAside.jsx'

// The user that we're pretending is signed in
import user from './assets/data/user.js'

function App() {
    const [loggedInUser] = useState(user)


    return (
        <div className="container">

            <LeftAside loggedInUser={loggedInUser} />
            <Main loggedInUser={loggedInUser} />
            <RightAside />

        </div>
    )
}

export default App
