import axios from 'axios';
import * as React from 'react'

const useBookSearch = (query, pageNumber) => {
	const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [hasMore, setHasMore] = React.useState(false);
    const [books, setBooks] = React.useState([]);

    React.useEffect(()=>{
        setBooks([]);
    },[query]); // 쿼리가 바뀌면 빈배열로 초기화

    React.useEffect(()=>{
        // 여기서 데이터 패칭 다시 하는 것
        setLoading(true);
        setError(false);
        let cancel;
        axios
        .get("http://openlibrary.org/search.json", {
            params: { q: query, page: pageNumber },
            cancelToken: new axios.CancelToken((c) => (cancel = c)),
        })
        .then((res) => {
            setBooks((prevBooks) => {
                // 업데이트 함수
                return [
                    ...new Set([
                        // 중복제거
                        ...prevBooks, //업데이트 함수의 초기 값
                        ...res.data.docs.map((book) => book.title), //내용을 추가
                    ]),
                ];
            });
            setHasMore(res.data.docs.length > 0);
            setLoading(false);
        })
        .catch((e) => {
            if (axios.isCancel(e)) return;
            setError(true);
        });
        return () => cancel();
    }, [query, pageNumber]);
    return {loading, error, books, hasMore};
}

export default useBookSearch;