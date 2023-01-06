import React from "react";
import '../../App.css';


export const Home = () => {
    return(
        <div>
            <div className={'step-wrapper'}>
                <div className={'step-item'}>
                    <p>step 1</p>
                    <image href={'https://i.picsum.photos/id/313/800/500.jpg?hmac=a1zLLrPwI1Q3bYVglj-mWq0zkLpFDn_Gf247wjPmd3E'} />
                </div>
                <div className={'step-item'}>
                    <p>step 2</p>
                    <image href={'https://i.picsum.photos/id/1016/800/500.jpg?hmac=2SKjg64v1YUDxwrvm-L3ds1Sa-J7J54x54tGjebh4ko'} />
                </div>
                <div className={'step-item'}>
                    <p>step 3</p>
                    <image href={'https://i.picsum.photos/id/79/800/500.jpg?hmac=gAkIg8oF6VR2o9z770rtO-QT2WFsUgnho1oVYWBd9dQ'} />
                </div>
            </div>
        </div>
    )
}
