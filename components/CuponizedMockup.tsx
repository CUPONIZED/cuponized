"use client";

import { useEffect, useMemo, useState } from "react";
import { Heart, ChevronLeft, Filter, Sun, Moon, Ticket } from "lucide-react";

type Coupon = {
  id: number;
  brand: string;
  title: string;
  description: string;
  expires: string;
  category: "Moda" | "Tech" | "Comida";
  code: string | null;
  storeSlug: string;
  baseAffiliateUrl: string;
};

const COUPONS: Coupon[] = [
  { id: 1, brand: "Nike", title: "20% OFF en zapatillas", description: "Descuento aplicable en modelos seleccionados.", expires: "2025-09-30", category: "Moda", code: "NIKE20", storeSlug: "nike", baseAffiliateUrl: "https://example.com/nike" },
  { id: 2, brand: "Mercado Libre", title: "Envío gratis + cuotas", description: "Beneficio en productos Full y seleccionados.", expires: "2025-09-22", category: "Tech", code: null, storeSlug: "mercado-libre", baseAffiliateUrl: "https://example.com/mercado-libre" },
  { id: 3, brand: "Burger King", title: "2x1 en Whopper", description: "Válido en locales adheridos.", expires: "2025-09-17", category: "Comida", code: "BK-2X1", storeSlug: "burger-king", baseAffiliateUrl: "https://example.com/burger-king" },
  { id: 4, brand: "Adidas", title: "15% OFF en indumentaria", description: "Solo online. Stock limitado.", expires: "2025-10-05", category: "Moda", code: "ADI15", storeSlug: "adidas", baseAffiliateUrl: "https://example.com/adidas" },
];

const CATEGORIES = ["Todas", "Moda", "Tech", "Comida"] as const;

