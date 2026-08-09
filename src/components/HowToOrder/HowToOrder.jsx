import "./HowToOrder.css";
import {
Search,
MessageCircle,
BadgeCheck,
Truck
} from "lucide-react";

const HowToOrder = () => {

return(

<section className="order">

<div className="order-heading">

<span>HOW TO ORDER</span>

<h2>Your Perfect Outfit Is Just Four Steps Away</h2>

<p>
Ordering from Libas is simple, quick, and personalized.
Follow these easy steps to bring your favorite styles home.
</p>

</div>

<div className="order-container">

<div className="order-card">

<div className="number">01</div>

<div className="order-icon">
    <Search />
</div>

<h3>Browse</h3>

<p>
Discover your favorite ethnic styles from our latest collections.
</p>

</div>

<div className="order-card">

<div className="number">02</div>

<div className="order-icon">
    <MessageCircle />
</div>

<h3>Message Us</h3>

<p>
Share your selected outfit with us on Instagram or WhatsApp.
</p>

</div>

<div className="order-card">

<div className="number">03</div>

<div className="order-icon">
    <BadgeCheck />
</div>

<h3>PlaceOrder</h3>

<p>
We'll help with sizing, availability and order confirmation.
</p>

</div>

<div className="order-card">

<div className="number">04</div>

<div className="order-icon">
    <Truck />
</div>

<h3>Delivered</h3>

<p>
Your order is packed with care and delivered to your doorstep.
</p>

</div>

</div>

</section>

)

}

export default HowToOrder;