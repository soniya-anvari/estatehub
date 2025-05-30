import Loan from "@/components/templates/Loan";
import MostVisited from "@/components/templates/MostVisited";
import PropertyType from "@/components/templates/PropertyType";
import Services from "@/components/templates/Services";

export default function Home() {
  return (
    <>
      <div>
        <div className="bg-[url(/images/headerBg.png)] pt-50 flex flex-col justify-center rounded-b-2xl h-[32rem]">
         <div >
            <h1 className="text-3xl text-center font-bold text-white">
              در <span className="text-blue-500">رنتی‌فای</span> دنبال چه ملکی هستید؟
            </h1>
          </div>
           <div className="mt-10 w-full">
            <PropertyType />
          </div>
        </div>
        <div className="w-10/12 m-auto "> 
          <div className="mt-14">
            <MostVisited />
          </div>
          <div className="mt-14">
            <Services />
          </div>
          <div className="mt-14">
            <Loan />
          </div>
          </div>
      </div>
    </>
  );
}
