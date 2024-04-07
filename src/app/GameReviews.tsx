import { useState } from "react";

type FormProps = {
  addReview: (event: React.FormEvent<HTMLFormElement>) => void;
  newName: string;
  handleNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  newDescription: string;
  handleDescriptionChange: (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  newRating: string;
  handleRatingChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  getFile: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const GameReviewForm = ({
  addReview,
  newName,
  handleNameChange,
  newDescription,
  handleDescriptionChange,
  newRating,
  handleRatingChange,
  getFile,
}: FormProps) => {
  return (
    <form onSubmit={addReview}>
      <div>
        <div>Name: </div>
        <input value={newName} onChange={handleNameChange} required />
      </div>
      <div>
        <div>Description: </div>
        <textarea
          value={newDescription}
          onChange={handleDescriptionChange}
          required
        />
      </div>
      <div>
        <div>Rating: </div>
        <input
          type="number"
          min={0}
          max={10}
          value={newRating}
          onChange={handleRatingChange}
          required
        />
      </div>
      <div>
        <div> Upload an image:</div>
        <input type="file" onChange={getFile} />
      </div>
      <div>
        <button type="submit">Add review</button>
      </div>
    </form>
  );
};

type Review = {
  name: string;
  description: string;
  rating: string;
  image: string;
};

// I used chatGPT for the GameReviewProps here and by next comment because of TypeScript

type GameReviewProps = {
  reviewsList: Review[];
};

const GameReview = ({ reviewsList }: GameReviewProps) => {
  return (
    <ul>
      {reviewsList.map((game: any, index: number) => (
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

export default () => {
  // I used chatGPT for the useState for the reviews here because of TypeScript
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newRating, setNewRating] = useState("");
  const [file, setFile] = useState("");

  const addReview = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const reviewObject = {
      name: newName,
      description: newDescription,
      rating: newRating,
      image: file,
    };
    setReviews(reviews.concat(reviewObject));
    setNewName("");
    setNewDescription("");
    setNewRating("");
  };

  const handleNameChange = (event: any) => {
    console.log(typeof event);
    setNewName(event.target.value);
  };

  const handleDescriptionChange = (event: any) => {
    setNewDescription(event.target.value);
  };

  const handleRatingChange = (event: any) => {
    setNewRating(event.target.value);
  };

  const getFile = (event: any) => {
    setFile(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <>
      <GameReviewForm
        addReview={addReview}
        newName={newName}
        handleNameChange={handleNameChange}
        newDescription={newDescription}
        handleDescriptionChange={handleDescriptionChange}
        newRating={newRating}
        handleRatingChange={handleRatingChange}
        getFile={getFile}
      />
      <GameReview reviewsList={reviews} />
    </>
  );
};
