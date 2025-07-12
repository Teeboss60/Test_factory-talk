import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.css'



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <input className="form-control search-input fuzzy-search" type="search" placeholder="Search..." aria-label="Search"></input>

        </p>
        
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-1 lg:text-left">
        <div className="card h-md-100">
                <div className="card-header d-flex flex-between-center pb-0">
                  <h6 className="mb-0">Weather</h6>
                  
                </div>
                <div className="card-body pt-2">
                  <div className="row g-0 h-100 align-items-center">
                    <div className="col">
                      <div className="d-flex align-items-center">
                        <div>
                          <h6 className="mb-2">New York</h6>
                          <div className="fs-11 fw-semi-bold">
                            9:30 PM
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-auto text-center ps-2">
                      <img className="me-3" src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="" height="60"></img>
                      <div className="fs-5 fw-normal font-sans-serif text-primary mb-1 lh-1">23°</div>
                      
                    </div>
                  </div>
                </div>
              </div>

        <div className="card h-md-100">
                
                <div className="card-body pt-2">
                  <div className="row g-0 h-100 align-items-center">
                    <div className="col">
                      <div className="d-flex align-items-center">
                        <div>
                          <h6 className="mb-2">Bangkok</h6>
                          <div className="fs-11 fw-semi-bold">
                            8:30 AM
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-auto text-center ps-2">
                      <img className="me-3" src="
                      https://ssl.gstatic.com/onebox/weather/64/rain_light.png" alt="" height="60"></img>
                      <div className="fs-5 fw-normal font-sans-serif text-primary mb-1 lh-1">33°</div>
                      
                    </div>
                  </div>
                </div>
              </div>

        <div className="card h-md-100">
                
                <div className="card-body pt-2">
                  <div className="row g-0 h-100 align-items-center">
                    <div className="col">
                      <div className="d-flex align-items-center">
                        <div>
                          <h6 className="mb-2">Tokyo</h6>
                          <div className="fs-11 fw-semi-bold">
                            10:30 AM
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-auto text-center ps-2">
                      <img className="me-3" src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="" height="60"></img>
                      <div className="fs-5 fw-normal font-sans-serif text-primary mb-1 lh-1">35°</div>
                     </div> 
                    
                  </div>
                </div>
              </div>            


             
         

       
      </div>
    </main>
  );
}
