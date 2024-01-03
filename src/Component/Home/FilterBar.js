// css styles
import styles from "../../styles/home.module.css";

// render the filter bar
export default function FilterBar(props) {
  const { price, setPrice, setCategory } = props;

  return (
    // main container of filter bar
    <div className={styles.categoryBox}>
      {/* price ranger and price slider  */}
      <div>
        {/* heading */}
        <h3
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "18px",
            color: "#333",
            margin: "10px 0",
          }}
        >
          Filter
        </h3>
        {/* sub heading */}
        <span>Price</span>
        {` <= ${price}`}
        <br />
        {/* slider  */}
        <input
          className={styles.priceRange}
          type="range"
          min="100"
          max="50000"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
      </div>

      {/* sort item by category */}
      <div>
        {/* radio buttons for differnet category */}
        <div>
          {/* sub heading */}
          <span>Category</span> <br />
          {/* none  */}
          <input
            className={styles.checBox}
            type="radio"
            id="none"
            value="none"
            name="category"
            onClick={() => setCategory("none")}
          />
          <label  for="jewellery">
            ALL
          </label>
          {/* men category */}
          <br />
          <input
            className={styles.checBox}
            type="radio"
            id="men"
            value="men"
            name="category"
            onClick={() => setCategory("men")}
          />
          <label  for="men">
            Men
          </label>
          <br />
          {/* women category */}
          <input
            className={styles.checBox}
            type="radio"
            id="women"
            value="women"
            name="category"
            onClick={() => setCategory("women")}
          />
          <label for="women">
            Women
          </label>
          <br />
          {/* electronic */}
          <input
            className={styles.checBox}
            type="radio"
            id="electric"
            value="electric"
            name="category"
            onClick={() => setCategory("electric")}
          />
          <label for="electric">
            Electronic
          </label>
          <br />
          {/* jewellery */}
          <input
            className={styles.checBox}
            type="radio"
            id="jewellery"
            value="jewellery"
            name="category"
            onClick={() => setCategory("jewellery")}
          />
          <label for="jewellery">
            Jewellery
          </label>
        </div>
      </div>
    </div>
  );
}
