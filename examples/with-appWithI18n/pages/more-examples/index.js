import useTranslation from 'next-translate/useTranslation'
import Trans from 'next-translate/Trans'
import Link from 'next/link'

import PluralExample from '../../components/plural-example'
import NoFunctionalComponent from '../../components/no-functional-component'

const Component = (props) => <p {...props} />

export default function MoreExamples() {
  const { t } = useTranslation()
  const exampleWithVariable = t('more-examples:example-with-variable', {
    count: 42,
  })

  return (
    <>
      <h2>{exampleWithVariable}</h2>
      <PluralExample />
      <Trans
        i18nKey="more-examples:example-with-html"
        components={[<Component />, <b style={{ color: 'red' }} />]}
      />
      <NoFunctionalComponent />
      <br />
      {t`more-examples:nested-example.very-nested.nested`}
      <br />
      <Link href={`/more-examples/dynamic-namespace`}>
        <a>{t('more-examples:dynamic-namespaces-link')}</a>
      </Link>
      <br />
      <Link href={`/more-examples/different-namespaces-by-query`}>
        <a>{t('more-examples:different-namespaces-link')}</a>
      </Link>
      <br />
      <Link href={`/more-examples/different-namespaces-by-query?fromDynamic=1`}>
        <a>{t('more-examples:different-namespaces-link-dynamic')}</a>
      </Link>
      <br />
      <Link
        href={{
          pathname: '/more-examples/dynamicroute/example',
          query: { another: 'another param' },
        }}
      >
        <a>{t('more-examples:dynamic-route')}</a>
      </Link>
      <br />
      <Link href="/more-examples/catchall/this/is/an/example">
        <a>Catchall</a>
      </Link>
    </>
  )
}
