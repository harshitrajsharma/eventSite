import Button from "./utils/Button";

export default function Hero(){
    return(
        <div className=" flex flex-col justify-center bg-lime-900 h-[80vh] gap-8 mx-auto px-8 lg:px-40 xl:px-48  text-white">
            <div className="text-center flex flex-col  gap-4 py-6">
                <p className="text-lime-500 ">GEVENT ORGANIZER</p>
                <h1 className="text-6xl font-extrabold tracking-wider">Get An Unforgettable Event Experience With us</h1>
                <p className=" px-32">Duis consectetur urna ac urna sollicitudin, in porta metus dignissim. Morbi malesuada nisl ac nibh laoreet, in ultrices est elementum. Suspendisse fringilla efficitur risus ac iaculis. Mauris neque enim.</p>
            </div>
            <div className="flex justify-center">
                <Button link="#" name="Our Services" />
                <Button link="#" name="Play Video" />
            </div>
        </div>
    )
}