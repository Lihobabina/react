import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
    return (
        <div>
            <h1>Hello React 2</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis aliquam autem enim beatae nulla est quod
                dignissimos qui deserunt eaque, voluptatem recusandae blanditiis
                assumenda nesciunt cumque sunt. Soluta, earum a.
            </p>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
