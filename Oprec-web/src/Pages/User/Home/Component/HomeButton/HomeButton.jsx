import { useDispatch, useSelector } from 'react-redux';
import { selectuserRole } from '../../../../../Redux/features/users/userRoleSlice';
import { pageChanged } from '../../../../../Redux/features/page/pageSlice';
import './HomeButton.scss';
export default function HomeButton() {

    const dispatch = useDispatch();
    const userRole = useSelector(selectuserRole);
    // handler
    function handler() {
        dispatch(pageChanged('join'))
    }
    return (
        <button className="HomeButton"
            onClick={handler}
        >
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className="front">
                LET'S GO SPARTA!
            </span>
        </button>
    )
}
