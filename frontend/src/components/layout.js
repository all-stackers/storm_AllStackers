import Navbar from "./navbar"

const Layout = ({ children }) => (
    <div className="flex flex-col">
        <Navbar />
        <div className="w-full h-[100vh] flex-grow box-border">
            {children}
        </div>
    </div>
)

export default Layout