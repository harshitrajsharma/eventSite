import ServiceCard from "./utils/ServiceCard"
export default function Services(){
    return(
        <div className=" bg-black text-white mx-auto px-8 lg:px-40 xl:px-48 flex flex-col gap-10 py-10">
            <div className="flex flex-col justify-center items-center gap-6">
                <p className="text-lime-500 ">SERVICES</p>
                <h1 className="text-6xl font-extrabold tracking-wider">Event Service We Profide</h1>
                <p className=" px-32 text-center">Cras porttitor urna eu metus efficitur, a tempus ligula vehicula. Donec ornare pharetra metus nec vehicula etiam mauris. Dolor interdum id vestibulum et pharetra ac libero. Etiam vestibulum in amet.</p>
            </div>
            <div className="grid grid-cols-3 gap-8">
                <ServiceCard image="./cake.svg" title="Birthday Party" content="Nunc lacus odio, hendrerit id hendrerit ut, pretium eget nunc. Mauris dignissim libero elementum egestas dolor." />
                <ServiceCard image="./building.svg" title="Corporate Event" content="Nunc lacus odio, hendrerit id hendrerit ut, pretium eget nunc. Mauris dignissim libero elementum egestas dolor." />
                <ServiceCard image="./rings.svg" title="Wedding" content="Nunc lacus odio, hendrerit id hendrerit ut, pretium eget nunc. Mauris dignissim libero elementum egestas dolor." />
                <ServiceCard image="./cheers.svg" title="Anniversaries" content="Nunc lacus odio, hendrerit id hendrerit ut, pretium eget nunc. Mauris dignissim libero elementum egestas dolor." />
                <ServiceCard image="./people.svg" title="Private Party" content="Nunc lacus odio, hendrerit id hendrerit ut, pretium eget nunc. Mauris dignissim libero elementum egestas dolor." />
                <ServiceCard image="./eye.svg" title="Masquerade Party" content="Nunc lacus odio, hendrerit id hendrerit ut, pretium eget nunc. Mauris dignissim libero elementum egestas dolor." />
            </div>
        </div>
    )
}