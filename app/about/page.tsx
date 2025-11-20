import Layout from "@/components/Layout";
import dynamic from "next/dynamic";

// Load the client component only on the client (no SSR)
const AboutClient = dynamic(() => import("./AboutClient"), { ssr: false });

export default function AboutPage() {
  return (
    <Layout>
      <AboutClient />
    </Layout>
  );
}
