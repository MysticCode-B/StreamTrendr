export const ProviderBar = () => {
  const streamingProviders = [
    { name: "Netflix", mark: "N" },
    { name: "Hulu", mark: "H" },
    { name: "Amazon Prime", mark: "P" },
    { name: "Disney+", mark: "D+" },
    { name: "HBO Max", mark: "HBO" },
    { name: "Apple TV+", mark: "TV+" },
    { name: "Paramount+", mark: "P+" },
    { name: "Peacock", mark: "PK" },
    { name: "Crunchyroll", mark: "CR" },
    { name: "Max", mark: "M" },
  ];

  return (
    <section className="provider-bar" aria-label="Streaming providers">
      <div className="provider-bar__fade provider-bar__fade--left" aria-hidden="true" />
      <div className="provider-bar__fade provider-bar__fade--right" aria-hidden="true" />

      <div className="provider-bar__viewport">
        <div className="provider-bar__track">
          {[...streamingProviders, ...streamingProviders].map((provider, index) => (
            <article key={`${provider.name}-${index}`} className="provider-bar__item">
              <span className="provider-bar__logo-mark" aria-hidden="true">
                {provider.mark}
              </span>
              <span className="provider-bar__logo-name">{provider.name}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
