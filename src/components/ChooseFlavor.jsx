function ChooseFlavor() {
  const flavors = [
    {
      name: "Fuego",
      subtitle: "Mango with TAJÍN®",
      image: "/assets/Products/mangoFuego.png",
    },
    {
      name: "Lemon Heat",
      subtitle: "Lemon with Cayenne",
      image: "/assets/Products/lesgoLemonHeat.png",
    },
    {
      name: "Arctic Surge",
      subtitle: "Blue Raspberry Lemonade",
      image: "/assets/Products/lesgoArticSurge.png",
    },
    {
      name: "Electric Lime",
      subtitle: "Lime with Ginger",
      image: "/assets/Products/lesgoElectricLime.png",
    },
  ];

  return (
    <section className="choose-flavor">
      <h2>Choose your flavor</h2>

      <div className="flavor-cards">
  {[...flavors, ...flavors].map((flavor, index) => (
    <div className="flavor-card" key={`${flavor.name}-${index}`}>
      <div className="flavor-info">
        <h3>{flavor.name}</h3>
        <p>{flavor.subtitle}</p>
      </div>

      <img src={flavor.image} alt={flavor.name} />
    </div>
  ))}
</div>
    </section>
  );
}

export default ChooseFlavor;