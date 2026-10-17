import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DEFAULT_SITE_TITLE = 'The Consistent Academy';
const DEFAULT_ORIGIN = 'https://www.theconsistentacademy.in';
const DEFAULT_IMAGE = '/assets/academy/logo.png';
const DEFAULT_DESCRIPTION =
  'Master English with The Consistent Academy in Pune. Expert IELTS, TOEFL, PTE & CELPIP coaching, Spoken English, and Corporate Communication by Author & Master Trainer Vidya Wankhade with 19+ years experience.';

/**
 * Reusable SEO component for dynamic head metadata per page.
 * Manages document.title, canonical URL, standard meta tags (description, keywords, robots),
 * OpenGraph, Twitter card tags, and dynamic JSON-LD structured data.
 */
export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords,
  canonical,
  type = 'website',
  image = DEFAULT_IMAGE,
  noindex = false,
  schema = null
}) {
  const location = useLocation();

  useEffect(() => {
    // 1. Format Document Title
    const formattedTitle = !title
      ? `${DEFAULT_SITE_TITLE} | IELTS, PTE, CELPIP & English Learning`
      : title.includes(DEFAULT_SITE_TITLE)
      ? title
      : `${title} | ${DEFAULT_SITE_TITLE}`;

    document.title = formattedTitle;

    // Helper function to update or inject meta tags
    const setMeta = (attrKey, attrVal, contentVal) => {
      if (!contentVal) return;
      let el = document.querySelector(`meta[${attrKey}="${attrVal}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrKey, attrVal);
        document.head.appendChild(el);
      }
      el.setAttribute('content', contentVal);
    };

    // 2. Set Standard Meta Tags
    setMeta('name', 'title', formattedTitle);
    setMeta('name', 'description', description);
    setMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow');
    if (keywords) {
      setMeta('name', 'keywords', keywords);
    }

    // 3. Set Canonical URL
    const pathname = canonical || location.pathname;
    const fullCanonical = pathname.startsWith('http')
      ? pathname
      : `${DEFAULT_ORIGIN}${pathname.startsWith('/') ? pathname : `/${pathname}`}`;

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullCanonical);

    // 4. Resolve Image Absolute URL
    const fullImageUrl = image.startsWith('http')
      ? image
      : `${DEFAULT_ORIGIN}${image.startsWith('/') ? image : `/${image}`}`;

    // 5. OpenGraph Meta Tags
    setMeta('property', 'og:title', formattedTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', fullCanonical);
    setMeta('property', 'og:type', type);
    setMeta('property', 'og:image', fullImageUrl);
    setMeta('property', 'og:site_name', DEFAULT_SITE_TITLE);
    setMeta('property', 'og:locale', 'en_IN');

    // 6. Twitter Card Meta Tags (supports both property and name attributes)
    setMeta('property', 'twitter:card', 'summary_large_image');
    setMeta('property', 'twitter:title', formattedTitle);
    setMeta('property', 'twitter:description', description);
    setMeta('property', 'twitter:url', fullCanonical);
    setMeta('property', 'twitter:image', fullImageUrl);

    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', formattedTitle);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:url', fullCanonical);
    setMeta('name', 'twitter:image', fullImageUrl);

    // 7. Dynamic JSON-LD Structured Data
    const SCRIPT_ID = 'page-seo-schema-script';
    let scriptEl = document.getElementById(SCRIPT_ID);

    if (schema) {
      if (!scriptEl) {
        scriptEl = document.createElement('script');
        scriptEl.id = SCRIPT_ID;
        scriptEl.type = 'application/ld+json';
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(schema);
    } else if (scriptEl) {
      scriptEl.remove();
    }

    return () => {
      // Clean up dynamic schema script when page unmounts
      const existingScript = document.getElementById(SCRIPT_ID);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [title, description, keywords, canonical, type, image, noindex, schema, location.pathname]);

  return null;
}
