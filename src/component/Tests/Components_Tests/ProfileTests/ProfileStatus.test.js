import React from "react";
import renderer from 'react-test-renderer';
import TestRenderer from 'react-test-renderer';
import ProfileStatus from "../../../Profile/ProfileInfo/ProfileStatus/ProfileStatusHook";
import {render} from "@testing-library/react";

describe('Profile status tester <ProfileStatusText/> ', () => {

    test('status must be displayed', () => {
        const component = TestRenderer.create(<ProfileStatus status = 'New Status'/>)
        const root = component.root;
        let ProfileStatusText = root.findByType("p")
        expect(ProfileStatusText.children.length).toBe(1)
    })

    test('status text must be correct ', () => {
        const component = TestRenderer.create(<ProfileStatus status = 'New Status'/>)
        const root = component.root;
        let ProfileStatusText = root.findByType("p")
        expect(ProfileStatusText.children[0]).toBe('New Status')
    })

   test ('ProfileStatusInput must be displayed instead of ProfileStatusText ', () =>{
       const component = TestRenderer.create(<ProfileStatus status = 'New Status'/>)
       const root = component.root;
       let ProfileStatusText = root.findByType("p")
       ProfileStatusText.props.onDoubleClick();
       let ProfileStatusInput = root.findByType("input")
       expect(ProfileStatusInput.props.value).toBe('New Status')
   })


})