import React from 'react'
import { shallow } from 'enzyme'
import TestUtils from 'react-addons-test-utils'
import CoreLayout from 'layouts/CoreLayout/CoreLayout'
import { expect } from 'chai';

function shallowRender(component) {
    const renderer = TestUtils.createRenderer()

    renderer.render(component)
    return renderer.getRenderOutput()
}
function shallowRenderWithProps(props = {}) {
    return shallowRender(<CoreLayout {...props} />)
}

describe('(Component) CoreLayout', () => {
    let _component
    let _props = {
        loading: true
    }
    let _child
    // let _wrapper = shallowRenderWithProps(_props)

    // it('Renders Children', () => {
    //     expect(_wrapper.find('.app-body')).to.have.length(1);
    // })
    // it('should contains loading ', () => {
    //     if (_props.loading) {
    //         expect(_wrapper.find('.loading')).to.have.length(1);
    //     }
    // })
    it('renders children when passed in', () => {
        const wrapper = shallow((
            <CoreLayout>
                <div className="unique" />
            </CoreLayout>
        ));
        expect(wrapper.contains(<div className="unique" />)).to.equal(true);
    });
})