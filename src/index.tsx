import React from 'react'
import ReactDOM from 'react-dom/client'

const Title = () => {
    return <h1>Hello Title Fragment</h1>
}

const Content = () => {
    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}

const App = () => {
    return (
        <>
            <Title />
            <Content />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
