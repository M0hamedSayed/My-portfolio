import Social from "../../../Components/Shared/SocialIcons/Social";
import Typical from "react-typical";
import './MyInfo.css';
import React from "react";

const MyInfo = () => {
    const TypingAnimation = React.memo(() => {
        return <Typical
            loop={Infinity}
            steps={[
                'Hello 👋', 1000,
                'I am ', 1000,
                "MEAN Stack Dev 💻",
                2000,
                "MERN Stack Dev 💻",
                2000,
                "React Developer 🧲",
                2000,
                "Angular Developer ♥",
                2000,
                "NodeJS Developer 👨‍💻",
                2000,
            ]}
        />
    }, (props, prevProp) => true);
    return (
        <div className="myInfo text-center">
            <Social />
            <div className="myInfo-name text-white">
                <span className="primary-text">
                    Hello, I'M <span className="txt-primary">Mohamed Sayed</span>
                </span>
            </div>
            <div className="myInfo-role text-white ">
                <h1 className="p-3">
                    <Typical
                        loop={Infinity}
                        steps={[
                            'Hello 👋', 1000,
                            'I am ', 1000,
                            "MEAN Stack Dev 💻",
                            2000,
                            "MERN Stack Dev 💻",
                            2000,
                            "React Developer 🧲",
                            2000,
                            "Angular Developer ♥",
                            2000,
                            "NodeJS Developer 👨‍💻",
                            2000,
                        ]}
                    />

                </h1>
            </div>
            <div className="myInfo-tagline text-white-50">
                <p>
                    Knack of building applications with front and back end operations.
                </p>
            </div>
            <div className="myInfo-btns">

                <a href="assets/profile.pdf" download="Mohamed Sayed.pdf" className="btn highlighted-btn">
                    Get Resume
                </a>
            </div>
        </div>
    );
}
export default React.memo(MyInfo);