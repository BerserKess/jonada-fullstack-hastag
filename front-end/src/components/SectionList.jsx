import React from 'react'
import SectionItem from './SectionItem'
import { Link, useLocation } from 'react-router-dom'

const SectionList = ({ title, items, dataArray, path, idPath }) => {
    const { pathname } = useLocation();
    const inHome = pathname === "/";
    const finalItems = inHome ? items : Infinity;

    return (
        <section className="flex flex-col gap-4">
            <div className="flex justify-between">
                <p className="text-[#d2f9e0] text-2xl">{title} populares</p>
                {inHome ? (<Link to={path} className="text-[#d2f9e0] hover:text-[#79eca1] transition duration-300 cursor-pointer ">Mostrar tudo</Link>) : <></>}

            </div>
            <div className=" grid grid-cols-[repeat(auto-fit,minmax(172px,1fr))] gap-4">
                {dataArray.filter((item, index) => index < finalItems).map((dataItem, index) =>
                (
                    <SectionItem {...dataItem} key={`${title}-${index}`} idPath={idPath} />
                ))}
            </div>
        </section>
    )
}

export default SectionList