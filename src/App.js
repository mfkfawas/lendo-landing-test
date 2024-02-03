import { useState } from "react";
import logo from "./assets/logo.svg";
import wallet from "./assets/wallet.svg";
import warning from "./assets/warning.svg";
import man from "./assets/man.svg";
import bell from "./assets/bell.svg";
import avatar from "./assets/avatar.svg";
import chart from "./assets/chart.svg";
import barChart from "./assets/barChart.svg";
import arrowDown from "./assets/arrowDown.svg";
import "./App.css";

function App() {
  const [isToggled, setIsToggled] = useState(true); // Tracks the toggle state
  const [accordianOneOpen, setAccordianOneOpen] = useState(false); // Tracks the toggle state
  const [accordianTwoOpen, setAccordianTwoOpen] = useState(false); // Tracks the toggle state
  const [accordianThreeOpen, setAccordianThreeOpen] = useState(false); // Tracks the toggle state

  const toggleSwitch = () => setIsToggled(!isToggled);

  return (
    <div className="flex h-screen">
      {/* sidebar */}
      <div className="w-[25%] min-h-screen border border-r-1 border-gray-300">
        <div className="px-12 flex flex-col justify-center">
          {/* logo box */}
          <div className="py-4 flex justify-center">
            <img src={logo} alt="" className="w-40" />
          </div>
          {/* balance box */}
          <div className="py-12 flex flex-col items-center gap-10">
            <div className="flex gap-2">
              <img src={wallet} alt="" srcset="" />
              <div className="">
                <p className="font-bold text-lg">62,500 SAR</p>
                <p className="text-xs">Account Balance</p>
              </div>
            </div>

            <div className="space-x-4">
              <button className="rounded-full bg-blue-500 text-white py-2 px-4 text-xs">
                Deposit
              </button>
              <button className="rounded-full py-2 px-4 border border-blue-500 text-xs">
                Withdraw
              </button>
            </div>

            <div className="flex gap-4 items-start">
              <img src={warning} alt="" />
              <span className="text-xs opacity-50 w-40">
                To withdraw more than 10,000 SAR you need to verify your banking
                account.
              </span>
            </div>

            <hr className="w-full" />

            <div className="space-y-8 w-full flex flex-col items-center font-bold">
              <img src={man} alt="man" className="w-52" />

              <div className="space-y-4 text-center">
                <h6>Why should you trust it?</h6>
                <p className="text-xs opacity-50 w-60">
                  Because of this and that. Anyway investing is very good
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* content area */}
      <div className="flex-1 flex flex-col">
        {/* header */}
        <div className="w-full py-8 px-12 flex items-center justify-between">
          {/* nav */}
          <nav>
            <ul className="flex gap-8 font-normal text-sm">
              <li>Overview</li>
              <li>Invest</li>
              <li>Auto Invest</li>
              <li>My Portfolio</li>
            </ul>
          </nav>

          <div className="flex gap-6">
            <span className="font-light opacity-50">En</span>
            <img src={bell} alt="" />
            <img src={avatar} alt="" />
          </div>
        </div>

        {/* main content */}
        <div className="flex-1 py-12 px-28 overflow-auto space-y-12">
          <div className="flex justify-between py-8">
            <h4 className="font-extrabold text-3xl">Auto Investment</h4>

            <div className="flex gap-4">
              <p className="text-sm opacity-55">Active</p>
              <div
                className="relative w-6 h-4 bg-green-500 rounded-full p-1 cursor-pointer"
                onClick={toggleSwitch}
              >
                <div
                  className={`absolute left-0 top-0 w-6 h-4 bg-white rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
                    isToggled ? "translate-x-4" : "translate-x-0"
                  }`}
                ></div>
              </div>
            </div>
          </div>

          <div className="p-8 border rounded-lg border-gray-300 flex">
            <div className="linear rounded-lg space-y-4 text-white">
              <h4 className="font-bold">Conservative</h4>

              <div>
                <p className="text-2xl font-[900]">10-14%</p>
                <p className="text-sm">Interest Rate</p>
              </div>
            </div>

            <div className="px-8 space-y-8 flex-1">
              <div className="flex gap-6 justify-around">
                <div>
                  <p className="font-bold text-green-500 text-xl">Active</p>
                  <p className="text-sm opacity-50">Status</p>
                </div>

                <div>
                  <p className="font-bold text-xl">1500 SAR</p>
                  <p className="text-sm opacity-50">Max. Investment</p>
                </div>

                <div>
                  <p className="font-bold text-xl">26</p>
                  <p className="text-sm opacity-50">Loans Funded</p>
                </div>
              </div>

              <div className="flex gap-6 justify-around items-center">
                <p className="text-sm opacity-50">
                  * Strategy started at 20th March 2021
                </p>

                <div className="space-x-4">
                  <button className="rounded-full bg-[#FF6769] text-white py-4 px-4 text-xs">
                    Deposit
                  </button>
                  <button className="rounded-full py-4 px-4 border border-[#FF6769] text-xs">
                    Withdraw
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-around">
            <div className="p-12 border rounded-lg border-gray-300 space-y-8">
              <h3 className="text-2xl font-bold">Invested</h3>
              <img src={chart} className="w-80" alt="chart" />
            </div>

            <div className="p-12 border rounded-lg border-gray-300 space-y-8">
              <h3 className="text-2xl font-bold">
                Excepted Risk Score <br /> Distribution
              </h3>
              <img src={barChart} className="w-80" alt="chart" />
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold">You Might Want to Know</h3>

            <div className="space-y-6">
              <div>
                <div
                  className="flex justify-between cursor-pointer"
                  onClick={() => setAccordianOneOpen(!accordianOneOpen)}
                >
                  <p>Why Should I trust this tool?</p>
                  <img src={arrowDown} alt="" />
                </div>

                {accordianOneOpen && (
                  <p className="mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br /> Vel aliquid id quae at aut sapiente?
                  </p>
                )}
              </div>

              <hr className="w-full" />

              <div>
                <div
                  className="flex justify-between cursor-pointer"
                  onClick={() => setAccordianTwoOpen(!accordianTwoOpen)}
                >
                  <p>Why Should I trust this tool?</p>
                  <img src={arrowDown} alt="" />
                </div>

                {accordianTwoOpen && (
                  <p className="mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br /> Vel aliquid id quae at aut sapiente?
                  </p>
                )}
              </div>

              <hr className="w-full" />

              <div>
                <div
                  className="flex justify-between cursor-pointer"
                  onClick={() => setAccordianThreeOpen(!accordianThreeOpen)}
                >
                  <p>Why Should I trust this tool?</p>
                  <img src={arrowDown} alt="" />
                </div>

                {accordianThreeOpen && (
                  <p className="mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br /> Vel aliquid id quae at aut sapiente?
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
