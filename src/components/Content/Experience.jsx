export default function Experience() {
  return (
    <div>
      <h1 className="text-xl font-bold text-slate-900">Work Experience</h1>
      <ul className="mt-2 grid grid-rows-[min-content] lg:divide-x-2 lg:grid-cols-4 ">
        <li className="flex flex-col">
          <p className="font-bold">Module Lead & Programmer</p>
          <p className="text-sm italic">August 2009 to March 2010</p>
          <p className="text-sm py-2">
            Target Corporation - IMN - Item Management Design and Development of
            Whole Retail Business System running around Item which is the
            Building block of Retail Industry for Target Corporation, USA.
          </p>
        </li>
        <li className="flex flex-col lg:px-2">
          <p className="font-bold">Module Lead & Programmer</p>
          <p className="text-sm italic">November 2008 to July 2009</p>
          <p className="text-sm py-2">
            Target Corporation - EPR – Pharmacy Pricing for Target Corporation,
            Minneapolis, USA.
          </p>
        </li>
        <li className="flex flex-col lg:px-2">
          <p className="font-bold">Programmer</p>
          <p className="text-sm italic">September 2007 to October 2008</p>
          <p className="text-sm py-2">
            Target Corporation - GTO - Global Tax Optimization for Target
            Corporation, Minneapolis, USA.
          </p>
        </li>
        <li className="flex flex-col lg:px-2">
          <p className="font-bold">Trainee</p>
          <p className="text-sm italic">June 2007 to September 2007</p>
          <p className="text-sm py-2">
            Campus Recruited training at Trivandrum.
          </p>
        </li>
      </ul>
    </div>
  );
}
