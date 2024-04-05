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
  name: string;
  description: string;
  review: string;
  // image: string;
};

const GameReview = ({ name, description, review }: GameReviewProps) => {
  return (
    <>
      <div>Name: {name}</div>
      <div>Description: {description}</div>
      <div>Review: {review}</div>
      {/* <Image src={image} alt="An image of the game"></Image> */}
    </>
  );
};

export default () => {
  const [reviews, setReviews] = useState([{}]);
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newReview, setNewReview] = useState("");

  const addReview = () => {
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

  // I used chatGPT to find the type for this function
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(event.target.value);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewDescription(event.target.value);
  };

  const handleReviewChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
    </>
  );
};
