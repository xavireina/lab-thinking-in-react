const ProductRow = ({ price, inStock, name }) => {

    return(
            <tr>
                <td style={{ color: inStock ? '' : 'red' }}>{name}</td>
                <td>{price}</td>
            </tr>
    )}
    export default ProductRow;