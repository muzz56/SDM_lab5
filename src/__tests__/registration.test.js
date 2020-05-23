import React from 'react';
import RegisterForm from "../registrationForm/RegisterForm";
import "dom-testing-library/extend-expect";
import { mount } from 'enzyme';


import { render, Simulate, wait } from "react-testing-library";
// import JokeGenerator from "../jokeGenerator";
// import * as axios from "axios";
// import MockAxios from "axios-mock-adapter";

// const mock = new MockAxios(axios, {delayResponse: Math.random()*500});
// afterAll(() => mock.restore());

test("gender", () =>{
    const{getByLabelText} = render(
        <RegisterForm text="Gender:"/>
    );

    expect(getByLabelText("Gender:")).toHaveTextContent(
        "Gender:"
    );
})

test("age", () =>{
    const{getByLabelText} = render(
        <RegisterForm text="Age:"/>
    );

    expect(getByLabelText("Age:")).toHaveTextContent(
        "Age:"
    );
})

// it('renders email input with label given the type', () => {
//     const wrapper = mount(<TextInput type="emailid" name="emailid" label="emailid" />);
//     const label = wrapper.find('label');
//     expect(label).toHaveLength(1);
//     expect(label.prop('htmlFor')).toEqual('emailid');
//     expect(label.text()).toEqual('emailid');
//     const input = wrapper.find('input');
//     expect(input).toHaveLength(1);
//     expect(input.prop('type')).toEqual('emailid');
//     expect(input.prop('name')).toEqual('emailid');
//     expect(input.prop('id')).toEqual('emailid');
//   });

// test("'JokeGenerator' component fetches a random joke and renders it", async() =>{
//     mock.onGet().replyOnce(200,{
//         value:{
//             joke: "Really funny joke!"
//         }
//     });


//      const {getByText,queryByTestId,queryByText} = render(<JokeGenerator/>);

//     expect(getByText("You haven't loaded any joke yet!")).toBeInTheDOM();

//     Simulate.click(getByText("Load a random joke"));

//     expect(queryByText("You haven't loaded any joke yet!")).not.toBeInTheDOM();

//     expect(queryByText("Loading...")).toBeInTheDOM();

//     await wait(() => expect(queryByText("Loading...")).not.toBeInTheDOM());
//      expect(queryByTestId("joke-text")).toBeInTheDOM();
// })


// test("'JokeGenerator' component fetches a random joke and renders it", () =>{

//     const {getByText,queryByTestId,queryByText} = render(<JokeGenerator/>);

//     expect(getByText("You haven't loaded any joke yet!")).toBeInTheDOM();

//     Simulate.click(getByText("Load a random joke"));

//     expect(queryByText("You haven't loaded any joke yet!")).not.toBeInTheDOM();

//     expect(queryByText("Loading...")).toBeInTheDOM();
// })
