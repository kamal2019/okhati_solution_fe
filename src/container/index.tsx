import { Toaster } from "react-hot-toast"

export const ContainerWrapper = ({ children }: { children: React.ReactElement }) => {
    return (
        <div className="container-wrapper">
            {children}
            <Toaster position="top-right" />
        </div>
    )
}