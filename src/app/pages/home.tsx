import React from "react";
import '../../App.css';


export const Home = () => {
    return(
        <div style={{ paddingTop: '30px', maxWidth: '720px', margin: '0 auto'}}>
            <div className={'step-wrapper'}>
                <div className={'step-item'}>
                    <p>step 1</p>
                    <div style={{display: 'flex', width: '100%', alignItems: 'center'}}>
                        <div style={{width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <img src="https://i.picsum.photos/id/313/800/500.jpg?hmac=a1zLLrPwI1Q3bYVglj-mWq0zkLpFDn_Gf247wjPmd3E"  style={{width: "100%"}}  alt={''}/>
                        </div>
                        <div style={{ width: '30px',display: 'flex', justifyContent: 'center'}}><b>{'->'}</b></div>
                    </div>
                </div>
                <div className={'step-item'}>
                    <p>step 2</p>
                    <div style={{display: 'flex', width: '100%', alignItems: 'center'}}>
                        <div style={{width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <img src={'https://i.picsum.photos/id/1016/800/500.jpg?hmac=2SKjg64v1YUDxwrvm-L3ds1Sa-J7J54x54tGjebh4ko'} style={{width: "100%"}}  alt={''}/>
                        </div>
                        <div style={{ width: '30px',display: 'flex', justifyContent: 'center'}}><b>{'->'}</b></div>
                    </div>
                </div>
                <div className={'step-item'}>
                    <p>step 3</p>
                    <img src={'https://i.picsum.photos/id/79/800/500.jpg?hmac=gAkIg8oF6VR2o9z770rtO-QT2WFsUgnho1oVYWBd9dQ'} style={{width: "92%"}}  alt={''}/>
                </div>
            </div>
        </div>
    )
}
