import React from 'react'
import ReactDOM from 'react-dom/client'

const Title = () => {
    return <h1>Hello Title 1</h1>
}

const Content = () => {
    return (
        <div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis aliquam nemo esse perferendis minus aliquid sequi? Sit
                id sed vitae modi dicta nulla, similique optio quo aliquid,
                exercitationem excepturi assumenda?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis aliquam nemo esse perferendis minus aliquid sequi? Sit
                id sed vitae modi dicta nulla, similique optio quo aliquid,
                exercitationem excepturi assumenda?
            </p>
        </div>
    )
}

const App = () => {
    return (
        <div>
            <Title />
            <Content />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
