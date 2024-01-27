import { isBrowser} from "react-device-detect"
import {useMediaQuery} from 'react-responsive'
export const ContainerFullScreen = (props) => {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <div className={isMobile? "container" : "container-fluid"} style={props.style ?? props.style}>
            {props.children}
        </div>
    )
}
export const Container = (props) => {
    return (
        <div className={isBrowser? "container" : "container-fluid"} style={props.style ?? props.style}>
            {props.children}
        </div>
    )
}