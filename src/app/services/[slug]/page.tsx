import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetail } from "@/components/service-detail";
import { serviceContents, serviceSlugs, type ServiceSlug } from "@/lib/service-content";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceContents[slug as ServiceSlug];
  if (!service) return {};
  return {
    title: `${service.title} | 小川 大智`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = serviceContents[slug as ServiceSlug];
  if (!service) notFound();
  return <ServiceDetail service={service} />;
}
