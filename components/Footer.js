import Link from "next/link";

const Footer = () => {
    return (
        <div className="container-fluid px-0 py-2 bg-light sticky-bottom border-top border-primary">
            <div className="row">
                <div className="col">
                    <p>
                        <Link href="/">Home</Link>&nbsp;&nbsp;
                        <Link href="/bid">Items</Link>&nbsp;&nbsp;
                        <Link href="/sell">Seller</Link>&nbsp;&nbsp;
                        <Link href="/privacy">Privacy</Link>&nbsp;&nbsp;
                        <Link href="/terms">Terms of Service</Link>&nbsp;&nbsp;
                        <Link href="/tutorials/seller">Seller Tutorial</Link>&nbsp;&nbsp;
                        <Link href="/tutorials/buyer">Buyer Tutorial</Link>&nbsp;&nbsp;
                        <Link href="/tutorials/commission">Commission</Link>&nbsp;&nbsp;
                        | &copy; {(new Date().getFullYear())} Junk or Treasure Inc. All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;