import { Link } from "react-router-dom";

export const Menu = () => {
    return(
        <div style={{
            backgroundColor: '#FFF4A3',
            padding: 30,
        }}>
            <div style={{maxWidth: '720px', margin: '0 auto', display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
                gap: 20
            }}>
                <Link to="/" style={{ }}>Home</Link>
                <Link to="/docs">Docs</Link>
                <Link to="/galleries">Galleries</Link>
            </div>
        </div>
    )
}
