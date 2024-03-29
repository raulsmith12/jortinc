/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const Header = ({ loggedIn, profile }) => {

    const logout = () => {
        localStorage.clear();
        router.push("/");
    }

    return (
        <nav className="navbar navbar-expand-lg bg-light sticky-top border-bottom border-primary">
            <div className="container">
                <Link href="/" className="navbar-brand">
                    <h3>
                        <img src="https://jortinc.com/img/jort-logo.png" height="50" alt="Junk or Treasures Logo" />
                        Junk or Treasure
                    </h3>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 justify-content-end">
                        {!loggedIn ? (
                            <li className="nav-item px-1">
                                <Link href="/" className="nav-link">Log In</Link>
                            </li>
                        ) : (
                            <>
                                <li className="nav-item px-1">
                                    <span className="nav-link">Hello, {profile.first_name}!</span>
                                </li>
                                <li className="nav-item px-1">
                                    <Link href="/bid" className="nav-link">Bid</Link>
                                </li>
                                <li className="nav-item px-1">
                                    <Link href="/sell" className="nav-link">Sell</Link>
                                </li>
                                <li className="nav-item px-1">
                                    <Link href="/profile" className="nav-link">Profile</Link>
                                </li>
                                <li className="nav-item px-1">
                                    <a href="" className="nav-link" onClick={() => logout()}>Log Out</a>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;