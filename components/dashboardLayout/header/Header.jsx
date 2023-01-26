import Profile from "./Profile";

const Header = () => {
    return (
        <div className="fixed top-0 right-0 left-0 h-16 bg-white shadow-md flex items-center">
            <Profile/>
        </div>
    );
}

export default Header;