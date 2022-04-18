import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog'>
            <div>
                <h3>Difference between Authentication and Authorization</h3>
                <p>Both Authentication and Authorization area unit utilized in respect of knowledge security that permits the safety on an automatic data system. <br></br>
                The difference between authentication and authorization:
                1. In authentication process, the identity of users are checked for providing the access to the system.
                <br></br>
                While in authorization process, person’s or user’s authorities are checked for accessing the resources.
                <br></br>
                2. In authentication process, users or persons are verified.
                <br></br>
                While in this process, users or persons are validated.
                <br></br>
                3. It needs usually user’s login details.
                <br></br>
                While it needs user’s privilege or security levels.
                </p>
            </div>

            <div>
                <h3>Why do we use Firebase authentication? And </h3>
                <p>You can use Firebase Authentication to allow users to sign in to your app using one or more sign-in methods, including email address and password sign-in, and federated identity providers such as Google Sign-in and Facebook Login.
                    <br></br>
                    Password-based authentication. Passwords are the most common methods of authentication. ...
Multi-factor authentication. ...
Certificate-based authentication. ...
Biometric authentication. ...
Token-based authentication.

                </p>
            </div>

            <div>
                <h3>What other services does firebase provide other than authentication</h3>
                <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend.</p>
            </div>
        </div>
    );
};

export default Blog;