import React from 'react'

// Child Component
function Child(props) {
    return <h2>Hello, {props.name}!</h2>;
}

// Parent Component
function Parent() {
    return (
        <div>
            <Child name="Alice" />
            <Child name="Bob" />
        </div>
    );
}

export default Parent;
