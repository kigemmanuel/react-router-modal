import React from 'react'
import { useRouter } from './components/RouterProvider'
import './App.css'

const styles = {
    div: {
        margin: 10,
        padding: 30,
        textAlign: 'center',
        backgroundColor: 'blue',
    },
    h1: {
        color: 'white',
    },
}

function App({ name }) {
    const { setRouterPath } = useRouter() // set the route path to redirect to

    return (
        <div>
            <div style={styles.div}>
                <h1 style={styles.h1} className='text-3xl font-bold underline'>Hello {name}, Welcome to React Router Modal Site</h1>
                <br />
                <h2 style={{ color: 'wheat' }}>Nice website</h2>
            </div>

            <br />
            <button onClick={() => setRouterPath('/login?name=dave')}>Go to Login Page</button>
        </div>
    )
}

export default App