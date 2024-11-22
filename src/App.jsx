import Content from "./components/Content/Content";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="flex flex-col text-slate-800">
      <Header />
      <Content />
      <div className="md:mx-8 h-2 bg-blue-900"></div>
      <p className="text-center">
        This page is developed by{" "}
        <span className="font-bold text-blue-500">myself </span>with{" "}
        <span className="font-bold text-blue-500">React, Tailwind CSS</span>
      </p>
    </div>
  );
}

export default App;
