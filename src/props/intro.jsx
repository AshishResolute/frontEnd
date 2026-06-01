export const PropsApp = ()=>{
    return (
        <>
        <User name="Ash" age={10} imgSrc="https://in.portal-pokemon.com/play/resources/pokedex/img/pm/aae700aa7bb29fae4a30b77c495b0b66406d74d6.png"/>
        </>
    )
}

const User=(props)=>{
    return (<>
    <img src={props.imgSrc} alt="Riolu Image" width={200} />
    <p>Name:{props.name}</p>
    <p>Age:{props.age}</p>
    </>)
}