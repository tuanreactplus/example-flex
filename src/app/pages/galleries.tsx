import React from "react";
import '../../App.css';

export const Galleries = () => {
    return (
        <div style={{ padding: '20px', maxWidth: '720px', margin: '0 auto'}}>
            <h1 style={{textTransform: 'uppercase'}}>galleries</h1>
            <div style={{display: 'flex',
                flexWrap: 'wrap',
                width: '100%'
                }}>
                <div className="galleries-column">
                    <div style={{padding: '0 5px'}}>
                        <img src="https://i.picsum.photos/id/648/200/300.jpg?hmac=yifVKULNJZhxFK2Oav2kDH8G4unUDKn-OebXR1bWOf4" style={{width: "100%"}}  alt={'galleries-img'}/>
                    </div>
                    <div style={{padding: '0 5px'}}>
                        <img src="https://i.picsum.photos/id/240/400/200.jpg?hmac=WR8B9fVeFIYdm6-za61WMJQXbze3zrbHRcEznXO6Pzg" style={{width: "100%"}} alt={'galleries-img'}/>
                    </div>

                    <div style={{padding: '0 5px'}}>
                        <img src="https://i.picsum.photos/id/880/100/300.jpg?hmac=q1tyBD30x0tUID9A8pzhKob1bv2hOb0V8KS1HSD_ay0" style={{width: "100%"}}  alt={'galleries-img'}/>
                    </div>
                </div>
                <div className="galleries-column">
                    <div style={{padding: '0 5px'}}>
                        <img src="https://i.picsum.photos/id/869/200/300.jpg?hmac=vfzqvPaYnRQQ4fRCoE1BlbCtj0z6DN7EBWnZO0rBrj0" style={{width: "100%"}}  alt={'galleries-img'}/>
                    </div>

                    <div style={{padding: '0 5px'}}>
                        <img src="https://i.picsum.photos/id/648/200/300.jpg?hmac=yifVKULNJZhxFK2Oav2kDH8G4unUDKn-OebXR1bWOf4" style={{width: "100%"}}  alt={'galleries-img'}/>
                    </div>

                    <div style={{padding: '0 5px'}}>
                        <img src="https://i.picsum.photos/id/240/400/200.jpg?hmac=WR8B9fVeFIYdm6-za61WMJQXbze3zrbHRcEznXO6Pzg" style={{width: "100%"}} alt={'galleries-img'}/>
                    </div>

                    <div style={{padding: '0 5px'}}>
                        <img src="https://i.picsum.photos/id/880/100/300.jpg?hmac=q1tyBD30x0tUID9A8pzhKob1bv2hOb0V8KS1HSD_ay0" style={{width: "100%"}}  alt={'galleries-img'}/>
                    </div>

                </div>
                <div className="galleries-column">
                    <div style={{padding: '0 5px'}}>
                        <img src="https://i.picsum.photos/id/240/400/200.jpg?hmac=WR8B9fVeFIYdm6-za61WMJQXbze3zrbHRcEznXO6Pzg" style={{width: "100%"}} alt={'galleries-img'}/>
                    </div>

                    <div style={{padding: '0 5px'}}>
                        <img src="https://i.picsum.photos/id/880/100/300.jpg?hmac=q1tyBD30x0tUID9A8pzhKob1bv2hOb0V8KS1HSD_ay0" style={{width: "100%"}}  alt={'galleries-img'}/>
                    </div>

                    <div style={{padding: '0 5px'}}>
                        <img src="https://i.picsum.photos/id/869/200/300.jpg?hmac=vfzqvPaYnRQQ4fRCoE1BlbCtj0z6DN7EBWnZO0rBrj0" style={{width: "100%"}}  alt={'galleries-img'}/>
                    </div>

                </div>
                <div className="galleries-column">
                    <div style={{padding: '0 5px'}}>
                        <img src="https://i.picsum.photos/id/240/400/200.jpg?hmac=WR8B9fVeFIYdm6-za61WMJQXbze3zrbHRcEznXO6Pzg" style={{width: "100%"}} alt={'galleries-img'}/>
                    </div>

                    <div style={{padding: '0 5px'}}>
                        <img src="https://i.picsum.photos/id/880/100/300.jpg?hmac=q1tyBD30x0tUID9A8pzhKob1bv2hOb0V8KS1HSD_ay0" style={{width: "100%"}}  alt={'galleries-img'}/>
                    </div>

                </div>
            </div>
        </div>
    )
}
