import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

import duckAnimation from "../Assets/79952-successful.json";

const Application = () => {
    const anime = useRef(null);
    useEffect(() => {
        lottie.loadAnimation({
            container: anime.current,
            renderer: "svg",
            loop: false,
            autoplay: true,
            animationData: duckAnimation,
        });
        return () => lottie.stop();
    }, []);
    return <div>
        <h1 className="text-center text-4xl mt-20 font-bold text-green-600">Your have Applied Successfully.</h1>
        <div ref={anime}></div>;
    </div>
};

export default Application;