export default function Button(props) {
    return (
            <div className=" mt-4">
                <a href={props.link} className="border-2 text-center py-2 px-4 text-white hover:text-lime-500 border-lime-500">{props.name}</a>
            </div>
    )
}