import React from "react"
import { Link } from 'gatsby'

export default function ProjectPageCards({ cardData }) {
    const data = cardData

    console.log(data);

    function renderCardList() {
        return (
            <div
                className={`grid grid-cols-1 w-full grid-rows-${data.length} gap-y-1`}
            >
                {data.map(project => {
                    return (
                        <Link
                            to={`/project/${project.node.name
                                .replace(" -", "")
                                .split(" ")
                                .join("-")
                                .toLowerCase()}`}
                        >
                            <div className="w-full grid grid-rows-2 p-3 pl-0">
                                <div>
                                    <div className="text-white text-opacity-80 text-lg lg:text-xl font-mono font-semibold">
                                        {project.node.name}
                                    </div>
                                </div>
                                <div className="flex flex-row items-center w-full">
                                    <Link
                                        to={`/project/${project.node.name
                                            .replace(" -", "")
                                            .split(" ")
                                            .join("-")
                                            .toLowerCase()}`}
                                    >
                                        <button className="text-trueGray-400 text-xs font-mono">
                                            View Details
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        )
    }

    return (
        <div className="w-full flex flex-row justify-center sticky top-10 2xl:top-20">
            <div className="flex flex-col">
                <div className="text-white font-mono text-lg lg:text-xl 2xl:text-2xl font-bold text-opacity-80">
                    More projects
                </div>
                <div className="mt-5">{renderCardList()}</div>
                <Link to='/#projects' className='mt-3'>
                    <button className='rounded px-2 py-1 border border-trueGray-800 hover:bg-trueGray-800'>
                        <div className='flex flex-col'>
                            <div className='flex flex-row justify-center items-center'>
                                <div className='text-white text-opacity-80 text-sm'>View all projects</div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="gray" class="bi bi-arrow-right-short" viewBox="0 0 16 16" className='ml-1 md:ml-2'>
                                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                </svg>
                            </div>
                        </div>
                    </button>
                </Link>
            </div>
        </div>
    )
}
