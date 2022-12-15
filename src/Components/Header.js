import React from 'react'
import { Navbar, Nav, Container, NavDropdown, Image, Button } from 'react-bootstrap'
import logo from '../Images/logo.png'
import lang from '../Images/lang.png'
import './Header.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const titleImage = (
    <Image
        src={lang}
        alt='translation'
        width='30'
    />
);

const lngs = {
    ru: { nativeName: 'Русский' },
    en: { nativeName: 'English' }
};

function Header() {
    const { t, i18n } = useTranslation();
    return (
        <>
            <Navbar collapseOnSelect expand="md" bg="light" variant="light" className='Box'>
                <Container >
                    <Navbar.Brand>
                        <Link to="/">
                            <img
                                src={logo}
                                height="30"
                                width="auto"
                                className="align-top"
                                alt="logo"
                            />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-bar" />
                    <Navbar.Collapse id="responsive-nav-bar" >
                        <Nav className="me-auto">
                            <Nav.Link><Link to="/" style={{ textDecoration: 'none', color: 'grey' }}>
                                {t('navB_Main')}
                            </Link></Nav.Link>
                            <Nav.Link><Link to="list" style={{ textDecoration: 'none', color: 'grey' }}>
                                {t('navB_List')}
                            </Link></Nav.Link>
                        </Nav>
                        <NavDropdown title={titleImage} id="collasible-nav-dropdown">
                            <NavDropdown.Item style={{
                                display: 'flex',
                                flexDirection: 'column',
                                flexWrap: 'wrap',
                                gap: '5px'
                            }}>
                                {Object.keys(lngs).map((lng) => (
                                    <Button type="submit" variant="secondary" key={lng} onClick={() => i18n.changeLanguage(lng)} disabled={i18n.resolvedLanguage === lng}>{lngs[lng].nativeName}</Button>
                                ))}
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default Header;