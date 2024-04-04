"use client"

export default function Page() {
  const cart = JSON.parse(localStorage.getItem("cart"))

  return (
    <div className="container flex flex-col items-center text-center gap-4 mx-auto p-4">
      {cart == null ? <span>De winkelmand is leeg</span> :
        cart.map((item) => {
          return <span>{item.quantity}x {item.id}</span>
        })
      }
    </div>
  )
}
