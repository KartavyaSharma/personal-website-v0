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
                    <div className='pl-10 2xl:pl-14'>
                        <div className='group flex flex-row h-full items-center'>
                        <Menu.Button className="flex justify-center items-center cursor-pointer font-semibold text-xl lg:text-2xl py-0 xl:py-3 outline-none group-hover:text-red-high">
                            <div>Experience</div>
                            <ChevronDownIcon className="-mb-1 h-5 w-5 text-highlight group-hover:text-red-high" aria-hidden="true" />
                        </Menu.Button>
                    </div>
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
                            className="origin-top-right absolute z-50 right-0 mt-2 w-56 rounded shadow-xl bg-hover-bg"
                        >
                            <div className="py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link
                                        to="/#projects"
                                        className={classNames(
                                            active ? 'text-red-high cursor-pointer' : 'bg-hover-bg text-white text-opacity-80',
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
                                            active ? 'text-red-high cursor-pointer' : 'bg-hover-bg text-white text-opacity-80',
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
