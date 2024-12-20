import Image from 'next/image';
import React from 'react';

const InfoBoxes = () => {
  return (
    <div className="relative w-full h-auto mt-10 p-3.5 lg:px-[120] bg-[#17414F]">
      <div className='flex-column items-center lg:flex justify-between mx-10 lg:mx-0'>
        <div className='h-[80px] w-[300px] lg:w-[400px] rounded-lg bg-cyan-800 my-10 flex items-center justify-center'>
          <div className="w-[60px] h-[60px]">
            <Image
              src="/images/tele.png"
              alt="Vitamins Bottle"
              width={50}
              height={50}
              className="lg:m-2 m-3 lg:p-2 p-3"
            />
          </div>
          <div className='mx-10'>
            <p className="text-m text-white-600">
              Phone Number
            </p>
            <p className="text-m text-white-600">
            +974 3118 1843
            </p>
          </div>
        </div>
        <div className='h-[80px] w-[300px] lg:w-[400px] rounded-lg bg-cyan-800 my-10 flex items-center justify-center'>
          <div className="w-[60px] h-[60px]">
            <Image
              src="/images/email.png"
              alt="Vitamins Bottle"
              width={50}
              height={50}
              className="lg:m-2 m-3 lg:p-2 p-3"
            />
          </div>
          <div className='mx-10'>
            <p className="text-m text-white-600">
              Email Address
            </p>
            <p className="text-m text-white-600">
              Elbrithcqhr@gmail.com
            </p>
          </div>
        </div>
        <div className='h-[80px] w-[300px] lg:w-[400px] rounded-lg bg-cyan-800 my-10 flex items-center justify-center'>
          <div className="w-[60px] h-[60px]">
            <Image
              src="/images/loc.png"
              alt="Vitamins Bottle"
              width={50}
              height={50}
              className="lg:m-2 m-3 lg:p-2 p-3"
            />
          </div>
          <div className='mx-10'>
            <p className="text-m text-white-600">
              Office Location
            </p>
            <p className="text-m text-white-600">
              Ambassador Street, Zone 61,
            </p>
          </div>
        </div>
      </div>
      <div className='flex:column lg:flex justify-between mx-10 lg:mx-0 '>
        <Image
          src="/images/logo.png"
          alt="Elbrit"
          width={250}
          height={50}
          className="lg:mr-[150px] mb-10 "
        />
        <p className="text-s h-[80px] w-[300px] lg:w-[400px] text-white-600 lg:mx-10">
          Your health, physical and emotional well-being is important to us. We are always by your side and have made it even easier for you to find the necessary vitamins.
        </p>
        <div className='h-[80px] w-[400px]'>

        </div>
      </div>
      <div className='my-[10px] flex'>
        {<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_7_929)">
            <path d="M6.47363 3.39062C6.00488 3.39062 5.56738 3.47917 5.16113 3.65625C4.75488 3.83333 4.40072 4.07292 4.09863 4.375C3.79655 4.67708 3.55697 5.03125 3.37988 5.4375C3.2028 5.84375 3.11426 6.27604 3.11426 6.73438C3.11426 7.19271 3.2028 7.625 3.37988 8.03125C3.55697 8.4375 3.79655 8.79427 4.09863 9.10156C4.40072 9.40885 4.75488 9.64583 5.16113 9.8125C5.56738 9.98958 6.00488 10.0781 6.47363 10.0781C6.93197 10.0781 7.36426 9.99479 7.77051 9.82812C8.17676 9.65104 8.53092 9.40885 8.83301 9.10156C9.13509 8.79427 9.37467 8.4375 9.55176 8.03125C9.72884 7.625 9.81738 7.19271 9.81738 6.73438C9.81738 6.27604 9.72884 5.84375 9.55176 5.4375C9.37467 5.03125 9.13509 4.67708 8.83301 4.375C8.53092 4.07292 8.17676 3.83333 7.77051 3.65625C7.36426 3.47917 6.93197 3.39062 6.47363 3.39062ZM6.47363 9.28125C5.7653 9.28125 5.16374 9.03125 4.66895 8.53125C4.17415 8.03125 3.92676 7.43229 3.92676 6.73438C3.92676 6.03646 4.17415 5.4375 4.66895 4.9375C5.16374 4.4375 5.7653 4.1875 6.47363 4.1875C7.17155 4.1875 7.7679 4.4375 8.2627 4.9375C8.75749 5.4375 9.00488 6.03646 9.00488 6.73438C9.00488 7.43229 8.75749 8.03125 8.2627 8.53125C7.7679 9.03125 7.17155 9.28125 6.47363 9.28125ZM6.47363 0.203125C6.43197 0.203125 6.3929 0.203125 6.35645 0.203125C6.31999 0.203125 6.28092 0.203125 6.23926 0.203125C5.43717 0.234375 4.67676 0.401042 3.95801 0.703125C3.23926 1.01562 2.60124 1.43229 2.04395 1.95312C1.48665 2.47396 1.03092 3.08333 0.676758 3.78125C0.322591 4.47917 0.109049 5.22917 0.0361328 6.03125C0.00488281 6.34375 -0.00292969 6.65625 0.0126953 6.96875C0.0283203 7.28125 0.0621745 7.58333 0.114258 7.875C0.114258 7.875 0.119466 7.89323 0.129883 7.92969C0.140299 7.96615 0.150716 8.02083 0.161133 8.09375C0.213216 8.3125 0.275716 8.52865 0.348633 8.74219C0.421549 8.95573 0.504883 9.16146 0.598633 9.35938C0.765299 9.75521 0.984049 10.1979 1.25488 10.6875C1.53613 11.1875 1.8877 11.7188 2.30957 12.2812C2.73145 12.8438 3.23405 13.4375 3.81738 14.0625C4.40072 14.6875 5.08822 15.3281 5.87988 15.9844C5.96322 16.0573 6.05697 16.112 6.16113 16.1484C6.2653 16.1849 6.36947 16.2031 6.47363 16.2031C6.58822 16.2031 6.69499 16.1849 6.79395 16.1484C6.8929 16.112 6.98405 16.0573 7.06738 15.9844C7.85905 15.3281 8.54655 14.6875 9.12988 14.0625C9.72363 13.4375 10.2288 12.8438 10.6455 12.2812C11.0622 11.7188 11.4111 11.1927 11.6924 10.7031C11.9632 10.2135 12.182 9.77083 12.3486 9.375C12.4424 9.16667 12.5257 8.95573 12.5986 8.74219C12.6715 8.52865 12.734 8.3125 12.7861 8.09375C12.7965 8.05208 12.8044 8.01562 12.8096 7.98438C12.8148 7.95312 12.8226 7.92188 12.833 7.89062C12.8643 7.68229 12.8903 7.47656 12.9111 7.27344C12.932 7.07031 12.9424 6.86458 12.9424 6.65625C12.9424 5.77083 12.7705 4.9375 12.4268 4.15625C12.083 3.36458 11.6195 2.67708 11.0361 2.09375C10.4528 1.51042 9.77051 1.04688 8.98926 0.703125C8.19759 0.369792 7.35905 0.203125 6.47363 0.203125ZM12.0205 7.75C12.0205 7.75 12.0179 7.76562 12.0127 7.79688C12.0075 7.82812 11.9997 7.86458 11.9893 7.90625C11.9476 8.10417 11.8955 8.29688 11.833 8.48438C11.7705 8.67188 11.6976 8.85938 11.6143 9.04688C11.4476 9.42188 11.234 9.84375 10.9736 10.3125C10.7132 10.7812 10.3825 11.2839 9.98145 11.8203C9.5804 12.3568 9.09863 12.9271 8.53613 13.5312C7.97363 14.125 7.31217 14.7344 6.55176 15.3594C6.54134 15.3698 6.52832 15.3776 6.5127 15.3828C6.49707 15.388 6.48405 15.3906 6.47363 15.3906C6.46322 15.3906 6.4502 15.388 6.43457 15.3828C6.41895 15.3776 6.40592 15.3698 6.39551 15.3594C5.63509 14.7344 4.97363 14.125 4.41113 13.5312C3.84863 12.9271 3.36426 12.3568 2.95801 11.8203C2.55176 11.2839 2.21842 10.7812 1.95801 10.3125C1.69759 9.83333 1.48926 9.40625 1.33301 9.03125C1.24967 8.85417 1.17676 8.67188 1.11426 8.48438C1.05176 8.29688 0.994466 8.10417 0.942383 7.90625C0.931966 7.86458 0.924154 7.83073 0.918945 7.80469C0.913737 7.77865 0.911133 7.76562 0.911133 7.76562C0.911133 7.75521 0.911133 7.75 0.911133 7.75C0.911133 7.75 0.911133 7.74479 0.911133 7.73438C0.859049 7.47396 0.827799 7.20573 0.817383 6.92969C0.806966 6.65365 0.812174 6.38021 0.833008 6.10938C0.905924 5.41146 1.09342 4.75521 1.39551 4.14062C1.70801 3.52604 2.10645 2.99219 2.59082 2.53906C3.0752 2.08594 3.63509 1.72396 4.27051 1.45312C4.89551 1.18229 5.56217 1.03125 6.27051 1C7.07259 0.979167 7.8278 1.10938 8.53613 1.39062C9.25488 1.68229 9.87988 2.08594 10.4111 2.60156C10.9424 3.11719 11.359 3.72396 11.6611 4.42188C11.9736 5.11979 12.1299 5.86979 12.1299 6.67188C12.1299 6.84896 12.1221 7.02604 12.1064 7.20312C12.0908 7.38021 12.0622 7.5625 12.0205 7.75Z" fill="white" />
          </g>
          <defs>
            <clipPath id="clip0_7_929">
              <rect width="16.09" height="16" fill="white" transform="matrix(1 0 0 -1 0 16)" />
            </clipPath>
          </defs>
        </svg>
        }

        <p className="text-xs font-medium text-white-600 mx-[10px]  ">
          Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051
        </p>
      </div>
    </div>
  );
};

export default InfoBoxes;
