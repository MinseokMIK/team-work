import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { addUser } from '../redux/modules/Users';
import { useNavigate } from 'react-router-dom';
import {addfetchUser} from '../redux/modules/Diary_notes'
import {v4 as uuidv4} from "uuid";
import Button from '../components/Button';



function Diary_write() {
  const [name, setName] = useState({
    userName : ''
  });
  const [title, setTitle] = useState({
    userTitle : ''
  });
  const [contents, setContents] = useState({
    userContents : ''
  });

 

  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  
  const titlealert = () => {
    if(title.userTitle.length < 10 ){
      alert('10글자 이상')
    } 
  } 

  return (
    <form onSubmit={(event) => {event.preventDefault();
     
      dispatch(addfetchUser({id: uuidv4(), name,title,contents}));
      }}className="box">
      <div className="boxname">
        작성자
          <input
            placeholder="작성자의 이름을 입력해주세요.(5자 이내)"
            required
            onChange={(event) => {
            const { value } = event.target;
            setName({ ...name, userName:value });
            }}
            />
      </div>
      <div className="boxtitle">
        제목
        <input
          minlength={10}
          placeholder="제목을 입력해주세요.(10자 이상)"
          required
          value={title.userTitle}
          onChange={(event) => {
            const { value } = event.target;
            setTitle({ ...title, userTitle:value });
          }}      
        />
   
        
      </div>
      <div className="boxcomment">
        내용
        <input
          placeholder="내용을 입력해주세요.(10자 이상)"
          required
          onChange={(event) => {
            const { value } = event.target;
            setContents({ ...contents, userContents:value });
          }}
          
        />
  
      </div>
      <Button label = '추가하기' type="submit" onClick={titlealert} />

      <Button label =  "일기보러가기" type="button" onClick={() => navigate('../diarywriteAll')}/>
        
    </form>
  );
}

export default Diary_write;