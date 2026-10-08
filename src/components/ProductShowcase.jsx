function ProductShowcase() {
  return (
    <section className="product-showcase">
      <h2>
        Energy. Focus.
        <br />
        Hydration.
        <br />
        Performance.
      </h2>

      <div className="showcase-product">
        <img
          src="/assets/Products/lesgoLemonHeat.png"
          alt="Lesgo Lemon Heat"
        />
      </div>

      <div className="showcase-card card-1">
        <span>01</span>
        <h3>Energy</h3>
        <p>200mg Natural Caffeine</p>
      </div>

      <div className="showcase-card card-2">
        <span>02</span>
        <h3>Hydration</h3>
        <p>Electrolytes</p>
      </div>

      <div className="showcase-card card-3">
        <span>03</span>
        <h3>Focus</h3>
        <p>L-Tyrosine + L-Theanine</p>
      </div>

      <div className="showcase-card card-4">
        <span>04</span>
        <h3>Performance</h3>
        <p>Creatine + Citrulline</p>
      </div>
    </section>
  );
}

export default ProductShowcase;