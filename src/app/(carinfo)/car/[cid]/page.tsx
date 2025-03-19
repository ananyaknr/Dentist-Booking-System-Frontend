import Image from "next/image";
import getCar from "@/libs/getCar";
import Link from "next/link"

export default async function carDetailPage({params}:{params:{cid:string}}){
    const carDetail = await getCar(params.cid)

    // const carDetail = new Map();  
    // carDetail.set("001", {name: "Honda Civic", image: "/img/civic.jpg"});  
    // carDetail.set("002", {name: "Honda Accord", image: "/img/accord.jpg"});  
    // carDetail.set("003", {name: "Toyota Fortuner", image: "/img/fortuner.jpg"});  
    // carDetail.set("004", {name: "Tesla Model 3", image: "/img/tesla.jpg"});  
        
    return(
        <main className='text-center p-5'>
            <h1 className='text-lg font-medium'>{carDetail.data.model}</h1>
            <div className="flex flex-row my-5">  
                <Image   
                    src={(carDetail.data.picture)} alt="Product Picture"   
                    width={0} height={0}  sizes="100vw"   
                    className="rounded-lg w-[30%] bg-black"   
                />  
                <div className="text-md mx-5">
                    {(carDetail.data.description)}
                    <div className="text-md mx-5">Doors: { carDetail.data.doors }</div>
                    <div className="text-md mx-5">Seats: { carDetail.data.seats }</div>
                    <div className="text-md mx-5">Large Bags: { carDetail.data.largebags }</div>
                    <div className="text-md mx-5">Small Bags: { carDetail.data.smallbags }</div>
                    <div className="text-md mx-5">Daily Rental Rate: { carDetail.data.dayRate } (insurance included)</div> 
                </div> 

                <Link href={`/reservations?id=${params.cid}&model=${carDetail.data.model}`}>
                    <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm">
                        Make Reservation
                    </button>
                </Link>
            </div>  
        </main>
    );
}

export async function generateStaticParams(){
    return [{cid:'001'},{cid:'002'},{cid:'003'},{cid:'004'}]
}