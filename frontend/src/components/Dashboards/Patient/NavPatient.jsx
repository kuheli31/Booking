import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems
} from '@headlessui/react'

import {
  Bars3Icon,
  BellIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'

import { NavLink } from 'react-router-dom'
import { usePatient } from '../../../context/Patient/PatientContext'
import DoctorSearch from '../../Patient/Search/DoctorSearch'

const navigation = [
  { name: 'Home', href: '/patient/dashboard' },
  { name: 'Appointments', href: '/patient/appointments' },
  { name: 'Medical Records', href: '/patient/records' },
  { name: 'Chat', href: '/patient/chats' },
  { name: 'Profile', href: '/patient/profile' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {

  const selectedPatient = usePatient()

  return (

    <Disclosure
      as="nav"
      className="relative bg-sky-800/50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
    >

      <div className="w-full px-6">

        <div className="relative flex h-20 items-center justify-between">

          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

            <DisclosureButton className="group inline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:bg-white/5 hover:text-white">

              <Bars3Icon className="block size-6 group-data-open:hidden" />

              <XMarkIcon className="hidden size-6 group-data-open:block" />

            </DisclosureButton>

          </div>

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

          {/* SEARCH BAR */}
          <div className="hidden sm:flex flex-1 justify-center max-w-xl mx-auto">
            <DoctorSearch />
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:ml-6 sm:pr-0">

            <button className="relative rounded-full p-1 text-gray-200 hover:text-white">
              <BellIcon className="size-6" />
            </button>

            <Menu as="div" className="relative ml-3">

              <MenuButton className="relative flex rounded-full">

                <img
                  src={selectedPatient?.profilePicture}
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