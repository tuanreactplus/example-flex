import {Menu} from "../elements/Menu";
import {FC, PropsWithChildren, ReactNode} from "react";
import { Outlet } from "react-router-dom";

type LayoutProps = {
    children?: ReactNode
}
export const Layout:FC<PropsWithChildren<LayoutProps>> = ({children}) => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Menu />
            <Outlet />
        </div>


    )
}
