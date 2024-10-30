"use client";
import { Hero, SearchBar, CustomFilter, CarCard, ShowMore } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utils";
import { useEffect, useState } from "react";
import Image from "next/image";


export default function Home() {
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);

  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');

  const [fuel, setFuel] = useState('');
  const [year, setYear] = useState(2022);
  

  const [limit, setLimit] = useState(12);

  const getCars = async function () {
    setLoading(true)
    try{
      const result = await fetchCars({
        manufacturer: manufacturer || '', 
        year: year || 2022, 
        fuel:fuel || '', 
        limit:limit || 12,
        model:model || '',
        });
  
        setAllCars(result)
    }catch(error){

    }finally{
      setLoading(false)
    }
  }
  useEffect(()=>{
    getCars()
  }, [fuel, year, limit, manufacturer, model])

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (   
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">
            Car Catalogue
          </h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar setManufacturer={setManufacturer} setModel={setModel} />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} setFilter={(value) => setFuel(String(value))} />
            <CustomFilter title="year" options={yearsOfProduction} setFilter={(value) => setYear(Number(value))} />
          </div>
        </div>
        {allCars.length>0 ?(
          <section>
            <div className="home__cars-wrapper">
              {
                allCars?.map((car, idx)=>(
                  <CarCard key={idx} car={car} />
                ))
              }
            </div>

              {loading && (
                <div className="mt-16 w-full flex-center">
                  <Image
                    src="/loader.svg"
                    alt="loader"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
              )}

            <ShowMore pageNumber = {(limit)/10} isNext={limit > allCars.length} setLimit={setLimit} />
          </section>
        ): (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">
              Oops, no results

            </h2>
          </div>
        )}

      </div>
    </main>
      
    
  );
}
