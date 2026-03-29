import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { Search, ChevronDown } from "lucide-react";
import { products } from "../data/products";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Collection() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    type: [] as string[],
    size: [] as string[],
    colors: [] as string[],
  });

  const types = useMemo(() => Array.from(new Set(products.map(p => p.type))), []);
  const sizes = ["klein", "middel", "groot"];
  const colors = useMemo(() => Array.from(new Set(products.flatMap(p => p.colors))), []);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const typeMatch = activeFilters.type.length === 0 || activeFilters.type.includes(product.type);
      const sizeMatch = activeFilters.size.length === 0 || activeFilters.size.includes(product.size);
      const colorMatch = activeFilters.colors.length === 0 || product.colors.some(c => activeFilters.colors.includes(c));
      return typeMatch && sizeMatch && colorMatch;
    });
  }, [activeFilters]);

  const toggleFilter = (category: keyof typeof activeFilters, value: string) => {
    setActiveFilters(prev => {
      const current = prev[category];
      if (current.includes(value)) {
        return { ...prev, [category]: current.filter(v => v !== value) };
      } else {
        return { ...prev, [category]: [...current, value] };
      }
    });
  };

  const clearCategory = (category: keyof typeof activeFilters) => {
    setActiveFilters(prev => ({ ...prev, [category]: [] }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-12"
    >
      <div className="text-center max-w-2xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-sage-green mb-5">Mijn Collectie</h1>
        <p className="text-lg text-text-light">
          Ontdek mijn handgemaakte leren tassen. Elk stuk is met zorg en aandacht voor detail gemaakt.
        </p>
      </div>

      {/* Filter Section */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="w-full flex items-center justify-between p-5 bg-light-brown text-white font-semibold text-lg transition-colors hover:bg-[#8b6f47]"
          >
            <div className="flex items-center gap-2">
              <Search className="w-5 h-5" />
              <span>Filters</span>
            </div>
            <ChevronDown className={cn("w-5 h-5 transition-transform duration-300", isFilterOpen && "rotate-180")} />
          </button>

          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="p-8 space-y-8"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-sage-green">Type:</h3>
                    <button onClick={() => clearCategory('type')} className="text-sm text-text-light hover:underline">Clear</button>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {types.map(type => (
                      <button
                        key={type}
                        onClick={() => toggleFilter('type', type)}
                        className={cn(
                          "px-5 py-2 border-2 border-sage-green rounded-md capitalize transition-all",
                          activeFilters.type.includes(type) ? "bg-sage-green text-white" : "bg-off-white text-text-dark hover:bg-sage-green hover:text-white"
                        )}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-sage-green">Maat:</h3>
                    <button onClick={() => clearCategory('size')} className="text-sm text-text-light hover:underline">Clear</button>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {sizes.map(size => (
                      <button
                        key={size}
                        onClick={() => toggleFilter('size', size)}
                        className={cn(
                          "px-5 py-2 border-2 border-sage-green rounded-md capitalize transition-all",
                          activeFilters.size.includes(size) ? "bg-sage-green text-white" : "bg-off-white text-text-dark hover:bg-sage-green hover:text-white"
                        )}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-sage-green">Kleur:</h3>
                    <button onClick={() => clearCategory('colors')} className="text-sm text-text-light hover:underline">Clear</button>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {colors.map(color => {
                      const colorMap: Record<string, string> = {
                        cognac: "#8b4513",
                        zwart: "#1a1a1a",
                        donkerbruin: "#3e2723",
                        naturel: "#d2b48c",
                        bruin: "#654321",
                        grijs: "#808080",
                        olijfgroen: "#556b2f",
                        donkerblauw: "#000080",
                        sagebruin: "#7c7c5c"
                      };
                      const bgColor = colorMap[color.toLowerCase()] || "#ccc";
                      const isLight = ["naturel"].includes(color.toLowerCase());
                      
                      return (
                        <button
                          key={color}
                          onClick={() => toggleFilter('colors', color)}
                          style={{ backgroundColor: bgColor }}
                          className={cn(
                            "px-5 py-2 border-2 rounded-md capitalize transition-all font-semibold",
                            isLight ? "text-text-dark" : "text-white",
                            activeFilters.colors.includes(color) ? "border-sage-green scale-110 shadow-md" : "border-white/50 hover:scale-105"
                          )}
                        >
                          {color}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map(product => (
          <Link
            key={product.id}
            to={`/tassen/${product.id}`}
            className="bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl group"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-sage-green mb-2.5">{product.name}</h3>
              <p className="text-text-light line-clamp-2">{product.description}</p>
            </div>
          </Link>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-xl text-text-light">Geen tassen gevonden met deze filters.</p>
          <button
            onClick={() => setActiveFilters({ type: [], size: [], colors: [] })}
            className="mt-4 text-sage-green font-bold hover:underline"
          >
            Reset alle filters
          </button>
        </div>
      )}
    </motion.div>
  );
}
