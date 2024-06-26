import { Product } from "@prisma/client";
import PriceTag from "./PriceTag";
import Link from "next/link";
import Image from "next/image";

interface ProductCardprops {
  product: Product;
}

export default function ProductCards({ product }: ProductCardprops) {
  const isNew =
    Date.now() - new Date(product.createdAt).getTime() <
    1000 * 60 * 60 * 24 * 7;
  return (
    <Link
      href={"/products/" + product.id}
      className="card w-full bg-base-100 hover:shadow-xl shadow-slate-700 transition-shadow group"
    >
      <figure>
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={800}
          height={400}
          className="h-48 object-cover "
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        {isNew && <div className="badge badge-secondary"> NEW</div>}
        <p>{product.description}</p>
        <PriceTag className="text-green-600 group-hover:text-blue-500" price={product.price} />
      </div>
    </Link>
  );
}
