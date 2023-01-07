import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <div style={{ borderTop: '1px solid #ebebeb'}}>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '20px', maxWidth: '720px', margin: '0 auto'}}>
                <div style={{display: 'flex', flexDirection: 'column', gap: 5}}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/docs">Documents</Link></li>
                    <li><Link to="/galleries">Galleries</Link></li>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: 5}}>
                    <p style={{padding: 0, margin: 0}}><b>Nguyễn Trọng Tuân</b></p>
                    <p>Division 1 - React Plus Joint Stock Company</p>
                </div>
            </div>
        </div>
    )
}
