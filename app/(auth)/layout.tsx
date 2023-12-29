const AuthLayout = ({children} : {
    children:React.ReactNode
}) => {
    return ( 
        <div className="bg-white-400 h-full">
            {children}
        </div>
     );
}
 
export default AuthLayout;