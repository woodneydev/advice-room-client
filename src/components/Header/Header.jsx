import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
} from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import StandardButton from "../StandardButton/StandardButton";
import NavItems from "../NavItems/NavItems";

const Header = ({navBar = {}}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const {logo = {}, navConfig = [], buttons : {actionOne = {}, actionTwo = {}}} = navBar

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 md:px-8 lg:px-8 lg:py-3"
      >
        <div className="flex lg:flex-1">
          <Link to={logo?.href} className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            {logo?.src && <img alt="logo" src={logo.src} className={`h-8 w-auto ${logo?.className}`}/>}
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <NavItems navConfig={navConfig} />
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-x-6">
          {actionOne?.text && <Link to={actionOne?.href || `/${actionOne.text.toLowerCase().replaceAll(" ", "")}`} className="text-sm font-semibold leading-6 text-gray-900">
            {actionOne.text} {(actionOne?.text && !actionTwo?.text) &&<span aria-hidden="true">&rarr;</span>}
          </Link>}
          {actionTwo?.text && <StandardButton to={actionTwo?.href || `/${actionOne.text.toLowerCase().replaceAll(" ", "")}`}>{actionTwo.text}</StandardButton>}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src={logo} className="h-8 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navConfig.map((config) => {
                  if (config?.type.toLowerCase().includes("drop"))
                    return (
                      <Disclosure as="div" className="-mx-3">
                        <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          {config?.label}
                          <ChevronDownIcon
                            aria-hidden="true"
                            className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                          />
                        </DisclosureButton>
                        <DisclosurePanel className="mt-2 space-y-2">
                          {config.content.map((item) => (
                            <Link key={item?.title} to={item.href}>
                              <DisclosureButton
                                key={item?.title}
                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                              >
                                {item.title}
                              </DisclosureButton>
                            </Link>
                          ))}
                        </DisclosurePanel>
                      </Disclosure>
                    );
                  if (config?.type.toLowerCase().includes("link")) return (
                    <Link
                    to={config?.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {config?.label || "No Label/Title Added"}
                  </Link>
                  );
                })}
              </div>
              <div className="py-6">
                {actionOne?.text && <Link
                  to={actionOne?.href || `/${actionOne.text.toLowerCase().replaceAll(" ", "")}`}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {actionOne.text}
                </Link>}
                {actionTwo?.text && <Link
                  to={actionOne?.href || `/${actionOne.text.toLowerCase().replaceAll(" ", "")}`}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {actionTwo.text}
                </Link>}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
