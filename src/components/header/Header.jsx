import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg">BLOG</span>       
      </div>
      <img
        className="headerImg"
        src="https://thumbs.dreamstime.com/b/healthy-food-background-fruits-vegetables-cereal-nuts-superfood-dietary-balanced-vegetarian-eating-products-kitchen-143677456.jpg"
        alt=""
      />
    </div>
  );
}
