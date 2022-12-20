import React from 'react'
import ReactDOM from 'react-dom/client'

// no jsx
// const title = React.createElement('h1', { id: 'title' }, 'Hello react')

// with jsx
// const title = <h1 id="title">Yo</h1>

// const content = (
//     <div>
//         <ul>
//             <li>Item 1</li>
//             <li>Item 2</li>
//         </ul>
//         <p>hello </p>
//     </div>
// )

function App() {
    return (
        <div>
            <h1>Hello React</h1>
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
