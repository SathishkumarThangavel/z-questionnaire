import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | multi-choice', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.set('choicesObj', [{id:1, value:'', label:''}]);

    await render(hbs`<MultiChoice @choices={{this.choicesObj}} />`);

    assert.equal(this.element?.textContent?.trim(), 'A');
  });
});
