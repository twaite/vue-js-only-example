import Vue from 'vue';
import Component from 'vue-class-component';
import styled from 'vue-styled-components';
import SlotTest from './slot-test';

const cardSize= 200;

const RestaurantContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const StyledCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${cardSize}px;
  width: ${cardSize}px;
  overflow: hidden;
  margin: 1em;
`;

@Component({
  props: {
    test: String,
    anotherOne: {
      type: String,
      default: 'test',
    },
    trueRenderProp: Function,
  }
})
class RestaurantsComponent extends Vue {

  myState = true

  get restaurants() {
    return this.$store.state.restaurants;
  }

  created() {
    console.log('do data call');
  }

  // renderProp = () => <h3>Test</h3>

  render() {
    const test = <h3>test</h3>;

    return (
      <RestaurantContainer>
        {test}
        {this.restaurants.map(restaurant => {
          return (
            <StyledCard>
              <img src={restaurant.image} alt={restaurant.name} height={cardSize}/>
            </StyledCard>
          );
        })}
        <SlotTest>
          This is in a slot.
        </SlotTest>
        {this.trueRenderProp()}
      </RestaurantContainer>
    );
  }
}

export default RestaurantsComponent;