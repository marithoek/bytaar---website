import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ChevronLeft } from "lucide-react";
import { products, type Product } from "../data/products";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [activeImage, setActiveImage] = useState("");

  useEffect(() => {
    const found = products.find(p => p.id === id);
    if (found) {
      setProduct(found);
      setActiveImage(found.images[0]);
    } else {
      navigate("/tassen");
    }
  }, [id, navigate]);

  if (!product) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4"
    >
      <Link
        to="/tassen"
        className="inline-flex items-center gap-1 text-sage-green font-semibold mb-8 hover:underline"
      >
        <ChevronLeft className="w-5 h-5" />
        Terug naar collectie
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
        <div className="space-y-4 md:space-y-5">
          <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-md">
            <img
              src={activeImage}
              alt={product.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="grid grid-cols-4 gap-2 md:gap-2.5">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(img)}
                className={cn(
                  "aspect-square rounded-md overflow-hidden border-2 transition-colors",
                  activeImage === img ? "border-sage-green" : "border-transparent hover:border-sage-green/50"
                )}
              >
                <img src={img} alt={`Preview ${idx + 1}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6 md:space-y-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-sage-green mb-3 md:mb-4">{product.name}</h1>
            <p className="text-base md:text-lg text-text-light leading-relaxed">{product.fullDescription}</p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-light-brown uppercase tracking-wider">Materiaal</h3>
                <p className="text-text-dark capitalize text-sm md:text-base">{product.material}</p>
              </div>
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-light-brown uppercase tracking-wider">Type</h3>
                <p className="text-text-dark capitalize text-sm md:text-base">{product.type}</p>
              </div>
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-light-brown uppercase tracking-wider">Maat</h3>
                <p className="text-text-dark capitalize text-sm md:text-base">{product.size}</p>
              </div>
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-light-brown uppercase tracking-wider">Afmetingen</h3>
                <p className="text-text-dark text-sm md:text-base">{product.dimensions}</p>
              </div>
            </div>

            <div className="space-y-1">
              <h3 className="text-xs font-bold text-light-brown uppercase tracking-wider">Beschikbare Kleuren</h3>
              <p className="text-text-dark capitalize text-sm md:text-base">{product.colors.join(", ")}</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-bold text-light-brown uppercase tracking-wider">Kenmerken</h3>
              <ul className="list-disc list-inside text-text-dark space-y-1 text-sm md:text-base">
                {product.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          </div>

          <Link to="/contact" className="cta-button w-full text-center py-4">
            Neem contact op voor bestelling
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
