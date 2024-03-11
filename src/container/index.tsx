export const ContainerWrapper = ({ children }: { children: React.ReactElement }) => {
    return (
        <div className="container-wrapper">
            {children}
        </div>
    )
}