import Vue from 'vue';
import Component from 'vue-class-component';

@Component()
class RestaurantsComponent extends Vue {

  get restaurants() {
    return this.$store.state.restaurants;
  }

  render() {
    return (
      <div>
        {this.restaurants.map(restaurant => {
          return <h3>{restaurant.name}</h3>
        })}
      </div>
    );
  }
}

export default RestaurantsComponent;