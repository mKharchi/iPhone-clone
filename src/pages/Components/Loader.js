"use client"

import { Html } from "@react-three/drei";
import dynamic from 'next/dynamic';

// Create a client-side only component for the loader
const LoaderComponent = () => {
    return (
        <Html>
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <div className="w-[10vw] h-[10vw] rounded-full">
                    Loading ...
                </div>
            </div>
        </Html>
    );
};

// Create a dynamic component that's only loaded on the client side
const Loader = dynamic(() => Promise.resolve(LoaderComponent), {
    ssr: false,
    loading: () => (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="w-[10vw] h-[10vw] rounded-full">
                Loading ...
            </div>
        </div>
    )
});

export default Loader;