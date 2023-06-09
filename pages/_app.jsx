import Layout from "@components/Layout"
import "../normalize.css"
export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}