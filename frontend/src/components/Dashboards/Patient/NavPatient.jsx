import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react'

import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  FunnelIcon,
} from '@heroicons/react/24/outline'

import { NavLink } from 'react-router-dom'

const navigation = [
  { name: 'Dashboard', href: '/patient/dashboard' },
  { name: 'Appointments', href: '/patient/appointments' },
  { name: 'Medical Records', href: '/patient/records' },
  { name: 'Chat', href: '/patient/chats' },
  { name: 'Profile', href: '/patient/profile' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="relative bg-sky-800/50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
    >
      <div className="w-full px-6">
        <div className="relative flex h-20 items-center justify-between">

          {/* Mobile Menu Button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group inline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:bg-white/5 hover:text-white">
              <Bars3Icon className="block size-6 group-data-open:hidden" />
              <XMarkIcon className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>

          {/* Desktop Navigation */}
          <div className="flex items-center">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    end
                    className={({ isActive }) =>
                      classNames(
                        isActive
                          ? 'bg-gray-950/60 text-white'
                          : 'text-gray-200 hover:bg-white/5 hover:text-white',
                        'rounded-md px-3 py-2 text-2xl font-medium transition'
                      )
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          {/* Centered Search Bar */}
          <div className="hidden sm:flex flex-1 justify-center max-w-xl mx-auto">
            <div className="flex w-full items-center bg-white/10 backdrop-blur-md rounded-xl shadow-md">

              {/* Input */}
              <input
                type="text"
                placeholder="Search Doctors"
                className="flex-1 px-4 py-2 bg-transparent text-gray-200 placeholder-gray-300 focus:outline-none"
              />

              {/* Filter Popover */}
              <Popover className="relative">
                <PopoverButton className="px-3 py-2 border-l border-white/20 hover:bg-white/10 transition">
                  <FunnelIcon className="h-5 w-5 text-gray-200" />
                </PopoverButton>

                <PopoverPanel className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-xl z-50 p-4">
                  {({ close }) => (
                    <div className="space-y-3">

                      <h3 className="font-semibold text-gray-800">Filters</h3>

                      <select className="w-full border rounded-md p-2">
                        <option>Specialization</option>
                        <option>Cardiologist</option>
                        <option>Dermatologist</option>
                        <option>Neurologist</option>
                      </select>

                      <select className="w-full border rounded-md p-2">
                        <option>Location</option>
                      </select>

                      <select className="w-full border rounded-md p-2">
                        <option>Availability</option>
                      </select>

                      <select className="w-full border rounded-md p-2">
                        <option>Ratings</option>
                      </select>

                      <select className="w-full border rounded-md p-2">
                        <option>Cost</option>
                      </select>

                      <button
                        onClick={() => {
                          // Your filter logic here
                          close() // ✅ hides popover
                        }}
                        className="w-full bg-sky-600 py-2 text-white rounded-md hover:bg-sky-700 transition"
                      >
                        Apply Filters
                      </button>

                    </div>
                  )}
                </PopoverPanel>
              </Popover>

              {/* Search Button */}
              <button className="px-5 py-2 bg-gray-200 text-gray-800 font-medium hover:bg-white transition rounded-r-xl">
                Search
              </button>

            </div>
          </div>

          {/* Right Side Icons */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:ml-6 sm:pr-0">

            {/* Notification */}
            <button className="relative rounded-full p-1 text-gray-200 hover:text-white">
              <BellIcon className="size-6" />
            </button>

            {/* Profile Dropdown */}
            <Menu as="div" className="relative ml-3">
              <MenuButton className="relative flex rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                  alt="Profile"
                  className="size-10 rounded-full object-cover"
                />
              </MenuButton>

              <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-800 py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
                <MenuItem>
                  {({ active }) => (
                    <NavLink
                      to="/patient/profile"
                      className={classNames(
                        active && 'bg-gray-700',
                        'block px-4 py-2 text-sm text-gray-300'
                      )}
                    >
                      Your Profile
                    </NavLink>
                  )}
                </MenuItem>

                <MenuItem>
                  {({ active }) => (
                    <button
                      className={classNames(
                        active && 'bg-gray-700',
                        'block w-full text-left px-4 py-2 text-sm text-gray-300'
                      )}
                    >
                      Sign out
                    </button>
                  )}
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              end
              className={({ isActive }) =>
                classNames(
                  isActive
                    ? 'bg-gray-950/60 text-white'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium transition'
                )
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}