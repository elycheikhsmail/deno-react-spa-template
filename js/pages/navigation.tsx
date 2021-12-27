import {
  BellIcon,
  Disclosure,
  Fragment,
  Menu,
  MenuIcon,
  NavLink,
  React,
  Transition,
  tw,
  XIcon,
} from "./../deps.ts";

const navigation = [
  { name: "home", to: "/" }, 
];

function classNames(...classes: string[]) {
  return tw`${classes.filter(Boolean).join(" ")}`;
}

export const Navigation = () => (
  <Disclosure as="nav" className={tw`bg-gray-800`} dir="rtf">
    {({ open }) => (
      <>
        <div className={tw`max-w-7xl mx-auto pr-2 sm:px-6 lg:px-8`} dir="rtf">
          <div className={tw`relative flex items-center justify-between h-16`}>
            <div
              dir="rtf"
              className={tw
                `absolute inset-y-0 right-0  float-right items-center sm:hidden`}
            >
              {/* Mobile menu button*/}
              <Disclosure.Button
                className={tw
                  `inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
              >
                <span className={tw`sr-only`}>Open main menu</span>
                {open
                  ? <XIcon className={tw`block h-6 w-6`} aria-hidden="true" />
                  : (
                    <MenuIcon
                      className={tw`block h-6 w-6`}
                      aria-hidden="true"
                    />
                  )}
              </Disclosure.Button>
            </div>
            <div
              className={tw
                `flex-1 flex items-center justify-center sm:items-stretch sm:justify-start`}
              dir="rtf"
            >
              <div className={tw`hidden sm:block sm:ml-6`} dir="rtf">
                <div className={tw`flex space-x-4`}>
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.to}
                      end
                      className={({ isActive }) =>
                        classNames(
                          isActive
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium",
                        )}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
            <div
              dir="rtf"
              className={tw
                `absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0`}
            >
              {/* Profile dropdown */}
              <Menu as="div" className={tw`ml-3 relative`} dir="rtf">
                {({ open }) => (
                  <>
                    <Transition
                      show={open}
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items
                        dir="rtf"
                        static
                        className={tw
                          `origin-top-left absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
                      >
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100"
                                  : "",
                                "block px-4 py-2 text-sm text-gray-700",
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100"
                                  : "",
                                "block px-4 py-2 text-sm text-gray-700",
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              style={{ textAlign: "right" }}
                              dir="rtf"
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100"
                                  : "",
                                "block px-4 py-2 text-sm text-gray-700",
                              )}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>
            </div>
          </div>
        </div>

        <Disclosure.Panel className={tw`sm:hidden`}>
          <div className={tw`pr-2 pt-2 pb-3 space-y-1`}>
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                end
                className={({ isActive }) =>
                  classNames(
                    isActive
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block mr-4 py-2 rounded-md text-base font-medium",
                  )}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
);
