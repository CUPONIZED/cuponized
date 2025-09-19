"use client";

export default function LegalNotice() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Legal notice</h1>
      <p className="text-gray-700 dark:text-neutral-300 mb-4">
        Cuponized acts as an aggregator of offers and discounts. We don’t sell
        products directly; we redirect to the official stores.
      </p>
      <p className="text-gray-700 dark:text-neutral-300 mb-4">
        Some links may include affiliate programs, which means we may receive a
        commission if you make a purchase through them. This does not affect
        the final price you pay.
      </p>
      <p className="text-gray-700 dark:text-neutral-300">
        Information is updated regularly, but we can’t guarantee availability or
        validity of every offer. We recommend always checking the conditions on
        the store’s website.
      </p>
    </main>
  );
}
