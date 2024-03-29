import { useEffect, useState } from 'react'
const useGoogleBooks = (query = 'Brandon Sanderson', category = 0) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const QUERY_CATEGORYS = ['intitle', 'inauthor', 'inpublisher', 'subject', 'isbn'];

    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            try {
                const response = await fetch(buildUrl(query, QUERY_CATEGORYS[category]));
                const jsonData = await response.json();
                setData(jsonData);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
                setData(null);
            }
        };

        if (category < 0 || category > QUERY_CATEGORYS.length - 1) {
            setError('Invalid category');
            setLoading(false);
        } else {
            fetchData();
        }

    }, [query, category]);

    return [data, loading, error];
};

const buildUrl = (query="Brandon Sanderson", category="intitle") => {
    return `https://www.googleapis.com/books/v1/volumes?q=${query}+${category}`;
};

export default useGoogleBooks;