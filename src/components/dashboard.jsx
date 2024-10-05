import CircleChart from "./CircleChart"
import BarCharts from "./BarCharts";
function Dashboard() {
   return (<>

      <h1 className="text-green-400 text-4xl">Cybersecurity Dashboard For Security Operations</h1>

      <div className="flex md:flex-nowrap flex-wrap">
         <div >
            <div className="flex w-96 h-52 p-4 gap-32">
               <div className="text-white text-lg">
                  <img className="w-14 h-14 rounded-full" src="https://www.kindpng.com/picc/m/76-763310_transparent-threat-icon-png-cyber-security-icon-png.png"></img><div className="text-white text-lg">Threats</div>
                  <div className="text-green-400 font-extrabold text-4xl mt-8">1,110</div>
               </div>
               <div>
                  <img className="w-14 h-14 rounded-full" src="https://img.freepik.com/premium-vector/average-dollar-sale-icon-vector-image-can-be-used-sales_120816-105281.jpg"></img><div className="text-white text-lg">Average Threats/Day</div>
                  <div className="text-green-400 font-extrabold text-4xl">1.88</div>
               </div>

            </div>

            <div className=" w-96 h-52 p-2 gap-32">
              <div className="text-white text-lg font-bold"> Threat Detection </div>
               <div className="flex">
                  <CircleChart data={6500} total={7500} color="red" />
                  <div>
                     <div className="text-white text-xl m-4 font-bold">Allowed Files 6500</div>
                     <div className="text-white text-xl m-4 font-bold">Blocked 1,000</div>
                  </div>
               </div>
            </div>
         </div>
         <div className="w-[100%] md:w-[50%] md:ml-52"><BarCharts/></div>
      </div>
      <div className="flex justify-center flex-wrap">
         <div className="flex-col  md:w-[40vw] m-2  p-2">
            <div className="text-white">
               <div className="text-green-600 text-2xl font-extrabold mt-4">Risk and Compliance</div>
            </div>
            <div className="flex text-white font-bold">
               <div><div>Supported OS</div><div> and Compliance</div><CircleChart data={5550} total={7500} color="yellow" /></div>
               <div><div>Services AS</div><div>and Compliance</div><CircleChart data={3675} total={7500} color="green" /></div>
               <div><div>Installed Software</div><div> Compliance</div><CircleChart data={1800} total={7500} color="blue" /></div>
            </div>
         </div>
         <div className="flex-col  md:w-[40vw] mt-2  p-2 ">
            <div className="text-white">
               <div className="text-green-600 text-2xl font-extrabold mt-4">SoftwarePatch &AV</div>
            </div>
            <div className="flex text-white font-bold">
               <div><div>AV Definitions</div> <div>Current</div><CircleChart data={6375} total={7500} color="red" /></div>
               <div><div>AV Service </div> <div>Running</div><CircleChart data={5250} total={7500} color="yellow" /></div>
               <div><div>OS Patches </div> <div>Within Policy</div><CircleChart data={3075} total={7500} color="green" /></div>
            </div>
         </div>
      </div>
   </>)
}
export default Dashboard