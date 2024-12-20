// app/components/Header.tsx
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-white text-neutral-800 py-4">
      <div className="container flex justify-start px-20">
        {/* Logo */}
        <div className="px-20 flex items-center">
          <Image
            src="/images/logo.png" // Replace with your logo image path
            alt="ELBRIT Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