export default function CuponizedMockup() {
  const [screen, setScreen] = useState<"home" | "detail" | "favorites" | "brand" | "category">("home");
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("Todas");
  const [selected, setSelected] = useState<Coupon | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [currentBrand, setCurrentBrand] = useState<string>("");
  const [currentCategory, setCurrentCategory] = useState<string>("");

  // Dark mode persistente
  const prefersDark =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [dark, setDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    const saved = localStorage.getItem("cuponized-theme");
    return saved ? saved === "dark" : prefersDark;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("cuponized-theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("cuponized-theme", "light");
    }
  }, [dark]);

  const filtered = useMemo(() => {
    return COUPONS.filter((c) => {
      const matchText = (c.title + c.brand + c.category).toLowerCase().includes(query.toLowerCase());
      const matchCat = category === "Todas" ? true : c.category === category;
      return matchText && matchCat;
    });
  }, [query, category]);

  function openDetail(coupon: Coupon) { setSelected(coupon); setScreen("detail"); }
  function toggleFavorite(id: number) { setFavorites((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id])); }

  // Tracking + URL (mock simple por ahora)
  function buildSubId(meta: { couponId: number; brand: string }) {
    const d = new Date();
    const stamp = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}${String(d.getHours()).padStart(2, "0")}${String(d.getMinutes()).padStart(2, "0")}`;
    return `${meta.brand.replace(/\s+/g, "").slice(0, 8)}-${meta.couponId}-${stamp}`.toLowerCase();
  }
  function affiliateUrl(coupon: Coupon) {
    const subId = buildSubId({ couponId: coupon.id, brand: coupon.brand });
    return `${coupon.baseAffiliateUrl}?utm_source=cuponized&subId=${subId}`;
  }
  function trackClick(coupon: Coupon) {
    const subId = buildSubId({ couponId: coupon.id, brand: coupon.brand });
    const entry = { ts: Date.now(), couponId: coupon.id, brand: coupon.brand, subId };
    const prev = JSON.parse(localStorage.getItem("cuponized-clicks") || "[]");
    localStorage.setItem("cuponized-clicks", JSON.stringify([entry, ...prev].slice(0, 200)));
  }

  function Header({ onBack }: { onBack?: () => void }) {
    return (
      <div className="sticky top-0 z-10 bg-white/90 dark:bg-neutral-900/90 backdrop-blur border-b border-gray-200 dark:border-neutral-800">
        <div className="max-w-4xl mx-auto p-4 flex items-center gap-3">
          {onBack && (
            <button className="p-2 rounded-lg border hover:bg-gray-50 dark:hover:bg-neutral-800" onClick={onBack}>
              <ChevronLeft className="h-5 w-5" />
            </button>
          )}
        <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-[#9333EA] to-[#EC4899] p-2 rounded-lg">
              <Ticket className="h-5 w-5 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-[#9333EA] to-[#EC4899] bg-clip-text text-transparent">CUPONIZED</h1>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <button className="px-3 py-2 rounded-lg border" onClick={() => setScreen("favorites")}>Favoritos</button>
            <button className="px-3 py-2 rounded-lg border" onClick={() => { setCurrentBrand(""); setScreen("brand"); }}>Tiendas</button>
            <button className="px-3 py-2 rounded-lg border" onClick={() => { setCurrentCategory(""); setScreen("category"); }}>Categorías</button>
            <button className="p-2 rounded-lg border" onClick={() => setDark(v => !v)}>{dark ? <Sun /> : <Moon />}</button>
          </div>
        </div>
      </div>
    );
  }

  function Pill({ active, children, onClick }: { active: boolean; children: React.ReactNode; onClick: () => void }) {
    return (
      <button onClick={onClick}
        className={`px-3 py-1 rounded-full text-sm border ${active ? "bg-gray-900 text-white dark:bg-white dark:text-black" : "bg-transparent"}`}>
        {children}
      </button>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-neutral-950 dark:text-neutral-100">
      {screen === "home" && (
        <>
          <Header />
          <main className="max-w-4xl mx-auto p-4">
            <div className="flex flex-col sm:flex-row gap-2 mb-6">
              <div className="flex-1">
                <input
                  placeholder="Buscar cupones..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full rounded-lg border px-3 py-2 bg-white/70 dark:bg-neutral-900/70 outline-none"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <div className="flex flex-wrap gap-2">
                  {CATEGORIES.map((cat) => (
                    <Pill key={cat} active={category === cat} onClick={() => setCategory(cat)}>
                      {cat}
                    </Pill>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              {filtered.map((c) => (
                <div key={c.id} className="rounded-2xl border border-gray-200 dark:border-neutral-800 p-4 flex flex-col sm:flex-row sm:items-center gap-3">
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold">{c.title}</h2>
                    <p className="text-sm text-gray-600 dark:text-neutral-400">{c.brand} · {c.category}</p>
                    <p className="text-xs text-gray-500">Vence: {new Date(c.expires).toLocaleDateString()}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 rounded-lg border" onClick={() => toggleFavorite(c.id)}>
                      <Heart className={`h-5 w-5 ${favorites.includes(c.id) ? "fill-pink-500" : ""}`} />
                    </button>
                    <button className="px-3 py-2 rounded-lg bg-gradient-to-r from-[#9333EA] to-[#EC4899] text-white" onClick={() => openDetail(c)}>Ver cupón</button>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </>
      )}

      {screen === "detail" && selected && (
        <>
          <Header onBack={() => setScreen("home")} />
          <main className="max-w-2xl mx-auto p-4">
            <div className="rounded-2xl border border-gray-200 dark:border-neutral-800 p-5 space-y-4">
              <h2 className="text-2xl font-semibold">{selected.title}</h2>
              <p className="text-gray-600 dark:text-neutral-400">{selected.description}</p>
              <p className="text-sm text-gray-500">Vence el {new Date(selected.expires).toLocaleDateString()}</p>
              {selected.code ? (
                <div className="p-4 bg-gray-100 dark:bg-neutral-900 rounded-xl flex justify-between items-center">
                  <p className="font-mono text-lg">{selected.code}</p>
                  <button className="px-3 py-2 rounded-lg bg-gradient-to-r from-[#9333EA] to-[#EC4899] text-white"
                    onClick={() => { trackClick(selected); window.open(affiliateUrl(selected), "_blank"); }}>Usar</button>
                </div>
              ) : (
                <button className="px-3 py-2 rounded-lg bg-gradient-to-r from-[#9333EA] to-[#EC4899] text-white"
                  onClick={() => { trackClick(selected); window.open(affiliateUrl(selected), "_blank"); }}>Ir a la tienda</button>
              )}
            </div>
          </main>
        </>
      )}

      {screen === "favorites" && (
        <>
          <Header onBack={() => setScreen("home")} />
          <main className="max-w-2xl mx-auto p-4">
            <div className="grid gap-4">
              {COUPONS.filter((c) => favorites.includes(c.id)).map((c) => (
                <div key={c.id} className="rounded-2xl border border-gray-200 dark:border-neutral-800 p-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{c.title}</h3>
                    <p className="text-xs text-gray-500">{c.brand}</p>
                  </div>
                  <button className="px-3 py-2 rounded-lg bg-gradient-to-r from-[#9333EA] to-[#EC4899] text-white"
                    onClick={() => { trackClick(c); window.open(affiliateUrl(c), "_blank"); }}>Ir</button>
                </div>
              ))}
              {favorites.length === 0 && <p className="text-sm text-gray-500 dark:text-neutral-400">Todavía no guardaste cupones.</p>}
            </div>
          </main>
        </>
      )}

      {screen === "brand" && (
        <>
          <Header onBack={() => setScreen("home")} />
          <main className="max-w-4xl mx-auto p-4">
            {!currentBrand && (
              <div className="grid sm:grid-cols-2 gap-3 mb-4">
                {[...new Set(COUPONS.map((c) => c.brand))].map((b) => (
                  <button key={b} className="px-3 py-2 rounded-lg border" onClick={() => setCurrentBrand(b)}>{b}</button>
                ))}
              </div>
            )}
            <div className="grid gap-4">
              {COUPONS.filter((c) => !currentBrand || c.brand === currentBrand).map((c) => (
                <div key={c.id} className="rounded-2xl border border-gray-200 dark:border-neutral-800 p-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{c.brand} · {c.title}</h3>
                    <p className="text-xs text-gray-500">Vence: {new Date(c.expires).toLocaleDateString()}</p>
                  </div>
                  <button className="px-3 py-2 rounded-lg bg-gradient-to-r from-[#9333EA] to-[#EC4899] text-white"
                    onClick={() => { trackClick(c); window.open(affiliateUrl(c), "_blank"); }}>Ir</button>
                </div>
              ))}
            </div>
          </main>
        </>
      )}

      {screen === "category" && (
        <>
          <Header onBack={() => setScreen("home")} />
          <main className="max-w-4xl mx-auto p-4">
            {!currentCategory && (
              <div className="flex flex-wrap gap-2 mb-4">
                {CATEGORIES.filter((c) => c !== "Todas").map((cat) => (
                  <Pill key={cat} active={false} onClick={() => setCurrentCategory(cat)}>{cat}</Pill>
                ))}
              </div>
            )}
            <div className="grid gap-4">
              {COUPONS.filter((c) => !currentCategory || c.category === currentCategory).map((c) => (
                <div key={c.id} className="rounded-2xl border border-gray-200 dark:border-neutral-800 p-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{c.category} · {c.title}</h3>
                    <p className="text-xs text-gray-500">{c.brand}</p>
                  </div>
                  <button className="px-3 py-2 rounded-lg bg-gradient-to-r from-[#9333EA] to-[#EC4899] text-white"
                    onClick={() => { trackClick(c); window.open(affiliateUrl(c), "_blank"); }}>Ir</button>
                </div>
              ))}
            </div>
          </main>
        </>
      )}
    </div>
  );
}
