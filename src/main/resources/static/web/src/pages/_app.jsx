import Home from "@components/Layout/Home"
import "@styles/normalize.css"
import "@styles/globalStyles.css"
import "../context/StudentContext"

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />

        </>
    )
}