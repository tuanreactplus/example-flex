import { Link } from "react-router-dom";

export const Menu = () => {
    return(
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', gap: 5}}>
            <Link to="/">Home</Link>
            <Link to="/docs">Docs</Link>
            <Link to="/galleries">Galleries</Link>
        </div>
    )
}
