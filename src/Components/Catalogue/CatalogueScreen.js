import React, { useEffect, useState } from 'react'
import { Catalogue } from './Catalogue'
import { FilterCatalogue } from './FilterCatalogue'

import {data} from './dataCatalogue'

export const CatalogueScreen = () => {

    const [filter, setFilter] = useState('')
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const dataTemp = []

        data.forEach(post => {
            if(post.title.toLowerCase().includes(filter.toLowerCase())){
                dataTemp.push(post)
            }
        })

        setPosts(dataTemp)
    }, [filter])

    return (
        <div>
            <FilterCatalogue setFilter={setFilter}/>
            <h1>{posts.length}/{data.length}</h1>
            <Catalogue posts={posts}/>
        </div>
    )
}
