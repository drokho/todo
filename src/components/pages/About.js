import React from 'react';

function About() {
    return(
        <React.Fragment>
            <div className="content">
                <h1>About</h1>
                <p>This is a TodoList app v1.1.0. </p>
                <p>State persists in local storage so state can persist on a single device.</p>
                <p>Added drag and drop reordering (click/tap and hold for 300ms).</p>
                <p>Items are now editable.</p>
            </div>
        </React.Fragment>
    )
}

export default About;