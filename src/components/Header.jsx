import Logo from "./Logo.jsx"

function Header(props) {
    const headerDc = props.menuHeader;
    return (
        <>
        <header>
            <figure><Logo /></figure>
            <nav>
                <ul>
                   {headerDc.map((item, index) => (
                   <li key={index}>
                   <a href="#">{item}</a>
                   </li>
                   ))}
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Header