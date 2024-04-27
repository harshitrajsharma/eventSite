
import Button from "./Button";

export default function PricingCard(props) {
    return (
        <div className="bg-black text-white p-8 border-2 border-white hover:border-lime-500 flex flex-col justify-center items-center gap-8 hover:relative hover:bottom-10 transition-all ease-in-out duration-300">
            <div className="text-center flex flex-col gap-4">
                <h1 className=" text-xl font-bold">{props.title}</h1>
                <p>Start From</p>
            </div>
            <div>
                <h1 className="text-5xl font-bold text-lime-500">{props.price}</h1>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="flex">
                    <img class="w-6 mr-2 transform -rotate-45" src="./arrow.svg" alt="" />
                    <span>{props.opt1}</span>
                </div>
                <div className="flex">
                    <img class="w-6 mr-2 transform -rotate-45" src="./arrow.svg" alt="" />
                    <span>{props.opt2}</span>
                </div>
                <div className="flex">
                    <img class="w-6 mr-2 transform -rotate-45" src="./arrow.svg" alt="" />
                    <span>{props.opt3}</span>
                </div>
                <div className="flex">
                    <img class="w-6 mr-2 transform -rotate-45" src="./arrow.svg" alt="" />
                    <span>{props.opt4}</span>
                </div>
                <div className="flex">
                    <img class="w-6 mr-2 transform -rotate-45" src="./arrow.svg" alt="" />
                    <span>{props.opt5}</span>
                </div>
                <div className="flex">
                    <img class="w-6 mr-2 transform -rotate-45" src="./arrow.svg" alt="" />
                    <span>{props.opt6}</span>
                </div>
            </div>
            <div>
                <Button link="#" name="Get Started" />
            </div>
        </div>
    )
}