import { Textfit } from 'react-textfit';
import './Screen.css';

//Textfit mode=single - makes it single line
const Screen = ({value}) => {
    return (
        <Textfit className="screen" mode="single" max={70}>
            {value}
        </Textfit>
    );
};

export default Screen;