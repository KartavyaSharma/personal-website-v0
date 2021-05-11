import React from 'react'
import { Link } from 'gatsby'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function DropdownPage(props) {
    return (
        <Menu as="div" className="relative inline-block text-right z-50">
            {({ open }) => (
                <div>
                    <div>
                        <Menu.Button className="flex justify-center items-center pl-10 2xl:pl-14 cursor-pointer font-semibold text-xl lg:text-2xl py-0 xl:py-3 outline-none">
                            Experience
                        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5 text-white" aria-hidden="true" />
                        </Menu.Button>
                    </div>

                    <Transition
                        show={open}
                        as="div"
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items
                            static
                            className="origin-top-right absolute z-50 right-0 mt-2 w-56 rounded shadow-xl bg-trueGray-800"
                        >
                            <div className="py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link
                                        to="/#projects"
                                        className={classNames(
                                            active ? 'bg-trueGray-700 text-orange-500 cursor-pointer' : 'bg-trueGray-800 text-white text-opacity-80',
                                            'block px-4 py-2 text-lg'
                                        )}
                                        activeClass="active"
                                        spy={true} smooth={true} duration={500}
                                        >
                                        Projects
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link
                                        to="/#work"
                                        className={classNames(
                                            active ? 'bg-trueGray-700 text-orange-500 cursor-pointer' : 'bg-trueGray-800 text-white text-opacity-80',
                                            'block px-4 py-2 text-lg'
                                        )}
                                        activeClass="active"
                                        spy={true} smooth={true} duration={500}
                                        >
                                            Work
                                        </Link>
                                    )}
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </div>
            )}
        </Menu>
    )
}
