import React from 'react'

const ServiceDelivery = () => {
  return (
    <>
    <div className="container">
        <div className="main">
            <div className="grid grid-rows-2 grid-flow-col gap-4grid">
                <div className="container">
                    <div className="px-[400px] py-10 flex">
                        <div className="line"></div>
                        <span className='text-green-700 font-semibold text-[14px]'>Timely Service Delivery & Incident Resolutions!!</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <style jsx>
        {`
        .line {
            width:20px;
            height:2px;
            color:rgb(2, 96, 2);

        }
        `}
      </style>
    </>
  )
}

export default ServiceDelivery