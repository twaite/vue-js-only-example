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
  position: relative;
  align-items: center;
  justify-content: center;
  height: ${cardSize}px;
  width: ${cardSize}px;
  overflow: hidden;
  margin: 1em;
  cursor: pointer;
  border-radius: 2px;
  box-shadow: 0 1px 5px rgba(0,0,0,0.23);

  &:focus {
    width: 100%;
    height: 100%;
    position: absolute;
    background: black;
    z-index: 5;
    
    transition: height, width 0.2s;

    img {
      width: 100%;
      height: auto;
      position: absolute;
      top: 0;
    }

    .blur, h3 {
      opacity: 0;
      transition: opacity 0.2s;
    }
  }

  .blur {
    z-index: 1;
    position: absolute;
    left: 0;
    bottom: 0;
    filter: blur(2px);
    overflow: hidden;
    height: 2.5em;
    width: 100%;
    display: flex;
    justify-content: center;

    img {
      position: absolute;
      bottom: 0;
    }
  }

  h3 {
    background: rgba(0,0,0,.7);
    width: 100%;
    position: absolute;
    bottom: 0;
    z-index: 2;
    margin: 0;
    padding: 0.5em;
    text-align: center;
  }
`;

@Component()
class RestaurantsComponent extends Vue {

  myState = true

  get restaurants() {
    return this.$store.state.restaurants;
  }

  render() {
    return (
      <RestaurantContainer>
        {this.restaurants.map(restaurant => {
          return (
            <StyledCard tabindex="0">
              <img src={restaurant.image} alt={restaurant.name} height={cardSize}/>
              <div class="blur">
                <img src={restaurant.image} alt={restaurant.name} height={cardSize}/>
              </div>
              <h3>{restaurant.name}</h3>
            </StyledCard>
          );
        })}
      </RestaurantContainer>
    );
  }
}

export default RestaurantsComponent;