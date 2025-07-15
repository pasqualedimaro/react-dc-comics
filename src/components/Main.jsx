import comics from "../data/comics"
import Product from "./productCard"

function Main() {
    console.log(comics);
    return (
        <main>
            <Product product={comics} />
        </main>
    )
}

export default Main