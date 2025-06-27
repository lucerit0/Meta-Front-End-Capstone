import customer1Image from './assets/CustomerCecilia.jpg';
import customer2Image from './assets/CustomerElla.jpg';
import customer3Image from './assets/CustomerLucy.jpg';
import customer4Image from './assets/CustomerMaurice.jpg';
import './Testimonials.css';
import TestimonialCard from './TestimonialCard';

const customers = [
  {
    fullName: 'Cecilia Tutti',
    image: customer1Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `I love Little Lemon! reminds me of my hometown.`,
  },
  {
    fullName: 'Ella Yelich',
    image: customer2Image,
    rating: [1, 1, 1, 1, 1],
    says: `Little Lemon is perfect for dates! Me and my boyfriend love to go for our anniversary each year,`,
  },
  {
    fullName: 'Lucy Garfield',
    image: customer3Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `The food in Little Lemon is just so so good!`,
  },
  {
    fullName: 'Maurice Miller',
    image: customer4Image,
    rating: [1, 1, 1, 1],
    says: `If you are looking for a place with good food, ambience and service, Little Lemon is your place!`,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>This is what people say about us</h2>
        {customers.map((customer, index) => 
          <TestimonialCard key={index} customer={customer} />
        )}
     </div>
    </section>
  );
};

export default Testimonials;
