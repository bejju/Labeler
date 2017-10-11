import React from 'react'
import { default as Header } from 'components/Header/Header'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import { expect } from 'chai';

describe('(Component) Header', () => {
    let _wrapper = shallow(<Header />)
    it('Getting Logo', () => {
        const logo = _wrapper.find('img')
        expect(logo).to.exist
        expect(logo.find('.brand-logo')).to.exist
    })
    it('Renders a NavDropdown', () => {
        const NavDropdown = _wrapper.find('NavDropdown')
        expect(NavDropdown).to.exist
        expect(NavDropdown.find(MenuItem)).to.have.length(3)
    })
})