import { useDispatch, useSelector } from 'react-redux';
import { selectuserRole } from '../../../../../Redux/features/users/userRoleSlice';
import { pageChanged } from '../../../../../Redux/features/page/pageSlice';
import './HomeButton.scss';
import ButtonIMG from "./../../../../../Asset/Image/Other Icon/Button.webp";
import { LazyMotion, domAnimation, m } from 'framer-motion';

export default function HomeButton() {
    const dispatch = useDispatch();
    const userRole = useSelector(selectuserRole);
    function handler() {
        dispatch(pageChanged('join'))
    }
    return (
        <LazyMotion features={domAnimation}>
            <m.div className="HomeButton"
                onClick={handler}
                initial={{
                    scaleX: 0.1,
                }}
                animate={{
                    scaleX: 1,
                    transition: {
                        duration: 0.5,
                        ease: "easeInOut",
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
