import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <>
      <nav class="sticky top-0 w-full bg-darkBlue">
        <div class="flex items-center justify-between w-full">
          <div>
            <Image
              src="/drive_logo.jpg"
              alt="/drive_logo.jpg"
              width="100"
              height="100"
              priority
            />
          </div>
          <div class="space-x-2 mr-2 md:space-x-6 text-white flex md:mr-10">
            {router.pathname === "/" ? (
              <Link href="/" class="text-blue-200">
                Home
              </Link>
            ) : (
              <Link href="/" class="hover:text-blue-200">
                Home
              </Link>
            )}
            {router.pathname === "/cars-for-sale" ? (
              <Link href="/cars-for-sale" class="text-blue-200">
                Cars for Sale
              </Link>
            ) : (
              <Link href="/cars-for-sale" class="hover:text-blue-200">
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
