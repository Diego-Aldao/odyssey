import SectionDetalle from "../SectionDetalle";
import reviews from "../../../mocks/detalle/Reviews.json";

const ReviewsDetalle = () => {
  return (
    <SectionDetalle titulo="reviews">
      <>
        {reviews.data.slice(0, 5).map((review) => (
          <article
            key={review.mal_id}
            className="flex gap-2 mb-5 max-w-[600px] lg:max-w-[700px] items-start"
          >
            <div className="w-[40px] lg:w-[50px] flex">
              <img src={review.user.images.webp.image_url} alt="" />
            </div>
            <div className="header flex gap-2 flex-col w-[calc(100%_-_48px)] lg:w-[calc(100%_-_58px)]">
              <div className="info-user flex flex-col gap-1">
                <p className="font-bold text-sm">{review.user.username}</p>
                <p className="text-xs">
                  {review.tags.map((tag) => (
                    <span key={tag}>{tag !== "Preliminary" && tag} </span>
                  ))}
                </p>
                {review.is_preliminary && (
                  <p className="text-xs">
                    <span>sin terminar </span>
                    <span>(3/12 eps)</span>
                  </p>
                )}
              </div>
              <div className="review">
                <p className="line-clamp-4 text-sm">{review.review}</p>
              </div>
              <p className="footer text-xs">
                <span>{review.date} </span>|
                <span> {review.reactions.overall}</span>
              </p>
            </div>
          </article>
        ))}
      </>
    </SectionDetalle>
  );
};

export default ReviewsDetalle;
