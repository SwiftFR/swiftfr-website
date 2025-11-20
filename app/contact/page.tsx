
import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <Layout>
      <section className="py-16 sm:py-24">
        <h1 className="text-3xl font-semibold sm:text-4xl">Contact SwiftFR</h1>
        <p className="mt-4 max-w-2xl text-gray-600">
          Tell us about your store and current fulfillment setup. We’ll match you with a vetted 3PL.
        </p>
        <div className="mt-8 max-w-xl">
          <ContactForm />
        </div>
      </section>
    </Layout>
  );
}
