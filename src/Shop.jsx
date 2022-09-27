import React from "react";

const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 6,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 7,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 8,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 9,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
];

export function Shop() {
  return (
    <div className="bg-white">
      <h1>Products</h1>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        {/* <h2 className="sr-only">Products</h2> */}

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

// const shopItems = [
//   {
//     title: "Item 001",
//     description:
//       "Whatever poke bottle distillery locavore heard roof carry vice park la toast etsy scenester irony vexillologist microdosing franzen typewriter unicorn vinyl them urbanism pour-over? Photo booth. It Iceland snackwave santo yolo level haven't paleo chicharrones vaporwave cardigan messenger shabby quinoa book? Drinking single-origin freegan taiyaki selfies ennui pinterest pok mi subway coffee roof biodiesel fixie gochujang salvia neutra probably bitters blog slow-carb jianbing plaid glossier kale pok you chambray master wolf tumblr fanny next raclette lumbersexual denim? Umami forage truck hoverboard?",
//     price: "9.99",
//     img: "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
//   },
//   {
//     title: "Item 002",
//     description:
//       "Whatever poke bottle distillery locavore heard roof carry vice park la toast etsy scenester irony vexillologist microdosing franzen typewriter unicorn vinyl them urbanism pour-over? Photo booth. It Iceland snackwave santo yolo level haven't paleo chicharrones vaporwave cardigan messenger shabby quinoa book? Drinking single-origin freegan taiyaki selfies ennui pinterest pok mi subway coffee roof biodiesel fixie gochujang salvia neutra probably bitters blog slow-carb jianbing plaid glossier kale pok you chambray master wolf tumblr fanny next raclette lumbersexual denim? Umami forage truck hoverboard?",
//     price: "9.99",
//     img: "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
//   },
//   {
//     title: "Item 003",
//     description:
//       "Whatever poke bottle distillery locavore heard roof carry vice park la toast etsy scenester irony vexillologist microdosing franzen typewriter unicorn vinyl them urbanism pour-over? Photo booth. It Iceland snackwave santo yolo level haven't paleo chicharrones vaporwave cardigan messenger shabby quinoa book? Drinking single-origin freegan taiyaki selfies ennui pinterest pok mi subway coffee roof biodiesel fixie gochujang salvia neutra probably bitters blog slow-carb jianbing plaid glossier kale pok you chambray master wolf tumblr fanny next raclette lumbersexual denim? Umami forage truck hoverboard?",
//     price: "9.99",
//     img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
//   },
//   {
//     title: "Item 004",
//     description:
//       "Whatever poke bottle distillery locavore heard roof carry vice park la toast etsy scenester irony vexillologist microdosing franzen typewriter unicorn vinyl them urbanism pour-over? Photo booth. It Iceland snackwave santo yolo level haven't paleo chicharrones vaporwave cardigan messenger shabby quinoa book? Drinking single-origin freegan taiyaki selfies ennui pinterest pok mi subway coffee roof biodiesel fixie gochujang salvia neutra probably bitters blog slow-carb jianbing plaid glossier kale pok you chambray master wolf tumblr fanny next raclette lumbersexual denim? Umami forage truck hoverboard?",
//     price: "9.99",
//     img: "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
//   },
// ];

// export const Shop = () => {
//   return (
//     <>
//       <div>
//         <h1>Shop</h1>
//       </div>
//       {/* <div>{shopItems.map((x) => {})}</div> */}
//     </>
//   );
// };
