import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.png"

const navigation = [
  { name: "Crypto tax", href: "#", current: false },
  { name: "Free Tools", href: "#team", current: false },
  { name: "Resource Center", href: "#", current: false },
  { name: "Get Started", href: "#", current: false },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between ">
                  <div className="flex ">
                    <div className="flex-shrink">
                      <img
                        className="h-8 w-20"
                        src={logo}
                        alt="Your Company"
                      />
                    </div>
                    <div className="hidden md:block items-end ml-80 place-items-end">
                      <div className="flex">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-gray-900 text-white"
                                : "transition duration-300 ease-in-out hover:bg-blue-700 hover:text-white",
                              "rounded-md px-4 py-2 mx-6 text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}
