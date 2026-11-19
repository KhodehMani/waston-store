import { Breadcrumb } from "@/components/ui/Breadcrumb";
import type { CollectionConfig } from "@/data/collections";
import { CollectionSections } from "./CollectionSections";
import { ListingHero } from "./ListingHero";
import { ListingView } from "./ListingView";

/** Shared template for every category / collection page (server component). */
export function CollectionPage({ config }: { config: CollectionConfig }) {
  const crumbs = config.slug
    ? [{ href: "/", label: "خانه" }, { href: "/shop", label: "فروشگاه" }, { label: config.label }]
    : [{ href: "/", label: "خانه" }, { label: "فروشگاه" }];
  return (
    <>
      <div className="container">
        <Breadcrumb items={crumbs} />
        <ListingHero config={config} />
      </div>
      {config.before && <CollectionSections sections={config.before} />}
      <div className={config.before ? "container section" : "container"}>
        <ListingView slug={config.slug} />
      </div>
      {config.after && <CollectionSections sections={config.after} />}
    </>
  );
}
