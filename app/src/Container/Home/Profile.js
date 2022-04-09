import { useEffect } from 'react';

import Avatar from "./Avatar/Avatar";
import Wave from "./Footer/Wave";
import MyInfo from "./MyInfo/MyInfo"
import './Profile.css'
const Profile = () => {
    useEffect(() => {
        return () => {
            console.log("cleaned up");
        }

    }, [])
    return (
        // <section className="section">
        <header className="header-cover w-100 d-flex align-items-center mx-auto">
            <div className="header-container w-100 d-flex justify-content-evenly align-items-center flex-wrap-reverse">
                <MyInfo />
                <Avatar />
            </div>
            <Wave />
        </header>
        // </section>
    )
}
export default Profile;