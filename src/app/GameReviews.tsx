import { useState } from "react";
import Image from "next/image";

type FormProps = {
  addReview: any;
  newName: any;
  handleNameChange: any;
  newDescription: any;
  handleDescriptionChange: any;
  newReview: any;
  handleReviewChange: any;
};

const GameReviewForm = ({
  addReview,
  newName,
  handleNameChange,
  newDescription,
  handleDescriptionChange,
  newReview,
  handleReviewChange,
}: FormProps) => {
  return (
    <form onSubmit={addReview}>
      <div>
        <div>Name: </div>
        <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        <div>Description: </div>
        <textarea value={newDescription} onChange={handleDescriptionChange} />
      </div>
      <div>
        <div>Review: </div>
        <textarea value={newReview} onChange={handleReviewChange} />
      </div>
      <div>
        <button type="submit">Add review</button>
      </div>
    </form>
  );
};

type GameReviewProps = {
  reviewsList: any;
  // image: string;
};

const GameReview = ({ reviewsList }: GameReviewProps) => {
  return (
    <ul>
      {reviewsList.map((game: any, index: number) => (
        <li key={index}>
          <div>
            <div>Game:</div>
            {game.name}
          </div>
          <div>
            <div>Description:</div>
            {game.description}
          </div>
          <div>
            <div>Review:</div>
            {game.review}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default () => {
  const [reviews, setReviews] = useState([] as Array<object>);
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newReview, setNewReview] = useState("");

  const addReview = (event: any) => {
    event.preventDefault();
    const reviewObject = {
      name: newName,
      description: newDescription,
      review: newReview,
    };
    setReviews(reviews.concat(reviewObject));
    setNewName("");
    setNewDescription("");
    setNewReview("");
  };

  const handleNameChange = (event: any) => {
    setNewName(event.target.value);
  };

  const handleDescriptionChange = (event: any) => {
    setNewDescription(event.target.value);
  };

  const handleReviewChange = (event: any) => {
    setNewReview(event.target.value);
  };

  return (
    <>
      <GameReviewForm
        addReview={addReview}
        newName={newName}
        handleNameChange={handleNameChange}
        newDescription={newDescription}
        handleDescriptionChange={handleDescriptionChange}
        newReview={newReview}
        handleReviewChange={handleReviewChange}
      />
      <GameReview reviewsList={reviews} />
    </>
  );
};
