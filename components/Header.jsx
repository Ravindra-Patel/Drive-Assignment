import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    < >
      <nav className="sticky top-0 w-full bg-darkBlue min-w-[400px]">
        <div className="flex items-center justify-between w-full">
          <div>
            <Image
              src="/drive_logo.jpg"
              alt="/drive_logo.jpg"
              width="100"
              height="100"
              priority
            />
          </div>
          <div className="space-x-2 mr-2 md:space-x-6 text-white flex md:mr-10">
            {router.pathname === "/" ? (
              <Link href="/" className="text-blue-200">
                Home
              </Link>
            ) : (
              <Link href="/" className="hover:text-blue-200">
                Home
              </Link>
            )}
            {router.pathname === "/cars-for-sale" ? (
              <Link href="/cars-for-sale" className="text-blue-200">
                Cars for Sale
              </Link>
            ) : (
              <Link href="/cars-for-sale" className="hover:text-blue-200">
                Cars for Sale
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
