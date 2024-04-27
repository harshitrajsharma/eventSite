export default function ServiceCard(props) {
    return (
        <div className="bg-black text-white p-6 border-2 border-white hover:border-lime-500 flex flex-col gap-6">
            <div>
                <img className=" w-16 hover:scale-105 transition-all" src={props.image} alt="icon" />
            </div>
            <div>
                <h1 className=" text-xl font-bold">{props.title}</h1>
                <p>{props.content}</p>
            </div>
            <div>
                <a className=" hover:text-lime-500 flex hover:scale-95 transition-all" href="#">Read more <img class="w-6 mr-2 transform -rotate-45" src="./arrow.svg" alt="" /></a>
            </div>
        </div>
    )
}