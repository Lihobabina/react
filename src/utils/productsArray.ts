type ProductProps = {
    id: number
    title: string
    type: string
    capacity: number
    price: number
}
const productsArray:ProductProps[]=[
  {
    id:1,
    title:"Iphone 14 Pro",
    type:"Iphone 14",
    capacity:256,
    price:1000
},
{
    id:2,
    title:"Iphone 12 Pro Max",
    type:"Iphone 12 Pro Max",
    capacity:64,
    price:700
},
{
    id:3,
    title:"Iphone 13 Pro",
    type:"Iphone 13 Pro",
    capacity:256,
    price:1120
},
{
    id:4,
    title:"Iphone X",
    type:"Iphone X",
    capacity:64,
    price:500
},
{
    id:5,
    title:"Iphone 11",
    type:"Iphone 11",
    capacity:128,
    price:600
},
{
    id:6,
    title:"Iphone 7",
    type:"Iphone 7",
    capacity:128,
    price:300
},
]
export default productsArray