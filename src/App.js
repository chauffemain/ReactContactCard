import React from "react";
import ContactCard from "./components/ContactCard";

const App = () => (
  <div className="contacts">
    <img src="http://placekitten.com/300/200" />
    <h3>Mr. Whisker</h3>
    <p>Phone: (213) 334-2554</p>
    <p>Email: mr.mrwhis@meow.com</p>

    <ContactCard
      name="Mr. Whisker"
      imgUrl="http://placekitten.com/300/200"
      phone="(213) 334-2554"
      email="mr.mrwhis@meow.com"
    />
    <ContactCard
      name="fluffykins"
      imgUrl="http://placekitten.com/400/200"
      phone="(666) 324-1551"
      email="fluff@meow.com"
    />
    <ContactCard
      name="Destroyer"
      imgUrl="http://placekitten.com/400/300"
      phone="(777) 134-4522"
      email="mr.destroyer@meow.com"
    />
    <ContactCard
      name="Felix"
      imgUrl="http://placekitten.com/200/100"
      phone="(663) 444-1551"
      email="thecat@meow.com"
    />
  </div>
);

export default App;
