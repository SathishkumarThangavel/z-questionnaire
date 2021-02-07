import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | app-footer', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    await render(hbs`<AppFooter />`);

    assert.equal(this.element?.textContent?.trim(), '');
  });

  test('show logo and accessiblity', async function(assert) {

    await render(hbs`<AppFooter />`);

    assert.ok(this.element?.querySelector('img'));

    assert.equal(this.element?.querySelector('img')?.getAttribute('alt'), 'zquestionnaire logo')
  });

  test('show navigation buttons', async function(assert) {
    
    this.set('index', 1);

    await render(hbs`<AppFooter @index={{this.index}} />`);

    assert.ok(this.element?.querySelector('svg'));
    
    assert.equal(this.element?.querySelector('svg')?.getAttribute('class'), 'icon');
  });
});
