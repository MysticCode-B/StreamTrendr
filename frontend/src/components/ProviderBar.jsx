export const ProviderBar = () => {
  const streamingProviders = [
    "Netflix",
    "Hulu",
    "Amazon Prime",
    "Disney+",
    "HBO Max",
    "Apple TV",
  ];

  return (
    <section className="provider-bar" aria-label="Streaming providers">
      {streamingProviders.map((providerName) => (
        <span key={providerName} className="provider-bar__item">
          {providerName}
        </span>
      ))}
    </section>
  );
};
