const App = () => {
    const handleClick = event => {
      // 👇️ refers to the image element
      console.log(event.target);
  
      console.log('Image clicked');
    };
    return (
      <div>
        <img
          src='https://dao54xqhg9jfa.cloudfront.net/OMS-Category/ad04872e-60af-387c-533c-efa7dc6eb565/original/Chicken_(1).png'
                                    
          alt='Simon the pensive'
          onClick={handleClick}
        />
      </div>
    );
  };
  export default App;