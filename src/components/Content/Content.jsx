import Skills from "../Skills/Skills";
import Certifications from "./Certifications";
import Experience from "./Experience";
import Summary from "./Summary";

export default function Content() {
  return (
    <div className="grid grid-rows-[min-content_1fr] gap-4 lg:grid-cols-[350px_1fr] lg:cols-gap-10 px-6 py-4">
      <div className="px-2">
        <Skills />
      </div>
      <div>
        <div className="flex flex-col gap-3">
          <Summary />
          <Certifications />
          <Experience />
        </div>
      </div>
    </div>
  );
}
