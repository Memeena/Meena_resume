import imageURL from "../../assets/images/meena_pic_resume.jpg";
import githubIcon from "../../assets/images/github.svg";
import frontendMentorIcon from "../../assets/images/icon-frontend-mentor.svg";
import mobileIcon from "../../assets/images/mobile.svg";
export default function Header() {
  return (
    <div className=" bg-blue-300 py-6 px-4 flex flex-col md:flex-row gap-4 md:gap-10 md:items-center text-slate-800 ">
      <img src={imageURL} alt="myPic" className="h-40 w-40 rounded-full" />
      <div className="flex flex-col gap-2">
        <h1 className="text-5xl font-semibold tracking-wider">
          Meenakshi Kannappan
        </h1>
        <div className="flex flex-col">
          <div className="flex gap-5">
            <p className="font-bold text-m w-5 text-center">@</p>
            <p>win.meenakshi@gmail.com</p>
          </div>
          <div className="flex gap-5">
            <img src={githubIcon} alt="github-icon" className="h-5 w-5" />
            <a
              href="https://github.com/Memeena"
              className="underline underline-offset-2"
            >
              https://github.com/Memeena
            </a>
          </div>
          <div className="flex gap-5">
            <img
              src={frontendMentorIcon}
              alt="frontend-mentor-icon"
              className="h-5 w-5"
            />
            <a
              href="https://www.frontendmentor.io/profile/Memeena"
              className="underline underline-offset-2 text-ellipsis overflow-hidden"
            >
              https://www.frontendmentor.io/profile/Memeena
            </a>
          </div>
          <div className="flex gap-5">
            <img src={mobileIcon} alt="mobile-icon" className="h-5 w-5" />
            <p>9566131018</p>
          </div>
        </div>
      </div>
    </div>
  );
}
