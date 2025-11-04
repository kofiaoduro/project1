const FeaturedCard = ({ featuredEntrees, name, secondaryProducts }) => {
  return (
    <div>
      {secondaryProducts
        .filter((element) => element.category === name)
        .map((element) => (
          <div key={element.id} className="grid grid-cols-2 gap-4 mb-4">
            <img 
              src={`/images/${element.image}`} 
              className="w-[100%] h-[200px] object-cover" 
            />

            <div className="featuredCard-content self-center">
              <p className="mb-4">{element.description}</p>
              <button className="border-gray-200 border p-3 rounded-4xl">Order Now</button>
            </div>

            <p>{name}</p>
          </div>
        ))
      }
    </div>
  );
};

export default FeaturedCard;
