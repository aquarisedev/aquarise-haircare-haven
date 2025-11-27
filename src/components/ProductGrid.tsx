import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Shampoo Cachos Sim",
    brand: "HASKELL",
    size: "300ml",
    price: 21.95,
    rating: 5,
    featured: true,
  },
  {
    id: 2,
    name: "Condicionador Cachos Sim",
    brand: "HASKELL",
    size: "300ml",
    price: 21.95,
    rating: 5,
  },
  {
    id: 3,
    name: "Máscara Cachos Sim",
    brand: "HASKELL",
    size: "300g",
    price: 21.95,
    rating: 5,
  },
  {
    id: 4,
    name: "Máscara Cavalo Forte",
    brand: "HASKELL",
    size: "900g",
    price: 37.95,
    rating: 5,
    featured: true,
  },
  {
    id: 5,
    name: "Creme de Pentear Ela é Carioca",
    brand: "LOLA",
    size: "480g",
    price: 21.95,
    rating: 5,
  },
  {
    id: 6,
    name: "Máscara Morte Súbita",
    brand: "LOLA",
    size: "450g",
    price: 18.95,
    rating: 5,
  },
  {
    id: 7,
    name: "Óleo Papo Reto",
    brand: "LOLA",
    size: "50ml",
    price: 18.95,
    rating: 5,
  },
  {
    id: 8,
    name: "Máscara Be(m)dita Ghee Banana",
    brand: "LOLA",
    size: "350g",
    price: 21.95,
    rating: 5,
    featured: true,
  },
];

const ProductGrid = () => {
  return (
    <section id="produtos" className="py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold font-heading lg:text-4xl">
            Produtos em Destaque
          </h2>
          <p className="text-lg text-muted-foreground">
            Descubra nossa seleção premium de produtos HASKELL e LOLA
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#todos-produtos"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Ver todos os produtos
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
