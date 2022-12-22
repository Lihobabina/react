import React from 'react'
import ReactDOM from 'react-dom/client'

type Paragraph = {
    p1: string
    p2: string
}

const Content = (props: Paragraph) => {
    return (
        <React.Fragment>
            <p>{props.p1}</p>
            <p>{props.p2}</p>
        </React.Fragment>
    )
}

const App = () => {
    return (
        <>
            <Content p1="lorem1" p2="lorem2" />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
