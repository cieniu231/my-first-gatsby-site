import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
const AboutPage = () => {
    return (
        <Layout pageTitle="About">
            <p>Hi there, what's up?</p>
        </Layout>
    )
}

export const Head = () => <Seo title={"About Me"}></Seo>

export default AboutPage