import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from '../assets/Images/Joshdollar.png';
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';

function Navigation() {

    const location = useLocation();
    useEffect(() => {
        //Get All Locations
        let allLinks = document.getElementsByClassName("desktop-links")[0].children;
        //Reset selected styles
        for (let i = 0; i <= allLinks.length - 1; i++) {
            //The link being checked
            let link = allLinks[i].attributes[1].value

            //Where we currently are on the page
            let currentLink = location.pathname
            console.log(allLinks[i])
            if (allLinks[i].id === "active") {
                allLinks[i].removeAttribute("id")
            }
            if (currentLink === link) {
                console.log("TRUE")
                allLinks[i].setAttribute("id", "active")
            } else {
                console.log("FALSE")
            }
        }


    }, [location]);


    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleClose = () => setMenuOpen(false);


    return (
        <Navbar key={"md"} expand={"md"} className="mb-3 Navigation">
            <Container fluid>
                <Navbar.Brand id="navlogo" as={Link} to="/JoshDollars" href="#">
                    <img src={Logo} alt="Joshdollar logo" />
                    <h1>Joshdollar</h1>
                </Navbar.Brand>
                <Navbar.Toggle onClick={toggleMenu} aria-controls={`offcanvasNavbar-expand-${"md"}`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${"md"}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${"md"}`}
                    placement="end"
                    restoreFocus={false}
                    show={menuOpen}
                    onHide={handleClose}
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"md"}`}>
                            Joshdollar
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-center flex-grow-1 pe-3 navlinks">
                            <div className="desktop-links">
                                <Nav.Link id="active" className="link" as={Link} to="/JoshDollars" >Home</Nav.Link>
                                <Nav.Link className="link" as={Link} to="/JoshDollars/Introduction">Introduction</Nav.Link>
                                <Nav.Link className="link" as={Link} to="/JoshDollars/Resources">Resources</Nav.Link>
                                <Nav.Link className="link" as={Link} to="/JoshDollars/Participate">Participate</Nav.Link>
                                <Nav.Link className="link" as={Link} to="/JoshDollars/FAQ">FAQ</Nav.Link>
                            </div>
                            <div className="mobile-links">
                                <Nav.Link onClick={toggleMenu} className="link" as={Link} to="/JoshDollars" >Home</Nav.Link>
                                <Nav.Link onClick={toggleMenu} className="link" as={Link} to="/JoshDollars/Introduction">Introduction</Nav.Link>
                                <Nav.Link onClick={toggleMenu} className="link" as={Link} to="/JoshDollars/Resources">Resources</Nav.Link>
                                <Nav.Link onClick={toggleMenu} className="link" as={Link} to="/JoshDollars/Participate">Participate</Nav.Link>
                                <Nav.Link onClick={toggleMenu} className="link" as={Link} to="/JoshDollars/FAQ">FAQ</Nav.Link>
                            </div>
                            {/* onClick={(e) => changeActive(e)} */}
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default Navigation