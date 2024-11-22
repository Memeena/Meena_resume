const skillSet = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "Tailwind",
  "SASS",
  "TypeScript",
  "BootStrap",
  "Styled components",
  "CSS Modules",
  "GIT",
  "Supabase",
  "React Query",
  "DB2",
  "COBOL",
  "JCL",
  "SQL",
  "TESTOR",
  "CA7 Scheduler",
];
export default function Skills() {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl font-bold text-slate-800">Skills</h1>
      <ul className="flex flex-wrap gap-2">
        {skillSet.map((item) => (
          <li className="px-2 py-1 border-2 rounded-lg border-blue-400 shadow-md">
            {item}
          </li>
        ))}
      </ul>
      <div>
        <h1 className="text-xl font-bold text-slate-800">Education</h1>
        <div className="mt-2 flex flex-col gap-2 divide-y-2">
          <p className="flex flex-col">
            Bachelors in Engineering(CSE) Government College of
            Technology(2007),Coimbatore.
            <span className="font-bold text-l text-blue-400">8.37 CGPA</span>
          </p>
          <p>
            Class 12th - Anna Adharsh Mat.Hr.Sec School,Chennai.
            <span className="font-bold text-l text-blue-400">94.5%</span>
          </p>
          <p>
            Class 10th - S.B.O.A Mat.Hr.Sec School,Madurai.
            <span className="font-bold text-l text-blue-400">91.9%</span>
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-xl font-bold text-slate-800">Accomplishments</h1>
        <ul className="flex flex-col gap-2 list-disc mt-2 ">
          <li>
            <span className="font-bold text-blue-400">On the Spot Award</span>{" "}
            for successfully completing a complex functional specification in
            the project from requirement phase till implementation phase in
            Target - EPR Team.
          </li>
          <li>
            Received{" "}
            <span className="font-bold text-blue-400">
              Bravo Award, <span className="text-blue-800">3 </span> times{" "}
            </span>
            for my work in Target - IMN team.
          </li>
          <li>IBM Certified DB2 developer v8.1.</li>
          <li>
            Received many awards and cash prizes in inter college paper
            presentaion during college and talent exams in school.
          </li>
        </ul>
      </div>
    </div>
  );
}
