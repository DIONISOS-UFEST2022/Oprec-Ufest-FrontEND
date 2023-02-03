import { useDispatch, useSelector } from 'react-redux';
import { selectuserRole } from '../../../../../Redux/features/users/userRoleSlice';
import { pageChanged } from '../../../../../Redux/features/page/pageSlice';
import './HomeButton.scss';
import ButtonIMG from "./../../../../../Asset/Image/OtherIcon/Button.webp";
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function HomeButton() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userRole = useSelector(selectuserRole);
    function handler() {
        if (userRole === "user") {
            navigate('/join');
        } else {
            navigate('/login');
        }
    }
    return (
        <LazyMotion features={domAnimation}>
            <m.div className="HomeButton"
                onClick={handler}
                initial={{
                    scaleX: 0,
                }}
                animate={{
                    scaleX: 1,
                    transition: {
                        duration: 0.5,
                        ease: "easeInOut",
                        delay: 0.5,
                    }
                }}
            >
                <img className='background' src={ButtonIMG} />
                <span className="front">
                    LET'S GO SPARTA!
                </span>
            </m.div>
        </LazyMotion>
    )
}
