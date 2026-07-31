import { Link } from "react-router-dom";
import { useRippleTWE } from "../hooks/useRippleTWE";

export function Page404() {
  useRippleTWE();

  return (
    <main className="flex min-h-[50vh] flex-col items-center justify-center p-6 text-center">
      <div className="block max-w-[18rem] rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark dark:text-white">
        <div
          className="relative overflow-hidden bg-cover bg-no-repeat"
          data-twe-ripple-init
          data-twe-ripple-color="light">
          <img className="rounded-t-lg" src="peace.jpg" alt="Peace" />
        </div>
        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            404 - Page Not Found
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            data-twe-ripple-init
            data-twe-ripple-color="light"
            className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300">
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Page404;
