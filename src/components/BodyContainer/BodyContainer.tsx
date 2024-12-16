import "./BodyContainer.scss";

import { ReactNode } from "react";

interface BodyContainerProps {
    children: ReactNode | ReactNode[]
}

const BodyContainer = ({ children }: BodyContainerProps) => {
    return (
        <div className="bodyContainer">{children}</div>
    )
}

export default BodyContainer