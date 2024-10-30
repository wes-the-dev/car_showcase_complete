
export async function fetchCars(){
    const headers = {     
        'x-rapidapi-key': '5b8015963amsh2e46bf11c920b2ap1f4d5ejsn67fe18c48057',
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
        
    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=Porsche', {
        headers: headers
    });
    const result = await response.json()
    return result
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };

export const generateCarUrl = (car: {
    city_mpg: number;
        class: string;
        combination_mpg: number;
        cylinders: number;
        displacement: number;
        drive: string;
        fuel_type: string;
        highway_mpg: number;
        make: string;
        model: string;
        transmission: string;
        year: number   
}, angle?:string) =>{
    const url = new URL('https://cdn.imagin.studio/getimage');
    const {make, year, model} = car;
    url.searchParams.append('customer', 'hrjavascript-mastery');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(' ')[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    url.searchParams.append('angle', `${angle}`);

    return `${url}`;
}

