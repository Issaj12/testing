export default function HomePage({ content }: { content: any }) {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 shadow-md">
        <div className="flex items-center gap-3">
          <img
            data-edit-image="navbar.logo"
            src={content.navbar.logo}
            alt="Logo"
            className="h-10 w-10 rounded-full object-cover"
          />
          <span data-edit="navbar.name" className="text-xl font-bold">
            {content.navbar.name}
          </span>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative flex min-h-[60vh] items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${content.hero.backgroundImage})` }}
        data-edit-image="hero.backgroundImage"
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 mx-4 max-w-md rounded-lg bg-white/90 p-8 shadow-xl">
          <blockquote data-edit="hero.quote" className="text-lg italic text-gray-800">
            &quot;{content.hero.quote}&quot;
          </blockquote>
          <p data-edit="hero.author" className="mt-4 text-right font-semibold text-gray-600">
            — {content.hero.author}
          </p>
        </div>
      </section>

      {/* Product Section */}
      <section className="mx-auto flex max-w-5xl flex-col items-center gap-8 p-8 md:flex-row">
        <div className="w-full md:w-1/2">
          <img
            data-edit-image="product.image"
            src={content.product.image}
            alt="Product"
            className="h-auto w-full rounded-lg object-cover shadow-md"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 data-edit="product.title" className="text-3xl font-bold">
            {content.product.title}
          </h2>
          <p data-edit="product.description" className="mt-4 text-gray-600">
            {content.product.description}
          </p>
          <p data-edit="product.price" className="mt-4 text-2xl font-semibold text-green-600">
            {content.product.price}
          </p>
          <a
            data-edit="product.orderLink"
            href={content.product.orderLink}
            className="mt-6 inline-block rounded bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
          >
            Order Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 bg-gray-900 p-8 text-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-3">
            <img
              data-edit-image="footer.logo"
              src={content.footer.logo}
              alt="Footer Logo"
              className="h-8 w-8 rounded-full object-cover"
            />
            <span data-edit="footer.name" className="text-lg font-semibold">
              {content.footer.name}
            </span>
          </div>
          <div className="text-center md:text-left">
            <p data-edit="footer.links" className="text-sm text-gray-400">
              {content.footer.links}
            </p>
            <p data-edit="footer.contact" className="mt-1 text-sm text-gray-400">
              {content.footer.contact}
            </p>
          </div>
          <p data-edit="footer.socials" className="text-sm text-gray-400">
            {content.footer.socials}
          </p>
        </div>
      </footer>
    </div>
  );
}
