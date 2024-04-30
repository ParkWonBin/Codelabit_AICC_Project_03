import { useDispatch, useSelector } from "react-redux";
import { setLoginUser } from "./../store.js";

function Cart() {
    const { username } = useSelector(state => state.user);
    const dispatch = useDispatch();

    return (
        <button onClick={() => {
            dispatch(setLoginUser('newUsername'));
        }}>버튼임</button>
    );
}
