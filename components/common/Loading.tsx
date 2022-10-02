import { BounceLoader } from "react-spinners";
import Logo from "./Logo";

const Loading = () => {
    return (
        <div className='grid grid-cols-1 gap-4 lg:col-span-2 mt-10'>
            <span className="flex items-center justify-center">
                <Logo />
                <p className="font-sans text-2xl whitespace-pre-line relative pl-2 font-bold">DBS</p>
            </span>
            <span className="flex items-center justify-center">
            </span>
            <span className="flex items-center justify-center">
                <p className="font-sans text-2xl whitespace-pre-line relative font-semibold">LiveFresh</p>
            </span>
            <span className="flex items-center justify-center">
                <div className="absolute top-1/2">
                    <BounceLoader color="#ff0000" />
                </div>
            </span>
        </div>
    );
};

export default Loading;