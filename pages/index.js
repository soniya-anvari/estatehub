import PropertyType from "@/components/templates/PropertyType";

export default function Home() {
  return (
    <>
      <div>
        <div className="bg-[url(/images/headerBg.png)] pt-70 flex flex-col items-center justify-center rounded-b-2xl h-[32rem]">
          <div className="w-10/12 m-auto ">
            <h1 className="text-3xl text-center font-bold text-white">
              در <span className="text-blue-500">رنتی‌فای</span> دنبال چه ملکی هستید؟
            </h1>
          </div>
          <div className="mt-10 w-full">
            <PropertyType />
          </div>
        </div>
      </div>
    </>
  );
}
