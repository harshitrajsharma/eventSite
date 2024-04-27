import Button from "./utils/Button";
import HeroCard from "./utils/HeroCard";

export default function About() {
    return (
        <div className=" mx-auto px-8 lg:px-40 xl:px-48 bg-black gap-4 py-32 border-t-2 border-white">
            <div>
                <div className="flex gap-28 relative -top-1/4">
                    <HeroCard image="./team.svg" title="Friendly Team" content="Aenean pharetra erat in nisl blandit hendrerit." />
                    <HeroCard image="./shop.svg" title="The Best Venues" content="Aenean pharetra erat in nisl blandit hendrerit." />
                    <HeroCard image="./event.svg" title="Awesome Event" content="Aenean pharetra erat in nisl blandit hendrerit." />
                </div>
            </div>

            <div className="flex">
                <div className="w-1/2 p-6 flex flex-col gap-6">
                    <div className=" flex flex-col  text-white gap-4">
                        <p className="text-lime-500">ABOUT GEVENT</p>
                        <h1 className="text-6xl font-extrabold tracking-wider">Make Your Event Idea Come True</h1>
                        <p>Cras porttitor urna eu metus efficitur, a tempus ligula vehicula. Donec ornare pharetra metus nec vehicula. Etiam mauris dolor, interdum id vestibulum et pharetra ac libero. Etiam vestibulum in mi sit amet.</p>
                    </div>
                    <div class="grid grid-cols-2 text-white gap-2">
                        <a href="#" class="flex items-center hover:scale-105 transition-all">
                            <img class="w-6 mr-2 transform -rotate-45" src="./arrow.svg" alt="" />
                            <span>Provide Best Quality Events</span>
                        </a>
                        <a href="#" class="flex items-center hover:scale-105 transition-all">
                            <img class="w-6 mr-2 transform -rotate-45" src="./arrow.svg" alt="" />
                            <span>Satisfaction Guarantee</span>
                        </a>
                        <a href="#" class="flex items-center hover:scale-105 transition-all">
                            <img class="w-6 mr-2 transform -rotate-45" src="./arrow.svg" alt="" />
                            <span>Satisfaction Guarantee</span>
                        </a>
                        <a href="#" class="flex items-center hover:scale-105 transition-all">
                            <img class="w-6 mr-2 transform -rotate-45" src="./arrow.svg" alt="" />
                            <span>Experienced Team</span>
                        </a>
                        <a href="#" class="flex items-center hover:scale-105 transition-all">
                            <img class="w-6 mr-2 transform -rotate-45" src="./arrow.svg" alt="" />
                            <span>Experienced Team</span>
                        </a>
                        <a href="#" class="flex items-center hover:scale-105 transition-all">
                            <img class="w-6 mr-2 transform -rotate-45" src="./arrow.svg" alt="" />
                            <span>Provide Best Quality Events</span>
                        </a>
                        
                    </div>

                    <div>
                        <Button name="More About us" />
                    </div>
                </div>
                <div className="w-1/2 h-[65vh] flex justify-center ">
                    <div className="w-[80%] border-2 flex justify-center items-center border-lime-500">
                        <img className="relative top-6 right-6" src="./about.jpg" alt="image" />
                    </div>

                </div>
            </div>
        </div>
    )
}