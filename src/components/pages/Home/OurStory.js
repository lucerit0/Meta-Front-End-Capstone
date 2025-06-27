import chefsMarioAndAdrianAImage from './assets/chefs-mario-and-adrian_a.jpg';
import chefsMarioAndAdrianBImage from './assets/chefs-mario-and-adrian_b.jpg';
import './OurStory.css';

const OurStory = () => {
  return (
    <section className="container grid our-story">
      <div className="our-story-description">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Welcome to Little Lemon, where tradition meets flavor in every bite.
          Nestled in the heart of the city, our family-owned Mediterranean bistro has been serving up fresh, vibrant dishes inspired by generations of authentic recipes.
          Founded by two brothers with a passion for hospitality and wholesome food, Little Lemon is more than a restaurant—it's a warm, welcoming space where every meal is made with love, and every guest is treated like family.
          Come for the food. Stay for the experience.
        </p>
      </div>
      <div className="our-story-chefs">
        <img
          className="chef-image-a"
          src={chefsMarioAndAdrianAImage}
          alt="Chefs Mario and Adrian"
        />
        <img
          className="chef-image-b"
          src={chefsMarioAndAdrianBImage}
          alt="Chefs Mario and Adrian"
        />
      </div>
    </section>
  );
};

export default OurStory;