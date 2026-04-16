interface StructuredDataProps {
  data: Record<string, unknown>
}

/**
 * Emits a JSON-LD <script> tag. React 19 does not hoist <script>
 * into <head> — browsers accept it in <body>, which is fine for
 * search engines.
 */
export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
