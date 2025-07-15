import Logo from "./Logo.jsx"

function Header() {
    return (
        <>
        <header>
            <figure><Logo /></figure>
            <nav>
                <ul>
                    <li><a href="#">CHARACTER</a></li>
                        <li><a href="#">COMICS</a></li>
                        <li><a href="#">MOVIES</a></li>
                        <li><a href="#">TV</a></li>
                        <li><a href="#">GAMES</a></li>
                        <li><a href="#">COLLECTIBLES</a></li>
                        <li><a href="#">VIDEOS</a></li>
                        <li><a href="#">FANS</a></li>
                        <li><a href="#">NEWS</a></li>
                        <li><a href="#">SHOP</a></li>
                </ul>
            </nav>
        </header>
            

        </>
    )
}

export default Header