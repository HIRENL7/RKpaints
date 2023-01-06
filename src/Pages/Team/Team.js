import React from "react";
import { Team_Img } from "../lib/Index";
import {
    teamCompClass,
    teamImgMainClass,
    teamImgClass,
    teamTextDivClass,
    teamPClass,
    teamHeaderDivImgClass,
    teamHeaderImgClass,
} from "../lib/classes";

const Team = () => {
    return (
        <div className={teamCompClass}>
            <div>
                <p className="text-3xl font-extrabold text-[#18256D] mb-5">
                    Our Professional Team
                </p>
            </div>
            <div className={teamHeaderDivImgClass}>
                <img
                    src="/Images/proteam.png"
                    alt=""
                    className={teamHeaderImgClass}
                />
            </div>
            <div className="grid grid-cols-3 items-center justify-center flex-wrap gap-5 mt-5">
                {Team_Img.map((item) => (
                    <TeamGroup item={item} />
                ))}
            </div>
        </div>
    );
};

export default Team;

function TeamGroup({ item }) {
    return (
        <>
            <div className={teamImgMainClass}>
                <div className="h-96 w-80">
                    <img className={teamImgClass} src={item.img} alt="" />
                </div>
                <div className={teamTextDivClass}>
                    <p className="text-lg font-bold text-blue-900">{item.title}</p>
                    <p className={teamPClass}>{item.para}</p>
                </div>
            </div>
        </>
    );
}