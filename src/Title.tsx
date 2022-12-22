type TitleProps = {
    title: string
}

const Title = (props: TitleProps) => {
    return <h1>Hello {props.title}</h1>
}

export default Title
