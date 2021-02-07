import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | app-header', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    await render(hbs`<AppHeader />`);

    assert.equal(this.element?.textContent?.trim(), 'Privathaftpflichtversicherung');
  });

  test('Show insurance logo', async function(assert) {

    await render(hbs`<AppHeader />`);

    assert.ok(this.element?.querySelector('svg'));

    assert.equal(this.element?.querySelector('svg')?.getAttribute('class'), 'icon');
  });
});
