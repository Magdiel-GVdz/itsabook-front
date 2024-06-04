import { useEffect, useState } from "react";

const useGoogleBooks = (query = "Brandon Sanderson", category = 0) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const QUERY_CATEGORIES = ["intitle", "inauthor"];

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(
          buildUrl(query, QUERY_CATEGORIES[category])
        );
        const jsonData = await response.json();
        setData({
          query,
          category: QUERY_CATEGORIES[category],
          data: jsonData.items.map((item) => ({
            id: item.id,
            publisher: item.volumeInfo.publisher ?? "Publisher not available",
            publishedDate:
              item.volumeInfo.publishedDate ?? "Date not available",
            pageCount: item.volumeInfo.pageCount ?? 0,
            language: item.volumeInfo.language ?? "Language not available",
            previewLink: item.volumeInfo.previewLink ?? "",
            averageRating: item.volumeInfo.averageRating ?? 0,
            ratingsCount: item.volumeInfo.ratingsCount ?? 0,
            categories: item.volumeInfo.categories ?? [],
            title: item.volumeInfo.title ?? "Title not available",
            subtitle: item.volumeInfo.subtitle ?? "",
            isbn: item.volumeInfo.industryIdentifiers?.[0]?.identifier ?? "",
            isbn13: item.volumeInfo.industryIdentifiers?.[1]?.identifier ?? "",
            authors: item.volumeInfo.authors ?? [],
            description:
              item.volumeInfo.description ?? "Description not available",
            image: item.volumeInfo.imageLinks?.thumbnail ?? "",
            link: item.volumeInfo.infoLink ?? "",
          })),
          totalItems: jsonData.totalItems,
        });
        setLoading(false);
        setError(null);
      } catch (error) {
        setError(error);
        setLoading(false);
        setData(null);
        console.log(error);
      }
    };

    if (category < 0 || category >= QUERY_CATEGORIES.length) {
      setError("Invalid category");
      setLoading(false);
    } else {
      fetchData();
    }
  }, [query, category]);

  return [data, loading, error];
};

const buildUrl = (query = "Brandon Sanderson", category = "intitle") => {
  return `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}+${category}`;
};

export default useGoogleBooks;
