import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ image, year, quote, onChange, onSubmit, doneDisplay }) => (
  <div key="form-div-key" className="form-div">

    <form onSubmit={onSubmit} className="create-outfit-form">
      <div className="form-header">
        <h1>Share Your Favorite Bjork Outfit</h1>
      </div>

      <div className="enter-image">
        <label>Image url:
          <input 
            type="text" 
            name="image" 
            placeholder="" 
            value={image} 
            onChange={onChange} />
        </label>
      </div>

      <div className="enter-year">
        <label>What year is it from?
          <input 
            type="number" 
            name="year" 
            placeholder="" 
            value={year} 
            onChange={onChange} />
        </label>
      </div>

      <div className="enter-quote">
        <label>Enter a quote:
          <input 
            type="text" 
            name="quote" 
            placeholder="" 
            value={quote} 
            onChange={onChange} />
        </label>
      </div>

      <button data-testid="form-button">Submit</button>
    </form>

    <div data-testid="done-display">
      <p>{doneDisplay}</p>
    </div>

  </div>
);

Form.propTypes = {
  image: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  quote: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  doneDisplay: PropTypes.func.isRequired
};

export default Form;
