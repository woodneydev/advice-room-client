import { ChevronRightIcon } from "@heroicons/react/20/solid";
import StandardButton from "../StandardButton/StandardButton";
import { PlayIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Hero = ({ heroConfig = {} }) => {
  return (
    <div className="bg-gray-900">
      <div className="relative isolate overflow-hidden">
        <img
          alt=""
          src="https://cdn.pixabay.com/photo/2016/09/29/13/08/planet-1702788_1280.jpg"
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-28 lg:py-36">
            {heroConfig?.subHeader?.text && <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm/6 text-gray-600 ring-1 ring-white/10 hover:ring-white/20">
                {heroConfig.subHeader.label && <><span className="font-bold text-gray-200">{heroConfig.subHeader.label}</span>
                <span aria-hidden="true" className="h-4 w-px bg-gray-400" /></>}
                {<Link
                  to={heroConfig.subHeader.href}
                  className="flex items-center gap-x-1 text-gray-400"
                >
                  <span aria-hidden="true" className="absolute inset-0" />
                  {heroConfig.subHeader.text}
                  {heroConfig.subHeader.icon}
                </Link>}
              </div>
            </div>}
            <div className="text-center">
              {heroConfig?.header && (
                <h1 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                  {heroConfig.header}
                </h1>
              )}
              {heroConfig?.tagline && (
                <p className="mt-8 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8">
                  {heroConfig.tagline}
                </p>
              )}

              {(heroConfig?.buttons?.actionOne ||
                heroConfig?.buttons?.actionTwo) && (
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  {heroConfig?.buttons?.actionOne?.text && (
                    <StandardButton to={heroConfig.buttons.actionOne?.href}>
                      {heroConfig?.buttons?.actionOne.text}
                    </StandardButton>
                  )}{" "}
                  {heroConfig?.buttons?.actionOne?.text && (
                    <Link
                      to={heroConfig.buttons.actionTwo.href}
                      className="text-sm/6 font-semibold text-white"
                    >
                      {heroConfig.buttons.actionTwo.text}{" "}
                      <span aria-hidden="true">→</span>
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
