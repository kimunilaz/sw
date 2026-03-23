// ============================================================
// Products.jsx — 3 product cards with placeholder images
// ============================================================
import './Products.css'

const PRODUCTS = [
  {
    /*
     * REPLACE IMAGE: A photo of the SV-100 snack/drink vending machine.
     * Recommended: well-lit product shot, portrait or 4:3 landscape.
     */
    image: '/images/front.JPG',
    badge: 'Best Experience',
    badgeColor: 'green',
    name: 'Smart Product Selection',
    description:
      'A compact, wall-mountable unit perfect for office spaces and small venues. Features contactless payment and live stock tracking.',
    features: ['Contactless Benefits', 'Soft Touch Screen', 'Cloud Dashboard Display'],
  },
  {
    /*
     * REPLACE IMAGE: A photo of the SV-300 beverage tower.
     */
    image: 'images/reverse.jpg',
    badge: 'Coming Soon',
    badgeColor: 'navy',
    name: 'Reverse Vending',
    description:
      'Smart reverse vending unit designed for efficient bottle and can collection in high-traffic environments such as campuses and public spaces.',
    features: ['Barcode/QR scanning', 'Instant reward codes', 'Real-time validation'],
  },
  {
    /*
     * REPLACE IMAGE: A photo of the SV-X1 modular micro-market kiosk.
     */
    image: '/images/happycustomers3.jpeg',
    badge: 'New',
    badgeColor: 'blue',
    name: 'Cashless Payment',
    description:
      'Seamless cashless payment system enabling fast, secure transactions through digital methods in unattended vending environments.',
    features: ['QR code payments', 'Mobile money integration', 'Real-time transaction processing'],
  },
]

export default function Products() {
  return (
    <section className="section products" id="products">
      <div className="container">
        <div className="section__header reveal">
          <span className="section__eyebrow">Our Product</span>
          <h2 className="section__title">Machine Built for Convenience</h2>
          <p className="section__subtitle">
            Each SmarVe unit is engineered for reliability, speed, and the
            best-in-class buying experience — from first tap to final purchase.
          </p>
        </div>

        <div className="products__grid">
          {PRODUCTS.map((product, i) => (
            <div
              key={product.name}
              className={`product-card reveal reveal-delay-${i + 1}`}
            >
              {/* Image */}
              <div className="product-card__image-wrap">
                <span className={`product-card__badge product-card__badge--${product.badgeColor}`}>
                  {product.badge}
                </span>
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-card__image"
                  loading="lazy"
                />
                <div className="product-card__overlay" />
              </div>

              {/* Body */}
              <div className="product-card__body">
                <h3 className="product-card__name">{product.name}</h3>
                <p className="product-card__desc">{product.description}</p>

                {/* Feature pills */}
                <ul className="product-card__features">
                  {product.features.map((f) => (
                    <li key={f} className="product-card__feature">
                      <svg width="12" height="12" viewBox="0 0 12 12">
                        <circle cx="6" cy="6" r="6" fill="var(--green-subtle)"/>
                        <path d="M3.5 6l2 2 3-3" stroke="var(--green)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <button className="btn btn--outline product-card__cta">
                  View Details
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
