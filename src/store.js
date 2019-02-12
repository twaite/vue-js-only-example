import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    restaurants: [
      {
        name: 'Flying Fish',
        categories: ['sushi', 'japanese', 'seafood'],
        description: 'Gastronomy atmosphere set aside. Slice butternut cooking home. Delicious romantic undisturbed raw platter will meld. Thick Skewers skillet natural, smoker soy sauce wait roux. slices rosette bone-in simmer precision alongside baby leeks. Crafting renders aromatic enjoyment, then slices taco.',
        image: 'https://images.pexels.com/photos/64208/pexels-photo-64208.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      },
      {
        name: 'The Crackling Grill',
        categories: ['american', 'bbq', 'grilling'],
        description: 'Minutes undisturbed cuisine lunch magnificent mustard curry. Juicy share baking sheet pork. Meals ramen rarities selection, raw pastries richness magnificent atmosphere. Sweet soften dinners, cover mustard infused skillet, Skewers on culinary experience. ',
        image: 'https://images.pexels.com/photos/62097/pexels-photo-62097.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      },
      {
        name: 'Verdant Parsley',
        categories: ['american', 'classic', 'gastronomy'],
        description: 'Juicy meatballs brisket slammin\' baked shoulder. Juicy smoker soy sauce burgers brisket. polenta mustard hunk greens. Wine technique snack skewers chuck excess. Oil heat slowly. slices natural delicious, set aside magic tbsp skillet, bay leaves brown centerpiece. fruit soften edges frond slices onion snack pork steem on wines excess technique cup; Cover smoker soy sauce fruit snack. Sweet one-dozen scrape delicious, non sheet raw crunch mustard. Minutes clever slotted tongs scrape, brown steem undisturbed rice.',
        image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      },
      {
        name: 'Bon Appétit',
        categories: ['french', 'fine dining'],
        description: ' One-pot low heat plenty of time adobo fat raw soften fruit. sweet renders bone-in marrow richness kitchen, fricassee basted pork shoulder. Delicious butternut squash hunk. Flavor centerpiece plate, delicious ribs bone-in meat, excess chef end. sweet effortlessly pork, low heat smoker soy sauce flavor meat, rice fruit fruit. Romantic fall-off-the-bone butternut chuck rice burgers.',
        image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      },
      {
        name: 'Picanha Bliss',
        categories: ['bbq', 'brazilian', 'steakhouse'],
        description: 'Tongue pork loin pork, porchetta short ribs ham rump pig sausage. Pork chop rump spare ribs, cow burgdoggen ground round buffalo porchetta short loin pork belly tongue drumstick. Pastrami tail hamburger kielbasa, prosciutto salami chicken tenderloin pork loin. Pork loin kielbasa chicken andouille. Buffalo filet mignon corned beef ribeye, pork ham hock strip steak kevin tenderloin beef meatloaf.',
        image: 'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      }
    ]
  }
});

export default store;