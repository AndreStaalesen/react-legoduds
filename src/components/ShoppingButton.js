export default function ShoppingButton(){

    const handleShopping = () =>{
        console.log("du har shoppet")
    }
    return <button className="shopping-btn" onClick ={handleShopping}>Legg i handlekurv</button>
    
}