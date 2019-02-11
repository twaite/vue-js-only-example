import Vue from 'vue';
import Component from 'vue-class-component';

@Component()
class SlotTest extends Vue {

  render() {
    return (
      <div class="test-wrapper">
        {this.$slots.default}
      </div>
    )
  }

}


export default SlotTest;