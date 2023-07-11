import RegisteredUniversity from "@/components/University/RegisteredUniversity";



export default function Home() {
    return (
        <div className="flex w-11/12 m-auto justify-between">
            <div className="flex flex-col gap-6">
                <h1 className="text-3xl mt-10 bg-gray-600 px-11 py-3 text-white rounded-lg">Registered University</h1>
                
                <div>
                <RegisteredUniversity/>
                <RegisteredUniversity/>
                <RegisteredUniversity/>
                <RegisteredUniversity/>
                <RegisteredUniversity/>
                </div>
                
            </div>
            <div>
                <h1 className="text-3xl mt-10 bg-gray-600 px-11 py-3 text-white rounded-lg">Recently Added</h1>
            </div>

            
        </div>
    ) 
  }