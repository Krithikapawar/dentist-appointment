import Slider from "react-slick";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  };

  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4X4dpLLtRNdCKZz64arGJHLu39j1UGMlOPw&s",
    "https://www.novacosmetic.in/procedures/cosmetic-dentistry/images/tooth-model-in-dental.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbJWDU_9grelUiodbdq-k7lUFeo_0pmXkfQw&s"
  ];

  return (
    <div className="mb-8">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="relative">

            {/* Image */}
            <img
              src={img}
              alt="dental"
              className="w-full h-64 object-cover rounded-xl"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 rounded-xl flex flex-col justify-center items-center text-white">
              <h2 className="text-2xl font-bold">
                Book Your Dentist Appointment
              </h2>
              <p className="text-sm mt-2">
                Trusted professionals near you
              </p>
            </div>

          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;