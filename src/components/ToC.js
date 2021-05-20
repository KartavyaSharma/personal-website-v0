import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'

import ShareIcons from '../components/ShareIcons'

function useOnScreenId(itemIds, firstElem) {
    const [activeId, setActiveId ] = useState(``);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if(entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                })
            },
            { rootMargin: `0% 0% -80% 0%` }
        )

        itemIds.forEach((item) => {
            observer.observe(document.getElementById(item.id));
        });

    }, [itemIds])

    return activeId;
}

export default function ToC({ headings, mobile, currPath }) {

    let items = [];
    let prevOne = {};
    headings.forEach((_,i) => {
        if(_.depth === 1) {
            let obj = {};
            obj.url = _.id;
            obj.name = _.value;
            items[i] = obj;
            prevOne.idx = i;
        } else if(_.depth === 3) {
            if(items[prevOne.idx].items === undefined) {
                items[prevOne.idx].items = []
            }
            let obj = {};
            obj.url = _.id;
            obj.name = _.value;
            items[prevOne.idx].items.push(obj);
        }
    })

    const activeID = useOnScreenId(headings, items[0].url);

    function renderToC(currID) {

        return (
            <div>
                {
                    items.map(_ => {
                        return (
                            <li className='pt-2'>
                                <Link 
                                    activeClass="active" 
                                    to={`${_.url}`} 
                                    spy={true}
                                    smooth={true}
                                    duration={500} 
                                    className={`cursor-pointer hover:text-orange-500 hover:text-opacity-100 text-white text-opacity-80 text-sm 2xl:text-base font-blogBody
                                                    ${currID === _.url && !mobile ? 'text-orange-500 text-opacity-100 font-semibold underline' : '' }`}
                                >
                                    {_.name}
                                </Link>
                                {
                                    _.items !== undefined ? (
                                        <ul className='list-inside'>
                                            {
                                                _.items.map(sub => {
                                                    return (
                                                        <li className='pt-2 pl-10'>
                                                            <Link
                                                                activeClass="active" 
                                                                to={`${sub.url}`} 
                                                                spy={true}
                                                                smooth={true}
                                                                duration={500} 
                                                                className={`cursor-pointer hover:text-orange-500 hover:text-opacity-100 text-white text-opacity-80 text-sm 2xl:text-base font-blogBody
                                                                                ${currID === sub.url && !mobile ? 'text-orange-500 text-opacity-100 font-semibold underline' : ''}`}
                                                            >
                                                                {sub.name}
                                                            </Link>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    ) : (
                                        null
                                    )
                                }
                            </li>
                        );
                    })
                }
            </div>
        );
    }

    return (
        <div className={`${!mobile ? 'sticky top-10 2xl:top-20' : 'p-3 bg-trueGray-800 rounded max-w-full'}`}>
            <div className='p-2 md:pt-0'>
                <div className='text-white font-mono text-lg lg:text-xl 2xl:text-2xl'>Table of contents</div>
                <div className='TOC md:overflow-auto mt-1 md:mt-4'>
                    <ul className='flex flex-col items-start list-inside text-white text-opacity-80'>
                        {renderToC(activeID)}
                    </ul>
                </div>
                {
                    !mobile ? (
                        <ShareIcons isPost={true} url={currPath} className='mt-5' />
                    ) : null
                }
            </div>
        </div>
    );
}