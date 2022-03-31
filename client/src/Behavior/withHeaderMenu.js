import Header from "../Components/Header";

const withHeaderMenu = (Component) => {
    const WrappedComponent = () => {
        return (
            <>
                <Header/>
                <Component/>
            </>
        )
    }
    return WrappedComponent;
}


export default withHeaderMenu;

