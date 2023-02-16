import * as React from 'react'
import Layout from '../components/layout'
const AboutPage = () => {
    return (
        <Layout pageTitle="About">
            <p>Hi there, what's up?</p>
        </Layout>
    )
}

export const Head = () => (
    <>
        <title>About Me</title>
        <meta name ="description" content="Your description"/>
    </>
)
export default AboutPage