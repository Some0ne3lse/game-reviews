type Review = {
  name: string;
  description: string;
  rating: string;
  image: string;
};

// I used chatGPT for the SubmittedReviewsProps here because of TypeScript
type SubmittedReviewsProps = {
  reviewsList: Review[];
};

export const SubmittedReviews = (props: SubmittedReviewsProps) => {
  return (
    <ul>
      {props.reviewsList.map((game: any, index: number) => (
        <li key={index}>
          <div className="review-content">
            <div>
              <div>
                <div>Game:</div>
                {game.name}
              </div>
              <div>
                <div>Description:</div>
                {game.description}
              </div>
              <div>
                <div>Rating:</div>
                {game.rating}
              </div>
            </div>
            <img src={game.image} />
          </div>
        </li>
      ))}
    </ul>
  );
};
