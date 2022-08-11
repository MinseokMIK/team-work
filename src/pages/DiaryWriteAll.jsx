import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { fetchUser, delfetchUser} from "../redux/modules/Diary_notes";

import Button from "../components/Button";


function Diary_writeAll() {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchUser());
    }, [dispatch]);
    
    const users = useSelector((state)=>state.Diary_note.users) 
   //console.log(users)
    const navigate = useNavigate();
    
    return (
        <div >
            {users?.length > 0 && 
                users.map((users) => (
                    <div key={users.id}>
                        <p>{users.name}</p>
                        <p>{users.title}</p>
                        <p>{users.contents}</p>
                        <Button label='자세히보기' onClick={()=>navigate(`/diarydetail/${users.id}`)}/>
                        <Button label='삭제' onClick={() => dispatch(delfetchUser(users.id))}></Button>
                    </div>
                ))
            }
        </div>
    )
}


export default  Diary_writeAll