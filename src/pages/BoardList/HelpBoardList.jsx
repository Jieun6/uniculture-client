import {Pagination} from "@mui/material";
import {Card} from "../../components/Card/Card";
import {useEffect, useState} from "react";
import axios from "axios";
import "./boardList.scss";
import moment from "moment";

const HelpBoardList = () => {
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [boardList, setBoardList] = useState([]);

    const getToken = () => {
        return localStorage.getItem('accessToken'); // 쿠키 또는 로컬 스토리지에서 토큰을 가져옴
    };

    const fetchHelpBoardData = async (page) => {
        console.log('fetchBoardData start');
        try {
            const token = getToken(); // 토큰 가져오기
            // const page_number = searchParams.get("page");
            const response = await axios.get(`/api/post/help?page=${page}&size=8`, {
                headers: {
                    Authorization: `Bearer ${token}` // 헤더에 토큰 추가
                }
            });
            console.log('서버 응답: ', response);
            console.log('response.status: ', response.status);
            // 게시물 등록 성공
            if (response.status === 200) {
                console.log(response.data.content);
                setBoardList(response.data.content);
                console.log(`totalElements : ${response.data.totalElements}`);
                setPageCount(Math.ceil( response.data.totalElements / 8));
                console.log("200 성공");
            }

        } catch (error) { // 실패 시
            if(error.response.status === 401) {
                console.log("401 오류");
            }
            else {
                console.log("서버 오류 입니다.");
                alert(error.response.data);
            }
        }
    };

    useEffect(() => {
        fetchHelpBoardData(currentPage);
    }, [currentPage])

    const changePage = (value) => {
        setCurrentPage(value);
    }

    return (
        <div className="boardList-wrapper">
            <div className="boardList-body">
                {boardList.map(post => (
                    <Card key={post.postId} board_id={post.postId} title={post.title} content={post.content} username={post.writerName}
                          date={moment(post.createDate).add(9, "hour").format('YYYY-MM-DD')}></Card>
                ))}
            </div>
            <div className="boardList-footer">
                <Pagination
                    page={currentPage+1}
                    count={pageCount} size="large"
                    onChange={(e, value) => {
                         // window.location.href = `/?page=${value-1}`;
                        changePage(value-1);
                    }}
                    showFirstButton showLastButton
                />
            </div>
        </div>
    )
}
export default HelpBoardList;