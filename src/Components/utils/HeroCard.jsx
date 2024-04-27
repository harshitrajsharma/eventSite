export default function HeroCard(props){
    return(
        <div className="border-2 border-white flex flex-col justify-center items-center gap-4 text-white p-8">
            <div className=" w-16 h-16">
                <img src={props.image} alt="icon" />
            </div>
            <div className="text-center">
                <h1 className="text-xl font-bold">{props.title}</h1>
                <p>{props.content}</p>
            </div>
        </div>
    )
}