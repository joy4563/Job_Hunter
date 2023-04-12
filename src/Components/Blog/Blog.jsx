import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='back mt-20 ml-40 mr-40'>
            <section className='first-section'>
                <div className='section-style'>
                    <h2 className='mb-5 font-bold'>What is custom hook?</h2>
                <p> React.Js provides lots of built-in hooks that you can use in your React apps. But besides them, you
                    can make
                    your own custom hooks and use it in your apps resulting in better readability and a reduced amount
                    of code.
                    Custom hooks are normal JavaScript functions whose names start with “use” and they may call other
                    hooks(built-in or custom).

                    The need for Custom Hooks: The main reason for which you should be using Custom hooks is to maintain
                    the
                    concept of DRY(Don’t Repeat Yourself) in your React apps. For example, suppose you have some logic
                    that
                    makes use of some built-in hooks and you need to use the logic in multiple functional components.
                    So, there
                    are two ways left for you — 1) write the same logic in each and every component (which violates the
                    concept
                    of DRY) and 2) create a separate function that wraps the logic inside it and then call it from those
                    components. The second option is undoubtedly a better choice as you have to write the logic only
                    once. Here,
                    the separate function you created is the custom hook. So, whenever you feel that you have a logic
                    that is to
                    be used in multiple functional components(hooks don’t work in class components), just create a
                    separate
                    custom hook for it and use it.</p>

                </div>
                
            </section>
            <section className='first-section'>
                <div className='section-style'>
                    <h2 className='mb-5 font-bold'>when should we use context api?</h2>
                <p> Context API: The Context API is a React structure that allows passing data from one component to
                    another
                    component without prop drilling.Well, before we know why context should be used, we need to know
                    what is a
                    component and what is props drilling.</p>

                <p> Component: When our application becomes too large, it becomes very difficult to manage that
                    application. To
                    make the application easier to manage, we break it down into smaller sections, that is called
                    components.
                    Reusability is one of the biggest features of creating components.</p>

                </div>
            </section>
            <section className='first-section'>
                <div className='section-style'>
                    <h2 className='mb-5 font-bold'>what is useRef and when should we use it?</h2>
                <p> Generally Ref is used when you don't want to component re-render again but you want value in some
                    form so
                    that you can use later. In layman term if you just want to play with dom related stuff like updating
                    width,
                    height etc.

                    Common example for using ref:
                    When you want to focus in and out your input without using state(as you dont want to render the
                    component
                    again)
                    Updating dynamically style(Fox ex: You create your accordian then you want to update heigh and show
                    transition when according open and close(if you dont want to show you can avoid this example))
                    If you want to create this type of utilities then you dont need to play with states you can do only
                    with
                    ref.</p>

                </div>
                
            </section>

            <section className='first-section mb-20'>

                <div className='section-style'>
                    <h2 className='mb-5 font-bold'>what is useMemo and when should we use it?</h2>
                <p> useMemo () is one of the most used React Hooks among developers. It takes a function and a
                    dependency array
                    as input and memoizes the value returned by that function. The specialty of useMemo () is that it
                    will only
                    recalculate the memoized value when one of the dependencies changes. This optimization helps avoid
                    costly
                    calculations on each render.
                    The useMemo is similar to useCallback hook as it accepts a function and a list of dependencies but
                    it
                    returns the memoized value returned by the passed function. It recalculated the value only when one
                    of its
                    dependencies change. It is useful to avoid expensive calculations on every render when the returned
                    value is
                    not going to change.</p>
                </div>
            </section>
        </div>
    );
};

export default Blog;