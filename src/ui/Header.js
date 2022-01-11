import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  SearchIcon,
  UserCircleIcon,
  BookmarkIcon,
  CogIcon,
  RefreshIcon,
  HeartIcon,
  GlobeAltIcon,
  GlobeIcon,
  PlusIcon,
  ChatIcon,
  HomeIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const dropdownActions = [
  {
    name: "Profile",
    href: "#",
    icon: UserCircleIcon,
  },
  {
    name: "Saved",
    href: "#",
    icon: BookmarkIcon,
  },
  {
    name: "Settings",
    href: "#",
    icon: CogIcon,
  },
  {
    name: "Switch Accounts",
    href: "#",
    icon: RefreshIcon,
  },
];

const Header = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto flex justify-evenly py-4">
        <div>Instagram</div>
        <div>
          <label class="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <SearchIcon
                className="h-4 w-4 text-gray-400"
                aria-hidden="false"
              ></SearchIcon>
            </span>
            <input
              className="placeholder:text-gray-400 block bg-gray-100 w-full rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search"
              type="text"
              name="search"
            />
          </label>
        </div>
        <div className="flex gap-4">
          <a href="#">
            <HomeIcon className="h-6 w-6 stroke-gray-700" aria-hidden="false" />
          </a>
          <a href="#">
            <ChatIcon className="h-6 w-6 stroke-gray-700" aria-hidden="false" />
          </a>
          <a href="#">
            <PlusIcon className="h-6 w-6 stroke-gray-700" aria-hidden="false" />
          </a>
          <a href="#">
            <GlobeIcon className="h-6 w-6 stroke-gray-700" aria-hidden="false" />
          </a>
          <a href="#">
            <HeartIcon className="h-6 w-6 stroke-gray-700" aria-hidden="false" />
          </a>
          <Popover>
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    open ? "text-gray-900" : "text-gray-500",
                    "group bg-white rounded-full hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-black"
                  )}
                >
                  <img
                    src="https://via.placeholder.com/150x150"
                    className="rounded-full"
                    width="25"
                    alt="Profile"
                  ></img>
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 ransform -translate-x-1/2">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid bg-white px-5 py-3 sm:gap-8 sm:p-8">
                        {dropdownActions.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="-m-3 p-1 flex items-start rounded-lg hover:bg-gray-100"
                          >
                            <item.icon
                              className="flex-shrink-0 h-6 w-6 text-grey-700"
                              aria-hidden="true"
                            />
                            <div className="ml-2">
                              <p className="text-sm text-gray-900">
                                {item.name}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                      <div className="px-5 py-3 border-t">
                        <a
                          href="#"
                          className="text-gray-900 hover:text-gray-700"
                        >
                          Log Out
                        </a>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </div>
      </div>
    </header>
  );
};

export default Header;
