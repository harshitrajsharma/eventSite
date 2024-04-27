import PricingCard from "./utils/PricingCard";

export default function Prices(){
    return(
        <div className=" bg-black text-white mx-auto px-8 lg:px-40 xl:px-48 flex flex-col gap-10 py-16">
            <div className="flex flex-col justify-center items-center gap-6">
                <p className="text-lime-500 ">PRICING PLAN</p>
                <h1 className="text-6xl font-extrabold tracking-wider">Choose Your Event Package</h1>
                <p className=" px-32 text-center">Cras porttitor urna eu metus efficitur, a tempus ligula vehicula. Donec ornare pharetra metus nec vehicula etiam mauris. Dolor interdum id vestibulum et pharetra ac libero. Etiam vestibulum in amet.</p>
            </div>
            <div className="grid grid-cols-4 gap-8 mt-6">
                <PricingCard title="Birthday Party" price="$149" opt1="5 Hours" opt2="Decoration" opt3="Entertainment" opt4="Catering" opt5="
Documentation" opt6="Up to 20 Persons"/>
                <PricingCard title="Wedding" price="$899" opt1="7 Hours" opt2="Decoration" opt3="Entertainment" opt4="Catering" opt5="
Documentation" opt6="Up to 20 Persons"/>
                <PricingCard title="Corporate Events" price="$749" opt1="7 Hours" opt2="Decoration" opt3="Entertainment" opt4="Catering" opt5="
Documentation" opt6="Up to 20 Persons"/>
                <PricingCard title="Festival" price="$1499" opt1="10 Hours" opt2="Decoration" opt3="Entertainment" opt4="Catering" opt5="
Documentation" opt6="Up to 20 Persons"/>
            </div>
        </div>
    )
}