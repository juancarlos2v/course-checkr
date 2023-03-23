import Home from "@components/Layout/Home"
import "@styles/normalize.css"
import "@styles/globalStyles.css"
export default function MyApp({ Component, pageProps }) {
    return (
        <Home>
            <Component {...pageProps} />
        </Home>
    )
}