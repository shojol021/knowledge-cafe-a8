import React from 'react';

const Questions = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 mx-6 my-4 gap-6'>
            <div className='border border-purple-200 rounded-lg bg-purple-100 p-2'>
                <h3 id='id1' className='text-lg font-bold text-purple-800'>Difference between props and state?</h3>
                <h5><p><span className='font-bold text-gray-600'>Answer: </span>In React JS, the Props and State are commonly used terms, In my understanding, Props(Properties) are passed to a component as read-only data from its parent component. It is immutable and unidirectional</p>
                <p>On the otherhand State is used to update the or manage data by setState method. When the state changes, the component will re-render to reflect the new state. That means State is mutable</p>
                </h5>
            </div>
            <div className='border border-purple-200 rounded-lg bg-purple-100 p-2'>
                <h3 id='id2' className='text-lg font-bold text-purple-800'>How does useState works in react?</h3>
                <h5><span className='font-bold text-gray-600'>Answer: </span>In React, the useState by default provides a variable and a function. The purpose of the function is to change the value or state of that variable. And innitially in a bracket of useState, we can set the initial value of that variatible.</h5>
            </div>
            <div className='border border-purple-200 rounded-lg bg-purple-100 p-2'>
                <h3 id='id3' className='text-lg font-bold text-purple-800'>What are the purposes of useEffect other than fetching data?</h3>
                <h5><span className='font-bold text-gray-600'>Answer: </span>We can set dependency to re-render the a specific area based on some data changes(dependency). Some other common users are Subscribing and unsubscribing to events, Managing timers and intervals, Updating global state, Triggering side effects</h5>
            </div>
            <div className='border border-purple-200 rounded-lg bg-purple-100 p-2'>
                <h3 id='id4' className='text-lg font-bold text-purple-800'>How does react work?</h3>
                <h5><span className='font-bold text-gray-600'>Answer: </span>We write HTML code to buld webpage, and then the browser convert it to DOM to paint(render) the output. On the other hand React manages everything in virtual DOM using Javascript XML and paint only once and in a specific area when everything is ready. This is more efficient in lots of cases, because it paint to the root element only once, not everytime</h5>
            </div>
        </div>
    );
};

export default Questions;