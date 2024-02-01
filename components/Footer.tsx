export default function Footer() {
  let currentDate = new Date().getFullYear();

  return (
    <footer className="" aria-labelledby="footer-heading">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32">
        <div className=" border-t border-white/10 pt-8  ">
          <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0 text-center">
            &copy; {currentDate} BetOrbit, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
