import React from "react";
import Blurb from "./Blurb";


const Media = (summary:string,outlet:string, url:string) => {
    return (
        <div>
        <div className = "font-rnarrow text-18px">{summary}</div>
        <div className = "font-rlight text-16px mt-15px">{outlet}</div>
        <div className = "font-rblack mt-50px">READ ARTICLE</div>
        </div>
    )
}
const ContentMedia = () => {
  return (
    <div className= "pl-10% pr-10%   mt-20">
    <p className="font-rblack text-90px uppercase">MEDIA</p>
    <div className="h-5px w-100% bg-black"></div>
    <div className="mt-10 relative flex flex-row font-rlight justify-between">
        <p className=" w-20%	">
        {Media("To preserve the memory of the real events of that time, to spread truthful information among the digital community and in the world and to collect donations for the support of U...","New Your Times","dkddk")}
        </p>
        <p className=" w-20%	">
        {Media("To preserve the memory of the real events of that time, to spread truthful information among the digital community and in the world and to collect donations for the support of U...","New Your Times","dkddk")}
        </p>
        <p className=" w-20%	">
        {Media("To preserve the memory of the real events of that time, to spread truthful information among the digital community and in the world and to collect donations for the support of U...","New Your Times","dkddk")}
        </p>
        <p className=" w-20%	">
        {Media("To preserve the memory of the real events of that time, to spread truthful information among the digital community and in the world and to collect donations for the support of U...","New Your Times","dkddk")}
        </p>
      </div>
  </div>
  
  );
};

export default ContentMedia;
