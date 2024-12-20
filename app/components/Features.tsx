import React, { JSX } from "react";
import Image from 'next/image';

interface InfoBoxProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const InfoBox: React.FC<InfoBoxProps> = ({ title, description, icon }) => (
  <div className="relative w-[150px] h-[150px] bg-transparent my-20 mx-20 -mt-10 z-20 ">
    <div className="relative w-[10px] h-[10px] left-1/2 top-0 transform -translate-x-1/2 bg-white rounded-full flex items-center justify-center border-dashed border-2 border-white">
      {icon}
    </div>
    <div className="relative text-center">
      <h3 className="text-white text-[16px] mt-10 mb-5 font-medium">{title}</h3>
      <p className="text-white text-[10px] ">{description}</p>
    </div>
  </div>
);


const InfoBoxSection = () => {
  return (
    <div className="relative justify-center pt-3 px-6 sm:px-[100px] md:px-[150px] lg:px-[250px] -mt-20 z-10">
      <div className="relative h-auto lg:h-[350] w-full max-w-6xl bg-[#17414F] rounded-[40px] sm:rounded-[80px] p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-2 justify-items-center">
        <InfoBox
          title="Clinically Studied"
          description="All products that we offer have undergone lab and safety tests"
          icon={
            <div className="relative w-[75px] h-[75px] bg-cover  flex items-center justify-center">
              <div className="w-[75px] h-[75px] bg-white rounded-full">
                <Image
                  src="/images/Group-8110.svg.png"
                  alt="Vitamins Bottle"
                  width={50}
                  height={50}
                  className="m-2 sm:m-3 p-2 sm:p-3"
                />
              </div>
            </div>
          }
        />
        <InfoBox
          title="Vegetarian Friendly"
          description="We have a wide selection of vegetarian products to meet your needs"
          icon={
            <div className="relative w-[75px] h-[75px] bg-tranparent flex items-center justify-center">
              <div className="w-[75px] h-[75px] bg-white rounded-full">
              <Image
                  src="/images/Group-8111.svg.png"
                  alt="Vitamins Bottle"
                  width={50}
                  height={50}
                  className="m-2 sm:m-3 p-2"
                />
              </div>
            </div>
          }
        />
        <InfoBox
          title="Made in India"
          description="Shop local and explore health products made right here in India"
          icon={
            <div className="relative w-[75px] h-[75px] bg-tranparent flex items-center justify-center">
              <div className="w-[75px] h-[75px] bg-white rounded-full">
              <Image
                  src="/images/Group-8117.svg.png"
                  alt="Vitamins Bottle"
                  width={50}
                  height={50}
                  className="m-2 sm:m-3 p-2"
                />
              </div>
            </div>
          }
        />
        <InfoBox
          title="Free Shipping"
          description="We deliver to your door with no shipping costs on your orders"
          icon={
            <div className="relative w-[75px] h-[75px] bg-tranparent flex items-center justify-center">
              <div className="w-[75px] h-[75px] bg-white rounded-full">
              <Image
                  src="/images/Group-8114.svg.png"
                  alt="Vitamins Bottle"
                  width={50}
                  height={50}
                  className="m-2 sm:m-3 p-2"
                />
              </div>
            </div>
          }
        />
        <InfoBox
          title="No Risk"
          description="We ensure that all products are safe and within their use-by date"
          icon={
            <div className="relative w-[75px] h-[75px] bg-tranparent flex items-center justify-center">
              <div className="w-[75px] h-[75px] bg-white rounded-full">
              <Image
                  src="/images/Group-8115.svg.png"
                  alt="Vitamins Bottle"
                  width={50}
                  height={50}
                  className="m-2 sm:m-3 p-2"
                />
              </div>
            </div>
          }
        />
        <InfoBox
          title="GMO Free"
          description="Natural, no modified products and derivatives for those who need it"
          icon={
            <div className="relative w-[75px] h-[75px] bg-tranparent flex items-center justify-center">
              <div className="w-[75px] h-[75px] bg-white rounded-full">
              <Image
                  src="/images/Group-8116.svg.png"
                  alt="Vitamins Bottle"
                  width={50}
                  height={50}
                  className="m-2 sm:m-3 p-2"
                />
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default InfoBoxSection;
