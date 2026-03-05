import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-2xl flex-col items-center justify-between p-12 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            rohling.com.br
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
             You're here again?! Wherever!
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <ul  className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              <Link
                className="hover:underline"
                href="http://endless.horse/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Horse
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline"
                href="https://pointerpointer.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pointer
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline"
                href="http://www.staggeringbeauty.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Worm
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline"
                href="https://longdogechallenge.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Doge
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline"
                href="https://ffffidget.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Spinner
              </Link>
            </li>

            <li>
              <Link
                className="hover:underline"
                href="https://theuselessweb.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                More
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
