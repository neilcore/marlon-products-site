import React, { useEffect, useState } from 'react'

import NewsBlogView from "./NewsBlogView"

function NewsBlogContainer() {
    const [cards, setCrads] = useState<any[]>([
        {
            "key": "1",
            "title": "Article 1",
            "description": "Lorem ipsum dolor sit amet consectetur. Quisque scelerisque turpiselit vitae in vulputate imperdiet. Iaculis nisl in in dolor gravida. Duis quis laoreet quam suspendis."
        },
        {
            "key": "2",
            "title": "Article 2",
            "description": "Lorem ipsum dolor sit amet consectetur. Quisque scelerisque turpiselit vitae in vulputate imperdiet. Iaculis nisl in in dolor gravida. Duis quis laoreet quam suspendis."
        },
        {
            "key": "3",
            "title": "Article 3",
            "description": "Lorem ipsum dolor sit amet consectetur. Quisque scelerisque turpiselit vitae in vulputate imperdiet. Iaculis nisl in in dolor gravida. Duis quis laoreet quam suspendis."
        },
        {
            "key": "4",
            "title": "Article 4",
            "description": "Lorem ipsum dolor sit amet consectetur. Quisque scelerisque turpiselit vitae in vulputate imperdiet. Iaculis nisl in in dolor gravida. Duis quis laoreet quam suspendis."
        },
        {
            "key": "5",
            "title": "Article 5",
            "description": "Lorem ipsum dolor sit amet consectetur. Quisque scelerisque turpiselit vitae in vulputate imperdiet. Iaculis nisl in in dolor gravida. Duis quis laoreet quam suspendis."
        },
        {
            "key": "6",
            "title": "Article 6",
            "description": "Lorem ipsum dolor sit amet consectetur. Quisque scelerisque turpiselit vitae in vulputate imperdiet. Iaculis nisl in in dolor gravida. Duis quis laoreet quam suspendis."
        },
    ]);

    const [filters, setFilters] = useState<string>("");


    useEffect(()=> {
        return () => {
            setFilters("");
        }
    }, [])

    console.log(`filters:   ${filters}`);

    return (
        <NewsBlogView cards={cards} setFilters={setFilters} />
    )
}

export default NewsBlogContainer