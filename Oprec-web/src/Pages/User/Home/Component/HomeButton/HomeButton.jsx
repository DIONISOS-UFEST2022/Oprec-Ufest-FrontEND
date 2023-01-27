import { useDispatch, useSelector } from 'react-redux';
import { selectuserRole } from '../../../../../Redux/features/users/userRoleSlice';
import { pageChanged } from '../../../../../Redux/features/page/pageSlice';
import './HomeButton.scss';

export default function HomeButton() {
    const dispatch = useDispatch();
    const userRole = useSelector(selectuserRole);
    // handler
    function handler() {
        setTimeout(() => {
            if (userRole === "guest") {
                dispatch(pageChanged("login"));
            } else {
                dispatch(pageChanged("join"));
            }
        }, 200);
    }
    return (
        <button className="HomeButton" onTouchEnd={handler} onMouseUp={handler}>
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className="front">
                LET'S GO SPARTA!
            </span>
        </button>
    )
}
