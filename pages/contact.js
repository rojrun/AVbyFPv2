import { Card, Layout, Page, DisplayText, TextStyle } from '@shopify/polaris';

const Contact = () => (
  <Page title="Contact Us" separator>
    <Layout>
      <Layout.Section>
        <Card title="Address" sectioned>
          <address>
            <a href="https://goo.gl/maps/u16MZopgZMe2C4g97">
              3630 E Miraloma Ave, Anaheim, CA 92806
            </a>
          </address>
        </Card>
      </Layout.Section>
      <Layout.Section>
        <Card title="Email" sectioned>
          <p><a href="mailto:cs@avbyfp.com">cs@avbyfp.com</a></p>
        </Card>
      </Layout.Section>
      <Layout.Section>
        <Card title="Phone" sectioned>
          <p><a href="tel:8888750218">888.875.0218</a></p>
        </Card>
      </Layout.Section>
    </Layout>
  </Page>
);

export default Contact;