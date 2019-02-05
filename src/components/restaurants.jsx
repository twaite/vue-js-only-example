import Vue from 'vue';
import Component from 'vue-class-component';
import styled from 'vue-styled-components';

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
  margin: 1em
`;

@Component()
class RestaurantsComponent extends Vue {

  get restaurants() {
    return this.$store.state.restaurants;
  }

  render() {
    return (
      <RestaurantContainer>
        {this.restaurants.map(restaurant => {
          return (
            <StyledCard>
              <img src={restaurant.image} alt={restaurant.name} height={cardSize}/>
            </StyledCard>
          );
        })}
      </RestaurantContainer>
    );
  }
}

export default RestaurantsComponent;