type TitleProps = {
    title: string
}

export const Title = (props: TitleProps) => {
    return <h1>Hello {props.title}</h1>
}
