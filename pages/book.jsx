import axios from "axios"
import * as React from 'react'
import styled from "styled-components";
import useBookSearch from "../lib/hooks/useBookSearch";

const Cat = () => {
    const [query, setQuery] = React.useState('');
    const [pageNumber, setPageNumber] = React.useState(1);

    const { books, hasMore, loading, error } = useBookSearch(query, pageNumber);
                  //구조분해하면서                    //함수호출
    const observer = React.useRef(); //반값으로 남겨둠, 그리고 이후에 데이터를 넣어줌 (current)
    const lastBookElementRef = React.useCallback(
      (node) => {
        if(loading) return; //로딩중이면 아직 받아오지 않고 종료
        if(observer.current) observer.current.disconnect(); //커런트가 없기때문에 이 구문은 통과함 하지만 커런트가 생기고
        //마지막 요소가 잡히면 다음 인터섹팅이 이루어질때 삭제함
        observer.current = new IntersectionObserver((entries) => {
          if(entries[0].isIntersecting && hasMore) {
            setPageNumber((prevPageNumber) => prevPageNumber + 1);
          } //위코드는 현재 entries[0]을 감시하고 hasMore(데이터를 받아왔다면)
            //페이지넘버를 업데이트 함수로 갱신
        });
        if(node) observer.current.observe(node); //노드를 추적. (마지막 요소를 추적)
        // 추적이 끝난 후 useCallback이 다시 호출될때 
        //if (observer.current) observer.current.disconnect();구문을 통해 추적되지않음
      },
      [loading, hasMore] //로딩중이고 hasMore은 데이터로 받아오기만 하면 무조건 true가 되게 설계
    );
    // 함수 자체가 무거워서 콜백으로 메모제이션
    // loading, hasMore가 바뀔때마다 계속
    function handleSearch(e){
      setQuery(e.target.value);
      setPageNumber(1);
    }
    return(
      <Container>
        <input type="text" value={query} onChange={handleSearch}></input>
        {books.map((book, index) => {
          if (books.length === index + 1) { //마지막요소의 인덱스번호를 찾는거
            return (
              <div ref={lastBookElementRef} key={book}>
                {book}
              </div>
            );
          } else {
            return <div key={book}>{book}</div>; //일반요소
          }
        })}
        <div>{loading && "Loading..."}</div>
        <div>{error && "Error"}</div>
      </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div{
    padding: 20px;
  }
`



export default Cat;