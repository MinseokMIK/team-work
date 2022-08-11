import {useSelector, useDispatch} from "react-redux";
import { useState } from "react";
import { addComment, delComment, changeComment } from "../redux/modules/Users";
import Button from "../components/Button";
import useInput from "../components/useInput";
import {v4 as uuidv4} from "uuid";


function Diary_writeAll() {
    const dispatch = useDispatch();

    const [newText, setNewText] = useState("")

    const comments = useSelector((state)=> state.userReducer)
    const RandomNum = uuidv4();
    const customTitle = useInput('');
    const customComment = useInput('');
    const customNewText = useInput('');
    const [isDone, setIsDone] = useState(false);

    const addTodoHandler = (e) => {
        e.preventDefault();
        if (customTitle === "") return; // 아무것도 입력하지 않았을 때 dispatch 하지 않음
        
        dispatch(
            addComment({
            id: RandomNum,
            title: customTitle.value,
            comment: customComment.value,
            isDone: isDone,
          })
        );
      };

    return (
        <div>
        <span>일기 댓글 페이지입니다.</span><br/>
        <br/>
        <input placeholder="이름(5자 이내)"  maxLength={5} type="text"  {...customTitle} /> 
        <input placeholder="댓글을 추가하세요.(100자 이내)"  maxLength={100}  type="text"  {...customComment} />
            <Button label="추가하기" 
                onClick={addTodoHandler}/>
        <br/>
        <br/>
        <div id="cards">                    
            {comments.map((comment) => {return(
                <>
                    <div key={comment.id}>
                    <h2>{comment.title}</h2>
                    <span>{comment.comment}</span>
                    
                    <Button label= '삭제하기' onClick={() => dispatch(delComment(comment.id))}/>
                    <Button label='수정하기' onClick={() =>{ setIsDone(isDone === true);}}
                        
                    /></div><br />
                    <div className="onOff" visible>
                        <input type='text' {...customNewText} />
                        <Button label = '수정완료' 
                        onClick={() => dispatch(changeComment({new: customNewText.value, id : comment.id}))}/>
                    </div>
                </>
            )})}
        </div>
    </div>
    );
};


export default  Diary_writeAll
