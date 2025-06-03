import React from 'react'
import Image from 'next/image';

// components/PropertyCard.js
// You might need to import your SVG icons or use an icon library

const PropertyCard = ({
  imageUrl,
//   price,
//   beds,
//   baths, // Assuming the third icon is baths
//   lounges, // Assuming the couch icon means lounges
//   title,
//   location,
//   isBookmarked, // Assuming this state determines bookmark icon appearance
  // You might want to pass an ID for linking or actions
  // propertyId,
}) => {
  return (
    <div className="card shadow-sm" style={{ maxWidth: '22rem' /* Adjust as needed or make it responsive */ }}>
      <div className="position-relative">
        <Image
          src={imageUrl || "https://via.placeholder.com/400x250"} // Placeholder
          className="card-img-top"
          alt={"title"}
          // For object-cover behavior with a fixed height, you might need custom CSS
          // e.g., style={{ height: '200px', objectFit: 'cover' }}
          // Or ensure your images are consistently aspect-ratioed.
        />
        <button
          className="btn btn-light btn-sm position-absolute top-0 end-0 m-2 rounded-circle p-1 lh-1"
          style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} // Ensure icon is centered
          aria-label="Bookmark property"
        >
          {/* Replace with your actual SVG icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill={~ ? 'var(--bs-primary)' : 'currentColor'} // Example: blue if bookmarked
            className="bi bi-bookmark"
            viewBox="0 0 16 16"
          >
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
            {isBookmarked && <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>}
          </svg>
        </button>
      </div>
      <div className="card-body p-3"> {/* Adjust padding: p-3 is 1rem. Figma might suggest p-2 (0.5rem) or p-4 (1.5rem) */}
        {/* Price and Features */}
        <div className="d-flex justify-content-between align-items-start mb-2">
          {/* Price */}
          {/* Use fs- for font size, fw- for weight. Colors: text-dark, text-primary etc. or custom */}
          <p className="fs-4 fw-bold text-dark mb-0"> {/* Or e.g., text-primary */}
            ₦{price}
          </p>

          {/* Features Icons */}
          <div className="d-flex align-items-center text-secondary" style={{ gap: '0.75rem' /* Or use Bootstrap gap-2 or gap-3 if suitable */}}>
            <div className="d-flex align-items-center" style={{ gap: '0.25rem' /* Or gap-1 */ }}>
              {/* Replace with your Bed SVG Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-building" viewBox="0 0 16 16"> {/* Placeholder icon, change to bed */}
                <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 8.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
                <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3z"/>
              </svg>
              <span className="small">{beds}</span> {/* Or fs-sm */}
            </div>
            <div className="d-flex align-items-center" style={{ gap: '0.25rem' }}>
              {/* Replace with your Couch/Living Room SVG Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-building" viewBox="0 0 16 16"> {/* Placeholder icon */}
                <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 8.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
                <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3z"/>
              </svg>
              <span className="small">{lounges}</span>
            </div>
            <div className="d-flex align-items-center" style={{ gap: '0.25rem' }}>
              {/* Replace with your Third SVG Icon (e.g., Bath) */}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-building" viewBox="0 0 16 16"> {/* Placeholder icon */}
                <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 8.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
                <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3z"/>
              </svg>
              <span className="small">{baths}</span>
            </div>
          </div>
        </div>

        {/* Title - Use h5 or h6 for card titles typically */}
        <h5 className="card-title fs-6 fw-semibold text-body-emphasis mb-1 lh-tight"> {/* Or fs-5 if larger */}
          {title}
        </h5>

        {/* Location */}
        <p className="card-text small text-muted"> {/* Or fs-sm */}
          {location}
        </p>

        {/* Optional: Add a link/button if the card is clickable for more details */}
        {/* <a href={`/property/${propertyId}`} className="btn btn-primary btn-sm mt-2">View Details</a> */}
      </div>
    </div>
  );
};

export default PropertyCard;

// How you might use it on a page:
// <PropertyCard
//   imageUrl="/path/to/your/image.jpg"
//   price="230,000,000"
//   beds={5}
//   lounges={2}
//   baths={3} // Example
//   title="Contemporary Luxury 5 Bedroom Detached Duplex"
//   location="Lekki Conservation Road, Lekki Lagos"
//   isBookmarked={false}
// />