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
                <h3>Game:</h3>
                {game.name}
              </div>
              <div>
                <h3>Description:</h3>
                {game.description}
              </div>
              <div>
                <h3>Rating:</h3>
                {game.rating} / 10
              </div>
            </div>
            <img src={game.image} />
          </div>
        </li>
      ))}
    </ul>
  );
};
